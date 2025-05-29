import { useState } from 'react'
import { FaStar } from 'react-icons/fa' // Add this import
import customer1 from "../images/gallery/customer1.png";
import customer2 from "../images/gallery/customer2.png";
import customer3 from "../images/gallery/customer3.png";

const Section6 = () => {
    const testimonials = [
        {
            id: 1,
            stars: [...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-secondary" />
            )),
            context: '"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.',
            image: customer1,
            name: "DoeWilma Mumduya",
        },
        {
            id: 2,
            stars: [...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-secondary" />
            )),
            context: '"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.',
            image: customer2,
            name: "Jimmy Changa",
        },
        {
            id: 3,
            stars: [...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-secondary" />
            )),
            context: '"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.',
            image: customer3,
            name: "Wilma Mumduya",
        },
    ]

    return (
        <div className='max-w-10/12 mx-auto my-22 sm:h-auto md:h-fit lg:h-[500px] items-center '>
            <div className="w-15 h-1 bg-[#FF1E1E] mx-auto mb-4"></div>
            <h2 className="text-center text-primary font-chivo lg:text-[44px] text-4xl font-bold mb-14">CUSTOMER SAYS ABOUT US</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t-1 border-b-1 border-[#E5E5E5] border-r-0">
                {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="p-8 flex flex-col border-r-1 border-[#E5E5E5]">
                    <div className="flex">{testimonial.stars}</div>
                    <p className='my-10 text-[#150303] text-[20px] leading-[32px]'>{testimonial.context}</p>
                    <div className="flex items-center">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-10 h-10 rounded-full mr-2"
                        />
                        <p className='text-base'>{testimonial.name}</p>
                    </div>
                </div>
                ))}
            </div>
            
        </div>
    )
}
export default Section6