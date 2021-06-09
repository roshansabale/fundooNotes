import AppBarComponent from "../../components/APPBar/AppBar";
import "./dashboard.scss"
import Example from "../../components/Cards/card";

const Dashboard = () => {
  return (
    <div
      className="dashboard-container">
      <AppBarComponent />
      <Example></Example>
    </div>
  );
};

export default Dashboard;
