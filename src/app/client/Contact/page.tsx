"use client";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  Button,
  Typography,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const [homeType, setHomeType] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [sqft, setSqft] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleHomeChange = (event: SelectChangeEvent) => {
    setHomeType(event.target.value);
  };

  const handleServiceChange = (event: SelectChangeEvent) => {
    setServiceType(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate quote submission logic here
    setOpen(true); // Show success message

    // Reset form
    setHomeType("");
    setServiceType("");
    setSqft("");
    setEmail("");

    // Redirect after 2.5 seconds
    setTimeout(() => {
      router.push("/");
    }, 2500);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 600,
          mx: "auto",
          mt: 10,
          px: 5,
          py: 6,
          boxShadow: 6,
          borderRadius: 4,
          backgroundColor: "#fafafa",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          fontWeight="bold"
          color="primary"
        >
          Request a Quote
        </Typography>

        <FormControl fullWidth sx={{ mt: 4 }}>
          <InputLabel id="home-type-label" sx={{ fontSize: "1.1rem" }}>
            Type of Home
          </InputLabel>
          <Select
            labelId="home-type-label"
            id="home-type-select"
            value={homeType}
            label="Type of Home"
            onChange={handleHomeChange}
            sx={{ fontSize: "1.1rem" }}
          >
            <MenuItem value="1_story">1-Story Home</MenuItem>
            <MenuItem value="2_story">2-Story Home</MenuItem>
            <MenuItem value="apartment">Apartments</MenuItem>
            <MenuItem value="business">Business / Warehouse</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mt: 4 }}>
          <InputLabel id="service-type-label" sx={{ fontSize: "1.1rem" }}>
            Service Type
          </InputLabel>
          <Select
            labelId="service-type-label"
            id="service-type-select"
            value={serviceType}
            label="Service Type"
            onChange={handleServiceChange}
            sx={{ fontSize: "1.1rem" }}
          >
            <MenuItem value="window_cleaning">Window Cleaning</MenuItem>
            <MenuItem value="moss_treatment">Moss Treatment</MenuItem>
            <MenuItem value="pressure_washing">Pressure Washing</MenuItem>
            <MenuItem value="gutter_cleaning">Gutter Cleaning</MenuItem>
            <MenuItem value="gutter_face_cleaning">
              Gutter Face Cleaning
            </MenuItem>
            <MenuItem value="roof_blow_off">Roof Blow Off</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          type="number"
          label="Square Footage"
          variant="outlined"
          value={sqft}
          onChange={(e) => setSqft(e.target.value)}
          sx={{ mt: 4 }}
          InputProps={{
            sx: { fontSize: "1.1rem" },
          }}
          InputLabelProps={{
            sx: { fontSize: "1.1rem" },
          }}
        />

        <TextField
          fullWidth
          type="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mt: 4 }}
          InputProps={{
            sx: { fontSize: "1.1rem" },
          }}
          InputLabelProps={{
            sx: { fontSize: "1.1rem" },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            mt: 5,
            py: 1.8,
            fontSize: "1.2rem",
            fontWeight: "bold",
            textTransform: "none",
          }}
          disabled={!homeType || !serviceType || !sqft || !email}
        >
          Submit
        </Button>
      </Box>

      {/* Snackbar with Success Alert */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
          variant="filled"
        >
          Quote was sent!
        </Alert>
      </Snackbar>
    </>
  );
}
