import './NavBar.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import image from '../../Images/profile.png';


const NavBar = () => {
    const {user,setUser} = useContext(UserContext);
    const location = useLocation();
    const history = useHistory();

    const handleSignOut = async () => {
        try{
            const {data} = await axios.get("http://localhost:2000/api/signOut", user.auth)
            //console.log(data)
            setUser({
              signedIn:false
            })
            history.push("/")
          }
          catch(e){
            console.log(e)
          }
    }

    return (
        <>
            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
            
            <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                <div className="spinner diagonal part-1"></div>
                <div className="spinner horizontal"></div>
                <div className="spinner diagonal part-2"></div>
            </label>
            <div id="sidebar">
                {/* <div className="toggle-btn" onClick={toggleSidebar}>
                    <span></span><span></span><span></span>
                </div> */}
                <nav>
                    <ul>
                    <li className="sidebar-brand"><Link to="/Dashboard">Covid Portal</Link></li>
                    <li className="list"><Link to="/Hospital">Hospital</Link></li>
                    <li className="list"><Link to="/Vaccination">Vaccination</Link></li>
                    <li className="list"><Link to="/Guidelines">Guidelines</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="nav1">
            <div className="nav">
                    <ul></ul>                        
                    
                    {/* <ul> */}
                    <span className='profile' style={{position:'absolute', left:'520px', top:'5px'}}></span>
                    <span style={{marginTop:"15px", fontSize:'1.1rem'}}>
                        {user.signedIn ? "Welcome, "+user.email : "Sign In to Edit"}
                    </span>
                    {/* </ul> */}
                    <ul className="navList">
                        <li className="navItem">
                            {user.signedIn ?
                                <a onClick={handleSignOut} style={{cursor:'pointer'}}>SIGNOUT</a>
                                :                                
                                <a href="./SignUp">SIGNUP / SIGNIN</a>
                            }
                            
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar;