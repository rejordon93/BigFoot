import React from "react";
import NavBar from "../NavBar/page";
import { Typography, Box, Button, Container } from "@mui/material";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <NavBar />

      {/* White Background Hero Section */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 4,
        }}
      >
        <Box sx={{ maxWidth: 800, color: "#333" }}>
          <Typography variant="h3" gutterBottom>
            Bigfoot Windows & Gutters
          </Typography>
          <Typography variant="h6" gutterBottom>
            Reliable. Affordable. Professional.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            Providing top-tier window cleaning and gutter maintenance for homes
            and businesses in your area. With years of experience and a
            reputation for excellence, we treat every project like it's our own.
          </Typography>
          <Link href="/contact" passHref>
            <Button variant="contained" color="secondary">
              Get a Free Quote
            </Button>
          </Link>
        </Box>
      </Box>

      {/* Gray Background Info Section */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 6 }}>
        <Container sx={{ textAlign: "center", color: "#333" }}>
          <Typography variant="h4" gutterBottom>
            Why Choose Us?
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 700, margin: "0 auto" }}>
            At Bigfoot Windows & Gutters, we pride ourselves on attention to
            detail, honest pricing, and outstanding customer service. Whether
            you're looking for a seasonal clean or ongoing maintenance, we're
            here to help keep your property safe and looking its best.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
