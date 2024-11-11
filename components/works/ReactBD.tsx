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
        

        <span className="text-textGreen tracking-wide">
          @CREATIVE CLOSETS member of Maan Aljasser & Co.
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Dubai, UAE</p>
      <p className="text-sm mt-1 font-medium text-textDark">2023 - until present time</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Produce precise and detailed 2D and 3D CAD drawings for custom
closets, ensuring that measurements, materials, and designs meet client
specifications.

        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Work closely with interior designers, architects, and clients to develop
designs that are functional and aesthetically pleasing.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Generate 3D models for design visualization and client presentations
using software such as SketchUp, 3ds Max.

        </li>
      </ul>
      
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
