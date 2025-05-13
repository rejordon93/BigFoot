"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "next/link";

const NavBar = () => {
  return (
    <AppBar position="static" color="primary" sx={{ padding: "0 1rem" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", letterSpacing: 1.2 }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            Bigfoot Windows & Gutters
          </Link>
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Link href="/" passHref>
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="/services" passHref>
            <Button color="inherit">Services</Button>
          </Link>
          <Link href="/about" passHref>
            <Button color="inherit">About</Button>
          </Link>
          <Link href="/contact" passHref>
            <Button color="inherit">Contact</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
