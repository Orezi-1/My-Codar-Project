import Hero2 from "../ContactPageLayout/Hero2.jsx";
import { FaHome, FaPhone, FaEnvelope } from 'react-icons/fa';

function Contact() {
    return (
      <div>
        <Hero2 />
        <div className="max-w-10/12 container mx-auto px-4 pb-20 flex flex-col lg:flex-row gap-8">
          {/* Contact Form Section */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full md:w-1/2 p-3 border border-gray-300 rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full md:w-1/2 p-3 border border-gray-300 rounded"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Subject"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Enter Message"
                rows="6"
                className="w-full p-3 border border-gray-300 rounded resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-secondary text-white px-8 py-3 rounded hover:bg-opacity-90 transition-colors"
              >
                SEND
              </button>
            </form>
          </div>          
          
          {/* Contact Information Section */}
          <div className="w-full lg:w-1/3 space-y-8 pt-8 lg:pt-18">
            <div className="flex items-start gap-4 mx-4 sm:mx-1 md:mx-16 lg:ml-18">
              <FaHome className="text-2xl text-secondary mt-1 flex-shrink-0" />
              <div>
                <p className="text-lg font-medium">Buttonwood, California.</p>
                <p className="text-gray-600">Rosemead, CA 91770</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mx-4 sm:mx-8 md:mx-16 lg:ml-18">
              <FaPhone className="text-2xl text-secondary mt-1 flex-shrink-0" />
              <div>
                <p className="text-lg font-medium">+1 253 565 2365</p>
                <p className="text-gray-600">Mon to Fri 9am to 6pm</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mx-4 sm:mx-8 md:mx-16 lg:ml-18">
              <FaEnvelope className="text-2xl text-secondary mt-1 flex-shrink-0" />
              <div>
                <p className="text-lg font-medium">support@colorlib.com</p>
                <p className="text-gray-600">Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;