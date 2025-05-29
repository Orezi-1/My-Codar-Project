import about1 from "../images/gallery/about1.jpg"
import rightArrow from "../images/icons/right-arrow.svg"

const Section1 = () => {
  return (
    <section className='max-w-10/12 mx-auto mb-32 sm:h-auto md:h-fit lg:h-[500px] flex items-center '>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="w-full md:w-[90%] lg:w-full text-[18px] lg:leading-7 pr-8 text-tertiary">
                    <span className="flex gap-8 mb-4 md:mb-8">
                        <img src={rightArrow} alt="right-arrow" />
                        <p>
                            Be the majority have suffered alteration in some form, by injected humour.
                        </p>
                    </span>        
                    <span className="flex gap-8 mb-4 md:mb-8">
                        <img src={rightArrow} alt="right-arrow" />
                        <p>
                            Psum available be the majority have suffered alteration in some form, by injected humour.
                        </p>
                    </span>    
                    <span className="flex gap-8 mb-4 md:mb-8">
                        <img src={rightArrow} alt="right-arrow" />
                        <p>
                        Available be the majority have suffered alteration in some form, by injected humour.
                        </p>
                    </span>    
                    <span className="flex gap-8 mb-4 md:mb-8">
                        <img src={rightArrow} alt="right-arrow" />
                        <p>
                        Humour available be the majority have suffered alteration in some form, by injected.
                        </p>
                    </span>    
                </div>
            
                <div className="pb-8">
                    <img src={about1} alt="about1" />
                </div>

                <div className="lg:mt-15 lg:ml-25 lg:mr-5 lg:mb-8 md:mt-10 lg:space-y-4">
                <div className="w-15 h-1 bg-[#FF1E1E] mb-4"></div>
                    <h2 className="font-[700] font-chivo lg:text-5xl md:text-3xl sm:text-2xl">
                        ABOUT OUR STORY
                    </h2>
                    <p className="font-normal text-lg text-tertiary my-3 mb-4">
                        There are many variations of passages of Lorem Ipsum available be the
                        majority have suffered alteration in some form, by injected humour or randomised words.
                    </p>
                    <button className="text-secondary border-secondary border-2 bg-white w-[150px] sm:w-[150px]
                        h-[55px] font-bold text-[18px] cursor-pointer hover:bg-secondary
                        hover:text-white transition duration-300">
                        Book Now
                    </button>
                </div>  

        </div>
    </section>
  )
}
export default Section1