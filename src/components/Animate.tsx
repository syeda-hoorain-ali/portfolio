import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  children: JSX.Element;
  width?: string;
}

const Animate = ({ children, width }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (<>
    <div ref={ref} className="relative overflow-hidden" style={{ width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>

      {/* <motion.div
        variants={{
          hidden: {left: 0},
          visible: {left: '100%'},
        }}
        initial="hidden"
        animate={slideControls}
        transition={{duration: 0.5, ease: 'easeIn'}}
        className="absolute top-1 bottom-1 left-0 right-0 z-20 bg-red-700"
      /> */}
    </div>
  </>)
}

export default Animate;
