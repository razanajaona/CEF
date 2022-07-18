import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./signIn.sass";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      responsabilite: data.get("responsabilite"),
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [responsabilities, setresponsabilities] = React.useState("");

  const handleChange = (event) => {
    setresponsabilities(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="CEF BW logo.png" alt="" />
          <Typography component="h1" variant="h5">
            <a href="#"> Sign in</a> / <a href="#">Sign up</a>
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="Name"
              label="Name"
              type="name"
              id="name"
              autoComplete="current-name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="passwword"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-autowidth-label">
                Responsabilite
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={responsabilities}
                onChange={handleChange}
                autoWidth
                label="Responsabilite"
              >
                <MenuItem value={"Local Director"}>Local Director</MenuItem>
                <MenuItem value={"National Director"}>
                  National Director
                </MenuItem>
                <MenuItem value={"Volunteers"}>Volunteers</MenuItem>
                <MenuItem value={"professional"}>Professional</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Mot de passe oubilie
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
