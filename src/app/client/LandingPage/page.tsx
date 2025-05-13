"use client";
import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/page";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  Container,
} from "@mui/material";
import Link from "next/link";

export default function LandingPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // After the component is mounted, trigger the animation
    setLoaded(true);
  }, []);

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
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
            Serving the Seattle area with top-tier window cleaning and gutter
            maintenance for homes and businesses. With years of experience and a
            reputation for excellence, we treat every project like it&apos;s our
            own.
          </Typography>
          <Link href="/client/Contact" passHref>
            <Button variant="contained" color="secondary">
              Get a Free Quote
            </Button>
          </Link>
        </Box>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 10 }}>
        <Container sx={{ textAlign: "center", color: "#333" }} maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Why Choose Us?
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 800, mx: "auto", mt: 2 }}>
            At Bigfoot Windows & Gutters, we pride ourselves on attention to
            detail, honest pricing, and outstanding customer service. Whether
            you&apos;re looking for a seasonal clean or ongoing maintenance,
            we&apos;re here to help — especially in the Seattle area, where
            weather can take a toll on your home.
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto", mt: 3 }}>
            As a veteran-owned business, we bring the same dedication and
            discipline that we learned in service to every project we undertake.
            You can trust that our team will always deliver top-tier quality
            with the utmost professionalism.
          </Typography>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ backgroundColor: "#ffffff", py: 10 }}>
        <Container>
          <Typography color="#333" variant="h3" textAlign="center" gutterBottom>
            Our Services
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 2, // Add spacing between the cards
            }}
          >
            {[
              {
                title: "Window Cleaning",
                description:
                  "Streak-free window cleaning for a crystal-clear view.",
              },
              {
                title: "Moss Treatment",
                description:
                  "Safe and effective moss removal to protect your roof and property.",
              },
              {
                title: "Pressure Washing",
                description:
                  "Restore the look of driveways, patios, and siding with deep pressure cleaning.",
              },
              {
                title: "Gutter Cleaning",
                description:
                  "Clear clogged gutters to prevent water damage and ensure smooth drainage.",
              },
              {
                title: "Gutter Face Cleaning",
                description:
                  "Brighten the exterior of your gutters by removing dirt, stains, and mildew.",
              },
              {
                title: "Roof Blow Off",
                description:
                  "Brighten the exterior of your gutters by removing dirt, stains, and mildew.",
              },
            ].map((service, index) => (
              <Box
                key={index}
                sx={{
                  flexBasis: "calc(33.333% - 16px)",
                  opacity: loaded ? 1 : 0,
                  transform: loaded
                    ? "translateX(0)" // Cards come to their normal position
                    : index % 2 === 0
                    ? "translateX(-100%)" // Even-indexed cards come from left
                    : "translateX(100%)", // Odd-indexed cards come from right
                  transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      sx={{ color: "text.secondary", fontSize: 14 }}
                    >
                      Service
                    </Typography>
                    <Typography
                      sx={{ color: "text.primary", mb: 1.5 }}
                      variant="h6"
                    >
                      {service.title}
                    </Typography>
                    <Typography variant="body2">
                      {service.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
