import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

const Feedback = () => {
  const navigate = useNavigate();
  
  let feedback,rating;

  const handleInputs =(e)=>{
    console.log(e); 
    feedback = e.target.feedback;
    rating = e.target.rating;
  }


  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
  
  return (
    <>
    <div className="d-flex justify-content-center align-items-center mt-3">
            <div className="col-4">
                <div className="card h-100 justify-content-center">
                  <h5 className="card-header">Send us Feedback (anonymously, yes :)</h5>
                  <div className="card-body d-flex flex-column">
                    <form method="POST" id="register-form">
                      <div className="form-group mb-2">
                          <label htmlFor="feedback">Describe your Feedback<span className="required-field">*</span></label>
                          <textarea class="form-control" id="feedback" rows="3" placeholder="Describe your experience with us! "></textarea>
                      </div> 
                     
                  
                      <div className="form-group">
                        <label htmlFor="rating">Rate your past experience<span className="required-field">*</span></label>
                        <div style={styles.stars}>
                        {stars.map((_, index) => {
                          return (
                            <FaStar
                              key={index}
                              size={24}
                              onClick={() => handleClick(index + 1)}
                              onMouseOver={() => handleMouseOver(index + 1)}
                              onMouseLeave={handleMouseLeave}
                              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                              style={{
                                marginRight: 10,
                                cursor: "pointer"
                              }}
                            />
                          )
                        })}
                      </div>
                      </div>
                      
    
                      
                    </form>
                    <button type="submit" name="submit-feedback-form" onClick={null} className="mt-3 btn btn-sm w-100 btn-outline-dark">Submit Feedback</button>
                  </div>
                  
                </div>
            </div>
        </div>
    </>
  );
  
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }

};

export default Feedback;