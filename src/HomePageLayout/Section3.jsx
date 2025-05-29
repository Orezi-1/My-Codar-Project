import { useState } from 'react';
import about2 from "../images/gallery/about2.jpg";
import { FaChevronDown } from "react-icons/fa";

const Section3 = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (sectionName) => {
        // If clicking the same section, close it, otherwise open the new section
        setActiveSection(activeSection === sectionName ? null : sectionName);
    };

    const sections = [
        {
            name: 'hair',
            title: 'For Hair',
            items: [
                { service: 'Trim your hair', price: 40 },
                { service: 'Hair Treatment', price: 50 },
                { service: 'Hair Coloring', price: 60 },
                { service: 'Hair Styling', price: 45 }
            ]
        },
        {
            name: 'face',
            title: 'For Face',
            items: [
                { service: 'Facial Treatment', price: 55 },
                { service: 'Face Massage', price: 40 },
                { service: 'Face Cleanup', price: 35 },
                { service: 'Face Mask', price: 30 }
            ]
        }
    ];

    return (
        <div className="max-w-10/12 mx-auto mb-32 mt-0 sm:mt-5 sm:h-auto md:h-fit lg:h-[600px] 
            grid lg:grid-cols-2 grid-cols-1 items-center">
            <div className="mx-5 ">
            <div className="w-15 h-1 bg-[#FF1E1E] mb-4"></div>
                <h2 className="text-[44px] lg:font-extrabold font-bold text-[#150303] leading-14 font-chivo mb-12">
                    ALL WE DO FOR YOU
                </h2>
                {sections.map((section) => (
                    <div key={section.name} className="mb-4">
                        <button 
                            className={`h-[55px] flex justify-between px-7 py-4 w-full cursor-pointer
                                transition-colors duration-300 ${
                                activeSection === section.name ? 'bg-primary' : 'bg-secondary'
                            }`}
                            onClick={() => toggleSection(section.name)}
                        >
                            <p className="font-bold text-[18px] text-white">{section.title}</p>
                            <FaChevronDown 
                                className={`text-white transition-transform duration-300 ${
                                    activeSection === section.name ? 'rotate-180' : ''
                                }`}
                            />
                        </button>
                        <div className={`transition-all duration-300 overflow-hidden ${
                            activeSection === section.name ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                            {section.items.map((item, index) => (
                                <div key={index} className="flex mx-2 justify-between my-6 font-chivo text-[18px] leading-5 pb-4 border-b-1 border-[#E5E5E5]">
                                    <span>
                                        {item.service}
                                    </span>
                                    <p className="flex gap-2">From <p className="text-secondary">${item.price}</p></p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>              
            <div className="flex justify-center lg:justify-end lg:h-[600px] h-auto w-full">
                <img src={about2} alt="about" className='w-[80%] h-full object-contain lg:object-cover' />
            </div>
        </div>
    );
};

export default Section3;