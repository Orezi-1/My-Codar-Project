import { FaRegComment } from 'react-icons/fa';
import blogImage1 from "../images/blog-gallery/single_blog_1.jpg";
import blogImage2 from "../images/blog-gallery/single_blog_2.jpg";
import blogImage3 from "../images/blog-gallery/single_blog_3.jpg";
import blogImage4 from "../images/blog-gallery/single_blog_4.jpg";
import blogImage5 from "../images/blog-gallery/single_blog_5.jpg";
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


function BlogContent() {
  const blogPosts = [
    {
      id: 1,
      image: blogImage1,
      date: { day: 15, month: 'Jan' },
      title: 'Google inks pact for new 35-storey office',
      description: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      categories: ["Travel", "Lifestyle"],
      comments: 3
    },
    {
      id: 2,
      image: blogImage2,
      date: { day: 20, month: 'Jan' },
      title: 'The Future of Web Development in 2025',
      description: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      categories: ['Technology', 'Web'],
      comments: 5
    },
    {
      id: 3,
      image: blogImage3,
      date: { day: 25, month: 'Jan' },
      title: 'Latest Trends in Modern Architecture',
      description: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      categories: ['Architecture', 'Design'],
      comments: 8
    },
    {
      id: 4,
      image: blogImage4,
      date: { day: 30, month: 'Jan' },
      title: 'The Rise of Artificial Intelligence',
      description: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      categories: ['Technology', 'AI'],
      comments: 12
    },
    {
      id: 5,
      image: blogImage5,
      date: { day: 2, month: 'Feb' },
      title: 'Sustainable Living in Modern Cities',
      description: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
      categories: ['Lifestyle', 'Environment'],
      comments: 6
    }
  ];

  return (
  <>
    <div className="max-w-10/12 mx-auto sm:h-auto md:h-fit">
      <div className='flex flex-col lg:flex-row gap-8'>
        {/* Blog Posts */}
        <div className='lg:w-[65%]' >
          {blogPosts.map((post) => (
            <div key={post.id} className="max-w-full mb-8 mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
              {/* Date Badge */}
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-auto rounded-t-lg"
                />
                <div className="absolute top-5 left-5 bg-red-600 text-white text-center p-3 rounded">
                  <span className="block text-3xl font-bold">{post.date.day}</span>
                  <span className="block text-sm">{post.date.month}</span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="mt-8 p-6">
                <h1 className="text-3xl font-bold mb-4 hover:text-secondary transition-colors duration-200">
                  {post.title}
                </h1>
                <p className="text-gray-600 mb-6">
                  {post.description}
                </p>
                
                {/* Blog Meta */}
                <div className="flex items-center text-gray-500 space-x-4">
                  <span>{post.categories.join(', ')}</span>
                  <span className="flex items-center">
                    <FaRegComment className="mr-1" />
                    {post.comments} Comments
                  </span>
                </div>
              </div>
            </div>
          ))}
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

export default BlogContent;