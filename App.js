import { WalletProvider } from "./contexts/WalletContext";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Deposit from "./pages/Deposit";

function App() {
  return (
    <WalletProvider>
      <Router>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/deposit" element={<Deposit />} />
          </Routes>
        </div>
      </Router>
    </WalletProvider>
  );
}

export default App;
