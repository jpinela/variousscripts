
import CardGrid from "./components/cardgrid";
import styles from "./page.module.css";
import {  Container} from "@mui/material";
import { Box, Card, CardActionArea, CardContent, CardActions, Button, Typography, Grid } from "@mui/material";


export default function Home() {
  const deployed_apps = [
    {"name":"N8N","link":"http://192.168.1.30:5678/"},
    {"name":"MinIO","link":"http://raspi.minio/login"},
    {"name":"Neo4J","link":"http://192.168.1.30:7474/"},
    {"name":"FocalBoard","link":"http://raspi.focalboard/login"}

  ];
  
  
  return (
    <Box sx={{ flexGrow: 1, p: 5, background: "#cccccc" }} display="flex">
      <Grid container spacing={4} justifyContent="center"  background="#9999ff" direction="row" alignItems="stretch" display="flex" sx={{ flexGrow: 1}}>
        {deployed_apps.map((card, index) => (
          <Grid key={index} item xs={12} sm={6} md={3} display="flex"  sx={{ flexGrow: 1, }} >
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
}
