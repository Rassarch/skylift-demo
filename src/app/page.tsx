import LoadingScreen from '@/components/ui/LoadingScreen'
import CustomCursor from '@/components/ui/CustomCursor'
import FloatingWA from '@/components/ui/FloatingWA'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Facilities from '@/components/sections/Facilities'
import Stats from '@/components/sections/Stats'
import Programs from '@/components/sections/Programs'
import Schedule from '@/components/sections/Schedule'
import Membership from '@/components/sections/Membership'
import Reviews from '@/components/sections/Reviews'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <FloatingWA />

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Facilities />
        <Programs />
        <Schedule />
        <Membership />
        <Reviews />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
