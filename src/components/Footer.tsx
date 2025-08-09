import Link from "next/link";
import { CgNpm } from "react-icons/cg";
import { FaGithub, FaGlobe, FaLinkedin, FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (<>
    <div className="w-full sm:px-6 md:px-10 py-1 flex flex-col sm:flex-row items-center justify-between gap-3 bg-fuchsia-400 bg-opacity-40 text-center">
      <p className="text-xs md:text-base">&copy; Syeda Hoorain Ali, Inc. All rights reserved.</p>

      <div className="flex gap-6 items-center">
        <Link href="https://github.com/syeda-hoorain-ali">
          <FaGithub className="size-5 md:size-8" />
        </Link>
        <Link href="https://www.linkedin.com/in/syedahoorainali">
          <FaLinkedin className="size-5 md:size-8" />
        </Link>
        <Link href="https://x.com/syedahorainali">
          <FaXTwitter className="size-6 md:size-8" />
        </Link>
        <Link href="/">
          <FaGlobe className="size-5 md:size-6" />
        </Link>

      </div>
    </div>
  </>)
}

export default Footer;