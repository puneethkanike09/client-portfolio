import { TiArrowForward } from "react-icons/ti";
import Image from "next/image";
import image1 from '../../public/assets/images/amazonImg.png'

import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        
        <span className="text-textGreen tracking-wide">@Pre-university College, Kumbala academy</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Kerala, India
      </p>
      <p className="text-sm mt-1 font-medium text-textDark">
        2016 - 2018
      </p>
      {/* <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated with senior developers to build React frontend components for client projects.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Proposed a design idea that was well-received by the senior developer and led to better user experience.
        </li>
       
      </ul> */}
      {/* <div className="mt-4">
        <Image
          src= "" // Replace with the path to your image
          alt="College"
          width={200} // Adjust width as needed
          height={200} // Adjust height as needed
          className="rounded" // Optional: add styling to the image
        />
      </div> */}
    </motion.div>
  );
};

export default Google;
