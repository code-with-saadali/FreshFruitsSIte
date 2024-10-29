import React from "react";
import BannerPng from "../../assets/fruits/banner-bg.jpg";
import { motion } from "framer-motion";
import { fadeLeft } from "../../utility/animation";

const bgStyle = {
    backgroundImage: `url(${BannerPng})`, 
    backgroundPosition: "center", 
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

const Banner3 = () => {
  return (
    <section className="container mb-12">
      <div 
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl"
      >
        <div></div> 
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={fadeLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              get fresh food
            </motion.h1>
            <motion.p
              variants={fadeLeft(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, optio quasi commodi mollitia labore odio corrupti,
              repudiandae, quam eum laboriosam dolor saepe magnam! Obcaecati
              rerum debitis aut amet autem pariatur!
            </motion.p>
            
            <motion.div
              variants={fadeLeft(0.9)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Learn More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner3;
