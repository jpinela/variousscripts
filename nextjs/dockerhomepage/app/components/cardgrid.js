// components/CardGrid.js
import React from "react";
import { Box, Card, CardActionArea, CardContent, CardActions, Button, Typography, Grid } from "@mui/material";

const CardGrid = ({ cards }) => {
  return (
    <Box sx={{ flexGrow: 1, p: 5, background: "#cccccc" }} display="flex">
      <Grid container spacing={4} justifyContent="center"  background="#9999ff" direction="row" alignItems="stretch" display="flex" sx={{ flexGrow: 1}}>
        {cards.map((card, index) => (
          <Grid key={index} item xs={12} sm={6} md={2} lg={1} display="flex"  sx={{ flexGrow: 1, }} >
       <Card
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            background: "#fc6a03",
            borderRadius: 10,
          }}
        >
          <CardActionArea
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}

          >
            <CardContent>
              <Typography variant="h3" component="div" sx={{fontWeight: 'bold',color: "#ffffff"}}>
                {card.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button
              size="medium"
              color="success"
              variant="contained"
              href={card.link}
            >
              {card.link}
            </Button>
          </CardActions>
        </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardGrid;
