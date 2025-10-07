import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "bensalahabdo129.com";
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };
  return (
    <motion.button
      onClick={handleCopyEmail}
      whileHover={{y: -5}}
      whileTap={{scale: 1.05}}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    > 
    <AnimatePresence mode="wait">
      {copied ? (
        <motion.p
          className="flex items-center justify-center gap-2"
          key ="copied"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.31, ease: "easeInOut" }}
        >
          <img src="assets/copy-done.svg" className="w-5" alt="copied" />
          Email Copied
        </motion.p>
      ) : (
        <motion.p className="flex items-center justify-center gap-2"
        initial={{ opacity: 0}}
        key="copy"
          animate={{ opacity: 1}}
          exit={{ opacity: 0}}
          transition={{ duration: 0.31, ease: "easeInOut" }}>
          <img src="assets/copy.svg" className="w-5" alt="Copy icon" />
          Copy Email Address
        </motion.p>
      )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
