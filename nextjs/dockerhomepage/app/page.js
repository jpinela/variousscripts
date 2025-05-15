
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
    <CardGrid cards={deployed_apps}/>
  );
}
