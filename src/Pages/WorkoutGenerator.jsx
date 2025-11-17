import { useState } from "react";

export default function WorkoutGenerator() {
  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("");
  const [generatedWorkout, setGeneratedWorkout] = useState("");

  const handleGenerate = () => {
    // TEMPORARY (AI logic will be added later)
    setGeneratedWorkout(
      `Sample workout for: ${goal} | Level: ${level}\n\n• Push-ups\n• Squats\n• Planks`
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Workout Generator</h1>
      <p>Select your fitness goal and level to generate a workout plan.</p>

      <div style={{ marginTop: "20px" }}>
        <label>Fitness Goal:</label>
        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <option value="">Select...</option>
          <option value="weight loss">Weight Loss</option>
          <option value="muscle gain">Muscle Gain</option>
          <option value="endurance">Endurance</option>
        </select>
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>Fitness Level:</label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <option value="">Select...</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <button
        onClick={handleGenerate}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Generate Workout
      </button>

      {generatedWorkout && (
        <div
          style={{
            marginTop: "30px",
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            whiteSpace: "pre-wrap",
          }}
        >
          <h3>Your Workout Plan:</h3>
          <p>{generatedWorkout}</p>
        </div>
      )}
    </div>
  );
}
