import React from "react";
import { Container, Typography } from "@mui/material";
import OfficerDashboard from "./components/OfficerDashboard";
import InmateForm from "./components/InmateForm";
import ScannerLog from "./components/ScannerLog";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" gutterBottom>
        Lawfully Illegal: Public Official & Arrest Analytics
      </Typography>
      <OfficerDashboard />
      <ScannerLog />
      <InmateForm />
      <ContactPage />
    </Container>
  );
}

export default App;