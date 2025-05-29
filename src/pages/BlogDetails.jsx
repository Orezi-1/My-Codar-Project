import React from 'react';
import Hero2 from "../BlogDetailsLayout/Hero2"
import { FaRegComment } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faDribbble, faBehance } from '@fortawesome/free-brands-svg-icons';
import blogImage1 from "../images/blog-gallery/single_blog_1.jpg";
import post1 from "../images/blog-gallery/Recent_Post/post_1.jpg";
import post2 from "../images/blog-gallery/Recent_Post/post_2.jpg";
import post3 from "../images/blog-gallery/Recent_Post/post_3.jpg";
import post4 from "../images/blog-gallery/Recent_Post/post_4.jpg";
import post5 from "../images/blog-gallery/Recent_Post/post_5.jpg";
import post6 from "../images/blog-gallery/Recent_Post/post_6.jpg";
import post7 from "../images/blog-gallery/Recent_Post/post_7.jpg";
import post8 from "../images/blog-gallery/Recent_Post/post_8.jpg";
import post9 from "../images/blog-gallery/Recent_Post/post_9.jpg";
import post10 from "../images/blog-gallery/Recent_Post/post_10.jpg";
import nextPost from "../images/blog-gallery/Recent_Post/next.jpg";
import prevPost from "../images/blog-gallery/Recent_Post/preview.jpg";
import author from "../images/blog-gallery/Author Image/author.png";
import comment1 from "../images/blog-gallery/Author Image/comment_1.png";
import comment2 from "../images/blog-gallery/Author Image/comment_2.png";
import comment3 from "../images/blog-gallery/Author Image/comment_3.png";



function BlogDetails() {
  const blogPosts = [
    {
      id: 1,
      image: blogImage1,
      title: 'Second divided from form fish beast made every of seas all gathered us saying he our',
      description: "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower",
      categories: ["Travel", "Lifestyle"],
      comments: 3
    }
  ];

  return (
    <>
      <Hero2 />
      <div className="max-w-10/12 mx-auto sm:h-auto md:h-fit">
        <div className='flex flex-col lg:flex-row gap-8'>

          {/* Blog Posts */}
          <div className='lg:w-[65%]' >
            {blogPosts.map((post) => (
              <div key={post.id} className="max-w-full mb-8 mx-auto">
                {/* Date Badge */}
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-auto mb-8"
                  />
                </div>

                {/* Blog Content */}
                <div className="mt-0 p-2">
                  <h2 className="text-2xl mb-4 font-semibold text-[#2d2d2d] font-chivo">
                    {post.title}
                  </h2>
                  {/* Blog Meta */}
                  <div className="flex items-center text-gray-500 text-[14px] space-x-4">
                    <span className='hover:text-secondary'>{post.categories.join(', ')}</span>
                    <span className="flex items-center hover:text-secondary">
                      <FaRegComment className="mr-1" />
                      {post.comments} Comments
                    </span>
                  </div>

                  <p className="text-gray-600 text-[15px] my-4">
                    {post.description}
                  </p>
                  <p className="text-gray-600 text-[15px]">
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why 
                    you should have to spend money on boot camp when you can get the MCSE study materials yourself
                    at a fraction of the camp price. However, who has the willpower to actually sit through a
                    self-imposed MCSE training. who has the willpower to actually
                  </p>

                  {/* Highlighted text */}
                  <div className=" bg-[#F2F3F7] md:p-7 p-4 md:my-8 my-4 italic ">
                    <div className="md:text-base text-[14px] bg-white p-10 border-l-1 text-[#888888] font-normal md:leading-[27.728px] leading-[21.728px]">
                      MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                      should have to spend money on boot camp when you can get the MCSE study materials yourself at
                      a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed
                      MCSE training.
                    </div>
                  </div>

                  <p className="text-gray-600 my-8 text-[15px]">
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower
                  </p>
                  <p className="text-gray-600 text-[15px] pb-8 border-b border-gray-200">
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually
                  </p>

                  {/* Like section */}
                  <div className="flex items-center justify-between text-tertiary my-8 text-[14px]">
                    <div className="flex items-center">
                      🤍
                      <span className="ml-2">Lily and 4 people like this</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <FontAwesomeIcon icon={faFacebookF} />
                      <FontAwesomeIcon icon={faTwitter} />
                      <FontAwesomeIcon icon={faDribbble} />
                      <FontAwesomeIcon icon={faBehance} />
                    </div>
                  </div>

                  {/* Prev/Next Post Navigation */}
                  <div className="flex justify-between items-center border-b border-gray-200 py-6 my-8">
                    <div className="flex items-center">
                      <img src={prevPost} alt="Prev Post" className="w-20 h-20 object-cover mr-4" />
                      <div>
                        <p className="text-gray-500 text-sm">Prev Post</p>
                        <h4 className="hover:text-secondary md:text-lg text-[14px] font-medium text-[#2d2d2d] font-chivo leading-6">
                          Space The Final Frontier
                        </h4>
                      </div>
                    </div>
                    <div className="flex items-center text-right">
                       <div>
                        <p className="text-gray-500 text-sm">Next Post</p>
                        <h4 className="hover:text-secondary md:text-lg text-[14px] font-medium text-[#2d2d2d] font-chivo leading-6">
                          Telescopes 101
                        </h4>
                      </div>
                      <img src={nextPost} alt="Next Post" className="w-20 h-20 object-cover ml-4" />
                    </div>
                  </div>

                  {/* Comment Section */}
                  <div className="my-8 border-b pb-14 border-gray-200">                    
                    {/* Sample Comment */}
                    <div className="flex items-start mb-12 md:p-10 p-6 bg-[#FBF9FF]">
                      <img src={author} alt="Commenter" className="w-18 h-18 rounded-full object-cover mr-6" />
                      <div>
                        <h4 className="font-chivo hover:text-secondary font-semibold leading-[19.2px] text-[15px] text-[#2d2d2d]">Harvard milan</h4>
                        <p className="text-[#777777] text-[15px] font-normal leading-[21px] mt-2">Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from</p>
                      </div>
                    </div>

                    <h3 className="font-chivo font-semibold leading-[19.2px] text-[15px] text-[#2d2d2d] border-t border-gray-200 py-10">05 Comments</h3>

                     {/* Sample Comment */}
                    <div className="flex items-start mb-10">
                      <img src={comment1} alt="Commenter" className="w-16 h-16 rounded-full object-cover mr-4" />
                      <div>
                        <p className="text-[#777777] text-[15px] font-normal leading-[21px] mb-4">
                          Multiply sea night grass fourth day sea lesser rule open subdue female fill which them 
                          Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                        </p>
                        <div className='flex justify-between'>
                          <div className='flex w-3/4 gap-8'>
                            <a href='#' className="font-chivo hover:text-secondary font-semibold leading-[19.2px] md:text-[15px] text-[12px] text-[#2d2d2d]">Emilly Blunt</a>
                            <span className="text-gray-500 text-[12px] md:text-sm">December 4, 2017 at 3:12 pm</span>
                          </div>
                    
                          <a href="#" className="hover:text-secondary text-[#888888] text-[12px] md:text-sm ml-4">REPLY</a>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start mb-10">
                      <img src={comment2} alt="Commenter" className="w-16 h-16 rounded-full object-cover mr-4" />
                      <div>
                        <p className="text-[#777777] text-[15px] font-normal leading-[21px] mb-4">
                          Multiply sea night grass fourth day sea lesser rule open subdue female fill which them 
                          Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                        </p>
                        <div className='flex justify-between'>
                          <div className='flex w-3/4 gap-8'>
                            <a href='#' className="font-chivo hover:text-secondary font-semibold leading-[19.2px] md:text-[15px] text-[12px] text-[#2d2d2d]">Emilly Blunt</a>
                            <span className="text-gray-500 text-[12px] md:text-sm">December 4, 2017 at 3:12 pm</span>
                          </div>
                    
                          <a href="#" className="hover:text-secondary text-[#888888] text-[12px] md:text-sm ml-4">REPLY</a>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start md:mb-10 mb-2">
                      <img src={comment3} alt="Commenter" className="w-16 h-16 rounded-full object-cover mr-4" />
                      <div>
                        <p className="text-[#777777] text-[15px] font-normal leading-[21px] mb-4">
                          Multiply sea night grass fourth day sea lesser rule open subdue female fill which them 
                          Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                        </p>
                        <div className='flex justify-between'>
                          <div className='flex w-3/4 gap-8'>
                            <a href='#' className="font-chivo hover:text-secondary font-semibold leading-[19.2px] md:text-[15px] text-[12px] text-[#2d2d2d]">Emilly Blunt</a>
                            <span className="text-gray-500 text-[12px] md:text-sm">December 4, 2017 at 3:12 pm</span>
                          </div>
                    
                          <a href="#" className="hover:text-secondary text-[#888888] text-[12px] md:text-sm ml-4">REPLY</a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}

            {/* Comment Form Section */}
            <div className="max-w-full mx-auto my-10 ">
              <h3 className="text-base font-chivo font-semibold leading-[19.2px] text-[#2d2d2d] mb-6">
                  Leave a Reply
              </h3>
              <form className="space-y-6 text-[14px]">
                {/* Comment Textarea */}
                <div>
                  <textarea
                    placeholder="Write Comment"
                    rows="8"
                    className="w-full p-4 border border-gray-300 rounded focus:outline-none
                    focus:ring-secondary focus:border-secondary resize-none">

                  </textarea>
                </div>

                {/* Name and Email Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-secondary focus:border-secondary"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-secondary focus:border-secondary"
                  />
                </div>

                {/* Website Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Website"
                    className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-secondary focus:border-secondary"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="text-secondary border border-secondary px-8 py-4 rounded uppercase mb-10
                     font-semibold hover:bg-secondary hover:text-white transition-colors tracking-wide"
                  >
                    Post Comment
                  </button>
                </div>
              </form>
            </div>

          </div>

          
          <div className='lg:w-[35%] md:w-3/4 w-full'>
            <form className = "bg-[#FBF9FF] flex flex-col items-center justify-center p-3 w-full">
              <div className='flex w-4/5 py-6 items-center justify-between'>
                <input 
                type="text"
                placeholder="Search Keyword"
                className='w-full p-2 border border-gray-300 bg-white lg:text-[14px] text-[12px]'
                />
                <button className='bg-secondary text-white py-2 px-4 lg:text-base text-[14px]'>
                  Search
                </button>
              </div>
            </form>

            <div className = "bg-[#FBF9FF] my-8 flex flex-col items-center justify-center  w-full">
                <div className=' w-4/5 py-6 items-center justify-between '>
                  <p className='font-bold text-[18px] border-b-1 border-[#E5E5E5] mb-8 pb-4'>Categories</p>
                  <p className='py-3 hover:text-secondary border-b-1 border-[#E5E5E5]'>Resaurant food(37)</p>
                  <p className='py-3 hover:text-secondary border-b-1 border-[#E5E5E5]'>Travel news(10)</p>
                  <p className='py-3 hover:text-secondary border-b-1 border-[#E5E5E5]'>Modern technology(03)</p>
                  <p className='py-3 hover:text-secondary border-b-1 border-[#E5E5E5]'>Resaurant food(11)</p>
                  <p className='py-3 hover:text-secondary border-b-1 border-[#E5E5E5]'>Inspiration21</p>
                  <p className='py-3 hover:text-secondary '>Health Care (21)09</p>                
                </div>
            </div>
            <div className = "bg-[#FBF9FF] my-8 flex flex-col items-center justify-center  w-full">
                <div className=' w-4/5 py-6 items-center justify-between'>
                  <p className='font-bold text-[18px] border-b-1 border-[#E5E5E5] mb-10 pb-4'>Recent Post</p>
                  <div className='flex items-center my-3'>
                    <img src={post1} alt="Blog Post" className='w-fit' />
                    <div className='pl-4 w-3/4'>
                      <h3 className='text-base font-chivo font-medium hover:text-secondary text-[#2D2D2D]'>From life was your fish...</h3>
                      <p className='text-[14px] font-normal text-[#675E5E]'>January 12, 2019</p>
                    </div>                  
                  </div>
                  <div className='flex items-center my-4'>
                    <img src={post2} alt="Blog Post" className='w-fit' />
                    <div className='pl-4 w-3/4'>
                      <h3 className='text-base font-chivo font-medium hover:text-secondary text-[#2D2D2D]'>The Amazing Hubble</h3>
                      <p className='text-[14px] font-normal text-[#675E5E]'>02 Hours ago</p>
                    </div>                  
                  </div>
                  <div className='flex items-center my-4'>
                    <img src={post3} alt="Blog Post" className='w-fit' />
                    <div className='pl-4 w-3/4'>
                      <h3 className='text-base font-chivo font-medium hover:text-secondary text-[#2D2D2D]'>Astronomy or Astrology</h3>
                      <p className='text-[14px] font-normal text-[#675E5E]'>03 Hours ago</p>
                    </div>                  
                  </div>
                  <div className='flex items-center my-4'>
                    <img src={post4} alt="Blog Post" className='w-fit' />
                    <div className='pl-4 w-3/4'>
                      <h3 className='text-base font-chivo font-medium hover:text-secondary text-[#2D2D2D]'>Asteroids telescope</h3>
                      <p className='text-[14px] font-normal text-[#675E5E]'>01 Hours ago</p>
                    </div>                  
                  </div>
                  
                  
                </div>
            </div>

            <div className = "bg-[#FBF9FF] my-8 flex flex-col items-center justify-center  w-full">
                <div className=' w-4/5 py-6 items-center justify-between'>
                  <p className='font-bold text-[18px] border-b-1 border-[#E5E5E5] mb-10 pb-4'>Tag Clouds</p>
                  <div className='flex items-center my-3 flex-wrap'>
                    <button className='px-5 py-1 text-[13px] mr-4 mb-3 bg-white hover:bg-secondary border border-[#E5E5E5] hover:text-[#ffffff]'>
                        project
                    </button>                
                    <button className='px-5 py-1 text-[13px] mr-4 mb-3 bg-white hover:bg-secondary border border-[#E5E5E5] hover:text-[#ffffff]'>
                        love
                    </button>                
                    <button className='px-5 py-1 text-[13px] mr-4 mb-3 bg-white hover:bg-secondary border border-[#E5E5E5] hover:text-[#ffffff]'>
                        technology
                    </button>                
                    <button className='px-5 py-1 text-[13px] mr-4 mb-3 bg-white hover:bg-secondary border border-[#E5E5E5] hover:text-[#ffffff]'>
                        travel
                    </button>                
                    <button className='px-5 py-1 text-[13px] mr-4 mb-3 bg-white hover:bg-secondary border border-[#E5E5E5] hover:text-[#ffffff]'>
                        restaurant
                    </button>                
                    <button className='px-5 py-1 text-[13px] mr-4 mb-3 bg-white hover:bg-secondary border border-[#E5E5E5] hover:text-[#ffffff]'>
                        life style
                    </button>                
                    <button className='px-5 py-1 text-[13px] mr-4 mb-3 bg-white hover:bg-secondary border border-[#E5E5E5] hover:text-[#ffffff]'>
                        design
                    </button>                
                    <button className='px-5 py-1 text-[13px] mr-4 mb-3 bg-white hover:bg-secondary border border-[#E5E5E5] hover:text-[#ffffff]'>
                        illustration
                    </button>                
                  </div>
                </div>
            </div>
            <div className = "bg-[#FBF9FF] my-8 flex flex-col items-center justify-center  w-full">
                <div className=' w-4/5 py-6 items-center justify-between'>
                  <p className='font-bold text-[18px] border-b-1 border-[#E5E5E5] mb-10 pb-4'>Instagram Feeds</p>
                  <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                    <img src={post5} alt="Blog Post" className='w-full ' />               
                    <img src={post6} alt="Blog Post" className='w-full h-fit' />               
                    <img src={post7} alt="Blog Post" className='w-full h-fit' />               
                    <img src={post8} alt="Blog Post" className='w-full h-fit' />               
                    <img src={post9} alt="Blog Post" className='w-full h-fit' />               
                    <img src={post10} alt="Blog Post" className='w-full h-fit' />               
                  </div>
                </div>
            </div>
            <div className="bg-[#FBF9FF] my-8 flex flex-col items-center justify-center w-full">
              <div className='w-4/5 py-6 items-center justify-between'>
                <p className='font-bold text-[18px] border-b-1 border-[#E5E5E5] mb-10 pb-4'>Newsletter</p>
                <form className="flex flex-col gap-4">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="border border-[#E5E5E5] bg-white p-4 text-[15px] outline-none mb-2"
                    required
                  />
                  <button
                    type="submit"
                    className="border border-red-500 text-red-500 font-bold tracking-widest py-3 w-full
                    hover:bg-red-500 hover:text-white transition-colors duration-200"
                  >
                    SUBSCRIBE
                  </button>
                </form>
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </>
    
  );
}

export default BlogDetails;