import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye,FaRegEyeSlash } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState("");
    const location =useLocation();
    const navigate =useNavigate();
    const [showP,setShowP]=useState(false);

    const handleRegistration = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        if (!password.match(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/)) {
            const errorMessage = "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.";
            setPasswordError(errorMessage);
            toast.error(errorMessage);
            return;
        }

        createUser(email, password)
            .then(result => {
                updateUserProfile(name, photo);
                console.log(result);
                navigate(location?.state? location.state : '/');
                toast.success('Registered successfully');
                e.target.reset();
                setPasswordError("");
            })
            .catch(error => {
                console.error(error);
                toast.error('Registration failed. Please try again.');
            });
    };

    return (
        <div>
            <Fade>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Experience the world of landscape beauty</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegistration} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo-URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo-URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
           
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                {passwordError && <p className="text-red-500">{passwordError}</p>}
                            </div> */}
                            <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
           
          </label>
          <div className="relative ">
          <input
          className="w-[320px] py-2 px-4 border border-solid border-gray-300 rounded-lg"
           type={showP ? "text":"password"}
           required name ="password" 
           placeholder="password" 
           />
          <span className="absolute top-3 right-2" onClick={()=>setShowP(!showP)}>
            {
              showP ? <FaRegEyeSlash></FaRegEyeSlash> : <FaEye></FaEye>
            }
          </span>
          </div>
          {passwordError && <p className="text-red-500">{passwordError}</p>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="mx-auto mb-3">Already have an account,
                            <Link to="/login" className="font-bold text-blue-500"> Log-In</Link>
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer />
            </Fade>
        </div>
    );
};

export default Register;
