import { Avatar, Button, Card, CardContent, CardMedia, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import pic from "../images/BD_image.jpg";
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import resume from "../images/Resume.pdf"

const useStyles = makeStyles({
     root: {
          display: "flex",
     },
     media: {
          paddingTop: '5%',
     },
     text: {
          display: "grid",

     }
});

const About = () => {
     const classes = useStyles();
     const onDownload = () => {
          const link = document.createElement("a");
          link.download = resume;
          link.href = resume;
          link.click();
        };

     return (
          <Container style={{ height: '100%' }}>
               <h1 className="project-heading"> About Me </h1>
               <Grid container
                    direction={'row'}
                    spacing={2}
                    align="center"
                    justify="center"
                    alignItems="center"
               >
                    <Grid item xl={6} md={4} sm={12} xs={12} >
                         <img style={{ height: 400 }} src={pic} />
                    </Grid>
                    <Grid item xl={6} md={6} sm={12} xs={12}>
                         <p className="about-text">
                              I received a Certificate in Full Stack Web Development from Southern Methodist University where I learned best practices for writing clean code and designing mobile-friendly websites and applications.
                              <br />
                               I've also completed the relevant courses: Numerical Analysis, Abstract Algebra, Matrix Theory, and Vector Calculus towards a BA in Mathematics from the University of North Texas. 
                              <br />
                              <br />
                              On my down time, I enjoy spoiling my cats, Kitsune and Mittens, learning new recipes, and tending my garden.
                         </p>
                    </Grid>
               </Grid>
               <Grid container
                    direction={'column'}
                    spacing={2}
                    align="center"
                    display="grid"
                    alignItems="center"
                    className={classes.media}
               >
                    <Grid item xs={12} sm={6} y={10}>
                         <Card >
                              <CardContent>
                                   <Typography>
                                        Technical Skills
                                   </Typography>
                                   <Typography>
                                        <ul align="left">
                                             <li>
                                                  Programming Languages: HTML, JavaScript, CSS, SQL, NoSQL, Express.js, Node.js, React.js
                                             </li>
                                             <li>
                                                  Database Management: Mysql, NoSQL, MongoDB
                                             </li>
                                             <li>
                                                  Library/Frameworks: Material-UI, Bootstrap, Geist-UI, Materialize
                                             </li>
                                             <li>
                                                  Other Technologies: Handlebars, Git, Heroku, IndexedDB API
                                             </li>
                                        </ul>
                                   </Typography>
                                   <Button 
                                   variant="contained" 
                                   color="secondary"
                                   onClick={onDownload}>
                                   <GetAppRoundedIcon />
                                        Download Resume
                                   </Button>
                              </CardContent>
                         </Card>
                    </Grid>
               </Grid>
          </Container>
     )
}

export default About;

