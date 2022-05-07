import React from "react";

import {
  Container,
  Typography,
  Grid,
  CardMedia,
  Card,
  CardContent,
  CardActions,
  Button,
  CssBaseline,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const Home = ({ products }) => {
  console.log(products);
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {products.map((prod) => {
            return (
              <Grid item key={prod.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "80%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 1,
                  }}
                >
                  <CardMedia
                    component="img"
                    style={{ height: "54.12%" }}
                    image={prod.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1, pb: 0 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {prod.title.substring(0, 20)}...
                    </Typography>
                    <Typography>
                      {prod.description.substring(0, 20)}...{" "}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ pt: 0 }}>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
