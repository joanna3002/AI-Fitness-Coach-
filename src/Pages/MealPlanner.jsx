import { useState } from "react";

export default function MealPlanner() {
  const [dietType, setDietType] = useState("");
  const [calories, setCalories] = useState("");
  const [mealPlan, setMealPlan] = useState("");

  const handleGenerateMeal = () => {
    // TEMPORARY SAMPLE OUTPUT — AI will replace this later
    setMealPlan(
      `Sample Meal Plan\n\nDiet: ${dietType}\nCalories: ${calories}\n\n• Breakfast: Oatmeal + Banana\n• Lunch: Chicken Breast + Rice\n• Dinner: Fish + Vegetables`
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Meal Planner</h1>
      <p>Generate a healthy meal plan based on your diet preference and calorie target.</p>

      <div style={{ marginTop: "20px" }}>
        <label>Diet Type:</label>
        <select
          value={dietType}
          onChange={(e) => setDietType(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <option value="">Select...</option>
          <option value="balanced">Balanced</option>
          <option value="keto">Keto</option>
          <option value="low carb">Low Carb</option>
          <option value="high protein">High Protein</option>
        </select>
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>Target Calories:</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder="e.g., 1800"
          style={{ marginLeft: "10px", padding: "4px" }}
        />
      </div>

      <button
        onClick={handleGenerateMeal}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Generate Meal Plan
      </button>

      {mealPlan && (
        <div
          style={{
            marginTop: "30px",
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            whiteSpace: "pre-wrap",
          }}
        >
          <h3>Your Meal Plan:</h3>
          <p>{mealPlan}</p>
        </div>
      )}
    </div>
  );
}
