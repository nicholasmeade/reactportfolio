import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import "./Card.scss";
import ConnectedPic from "../../Assets/Connected.png";
import ZillowClonePic from "../../Assets/ZillowClone.jpg";
import RootinezPic from "../../Assets/Rootinez.png";

const ProjectCard = () => {
    return (
        <div className="projectcard-container">
            <div className="projectcards-header">
                <h2 style={{fontSize: 50, color: "white", marginTop: 10}}>Projects</h2>
            </div>
                <Box className="cards" sx={{ display: "flex", justifyContent: "center", gap: 5 }}>
                <Card className="indiv-card" sx={{ maxWidth: 400 }} style={{ backgroundColor: "#ebeae8" }}>
                    <CardMedia
                    component="img"
                    height="200"
                    image={ZillowClonePic}
                    alt="Zillow Clone Pic"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Zillow Clone
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Recreation of Zillow’s popular real estate listing website. 
                    Utilizes Google Maps API and will be updated with Datafiniti Property Data API to interact with listings.
                    </Typography>
                    </CardContent>
                    <CardActions sx={{ display: "flex", justifyContent: "center"}}>
                    <a href="https://github.com/nicholasmeade/ZillowClone" target="blank"><Button size="medium">Github</Button></a>
                    <a href="https://nicholasmeade.github.io/ZillowClone/" target="blank"><Button size="medium">Deployed Site</Button></a>
                    </CardActions>
                </Card>
                <Card className="indiv-card" sx={{ maxWidth: 400 }} style={{ backgroundColor: "#ebeae8" }}>
                    <CardMedia
                    component="img"
                    height="200"
                    image={ConnectedPic}
                    alt="Connected Pic"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Connected
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Frontend React.JS application delivering an enjoyable user experience being connected to the world via current and historical weather.
                    </Typography>
                    </CardContent>
                    <CardActions sx={{ display: "flex", justifyContent: "center"}}>
                    <a href="https://github.com/nicholasmeade/Connected-App" target="blank"><Button size="medium">Github</Button></a>
                    <a href="https://nicholasmeade.github.io/Connected-App/" target="blank"><Button size="medium">Deployed Site</Button></a>
                    </CardActions>
                </Card>
                <Card className="indiv-card" sx={{ maxWidth: 400 }} style={{ backgroundColor: "#ebeae8" }}>
                    <CardMedia
                    component="img"
                    height="200"
                    image={RootinezPic}
                    alt="Rootinez Pic"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Rootinez
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Full stack (React.JS, Django) application aimed at increased productivity through routines.
                    </Typography>
                    </CardContent>
                    <CardActions sx={{ display: "flex", justifyContent: "center"}}>
                    <a href="https://github.com/nicholasmeade/Rootinez" target="blank"><Button size="medium">Github</Button></a>
                    <a href="https://nicholasmeade.github.io/Rootinez/" target="blank"><Button size="medium">Deployed Site</Button></a>
                    </CardActions>
                </Card>
                </Box>
        </div> 

     );
}
 
export default ProjectCard;