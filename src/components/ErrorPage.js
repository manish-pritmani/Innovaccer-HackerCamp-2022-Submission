import React from 'react';
import {NavLink} from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
       
                <div className="card h-100 justify-content-center">
                <img src="https://cdn.dribbble.com/users/2326775/screenshots/4699857/media/6f9c7dff348c6fb7530818f36273ab38.jpg?compress=1&resize=800x600&vertical=top" width="370" height="370" />
              
                
                <p className="text-center"><NavLink to="/">Back to Home</NavLink></p>
                 </div>

        </div>
        
    )
}

export default ErrorPage;