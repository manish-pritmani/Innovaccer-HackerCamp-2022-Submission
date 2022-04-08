import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useContext} from "react";
import { NavLink,  } from "react-router-dom";
import {UserContext} from "../App";

const GenerateToken = () => {
  const {state, dispatch} = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emp_id, setEmpId] = useState("");

  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  return (
    <div>
       <div className="d-flex justify-content-center align-items-center mt-2">
            <div className="col-4">
                <div className="card h-100 justify-content-center">
                  <h5 className="card-header">Generate Token</h5>
                  <div className="card-body d-flex flex-column">
                  To reward employees tokens are generated. This will not be visible to user and for admin only to send Appreciation or Reward employees.
                    <form method="POST">
                      <div className="form-group mb-2">
                          <label htmlFor="emp_id">Enter Employee id <span className="required-field">*</span></label>
                          <input type="text" id="emp_id" value={emp_id} onChange={(e)=>setEmpId(e.target.value)} className="form-control" placeholder="Enter Employee Id" name="emp_id" required/>
                      </div>      
                      <div className="form-group mb-2">
                          <label htmlFor="email">Enter Email <span className="required-field">*</span></label>
                          <input type="text" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter Email" name="email" required/>
                      </div>    
                      <div className="form-group">
                          <label htmlFor="select-inventory">Select Type<span className="required-field">*</span></label>
                            <select class="form-control" id="exampleSelect">
                            <option>T1 - Under Rs. 500</option>
                            <option>T2 - Under Rs. 1500</option>
                            <option>T3 - Under Rs. 2500</option>
                            <option>Gift Pack</option>
                            <option>Cash Rewards</option>
                            </select> 
                      </div>     
                    </form>
                    <button type="submit" name="send_token" id="send_token" onClick={null} className="mt-3 btn btn-sm w-100 btn-outline-dark">Generate and Send Email</button>
                    <button type="submit" name="upload" id="upload" onClick={null} className="mt-3 btn btn-sm w-100 btn-outline-dark">Upload bulk data</button>
                  </div>
                  <div className="card-footer text-muted">
                 Facing Issue?  <NavLink to="/submit-feedback">Submit Feedback</NavLink>
                      </div>
                  
                </div>
            </div>
        </div>
    </div>
  );
};

export default GenerateToken;