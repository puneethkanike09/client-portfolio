import { TiArrowForward } from "react-icons/ti";
import Image from "next/image";
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
        <span className="text-textGreen tracking-wide">@Al Ameen Marble Ceramics & Decor</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
       Fujairah, UAE
      </p>
      <p className="text-sm mt-1 font-medium text-textDark">
        2022 - 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Preparing and checking Pre-tender documents and BOQ.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Review of project drawing and specification; develop RFI&apos;s if required.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Taking off quantities and checking with the client&apos;s BOQ.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Rate analysis and preparing Quotations for the project based on our own
        </li>
      </ul>
      {/* <div className="mt-4">
        <Image
          src="" // Replace with the path to your image
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
