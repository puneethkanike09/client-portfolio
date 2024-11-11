import { useEffect, useRef, useState } from "react";
import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { TbBrandGithub, TbBrandWhatsapp } from "react-icons/tb";
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { MdOutlineClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [show, setShow] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = ["home", "about", "education", "experience", "project", "contact"];
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Adjust as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);


  const handleScroll = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShow(false);

    setFadeOut(true);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);

    setTimeout(() => {
      elem?.scrollIntoView({
        behavior: "smooth",
      });
      setFadeOut(false);
    }, 500);

    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      setShow(false);
    }
  }

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className='w-full shadow-navbarShadow md:shadow-none h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
      <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
        <Link href='#home'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <Image className='w-14' src={logo} alt='logo' />
          </motion.div>
        </Link>

        <div className='hidden mdl:inline-flex items-center gap-7'>
          <ul className="flex text-[13px] gap-7">
  {["home", "about", "education", "experience", "project", "contact"].map((section, index) => (
    <Link
      key={section}
      className={`flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ${
        activeSection === section ? "active" : ""
      }`}
      href={`#${section}`}
      onClick={handleScroll}
    >
      <motion.li
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1, delay: index * 0.1 }}
      >
        <span className="text-textGreen">
          {index < 9 ? `0${index + 1}.` : `${index + 1}.`}
        </span>
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </motion.li>
    </Link>
  ))}
</ul>

          <a href='/assets/safwan_resume.pdf' target='_blank'>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'
            >
              Resume
            </motion.button>
          </a>
          <motion.button
                onClick={toggleFullScreen}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, ease: "easeIn" }}
                className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'
              >
                Fullscreen
              </motion.button>

          
        </div>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setShow(true)}
          className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'
        >
          <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
        </div>

        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className='w-[80%] h-full overflow-y-scroll scrollbarHide bg-purple-700 flex flex-col items-center px-4 py-10 relative'
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className='text-3xl text-slate-300 cursor-pointer hover:text-red-500 absolute top-4 right-4'
              />
              <ul className='flex flex-col text-base gap-7'>
                {[
                  "home",
                  "about",
                  "education",
                  "experience",
                  "project",
                  "contact",
                ].map((section, index) => (
                  <Link
                    key={section}
                    href={`#${section}`}
                    onClick={handleScroll}
                    className='flex items-center gap-1 font-medium text-white hover:text-textGreen cursor-pointer duration-300 nav-link'
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: index * 0.1,
                        ease: "easeIn",
                      }}
                    >
                      <span className='text-hoverColor'>
                        {index < 9 ? `0${index + 1}.` : `${index + 1}.`}
                      </span>
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </motion.li>
                  </Link>
                ))}
              </ul>

              <a href='/assets/safwan_resume.pdf' target='_blank'>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, ease: "easeIn" }}
                  className='w-32 h-10 rounded-md text-slate-300 text-[13px] border border-hoverColor hover:bg-hoverColor duration-300 my-7'
                >
                  Resume
                </motion.button>
              </a>
              <div className='flex gap-4 text-black bg-hoverColor p-4 rounded-md'>
                {/* <motion.a initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, ease: "easeIn" }} href="https://github.com/PuneethKanike/" target="_blank" className="social-link">
                  <TbBrandGithub />
                </motion.a> */}
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, ease: "easeIn" }}
                  href='https://www.linkedin.com/in/mohammed-safwan-06441b225/'
                  target='_blank'
                  className='social-link'
                >
                  <SlSocialLinkedin />
                </motion.a>
                {/* <motion.a initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.95, ease: "easeIn" }} href="https://api.whatsapp.com/send?phone=917975187240" target="_blank" className="social-link">
                  <TbBrandWhatsapp />
                </motion.a> */}
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, ease: "easeIn" }}
                  href='https://www.instagram.com/safwan._saffu_____/?igsh=dGI3M3p2azgxMWJh'
                  target='_blank'
                  className='social-link'
                >
                  <SlSocialInstagram />
                </motion.a>
              </div>

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, ease: "easeIn" }}
                className='text-sm w-72 tracking-widest text-purple-300 text-center mt-4'
                href='mailto:safwansaffuh@gmail.com'
              >
                <p>safwansaffuh@gmail.com</p>
              </motion.a>
            </motion.div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {fadeOut && (
          <motion.div
            initial={{ backdropFilter: "blur(0px)" }} // No blur initiall
            animate={{ backdropFilter: "blur(7px)" }} // Increase blur when opened
            exit={{ backdropFilter: "blur(0px)" }} // Remove blur when closed
            transition={{ duration: 0.3 }}
            className='absolute top-0 right-0 w-full h-screen'
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
