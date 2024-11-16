"use client";

import {motion} from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation';




const PageTransition = ({children}) => {
  const pathname = usePathname();
  return (
    <AnimatePresence >
      <div key={pathname}>
        <motion.div
          initial={{opacity: 1}}
          animate={{
             opacity: 0,
             transition: {delay: 1, duration: 0.4, ease: 'easeInOut'},
            }}
         className='fixed top-0 w-screen h-screen pointer-events-none bg-primary '
        />
        
      </div>
      {children}
    </AnimatePresence>
  )
}

export default PageTransition
