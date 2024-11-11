import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
import Image from "next/image";
import image1 from '../../public/assets/images/amazonImg.png'

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Bachelor of Interior Design

        <span className="text-textGreen tracking-wide">
          @Srinivas university
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Mangalore , India</p>
      <p className="text-sm mt-1 font-medium text-textDark">2018 - 2021</p>
      
      {/* Add the image here */}
      {/* <div className="mt-4">
        <Image
          src={image1} // Replace with the path to your image
          alt="College"
          width={200} // Adjust width as needed
          height={200} // Adjust height as needed
          className="rounded" // Optional: add styling to the image
        />
      </div> */}
    </motion.div>
  );
};

export default ReactBD;
