import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosPricetags } from "react-icons/io";
import { AiOutlineStock } from "react-icons/ai";
import { FcRatings } from "react-icons/fc";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Fade } from "react-awesome-reveal";


const Home = () => {
    const [items, setItems] = useState([]);
  

    useEffect(() => {
        fetchItems(); // Fetch items when the component mounts
    }, []);

    const fetchItems = () => {
        fetch('http://localhost:5000/all') // Fetch all items from the server
            .then(res => res.json())
            .then(data => {
                setItems(data); // Set the fetched items in state
            })
            .catch(error => {
                console.error('Error fetching items:', error);
            });
    };
    const [su,suC] = useState([]);
    useEffect(()=>{
        fetchSub();
    },[])
    const fetchSub = () => {
        fetch('http://localhost:5000/subCategory') // Fetch all items from the server
            .then(res => res.json())
            .then(data => {
                suC(data); // Set the fetched items in state
            })
            .catch(error => {
                console.error('Error fetching items:', error);
            });
    };
    return (
        <div>
           <Fade>
            <div className="mt-[80px] carousel lg:w-[1300px] lg:h-[600px] lg:ml-14 rounded-xl relative overflow-hidden"  data-aos ="fade-right">
                <div id="slide1" className="carousel-item relative w-full"  >
                    <img src="https://i.ibb.co/WPJDQJD/il-750x-N-5611536370-hkiy.webp" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"  >
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 mx-auto" >
                        <p className="text-black lg:text-4xl mb-28 text-center font-bold animate__animated animate__bounce animate__ ">Explore the ultimate Landscaping Magic</p>
                        <label className="input input-bordered flex items-center gap-2 lg:w-[400px] mx-auto">
                          <input type="text" className="grow" placeholder="Search" />
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                       </label>
                    </div>
                </div> 

                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/gTJCnPX/Bob-Ross-Mountain-Summit.jpg" className="w-full bg-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 mx-auto">
                        <p className="text-black text-4xl mb-28 text-center font-bold animate__animated animate__bounce animate__ ">Mountain view magestic lanscape</p>
                        <label className="input input-bordered flex items-center gap-2 w-[400px] mx-auto">
                          <input type="text" className="grow" placeholder="Search" />
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                       </label>
                    </div>
                </div> 

                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/ZBNGRz7/images-1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 mx-auto">
                        <p className="text-black text-4xl mb-28 text-center font-bold animate__animated animate__bounce animate__ ">Urban mega landscaping  chaotic beauty</p>
                        <label className="input input-bordered flex items-center gap-2 w-[400px] mx-auto">
                          <input type="text" className="grow" placeholder="Search" />
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                       </label>
                    </div>
                </div> 
            </div>
            <p className="mx-auto text-2xl font-bold text-center mt-16 mb-2">Craft Items Section</p>
            <p className="text-center mb-24"> Dive into ultimate painting </p>
            <div className="lg:grid grid-cols-3 gap-4 ml-[60px]">
            {items.slice(0,6).map(item => (
                        <div key={item._id} >
                              <div className="card card-compact w-96 bg-base-100 shadow-xl border-2 border-dotted rounded-xl border-gray-500 hover:bg-pink-200">
            <figure ><img className="mt-[20px] rounded-lg   " src={item.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">  {item.item_name}</h2>
                <p className="font-semibold">{item.short_description}</p>
                <div className="flex gap-[230px]">
                    <div className="h-[30px] w-[50px] border border-solid border-red-500 rounded-xl text-center bg-red-100 ">
                        <p className="flex gap-2 ml-1 mt-1 text-red-500 font-bold"> <IoIosPricetags className="mt-1"></IoIosPricetags>{item.price}</p>
                    </div>
                    <p className="flex gap-2"> <FcRatings className="mt-1 " />{item.rating}</p>
                </div>
                <div className="flex gap-[220px]">
                    <p className="flex gap-2"> <MdOutlineDashboardCustomize className="mt-1" /> {item.customization}</p>
                    <div className="h-[30px] w-[80px] border border-solid border-green-500 rounded-xl text-center bg-green-100 ">
                        <p className="flex gap-2 mt-1 text-green-600 font-bold">
                            <AiOutlineStock className="mt-1 " />{item.stockStatus}</p>
                    </div>
                </div>
                <Link to={`/view/${item._id}`} className="text-blue-600 hover:underline">
                <button className="btn bg-blue-400 text-black">
                               View Details
                            </button>
                            </Link>
            </div>
            
        </div>
       </div>

                         
                    ))}




                    
          
        </div>
        <p className="mx-auto text-2xl font-bold text-center  mb-2 mt-20">Art & Craft Categories Section</p>
            <p className="text-center mb-24"> Choose your favrioute one </p>
            <div className="lg:grid grid-cols-3 sm:gap-10 lg:gap-4 ml-[60px]">
            {su.slice(0,6).map(s => (
                        <div key={s._id} >
                              <div className="card card-compact w-96 bg-base-100 shadow-xl border-2 border-dotted rounded-xl border-gray-500  hover:bg-pink-200 ">
            <figure ><img className="mt-[20px] rounded-lg   " src={s.image} alt="Shoes" /></figure>
            <div className="card-body">
            <p className="font-semibold">{s.subcategory_Name}</p>
                <div className="flex gap-[230px]">
                    <div className="h-[30px] w-[50px] border border-solid border-red-500 rounded-xl text-center bg-red-100 ">
                        <p className="flex gap-2 ml-1 mt-1 text-red-500 font-bold"> <IoIosPricetags className="mt-1"></IoIosPricetags>{s.price}</p>
                    </div>
                    <p className="flex gap-2"> <FcRatings className="mt-1 " />{s.rating}</p>
                </div>
               
                
            </div>
            
        </div>
       </div>

                         
                    ))}




                    
          
        </div>
        <p className="mx-auto text-2xl font-bold text-center  mb-2 mt-20">Premium Subscription</p>

        <div className="ml-[300px] mt-7">
            <img src="https://i.ibb.co/FgJQtk8/daily-ui-030.png" alt="" />
        </div>
        <p className="mx-auto text-2xl font-bold text-center  mb-2 mt-20">Donation for Betterment</p>
        <p className="text-center mb-24"> Donate to inspire the Orphan Artist </p>
<div className="ml-[310px] mt-16 ">
    <img src="https://i.ibb.co/dkb8DZK/26802faaadc561f71d9ca24a770fc84f.jpg"  alt="" />
</div>
       
<div className="mt-[100px]">
            <footer className="footer p-10 bg-black text-base-content">
  <nav>
    <h6 className="footer-title text-white">Services</h6> 
    <a className="link link-hover  text-white">Branding</a>
    <a className="link link-hover  text-white">Design</a>
    <a className="link link-hover  text-white">Marketing</a>
    <a className="link link-hover  text-white">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title  text-white">Company</h6> 
    <a className="link link-hover  text-white">About us</a>
    <a className="link link-hover  text-white">Contact</a>
    <a className="link link-hover  text-white">Jobs</a>
    <a className="link link-hover  text-white">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title  text-white">Social</h6> 
    <div className="grid grid-flow-col gap-4">
      <a className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </nav>
</footer>
        </div>
        </Fade>
        </div>
    );
};

export default Home;