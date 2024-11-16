"use client";

import CountUp from "react-countup";

const stars = [
  {
    num: 100,
    text: "Projects completed",
  },
  {
    num: 500,
    text: "Happy clients",
  },
  {
    num: 300,
    text: "Years of experience",
  },
    {
        num: 150,
        text: "Cups of coffee",
    },
];

const Stars = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none ">
          {stars.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center flex-1 gap-4 xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl font-bold xl:text-6xl"
                />
                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[158px]"} leading-snug text-white/80  `}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stars;
