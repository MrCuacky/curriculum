import React from "react";
import PDF from './CV.pdf'
import { motion } from "framer-motion";

function Pdf() {
    return (
        <motion.div className="content"
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >

        <iframe src={PDF} width="600" height="500" frameborder="0"></iframe>


        </motion.div>
    );
}

export default Pdf;