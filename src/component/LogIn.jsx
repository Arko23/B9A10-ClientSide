import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { FaEye,FaRegEyeSlash } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const LogIn = () => {
    const {signIn,SignG,signGithub}=useContext(AuthContext);
    const location =useLocation();
    const navigate =useNavigate();
    const [showP,setShowP]=useState(false);
    const handleLogin= e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email=form.get('email');
        const password=form.get('password');
        console.log(email, password);
        signIn(email,password)
        .then(result =>{
            console.log(result.user);
            navigate(location?.state? location.state : '/');
            e.target.reset();
        })
        .catch(error =>{
            console.error(error);
        })

      
    }

    const handleG=()=>{
        SignG()
        .then(result =>{
            console.log(result.user);
            navigate(location?.state? location.state : '/');
        })
        .catch(error =>{
            console.error(error)
        })
    }
    const handleGithub =() =>{
        signGithub()
        .then(result=>{
            console.log(result.user);
            navigate(location?.state? location.state : '/');
           
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div>
          <Fade>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Join the vibrant world of Horizon Hues. Login now to access exclusive collections and inspire your creativity</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin}className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          {/* <input type="password" name="password" placeholder="password" className="input input-bordered" required /> */}
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className="flex">
      
      
      <p><button onClick={handleGithub}className="btn btn-ghost ml-16 mb-5 border border-solid border-black rounded-lg">GitHub <VscGithub></VscGithub>

</button></p>
<p><button onClick={handleG} className="btn btn-ghost ml-14 mb-5 border border-solid border-black rounded-lg">Google <FcGoogle></FcGoogle>

      </button></p>

</div>
      <p className="mx-auto mb-4">Do not have an account
        <Link to="/reg" className="font-bold text-blue-500"> Register</Link>
      </p>
    </div>
  </div>
</div>
</Fade>
        </div>
    );
};

export default LogIn;