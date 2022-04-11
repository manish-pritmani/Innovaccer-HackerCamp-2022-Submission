import React from "react";
import { NavLink, } from "react-router-dom";
import { CardImg, Card} from "react-bootstrap";

const Processed = () => {

  return (
    <>
          <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="col-4">
                <div className="card h-100 justify-content-center">
                  <h5 className="card-header">Process Successful</h5>
                  <div className="card-body d-flex flex-column">
                  <Card.Img variant="top" src="https://user-images.githubusercontent.com/65852995/163008741-8e398888-eaeb-45b3-87cb-af036daff507.gif"/>
                    <h4>
                      Your Reward is Successfully Redeemed 
                    </h4>
                    <p>
                      Reference Id - A78VG63MS0P
                    </p>
                  </div>
                  <div className="card-footer text-muted">
                  More tokens? Redeem Now <NavLink to="/redeem-reward">Redeem Reward</NavLink>
                      </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Processed;