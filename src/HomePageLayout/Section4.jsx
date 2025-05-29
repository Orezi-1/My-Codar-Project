import { useState } from 'react';
import services1 from "../images/icons/services1.svg";
import services2 from "../images/icons/services2.svg";
import services3 from "../images/icons/services3.svg";
import backgroundImage from "..//images/gallery/section-bg.jpg";


const Section4 = () => {

    const services = [
        {
            id: 1,
            icon: services1,
            serviceTittle: "Stylist Haircut",
            serviceText: "Available be the majority have suffered alteration in some form, by injected humour.",
        },
        {
            id: 2,
            icon: services2,
            serviceTittle: "Cut $ hair style",
            serviceText: "Available be the majority have suffered alteration in some form, by injected humour.",
        },
        {
            id: 1,
            icon: services3,
            serviceTittle: "Color & hair wash",
            serviceText: "Available be the majority have suffered alteration in some form, by injected humour.",
        },
    ];

  return (
    <div className="w-full" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {/* Services Section */}
        <div className="max-w-10/12 mx-auto py-20 lg:py-15 items-center bg-cover bg-center bg-no-repeat relative" >        
            <div className="grid lg:grid-cols-3 max-w-[72%] mx-auto md:grid-cols-2 gap-2 grid-cols-1 relative z-10">
                {services.map((service) => (                
                    <div key={service.id} className="text-center p-3 bg-primary rounded-2xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group cursor-pointer">
                        <div className="absolute inset-x-0 bottom-0 h-full bg-white transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0"></div>
                        <div className="mx-auto w-fit lg:py-10 py-5 relative">
                            <img src={service.icon} alt="" className="mx-auto lg:mb-5 mb-3" />
                            <h2 className="font-bold text-[18px] text-white transition-colors duration-300 group-hover:text-[#928888] lg:pt-4">{service.serviceTittle}</h2>
                        </div>
                        <p className="text-[#928888] lg:px-4 lg:pb-8 relative">{service.serviceText}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
export default Section4