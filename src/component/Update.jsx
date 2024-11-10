import { useLoaderData } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";

const Update = () => {
    
    const add = useLoaderData();
    const {_id,image,item_name,subcategory_Name,short_description,price,rating,customization,processing_time,stockStatus}= add; 
    
    const handleUp = event =>{
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const item_name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const short_description = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        
        const processing_time=form.processing_time.value;
        const stockStatus = form.stockStatus.value;
        // const userEmail =user.email;
        // const userName = user.displayName;
        

        const newUp={image,item_name,subcategory_Name,short_description,price,rating,customization,processing_time,stockStatus,
            // userEmail,
            // userName
        }
        console.log(newUp);

        fetch(`http://localhost:5000/add/${_id}`,{
            method : 'PUT',
            headers :{
                'content-type' : 'application/json'
            },
            body :JSON.stringify(newUp)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            // console.log(data);
            
            if (data.modifiedCount>0) {
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
            }
        })
        .catch(error => {
            console.error('Error updating item:', error);
           
        });

        
    } 
    return (
        <div>
            <Fade>
           
        <div className="flex justify-center items-center h-screen mt-16 " >
            <div className="w-full max-w-xl rounded-md shadow-md p-8 bg-pink-100">
                <h2 className="text-2xl font-semibold mb-4">Update your Art & Craft</h2>
                <form onSubmit={handleUp} className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image URL:</label>
                        <input type="text" name="image" defaultValue={image} className="mt-1 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Item Name:</label>
                        <input type="text" name="item_name" defaultValue={item_name} className="mt-1 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Subcategory Name:</label>
                        <input type="text" name="subcategory_Name" defaultValue={subcategory_Name} className="mt-1 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Short Description:</label>
                        <input type="text" name="short_description" defaultValue={short_description}className="mt-1 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Price:</label>
                        <input type="text" name="price" defaultValue={price} className="mt-1 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Rating:</label>
                        <input type="text" name="rating" defaultValue={rating} className="mt-1 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Customization:</label>
                        <select name="customization" defaultValue={customization} className="mt-1 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Processing Time:</label>
                        <input type="text" name="processing_time" defaultValue={processing_time} className="mt-1 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Stock Status:</label>
                        <select name="stockStatus" defaultValue={stockStatus} className="mt-1 px-4 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required>
                            <option value="In stock">In stock</option>
                            <option value="Made to Order">Made to Order</option>
                        </select>
                    </div>
                    
                   
                    <div className="col-span-2">
                        <button  type="submit" value="Update" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Update</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="mt-[150px]">
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

export default Update;