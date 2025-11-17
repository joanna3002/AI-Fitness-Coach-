import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to AI Fitness Coach</h1>
      <p>Your personal AI-powered fitness assistant</p>

      <div className="home-buttons">
        <Link to="/workout">
          <button>Workout Generator</button>
        </Link>
        <Link to="/meal">
          <button>Meal Planner</button>
        </Link>
        <Link to="/coach">
          <button>Chat Coach</button>
        </Link>
      </div>
    </div>
  );
}
