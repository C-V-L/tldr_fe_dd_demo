import "./Welcome.css";
import logo_sm from "../../images/tldr_sm_dark.svg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const Welcome = () => {

  return (
    <main className="welcome-main">
      <div className="welcome-card">
        <h1 className="welcome-h1">~ Welcome to ~</h1>
        <img className="welcome-logo" src={logo_sm} alt="logo" />
        <h2 className="summary">A ChatGPT-powered application made to assist the average web surfer in navigating the intentionally ambiguous world of Terms of Service.</h2>
       <Link to="/login">
          <Button
            disableElevation
            color="primary"
            variant="contained"
          >Begin Demo</Button>
       </Link> 
       <p className="disclaimer">The information provided on this website is collected and analyzed by third party AI technology and does not, and is not intended to, constitute legal advice; instead, all information, content, and materials available on this site are for general informational and entertainment purposes only.</p>
      </div>
    </main>
  )
};

export default Welcome;
