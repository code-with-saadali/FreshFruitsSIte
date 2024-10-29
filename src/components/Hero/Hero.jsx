import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import HeroPng from "../../assets/fruits/fruit-plate.png";
import LeafPng from "../../assets/fruits/leaf.png";
import { motion } from "framer-motion";
import { faderight } from "../../utility/animation";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] md:relative">
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <motion.h1
              variants={faderight(0.6)}
              initial="hidden"
              whileInView="visible"
              className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia"
            >
              Healthy
              <br />
              Fresh <span className="text-secondary">Fruits!</span>
            </motion.h1>
            <motion.p
              variants={faderight(0.9)}
              initial="hidden"
              whileInView="visible"
              className="text-2xl tracking-wide"
            >
              Order Now For Fresh Healthy Life
            </motion.p>
            <motion.p
              variants={faderight(1.2)}
              initial="hidden"
              whileInView="visible"
              className="text-gray-400"
            >
              Healthy and yummy food for fresh morning breakfast. Eat Daily for
              good health and mind Order now and get 20% off on your first order
            </motion.p>

            <motion.div
              variants={faderight(1.5)}
              initial="hidden"
              whileInView="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2">
                <span>
                  <IoBagHandleOutline />
                </span>
                Order Now
              </button>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              opacity: 1,
              delay: 0.2,
              duration: 0.8,
              ease: "easeIn",
            }}
            src={HeroPng}
            alt=""
            className="w-[350px] md:w-[550px] drop-shadow"
          />
        </div>
        <div className="absolute top-8 md:top-0 right-1/2  opacity-80 rotate-[20deg] md:rotate-[40deg]">
          <motion.img
            initial={{ opacity: 0, y: -200, rotate: 75 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              opacity: 1,
              delay: 0.3,
              duration: 0.8,
              ease: "easeIn",
            }}
            src={LeafPng}
            alt=""
            className="w-full md:max-w-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
