import { useState } from "react";
import SectionTitle from "./SectionTitle";

import Apple from "./works/Apple";
import Google from "./works/Google";
import ReactBD from "./works/ReactBD";

const Experience = () => {
  const [workReactbd, setWorkReactbd] = useState(true);
  const [workGoogle, setWorkGoogle] = useState(false);
  const [workApple, setWorkApple] = useState(false);
  const [workSplash, setWorkSplash] = useState(false);
  const [workAmazon, setWorkAmazon] = useState(false);

  const handleReactbd = () => {
    setWorkReactbd(true);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };

  const handleGoogle = () => {
    setWorkReactbd(false);
    setWorkGoogle(true);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };

  const handleApple = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(true);
    setWorkSplash(false);
    setWorkAmazon(false);
  };

  const handleSplash = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(true);
    setWorkAmazon(false);
  };

  const handleAmazon = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(true);
  };

  return (
    <section
      id="experience"
      className="exp-container relative max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      {/* Background Image Div */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-center opacity-20"
        style={{
          backgroundImage: "url('../assets/images/bg5.png')", // Set the background image
          backgroundSize: '700px', // Adjust size as needed
        }}
      />
      {/* Content on top of background */}
      <div className="relative z-10">
        <SectionTitle title="Where I have Worked" titleNo="02" />
        <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
          <ul className="md:w-32 flex flex-col">
            <li
              onClick={handleReactbd}
              className={`${
                workReactbd
                  ? "border-l-textGreen text-textDark bg-purple-300"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-hoverColor py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
            >
              Architectural Draftsman
            </li>
            <li
              onClick={handleGoogle}
              className={`${
                workGoogle
                 ? "border-l-textGreen text-textDark bg-purple-300"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-hoverColor py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
            >
               Interior designer
            </li>
            <li
              onClick={handleApple}
              className={`${
                workApple
                 ? "border-l-textGreen text-textDark bg-purple-300"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-hoverColor py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
            >
               Interior designer
            </li>
            {/* Add more items here as needed */}
          </ul>
          {workReactbd && <ReactBD />}
          {workGoogle && <Google />}
          {workApple && <Apple />}
          {/* Add more components as needed */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
