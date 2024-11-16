"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "I can help you build a website that will help you grow your business.",
    href: "",
  },
  {
    num: "02",
    title: "Web Development",
    desc: "I can help you build a website that will help you grow your business.",
    href: "",
  },
  {
    num: "03",
    title: "Web Development",
    desc: "I can help you build a website that will help you grow your business.",
    href: "",
  },
  {
    num: "04",
    title: "Web Development",
    desc: "I can help you build a website that will help you grow your business.",
    href: "",
  },
];



import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2 "
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex flex-col justify-center flex-1 gap-6 group">
                {/* top */}
                <div className="flex items-center justify-between w-full">
                  <div className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover">{service.num}</div>
                  <Link href={service.href} className="w-[50px] h-[50px] font-semibold hover:-rotate-45 text-lg rounded-full bg-white group-hover:bg-cyan-300 transition-all duration-500 flex justify-center items-center">
                    <BsArrowDownRight className="text-3xl text-primary" />
                  </Link>
                </div>
                {/* title*/}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-cyan-300 transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.desc}</p>
                {/* border */}
                <div className="w-full border-b border-white/20"></div>

              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
