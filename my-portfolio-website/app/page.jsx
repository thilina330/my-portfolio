import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"
import Stars from "@/components/Stars";


const Home = () => {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto ">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-3 xl:pb-6">

          {/* text */}
          <div className="order-2 text-center xl:text-left xl:order-none ">
             <span className="text-xl">Full-stack developer</span>
             <h1 className="mt-4 mb-8 h1">
              Hello I'm<br/><span className="text-[#94e5ff]">Thilina Lakshan</span>
             </h1>
             <p className="max-w-[515px] mb-6 text-white/80">I’m a full-stack developer skilled in creating dynamic, end-to-end digital experiences using a wide range of programming languages and technologies.</p>
             {/* btn and socials */}
             <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button variant="outline" size="lg" className="flex items-center gap-2 uppercase">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div >
                <Socials containerStyles="flex gap-6 " iconStyles="w-9 h-9 border border-[#94e5ff] rounded-full flex justify-center items-center text-[#94e5ff] text-base hover:bg-cyan-400 hover:text-primary hover:transition-all duration-500"/>
              </div>
             </div>
          </div>

          {/* photo */}

          <div className="order-1 pl-8 mb-10 xl:order-none xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stars/>
    </section>

  )
}

export default Home
