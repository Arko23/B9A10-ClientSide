import { Link, NavLink } from "react-router-dom";
import { GiMountains } from "react-icons/gi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Header = () => {

    const [theme,setThem] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme"):"light");


    const handleToggle =(e) =>{
        if(e.target.checked){
            setThem("dark");
        }
        else
        {
            setThem("light");
        }
    }

    useEffect(()=>{
        localStorage.setItem("theme",theme);
        const localTheme =localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme",localTheme);
    },[theme]);

    const {user,logOut}= useContext(AuthContext);
    const handleSignOut= ()=>{
          logOut()
          .then()
          .catch()
    }
    const links = (
        <>
           <div className="flex gap-2">
            <p className="h-[45px] w-[80px] border border-solid border-yellow-400 rounded-lg bg-pink-100"><li className="text-black font-semibold text-lg "><NavLink to="/" className="focus:ring-2 focus:ring-white">Home</NavLink></li> </p> 
            <p className="h-[45px] w-[200px] border border-solid border-yellow-400 rounded-lg bg-pink-100"><li className="text-black font-semibold text-lg "><NavLink to="/all" className="focus:ring-2 focus:ring-white">All Art & craft Items</NavLink></li></p> 
            <p className="h-[45px] w-[180px] border border-solid border-yellow-400 rounded-lg bg-pink-100"><li className="text-black font-semibold text-lg "><NavLink to="/add" className="focus:ring-2 focus:ring-white">Add Craft Item</NavLink></li>  </p> 
            <p className="h-[45px] w-[180px] border border-solid border-yellow-400 rounded-lg bg-pink-100"><li className="text-black font-semibold text-lg "><NavLink to="/my" className="focus:ring-2 focus:ring-white">My Art&Craft List</NavLink></li> </p> 
            </div>
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100  " style={{backgroundImage: "url('https://i.ibb.co/SRHRTsJ/cherry-blossom-manisha-raghav.jpg')"}}>
                <div className="navbar-start" >
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                            
                        </ul>
                        
                    </div>
                    <a className="btn btn-ghost lg:text-3xl font-bold text-white">
                        <GiMountains ></GiMountains> Horizon-Hues</a>
                </div>
                <div>
<label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onChange={handleToggle} className="theme-controller" value="synthwave" />
  
  {/* sun icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
</div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                
                {
                    user ?<>
                    <div className="flex gap-3">
                    <img src={user.photoURL} className="w-16 h-10 rounded-full" title={user.displayName} />
                    <button onClick={handleSignOut} className="btn bg-green-400 text-black font-bold">Sign-Out</button>
                    </div>
                    </>
                    :
                    <div className="navbar-end gap-4 ">
                    <Link to='/log'>
                    <a className="btn bg-blue-400 text-black font-bold">Log-In</a>
                    </Link>
                    <Link to='/reg'>
                    <a className="btn bg-green-400 text-black font-bold">Register</a>
                    </Link>
                </div>
                    
                }


              
            


            </div>
        </div>
    );
};

export default Header;
