  import { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { useNavigate,Link, } from "react-router-dom";
  import { GetCurrentUser } from "../api/user";
  import { message } from "antd";
  import { hideLoading, showLoading, setUser } from "../../redux/slice/userSlice";

  const Protected = ({children}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.users)
    const[profileIcon,setProfileIcon]=useState(false)

    const getData = async () => {
      try {
        dispatch(showLoading());
        const response = await GetCurrentUser();

        if (response.success) {
          dispatch(setUser(response.data));
        } else {
          message.error(response.message);
          navigate("/login");
        }

        dispatch(hideLoading());
      } catch (error) {
        dispatch(hideLoading());
        navigate("/login");
      }
    };
    console.log(user?.name);
const handleProfile=()=>{
if(user && user?.role==='player'){
  navigate('/player')
}
 else if(user && user.role==='admin'){
  navigate('/admin')
}
else{
  navigate('/owner')
}
}

const handleLogout=()=>{
localStorage.removeItem('token')
navigate('/login')
}
    
    useEffect(() => {
      
      if (!user) {
        getData();
      }
    }, []);

    
    

    
    return (
      <>
      <header className='app-header'>
        <nav className='app-nav'>
          <div className='logo-cont'>
            <h2 className='logo font-style cursor-pointer'
            onClick={()=>navigate('/')}>Turfo</h2>
          </div>
          <ul>
            {user?.role==='player' && (
              <>
              <li><Link to='/play'><i className="fa-solid fa-futbol"
                   style={{ fontSize: "30px", marginTop: "10px" }} ></i> 
                   <span className='font-style'>Play</span></Link></li>
              <li><Link to='/book'><i className="fa-solid fa-book"
              style={{ fontSize: "30px", marginTop: "10px" }}></i>
               <span className='font-style'>Book</span> </Link>
               </li>
               <li><Link to='/help'><i className="fa-solid fa-headset"
                style={{ fontSize: "30px", marginTop: "10px" }}></i>
                <span className='font-style'>Help</span>
                </Link> </li>

              </>
            )}
          </ul>

          <div className='profile-div d-flex'>
            <div className='d-flex border-5 cursor-pointer'
            onClick={()=>{
              console.log('hi');
              console.log(profileIcon);
              
              setProfileIcon((prev)=>!prev)
            }}
            >
              <i className="fa-regular fa-user"
              style={{fontSize:'20px'}}></i>
            </div>

          </div>
        </nav>
{profileIcon && (<>
<div className='profile-bar' >
  <ul>
    <li onClick={handleProfile} className='profile-li'>
    <span >Profile</span>
  </li>
  
    <li onClick={handleLogout}>
    <span>Logout</span>
  
    </li></ul>
</div>
</>)}
      </header>
      <div style={{ paddingTop:124,minHeight: 380, background: 'white' }}>
            {children}
          </div>
      </>
    );
  };

  export default Protected;
