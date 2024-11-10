import Link from "next/link"
import { Button } from "./ui/button"

// Import the Nav component
import Nav from "./Nav"



const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12">
       <div className="container mx-auto">

        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Thilina<span className="text-cyan-300">.</span>
          </h1>
        </Link>

        {/* dekstop nav */}
        <div className="hidden xl:flex">
            <Nav/>
        </div>
        


        
         
       </div>        
    </header>
  )
}

export default Header
