import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';  
import './App.css';
import ErrorPage from './components/ErrorPage';
import { useReducer } from 'react';
import {initialState, reducer} from '../src/reducer/UseReducer';
import GenerateToken from './components/genToken';
import TrackStatus from './components/trackStatus';
import Feedback from 'react-bootstrap/esm/Feedback';
import SubmitFeedback from './components/SubmitFeedback';
import Footer from './components/Footer';
import Reward from './components/redeemReward';
import Address from './components/address';
import Processed from './components/Processed';
export const UserContext = React.createContext();

const App = () => {

 
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <UserContext.Provider value={{state, dispatch}}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/track-status" element={<TrackStatus />} />
        <Route path="/submit-feedback" element={<SubmitFeedback />} />
        <Route path="/generate-token" element={<GenerateToken />} />
        <Route path="/select-address" element={<Address />} />
        <Route path="/redeem-reward" element={<Reward />} />
        <Route path="/process-reward" element={<Processed />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <footer className="footer">
    
      <Footer/>
     </footer>
     </UserContext.Provider> 
    </div>
  );
}

export default App;