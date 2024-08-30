import Diseases from "../Components/Diseases"
import Donate from "../Components/Donate"
import HealthBlogs from "../Components/HealthBlogs"
import Hero from "../Components/Hero"
import HospitalCards from "../Components/HospitalCards"
 
import Partner from "../Components/Partner"
import PromotionalCards from "../Components/Promotions"
import ServiceCards from "../Components/Services"
import SymptomsList from "../Components/SymptomsList"
import Testimonials from "../Components/Testimonials"
 
 

const Home = () => {
  return (
    <div>
      <Hero/>
      <ServiceCards/>
      <PromotionalCards/>
      <SymptomsList/>
      <Diseases/>
      <Donate/>
      <Testimonials/>
      <HospitalCards/>
      <HealthBlogs/>
      <Partner/>
 
    </div>
  )
}

export default Home
