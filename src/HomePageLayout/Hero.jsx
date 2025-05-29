import heroImg from "../images/hero/h1_hero1.jpg";
import scissors from "../images/icons/scissors.svg";

const Hero = () => {  
  return (
    <section className="md:flex md:h-[650px] lg:mb-32 mb-12 md:mt-[75px] mt-30">
        <div className="md:flex md:items-center md:justify-end w-full
            md:w-1/2 lg:w-[45%] md:pl-24 pl-8 pr-0 bg-primary text-white py-8 md:py-0">
            <div className="flex flex-col justify-center items-start pr-20">
                <img src={scissors} alt="scissors" />
                <h1 className="uppercase text-2xl md:text-4xl lg:text-[80px] font-[800] font-chivo py-1 my-1">
                  We're the <br /> last of <br /> breed.
                </h1>
                <p className="text-sm sm:text-xl mb-4">ACHIEVE YOUR DREAM STYLE</p>
                <button className="text-white bg-secondary w-[150px] sm:w-[200px]
                 h-[70px] font-bold text-base cursor-pointer hover:bg-white
                  hover:text-secondary transition duration-300">
                  Book Now
                </button>
            </div>
        </div>

        <div className="hidden md:block md:w-1/2 lg:w-3/5 md:h-[650px]">
          <img src={heroImg} alt="hero image" className="object-cover w-full h-full" />
        </div>
    </section>
  );
};

export default Hero;