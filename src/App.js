import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import WorkoutGenerator from "./Pages/WorkoutGenerator";
import MealPlanner from "./Pages/MealPlanner";
import ChatCoach from "./Pages/ChatCoach";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workout" element={<WorkoutGenerator />} />
          <Route path="/meal" element={<MealPlanner />} />
          <Route path="/coach" element={<ChatCoach />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
