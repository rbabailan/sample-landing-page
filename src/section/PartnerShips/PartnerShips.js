import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import style from "./PartnerShips.module.css";

const squareVariants = {
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 1, y: 100 },
};

const PartnerShips = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={style.partnerContainer}>
      <div className={style.headLineWrapper}>
        <h2>International Academic Partnerships</h2>
      </div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        className="square">
        <div className={style.cardWrapper}>
          <img src="https://ik.imagekit.io/f2ityjkpdv/International-Academic-Partnerships-1__2_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675935396481" />
        </div>
      </motion.div>
    </div>
  );
};

export default PartnerShips;
