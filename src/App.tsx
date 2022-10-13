import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import AddEmployee from "./features/addEmployee/AddEmployee";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          {/* <Navbar /> */}
          <section className="main">
            <Routes>
              <Route path="/" element={<Navigate to="/add-employee" />} />
              <Route path="/add-employee" element={<AddEmployee />} />
              <Route path="/update-employee" element={<AddEmployee />} />
            </Routes>
          </section>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
