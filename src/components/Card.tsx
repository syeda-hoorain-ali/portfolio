"use client"

import Image from "next/image";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import { ShineBorder } from "./magicui/shine-border";
// import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export type CardProps = {
  title: string;
  live: string;
  github: string;
  image: string;
  labels: string[];
  description: string;
};

const Card = ({ title, github, live, image, labels, description }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* <Tilt
        glareEnable={true}
        glareMaxOpacity={0.1}
        glareColor="#f0abfc"
        glarePosition="all"
        scale={1.01}
        transitionSpeed={1500}
      > */}
        <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg overflow-hidden p-4 transition-all duration-300 hover:shadow-fuchsia-500/40 hover:border-fuchsia-400 group">
          <ShineBorder shineColor={["#f0abfc", "#FE8FB5", "#FFBE7B"]} />

          <div className="w-full aspect-video overflow-hidden bg-slate-800 border border-white/10 rounded-xl flex items-center justify-center">
            <Image
              width={300}
              height={135}
              src={image}
              alt={title}
              title={title}
              className="object-cover w-full h-full rounded-lg group-hover:scale-105 transition"
            />
          </div>

          <div className="content mt-4">
            <h4 className="text-lg font-semibold text-white">{title}</h4>

            <p className="text-sm text-gray-300 mt-1">{description}</p>

            <div className="flex flex-wrap mt-3 gap-2">
              {labels.map(label => (
                <span
                  key={label}
                  className="text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full text-fuchsia-200 backdrop-blur-md"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-6">
              <Link
                className="flex gap-1 items-center text-fuchsia-300 hover:underline hover:text-white transition"
                target="_blank"
                href={live}
              >
                Live <HiOutlineExternalLink />
              </Link>
              <Link
                className="flex gap-1 items-center text-fuchsia-300 hover:underline hover:text-white transition"
                target="_blank"
                href={github}
              >
                Code <HiOutlineExternalLink />
              </Link>
            </div>
          </div>
        </div>
      {/* </Tilt> */}
    </motion.div>
  );
};

export default Card;
