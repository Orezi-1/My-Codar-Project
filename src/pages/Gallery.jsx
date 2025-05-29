import Hero4 from "../GalleryPageLayout/Hero4";
import instra1 from "../images/gallery-Images/instra1.jpg";
import instra2 from "../images/gallery-Images/instra2.jpg";
import instra3 from "../images/gallery-Images/instra3.jpg";
import instra4 from "../images/gallery-Images/instra04.jpg";
import instra5 from "../images/gallery-Images/instra5.jpg";
import instra6 from "../images/gallery-Images/instra6.jpg";

function Gallery() {
  return (
    <>
      <Hero4 />
      <div className='max-w-10/12 mx-auto my-22 sm:h-auto md:h-fit items-center '>
        <h1 className="text-center text-primary font-chivo text-[44px] font-bold mb-14">GALLERY</h1>
        <section className="max-w-full mx-auto overflow-hidden">
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-full">
              {[instra1, instra2, instra3, instra4, instra5, instra6].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="h-fit w-full object-cover flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
    
  );
}

export default Gallery;