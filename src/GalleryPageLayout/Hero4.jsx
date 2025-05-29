import heroImg5 from "../images/hero/hero3.jpg";

const Hero4 = () => {  
  return (
    <section className="flex md:h-[400px] h-45 lg:mb-16 mb-12 md:mt-[75px] mt-28">
            <div className="flex md:justify-center items-center pl-10 md:items-center w-full md:w-1/2 lg:w-[45%] bg-primary">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-[800] font-chivo text-white ">
                  Gallery
                </h1>
            </div>
        

        <div className="hidden md:block md:w-1/2 lg:w-3/5 md:h-full lg:h-[400px]">
          <img src={heroImg5} alt="hero image" className="object-cover w-full h-full" />
        </div>
    </section>
  );
};

export default Hero4;