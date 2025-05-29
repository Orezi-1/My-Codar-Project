import barber1 from "../images/gallery/barber1.jpg"
import barber2 from "../images/gallery/barber2.jpg"
import barber3 from "../images/gallery/barber3.jpg"
import barber4 from "../images/gallery/barber4.jpg"
import barber5 from "../images/gallery/barber5.jpg"
import barber6 from "../images/gallery/barber6.jpg"

const Section2 = () => {
  return (
    <div className="flex mx-auto lg:mb-32 md:mb-16 mb:h-fit lg:h-fit lg:flex-row flex-col ">
        <div className="lg:w-[55%] h-fit flex grow flex-row flex-wrap">
            <img src={barber1} alt="barber" className="max-w-1/3 h-3/6" />
            <img src={barber2} alt="barber" className="max-w-1/3 h-3/6" />
            <img src={barber3} alt="barber" className="max-w-1/3 h-3/6" />
            <img src={barber4} alt="barber" className="max-w-1/3 h-3/6" />
            <img src={barber5} alt="barber" className="max-w-1/3 h-3/6" />
            <img src={barber6} alt="barber" className="max-w-1/3 h-3/6" />
        </div>
        <div className="lg:w-[45%] flex justify-center mt-6 ">
            <div className="w-3/4 self-center ">
                <div className="w-15 h-1 bg-[#FF1E1E] mb-4"></div>
                <h2 className="lg:text-[44px] text-4xl font-bold text-[#150303] leading-14 
                    font-chivo border-b-1 pb-6 md:mt-8 md:mb-5 lg:mb-8">
                    OUR TOP PRICES
                </h2>          
                <ul>
                    <li className="flex justify-between items-center font-chivo text-[18px] leading-5 py-5 border-b-1 border-[#E5E5E5]">
                        <h3>Special Beard treatment</h3>
                        <span className="flex gap-2">From <p className="text-secondary">$40</p></span>
                    </li>
                    <li className="flex justify-between items-center py-5 font-chivo text-[18px] leading-5 border-b-1 border-[#E5E5E5]">
                        <h3>Special Beard treatment</h3>
                        <span className="flex gap-2">From <p className="text-secondary">$40</p></span>
                    </li>
                    <li className="flex justify-between items-center py-5 font-chivo text-[18px] leading-5 border-b-1 border-[#E5E5E5]">
                        <span>Colour your Beard</span>
                        <span className="flex gap-2">From <p className="text-secondary">$40</p></span>
                    </li>
                    <li className="flex justify-between items-center py-5 font-chivo text-[18px] leading-5 border-b-1 border-[#E5E5E5]">
                        <span>Wax your Beard</span>
                        <span className="flex gap-2">From <p className="text-secondary">$40</p></span>
                    </li>
                    <li className="flex justify-between items-center py-5 font-chivo text-[18px] leading-5 border-b-1 border-[#E5E5E5]">
                        <span>Wax your Beard</span>
                        <span className="flex gap-2">From <p className="text-secondary">$40</p></span>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}
export default Section2