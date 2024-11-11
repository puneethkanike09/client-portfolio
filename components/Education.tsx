import { useState } from "react";
import SectionTitle from "./SectionTitle";
import SectionTitle2 from "./SectionTitle2";
import Amazon from "./works/Amazon";
import Apple from "./education/Apple";
import Google from "./education/Google";
import ReactBD from "./education/ReactBD";
import Splash from "./works/Splash";

const Education = () => {
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
      id="education"
      className="exp-container relative max-w-containerxs mx-auto py-10z lgl:py-24 px-4"
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
        <SectionTitle2 title="Where I have Studied" titleNo="02" />
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
              Degree
            </li>
            <li
              onClick={handleGoogle}
              className={`${
                workGoogle
                 ? "border-l-textGreen text-textDark bg-purple-300"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-hoverColor py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
            >
              PU
            </li>
            <li
              onClick={handleApple}
              className={`${
                workApple
                 ? "border-l-textGreen text-textDark bg-purple-300"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-hoverColor py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
            >
              Higher school
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

export default Education;
