import React,{useEffect,useState} from "react";
import person from "../assets/aboutperson.jpeg";
import {NavLink,useNavigate} from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState({});

   const callAboutPage =async ()=>{
      try { 
        const res = await fetch('/api/about',{
          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          credentials:"include"
        })

        const data = await res.json();
        console.log("this is about of react",data)
        setUserdata(data);

        if(!res.status===200){
          const error = new error(res.error)
          throw error;
        }
      } catch (error) {
        navigate('/login')
      }
   }

  useEffect(() => {
      callAboutPage()
  }, []);

  return (
    <>
      <div className="conatiner">
        <form method="GET">
          <div className="row m-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <div className="col-lg-4">
              <img src={person} alt="this is an img" />
            </div>
            <div className="col-lg-6">
              <div className="profile-head">
                <h5>{userdata.name}</h5>
                <h5>{userdata.email}</h5>
                <h5>{userdata.work}</h5>
                <h5>{userdata.phone}</h5>           
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
