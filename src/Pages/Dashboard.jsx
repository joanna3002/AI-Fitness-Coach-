export default function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Dashboard</h1>
      <p>Welcome back! Here's your fitness summary.</p>

      {/* Fake stats UI */}
      <div style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px"
      }}>
        <div style={{
          padding: "20px",
          background: "#f0f0f0",
          borderRadius: "10px",
          width: "150px",
          textAlign: "center"
        }}>
          <h3>Workouts</h3>
          <p>5 done</p>
        </div>

        <div style={{
          padding: "20px",
          background: "#f0f0f0",
          borderRadius: "10px",
          width: "150px",
          textAlign: "center"
        }}>
          <h3>Calories Burned</h3>
          <p>2300 kcal</p>
        </div>

        <div style={{
          padding: "20px",
          background: "#f0f0f0",
          borderRadius: "10px",
          width: "150px",
          textAlign: "center"
        }}>
          <h3>Meals Logged</h3>
          <p>12 meals</p>
        </div>
      </div>
    </div>
  );
}
