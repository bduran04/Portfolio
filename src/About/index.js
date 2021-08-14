import { Avatar, Card, CardMedia, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import pic from "../images/BD_image.jpg";

const useStyles = makeStyles({
     root: {
          maxWidth: 345,
     },
     media: {
          height: 0,
          paddingTop: '100%',
     },
     text: {
          display: "grid",

     }
});

const About = () => {
     const classes = useStyles();

     return (
          <Container style={{ height: '80vh' }}>
               <h1 className="project-heading"> About Me </h1>
               <Grid>

               </Grid>
               <Card className={classes.root}>
                    <CardMedia className={classes.media} image={pic} title="Belle" />
               </Card>
               <p className="introduction-text"
                    style={{
                         display: 'flex',
                         alignItems: 'center',
                         flexWrap: 'wrap',
                    }}>
                    I'm a Full Stack Developer with extensive experience in information technology and responsive web development. I Attended the University of North Carolina Chapel Hill where I received a BS in Psychology. Recently, I completed a Certificate in Full Stack Web Development from UNC Chapel Hill where I learned best practices for designing powerful mobile-friendly websites and applications. I currently work part-time as an IT Technician for a small real-estate business in Chapel Hill.
               </p>
          </Container>
     )
}

export default About;

