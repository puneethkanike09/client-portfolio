import Link from "next/link";
import { TbBrandGithub, TbBrandWhatsapp } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-purple-200 py-8">
      <div className="max-w-container mx-auto px-4 flex flex-col items-center gap-4">
        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/PuneethKanike/"
            target="_blank"
            className="text-xl text-textDark hover:text-textGreen"
          >
            <TbBrandGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://linkedin.com/in/puneeth-kanike/"
            target="_blank"
            className="text-xl text-textDark hover:text-textGreen"
          >
            <SlSocialLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://api.whatsapp.com/send?phone=917975187240"
            target="_blank"
            className="text-xl text-textDark hover:text-textGreen"
          >
            <TbBrandWhatsapp />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.instagram.com/k_puneeth_gowda?igsh=MWJ1Z2hmb3I5Z2JuNg=="
            target="_blank"
            className="text-xl text-textDark hover:text-textGreen"
          >
            <SlSocialInstagram />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.youtube.com/"
            target="_blank"
            className="text-xl text-textDark hover:text-textGreen"
          >
            <SlSocialYoutube />
          </motion.a>
        </motion.div>

        {/* Footer Links */}
        <div className="flex flex-col items-center gap-2">
          <Link href="/privacy-policy" className="text-sm text-textDark hover:text-textGreen">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-sm text-textDark hover:text-textGreen">
            Terms of Service
          </Link>
        </div>

        {/* Email Contact */}
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          href="mailto:reachout.puneeth@gmail.com"
          className="text-sm text-textGreen"
        >
          reachout.puneeth@gmail.com
        </motion.a>

        {/* Copyright Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-textDark"
        >
          © 2024 Puneeth Kanike. All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
