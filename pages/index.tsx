import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import RightSide from "@/components/RightSide";
import Head from "next/head";
import { motion } from "framer-motion";
import Archive from "@/components/Archive";
import { useState, useEffect, useRef } from "react";
import Preloader from "@/components/Preloader";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline"; // Updated import paths for Heroicons v2
import Education from "@/components/Education";
import Skills from "@/components/Skills";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Preloader Effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Play audio on mount
  // useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.play().catch((err) => console.error("Audio play error: ", err));
  //   }
  // }, []);

  // Toggle Music Play/Pause
  // const toggleMusic = () => {
  //   if (audioRef.current) {
  //     if (isPlaying) {
  //       audioRef.current.pause();
  //     } else {
  //       audioRef.current.play();
  //     }
  //     setIsPlaying(!isPlaying);
  //   }
  // };

  return (
    <>
      <Head>
        <title>Mohammed Safwan</title>
        <meta name="description" content="Interior Designer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      {loading ? (
        <Preloader />
      ) : (
        <main id="parent" className=" w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
          <Navbar />
          <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
            {/* Left side animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
            >
              <LeftSide />
            </motion.div>

            {/* Main content */}
            <div id="child" className="h-[88vh] mx-auto p-8">
              <Banner />
              <About />
              <Skills />
              <Education />
              <Experience />
              <Projects />
              {/* <Archive /> */}
              <Contact />
              {/* <Footer /> */}
            </div>

            {/* Right side animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
            >
              <RightSide />
            </motion.div>
          </div>

          {/* Background Music Control */}
          <audio ref={audioRef} loop>
            <source src="/music/background-music.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>

          {/* Mute/Unmute Button with Icon */}
          {/* <button
            onClick={toggleMusic}
            className="fixed bottom-5 right-[15px] md:bottom-10 md:right-[42px] p-3 bg-transparent md:bg-hoverColor rounded-full"
          >
            {isPlaying ? (
              <SpeakerWaveIcon className=" text-textGreen h-4 w-4 md:h-5 md:w-5" /> // Volume up icon for playing state
            ) : (
              <SpeakerXMarkIcon className="h-4 w-4 md:h-5 md:w-5" /> // Volume off icon for muted state
            )}
          </button> */}
        </main>
      )}
    </>
  );
};

export default Home;
