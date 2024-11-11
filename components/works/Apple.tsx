import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        
        <span className="text-textGreen tracking-wide">@The Line Studio</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Bangalore, India

      </p>
      <p className="text-sm mt-1 font-medium text-textDark">
        2021 - 2023

      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Worked as interior designer and project executive, site supervisor for both
commercial an residential.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Experienced in making technical site work drawing and production
drawing.

        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Excellent knowledge of 2d drawing manually skilled in use of all
appropriate tools and proficient
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
