import React from "react";

const Home = () => {
  return (
    <div>
        <div className="card mx-5 my-5">
        <div className="card-header">
          Welcome to Innovaccer Reward Program
        </div>
        <div className="card-body">
          <h5 className="card-title">Benefits of Store</h5>
          <p className="card-text">1. You choose your happy gifts and rewards.</p>
          <p className="card-text">2. We know how it feels for same gifts all the time.</p>
          <p className="card-text">3. We try as to give you feeling of excitement when you receive the rewards.</p>
          <h5 className="card-title">GitHub Link</h5>
          <p className="card-text">Innovaccer HackerCamp - 2022</p>
          <p className="card-text">Developed by :  Manish Pritmani</p>
          <p className="card-text">CSE - 2022 </p>
          <a href="https://github.com/manish-pritmani/Innovaccer-Hacker-Camp-2022-Submission" className="btn btn-success">Show GitHub Repo</a>
        </div>
      </div>
    </div>
  );
};

export default Home;