import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AddEmployee from "./features/addEmployee/AddEmployee";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Container maxWidth="md">
          <Box sx={{ my: 4 }}>
            <section className="main">
              <Routes>
                <Route path="/" element={<Navigate to="/add-employee" />} />
                <Route path="/add-employee" element={<AddEmployee />} />
                <Route path="/update-employee" element={<AddEmployee />} />
              </Routes>
            </section>
          </Box>
        </Container>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
