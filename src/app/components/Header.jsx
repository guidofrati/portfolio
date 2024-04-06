"use client";
import React, { useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const sidebarVariants = {
  hidden: {
    x: "-100%",
  },
  visible: {
    x: 0,
  },
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <section className="fixed h-10 w-full p-2">
    //   <div className="flex h-10 w-full flex-row justify-end">
    //     <motion.div
    //       className="lg:hidden"
    //       variants={sidebarVariants}
    //       initial="hidden"
    //       animate={isOpen ? "visible" : "hidden"}
    //     >
    //       <div className="lg:hidden">
    //         <button
    //           onClick={toggleMenu}
    //           className="bg-carta bg-opacity-70 p-2 text-4xl text-white"
    //         >
    //           {!isOpen ? "☰" : "✖"}
    //         </button>
    //       </div>
    //       <div className="hidden lg:inline-flex">
    //         <IconContext.Provider value={{ color: "white", size: "40px" }}>
    //           <div className="flex w-32 items-center justify-center rounded-l-md border-r-2 border-r-letra bg-carta bg-opacity-70">
    //             <Link href="mailto:guidofraticelli22@gmail.com?subject=Te contacto para:&body=Si preferis contactarme por numero, aca te lo dejo: 2995343513">
    //               <MdOutlineEmail />
    //             </Link>
    //           </div>
    //           <div className="flex w-32 items-center justify-center border-r-2 border-r-letra bg-carta bg-opacity-70">
    //             <Link href="https://www.linkedin.com/in/guidofrati/">
    //               <CiLinkedin />
    //             </Link>
    //           </div>
    //           <div className="flex w-32 items-center justify-center border-r-2 border-r-letra bg-carta bg-opacity-70">
    //             <Link href="https://github.com/guidofrati">
    //               <FaGithub />
    //             </Link>
    //           </div>
    //           <div className="flex h-10 w-32 items-center justify-center rounded-r-md bg-carta bg-opacity-70">
    //             <Link href="https://docs.google.com/document/d/10KjBI5AjXWuJIi_JUtCi4-DKrcIH6As51FG7V__iz0I/edit?usp=sharing">
    //               <h1 className="rounded-md bg-blanco text-2xl font-medium text-black">
    //                 CV
    //               </h1>
    //             </Link>
    //           </div>
    //         </IconContext.Provider>
    //       </div>
    //     </motion.div>
    //     <div className="lg:hidden">
    //       {isOpen && (
    //         <div className="flex flex-col items-end justify-end bg-carta bg-opacity-70 p-2 text-4xl text-white">
    //           <ul className="flex flex-row items-center justify-center gap-2">
    //             <li>
    //               <Link href="mailto:guidofraticelli22@gmail.com?subject=Te contacto para:&body=Si preferis contactarme por numero, aca te lo dejo: 2995343513">
    //                 <MdOutlineEmail />
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href="https://www.linkedin.com/in/guidofrati/">
    //                 <CiLinkedin />
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href="https://github.com/guidofrati">
    //                 <FaGithub />
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href="https://docs.google.com/document/d/10KjBI5AjXWuJIi_JUtCi4-DKrcIH6As51FG7V__iz0I/edit?usp=sharing">
    //                 <h1 className="text-white">CV</h1>
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </section>

    <section className="fixed h-10 w-full p-2">
      <div className="flex h-10 w-full flex-row justify-end">
        <div className="lg:hidden">
          <motion.div
            className="lg:hidden"
            variants={sidebarVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
          >
            <div className="flex flex-row items-center justify-end rounded-xl bg-carta bg-opacity-70">
              <button onClick={toggleMenu} className=" p-2 text-4xl text-white">
                {!isOpen ? "☰" : "✖"}
              </button>
              {isOpen && (
                <div className="flex flex-row items-end justify-end p-2 text-4xl text-white">
                  <ul className="flex flex-row items-center justify-center gap-2">
                    <li className="border-l-2 border-r-2 border-l-letra border-r-letra">
                      <Link href="mailto:guidofraticelli22@gmail.com?subject=Te contacto para:&body=Si preferis contactarme por numero, aca te lo dejo: 2995343513">
                        <MdOutlineEmail />
                      </Link>
                    </li>
                    <li className="border-r-2 border-r-letra">
                      <Link href="https://www.linkedin.com/in/guidofrati/">
                        <CiLinkedin />
                      </Link>
                    </li>
                    <li className="border-r-2 border-r-letra">
                      <Link href="https://github.com/guidofrati">
                        <FaGithub />
                      </Link>
                    </li>
                    <li className="border-r-2 border-r-letra">
                      <Link href="https://docs.google.com/document/d/10KjBI5AjXWuJIi_JUtCi4-DKrcIH6As51FG7V__iz0I/edit?usp=sharing">
                        <h1 className="text-white">CV</h1>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </div>
        <div className="hidden lg:inline-flex">
          <IconContext.Provider value={{ color: "white", size: "40px" }}>
            <div className="flex w-32 items-center justify-center rounded-l-md border-r-2 border-r-letra bg-carta bg-opacity-70">
              <Link href="mailto:guidofraticelli22@gmail.com?subject=Te contacto para:&body=Si preferis contactarme por numero, aca te lo dejo: 2995343513">
                <MdOutlineEmail />
              </Link>
            </div>
            <div className="flex w-32 items-center justify-center border-r-2 border-r-letra bg-carta bg-opacity-70">
              <Link href="https://www.linkedin.com/in/guidofrati/">
                <CiLinkedin />
              </Link>
            </div>
            <div className="flex w-32 items-center justify-center border-r-2 border-r-letra bg-carta bg-opacity-70">
              <Link href="https://github.com/guidofrati">
                <FaGithub />
              </Link>
            </div>
            <div className="flex h-10 w-32 items-center justify-center rounded-r-md bg-carta bg-opacity-70">
              <Link href="https://docs.google.com/document/d/10KjBI5AjXWuJIi_JUtCi4-DKrcIH6As51FG7V__iz0I/edit?usp=sharing">
                <h1 className="rounded-md bg-blanco text-2xl font-medium text-black">
                  CV
                </h1>
              </Link>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </section>
  );
}

export default Header;
