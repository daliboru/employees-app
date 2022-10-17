import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AddEmployee from "./pages/addEmployee";
import AllEmployees from "./pages/allEmployees";
import DeletedEmployees from "./pages/deletedEmployees";
import UpdateEmployee from "./pages/updateEmployee";

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
                <Route path="/" element={<AllEmployees />} />
                <Route path="/add-employee" element={<AddEmployee />} />
                <Route
                  path="/update-employee/:id"
                  element={<UpdateEmployee />}
                />
                <Route
                  path="/deleted-employees"
                  element={<DeletedEmployees />}
                />
              </Routes>
            </section>
          </Box>
        </Container>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
