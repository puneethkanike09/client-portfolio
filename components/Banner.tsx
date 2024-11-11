import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaMouse } from "react-icons/fa"; // Import mouse icon

const Banner = () => {
  // Bouncing animation for the right image with continuous up and down motion
  const imageBounceAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  };

  // Scroll icon animation (visible every 5 seconds)
  const scrollIconAnimation = {
    opacity: [0, 1, 1, 0], // Visible briefly, then disappears
    y: [0, 30, 0], // Up and down motion while visible
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      times: [0, 0.2, 0.8, 1], // Controls the timing of visibility and motion
      repeat: Infinity,
      repeatDelay: 3.5, // Delay between each appearance
    },
  };

  return (
    <section
      id="home"
      className="bg-transparent max-w-contentContainer mx-auto py-10 mdl:py-28 flex flex-col lgl:flex-row gap-4 lgl:gap-8 mdl:px-10 xl:px-4 relative overflow-hidden"
      style={{ overflow: "visible" }}
    >
      {/* Left Side (Text with bouncing animation) */}
      <motion.div className="flex flex-col gap-4 lgl:gap-8 flex-1 relative z-10">
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-4xl text-textSuperLight lgl:text-5xl font-titleFont font-semibold"
        >
          Hi There,
        </motion.h1>

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-4xl text-textSuperLight lgl:text-6xl font-titleFont font-semibold"
        >
          <span className="">
            {"I'm"} <span className="text-textGreen">Mohammed Safwan</span>.
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-2xl md:max-w-[650px] text-textDark font-medium"
        >
          I Am Into{" "}
          <span className="text-textGreen font-bold">
            <Typewriter
              words={[
                "Interior Designing",
                "3D Visualizing",
                "Space Planning",
                "Design Managing",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.p>

        <a href="#project">
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
          >
            Check out my designs!
          </motion.button>
        </a>

        {/* Scroll Down Mouse Icon with 5-second interval animation */}
        <motion.div
          animate={scrollIconAnimation}
          className="mt-8 flex justify-center items-center text-slate-500"
        >
          <FaMouse size={24} />
          <span className="ml-2 text-sm font-medium">Scroll down</span>
        </motion.div>
      </motion.div>

      {/* Right Side (Image with continuous bounce animation and overflow) */}
      <motion.div
        className="hidden lgl:flex bounce flex-1 relative"
        style={{
          zIndex: 5,
          position: "absolute",
          top: "0",
          right: "0",
          width: "60%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            backgroundImage: `url(../assets/images/bg3.png)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            backgroundSize: "150%",
            height: "100%",
            width: "100%",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Banner;
