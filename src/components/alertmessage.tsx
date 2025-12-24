"use client";
import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { Poppins } from "next/font/google";

export default function AlertPopup() {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 5000); // 1s delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: -20 }}
          style={{
            position: "fixed",
            top: "20px",
            background: "linear-gradient(135deg, #314a80ff, #446ca0ff)",
            padding: "20px",
            borderRadius: "12px",
            color: "white",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            gap: "15px"
          }}
        >
            <p style={{fontSize: "1.5rem"}}>Disclaimer: This site is only to show my work.</p>
          <button 
            onClick={() => setIsVisible(false)}
            style={{ background: "rgba(255, 255, 255, 0.2)", border: "none", color: "white", cursor: "pointer", borderRadius: "50%", padding: "5px 10px" }}
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}