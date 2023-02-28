import React from "react";
import { motion } from "framer-motion";

function logo() {
  return (
    <motion.div class="content"
      initial={{ opacity: 1, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div class="shrink">
        <img alt='not found' src='https://i0.wp.com/utd.edu.mx/wp-content/uploads/2022/06/LOGO-UTD-NUEVO-2022_solo-01.png?fit=1024%2C387&ssl=1'></img>
      </div>
    </motion.div>
  );
}

export default logo;