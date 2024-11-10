import { IoIosPricetags } from "react-icons/io";
import { AiOutlineStock } from "react-icons/ai";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FcRatings } from "react-icons/fc";
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const MyCard = ({ add ,ladd,setLadd}) => {
    const { _id, image, item_name, short_description, price, rating, customization, stockStatus } = add;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/add/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                 'Deleted!',
                                 'Your file has been deleted',
                                 'success'
                            )
                            const rem = ladd.filter(lm => lm._id!==_id);
                            setLadd(rem);
                            
                        }
                    })
                   
            }
        });
    }

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl border-2 border-dotted rounded-xl border-gray-500 ">
            <figure ><img className="mt-[20px] rounded-lg   " src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">  {item_name}</h2>
                <p className="font-semibold">{short_description}</p>
                <div className="flex gap-[230px]">
                    <div className="h-[30px] w-[50px] border border-solid border-red-500 rounded-xl text-center bg-red-100 ">
                        <p className="flex gap-2 ml-1 mt-1 text-red-500 font-bold"> <IoIosPricetags className="mt-1"></IoIosPricetags>{price}</p>
                    </div>
                    <p className="flex gap-2"> <FcRatings className="mt-1 " />{rating}</p>
                </div>
                <div className="flex gap-[220px]">
                    <p className="flex gap-2"> <MdOutlineDashboardCustomize className="mt-1" /> {customization}</p>
                    <div className="h-[30px] w-[80px] border border-solid border-green-500 rounded-xl text-center bg-green-100 ">
                        <p className="flex gap-2 mt-1 text-green-600 font-bold">
                            <AiOutlineStock className="mt-1 " />{stockStatus}</p>
                    </div>
                </div>
                <div className="card-actions flex justify-between">
                    <Link to={`/up/${_id}`}>
                        <button className="btn btn-primary rounded-xl bg-yellow-200 text-black">Update</button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-primary bg-red-400 rounded-3xl"><MdDeleteForever /></button>
                </div>
            </div>
            
        </div>
    );
};

export default MyCard;
