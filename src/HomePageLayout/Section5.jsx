import { useRef, useEffect } from 'react';
import instra1 from "../images/gallery/instra1.jpg";
import instra2 from "../images/gallery/instra2.jpg";
import instra3 from "../images/gallery/instra3.jpg";
import instra4 from "../images/gallery/instra4.jpg";

const Section5 = () => {
    const galleryImages = [
        instra1,
        instra2,
        instra3,
        instra4,
        instra2,
    ];
    
    return (
        <div>
            <section className="max-w-full mx-auto overflow-hidden">
                <div className="relative">                    
                    <div
                        className="grid grid-cols-2 md:grid-cols-5 max-w-full"
                    >
                        {galleryImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                className="h-fit w-full object-contain flex-shrink-0"
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Section5;