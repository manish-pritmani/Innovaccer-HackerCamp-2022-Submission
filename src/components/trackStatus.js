 
  import React, {useState} from "react";
  import { NavLink, useNavigate } from "react-router-dom";
  
  const TrackStatus = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
      name : "",
      email : "",
      phone: "",
      shipId: "",
    });
    
    let name,value,shipId;
  
    const postData = async(e) =>{
      e.preventDefault();
      const {name,email,password,cpassword,phone} = user;
      const res = await fetch("/register",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name,email,password,cpassword,phone})
      });
      const data = await res.json();
      if(res.status === 422 || !data ){
        window.alert(data.error);
        console.log("Please enter all the fields !");
      }else{
        window.alert(data.message);
        console.log("Registration Successfull !");
        navigate("/login");
      }
    }
    const handleInputs =(e)=>{
      console.log(e); 
      name = e.target.name;
      value = e.target.value;
      shipId = e.target.shipId;
      
      setUser({
        ...user,[name] : value
      });
    }
  
    return (
      <>
      <div className="d-flex justify-content-center align-items-center mt-3">
              <div className="col-4">
                  <div className="card h-100 justify-content-center">
                    <h5 className="card-header">Track Status of your Goodies/Rewards</h5>
                    <div className="card-body d-flex flex-column">
                      <form method="POST" id="register-form">
                        <div className="form-group mb-2">
                            <label htmlFor="shipid">Shipment Id / Reference Number <span className="required-field">*</span></label>
                            <input type="text" id="shipid" className="form-control" placeholder="Shipment Id" name="shipid" autoComplete="off"  values = {user.shipId} onChange={handleInputs} required/>
                        </div> 
                        <div className="form-group mb-2">
                            <label htmlFor="email">Email<span className="required-field">*</span></label>
                            <input type="text" id="email" className="form-control" placeholder="Enter Email" name="email" autoComplete="off" values = {user.email} onChange={handleInputs}  required/>
                        </div>  
                        
                        
                        <div className="form-group mb-2">
                            <label htmlFor="phone">Phone<span className="required-field">*</span></label>
                            <input type="tel" id="phone" className="form-control" placeholder="Enter Phone" name="phone" autoComplete="off"  values = {user.phone} onChange={handleInputs} required/> 
                        </div> 
                      </form>
                      <button type="submit" name="register" onClick={postData} className="mt-3 btn btn-sm w-100 btn-outline-dark">Track Now</button>
                    </div>
                    <div className="card-footer text-muted">
                    Reedem another rewards? <NavLink to="/login">Verify Token</NavLink>
                        </div>
                  </div>
              </div>
          </div>
      </>
    );
  };
  
  export default TrackStatus;