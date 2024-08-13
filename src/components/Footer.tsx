import { CgNpm } from "react-icons/cg";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (<>
    <div className="w-full px-10 py-1 flex items-center justify-between bg-fuchsia-400 bg-opacity-40 text-center">
      <p>&copy; Syeda Hoorain Ali, Inc. All rights reserved.</p>

      <div className="flex gap-6 items-center">
        <a href="https://github.com/syeda-hoorain-ali">
          <FaGithub className="size-8" />
        </a>
        <a href="https://www.linkedin.com/in/syedahoorainali">
          <FaLinkedin className="size-8" />
        </a>
        <a href="https://www.npmjs.com/~syedahoorainali">
          <CgNpm className="size-8" />
        </a>
        <a href="/">
          <FaGlobe className="size-6" />
        </a>

      </div>
    </div>
  </>)
}

export default Footer;