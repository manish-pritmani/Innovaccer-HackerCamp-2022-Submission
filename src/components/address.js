import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Address = () => {

  const [user, setUser] = useState({
    name : "",
    email : "",
    phone: "",
    password: "",
    cpassword: ""
  });
  
  let name,value;
  const navigate = useNavigate();

  function handleClick() {
    navigate("/process-reward");
  }

  const handleInputs =(e)=>{
    console.log(e); 
    name = e.target.name;
    value = e.target.value;

    setUser({
      ...user,[name] : value
    });
  }

  
  return (
    <>
    <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
            <div className="col-4">
                <div className="card h-100 justify-content-center">
                  <h5 className="card-header">Enter your Address to ship Goodies/Rewards</h5>
                  <div className="card-body d-flex flex-column">
                    <form method="POST" id="register-form">
                      <div className="form-group mb-2">
                          <label htmlFor="name">H.No/ Flat No. <span className="required-field">*</span></label>
                          <input type="text" id="name" className="form-control" placeholder="Enter House/Flat Number" name="name" autoComplete="off"  values = {user.name} onChange={handleInputs} required/>
                      </div> 
                      <div className="form-group mb-2">
                          <label htmlFor="name">Location <span className="required-field">*</span></label>
                          <textarea class="form-control" id="feedback" rows="3" placeholder="Enter your complete present address to deliver the goodies! "></textarea>
                      </div>
                      <div className="form-group mb-2">
                          <label htmlFor="name">Pincode <span className="required-field">*</span></label>
                          <input type="number" id="name" className="form-control" placeholder="Enter your Pincode" name="name" autoComplete="off"  values = {user.name} onChange={handleInputs} required/>
                      </div>
                      
                      <div className="form-group mb-2">
                          <label htmlFor="email">Country<span className="required-field">*</span></label>
                          <input type="text" id="email" className="form-control" placeholder="Enter your country" name="email" autoComplete="off" values = {user.email} onChange={handleInputs}  required/>
                      </div>  
                      
                      
                      <div className="form-group mb-2">
                          <label htmlFor="phone">State<span className="required-field">*</span></label>
                            <select class="form-control" id="exampleSelect">
                            <option>Madhya Pradesh</option>
                            <option>Gujrat</option>
                            <option>Karnataka</option>
                            <option>Delhi</option>
                            <option>Punjab</option>
                            </select> 
                      </div> 
                    </form>
                    <button type="submit" name="register" onClick={handleClick} className="mt-3 btn btn-sm w-100 btn-outline-dark">Process Request</button>
                  </div>
                  <div className="card-footer text-muted">
                  Select from previous address? <NavLink to="/login">Autofill Previous</NavLink>
                      </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Address;