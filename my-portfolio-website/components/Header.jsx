import Link from "next/link"
import { Button } from "./ui/button"

// Import the Nav component
import Nav from "./Nav"
import MobileNav from "./MobileNav"



const Header = () => {
  return (
    <header className="py-6 text-white xl:py-12">
       <div className="container flex items-center justify-between mx-auto">

        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Thilina<span className="text-cyan-300">.</span>
          </h1>
        </Link>

        {/* dekstop nav & add hire me button*/}
        
        
        <div className="items-center hidden gap-8 xl:flex">
            <Nav/>
            <Link href="/contact">
                <Button className="ml-4">Hire Me</Button>
            </Link>
        </div>
        
        {/* mobile nav */}
        <div className="flex xl:hidden">
            <MobileNav/>
        </div>   



        
         
       </div>        
    </header>
  )
}

export default Header
