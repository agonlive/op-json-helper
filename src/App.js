import logo from "./logo.svg";
import "./App.css";
import LicenseForm from "./components/LicenseForm";
import TypeAccountForm from "./components/TypeAccountForm";
import SoftwareForm from "./components/SoftwareForm";

function App() {
  return (
    <div className="App">
      <div className="p-[8px] flex flex-col md:flex-row justify-between gap-4">
        <LicenseForm />
        <TypeAccountForm />
        <SoftwareForm />
      </div>
    </div>
  );
}

export default App;
