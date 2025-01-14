import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoIosPricetags } from "react-icons/io";
import { AiOutlineStock } from "react-icons/ai";
import { FcRatings } from "react-icons/fc";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import { Fade } from "react-awesome-reveal";

const ViewDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetchItemDetails();
    }, []);

    const fetchItemDetails = () => {
        fetch(`http://localhost:5000/add/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })
            .catch(error => {
                console.error('Error fetching item details:', error);
            });
    };

    return (
        <div>
            <Fade>
            {item ? (
                <div className="h-[200px] w-[1000px] mx-auto mt-14">
                    
                    
                    <div className="hero min-h-screen bg-base-200 rounded-xl">
                   <div className="hero-content flex-col lg:flex-row">
                <img src={item.image} className="max-w-sm rounded-lg shadow-2xl" />
                  <div>
                    <h1 className="text-2xl font-bold">{item.item_name}</h1>
                    <div className="border border-dotted-2 border-gray-800 mt-2"></div>
                     <p className="py-6">{item.short_description}</p>
                     <p className="mb-7 text-blue-600">{item. subcategory_Name}</p>
                     <div className="flex gap-[400px] mb-7">
                       
                     <p className="flex gap-2">  <IoIosPricetags className="mt-1"></IoIosPricetags>{item.price}</p>
                     <p className="flex gap-2"><FcRatings className="mt-1 " />{item.rating}</p>
                     </div>
                     <div className="border border-dotted-2 border-gray-800 mt-2"></div>
                     <div className="flex gap-[410px] mb-7">
                     <p className="font-semi-bold text-purple-400 flex gap-2">
                     <MdOutlineDashboardCustomize className="mt-1" />
                        {item.customization}</p>
                     <p className=" flex gap-2 font-semi-bold text-purple-400">
                     <CiTimer className="mt-1"/>
                     {item. processing_time}</p>
                     </div>
                     <div className="border border-dotted-2 border-gray-800 mt-2"></div>
                     <p className="flex gap-2"><AiOutlineStock className="mt-1 " />{item. stockStatus}</p>
                     
                 
    </div>
  </div>
</div>
                    
                </div>
            ) : (
                <p>Loading...</p>
            )}
             <div className="mt-[600px]">
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

export default ViewDetail;
