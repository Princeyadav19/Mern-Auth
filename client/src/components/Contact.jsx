import React,{useEffect,useState} from "react";
import iphone from "../assets/iphone.png";
import address from "../assets/address.png";
import mail from "../assets/mail.png";
import {useNavigate} from 'react-router-dom'

const Contact = () => {
const [userdata, setUserdata] = useState({email:"",message:""});
const navigate = useNavigate();

  const getuserdata=async (req,res)=>{
      try {
        const res = await fetch('/api/getuser',{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          }
        })
        const data = await res.json();          
        setUserdata({...userdata, email:data.email});
        if(!res.status===201){
          alert('something went wrong')
          console.log("error occured at contact.jsx at 22")
        }
      } catch (error) {
        window.alert(`first Login to your Account`)
        navigate('/login')
      }
  }

  useEffect(()=>{
    getuserdata()
  },[])

  const handleinput=(e)=>{
      const name = e.target.name
      const value = e.target.value

      setUserdata({...userdata, [name]:value})
  }

  const UserToServer =async(e)=>{
    console.log("called")
    e.preventDefault();
    const {email,message} = userdata;
    try {
      const res = await fetch('/api/contact',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email,message
      })
      })

      const data = await res.json();
      if(!data) {
        alert('message not send')
        console.log("message not send")
      }
      else{
        alert('message send')
        console.log("not called")
        setUserdata({email:email, message:""})
      }
    } catch (error) {
      console.log("contact js at 65")
    }
  }
  const style = {
    width: "18rem",
  };
  return (
    <>
      <div className="mx-5 row shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div className="col-lg-10 offset-lg-1 d-inline-flex flex-row justify-content-around">
          <div className="card text-bg-light mb-3" style={style}>
            <div className="card-header">
              <img src={iphone} alt="this is an image" />
              <span>Phone</span>
            </div>
            <div className="card-body">
              <h5 className="card-title">9136359699 Mumbai,India</h5>
            </div>
          </div>
          <div className="card text-bg-light mb-3" style={style}>
            <div className="card-header">
              <img src={mail} alt="this is an image" />
              <span>Email</span>
            </div>
            <div className="card-body">
              <h5 className="card-title">Prince1692@gmail.com</h5>
            </div>
          </div>
          <div className="card text-bg-light mb-3" style={style}>
            <div className="card-header">
              <img src={address} alt="this is an image" />
              <span>Address</span>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Hanuman Nagar,Kandivali east, Mumbai 400101,India
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="w-75 row p-5 my-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded offset-2">
        <form method="POST">
          <div className="mb-3  col-10 offset-lg-1">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              onChange={handleinput}
              value={userdata.email}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              onChange={handleinput}
              name="message"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            <button type="submit" onClick={UserToServer} className="btn btn-primary mt-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
