import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 3000); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed inset-0 bg-bodyColor flex items-center justify-center z-50 transition-all ${
        loading ? "visible" : "invisible"
      }`}
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1], // Slightly softer pulsating scale effect
          borderRadius: ["20%", "50%", "20%"], // Morphing shape
          rotate: [0, 180, 360], // Add rotation
          opacity: [1, 0.8, 1], // Add a gentle opacity change
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="p-5 rounded-full"
      >
        <motion.img
          src="/assets/images/logo.png"
          alt="Logo"
          className="w-20 h-20"
          initial={{ x: -800 }} // Start off-screen
          animate={{
            x: [-1000, -500, 0, 0, 0, 1000], // Animate to center and then exit to the right
            y: [0, 0, 0, 0, 0], // Keep Y-axis fixed
            rotate: [], // Optional: Add some subtle rotation if needed
          }}
          exit={{ x: 800 }} // Exit smoothly to the right at the end
          transition={{
            duration: 3, // Set the duration for the whole animation
            ease: "easeInOut",
            repeat: Infinity, // If you want the animation to loop until loading is done
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
