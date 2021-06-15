import AppBarComponent from "../../components/APPBar/AppBar";
import Navbar from "../../components/Navbar/Navbar";
import "./dashboard.scss"
import Example from "../../components/Cards/card";


export default function Dashboard(){
  return (
    <div
      className="dashboard-container">
      <AppBarComponent />
      <Example></Example>

     <Navbar>FundooNotes</Navbar>
    </div>
  );
};
