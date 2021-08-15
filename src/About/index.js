import { Button, Card, CardContent, Container, Divider, Grid, List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import pic from "../images/BD_image.jpg";
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import Paper from '@material-ui/core/Paper';
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

     },
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
                         <img style={{ height: 400 }} src={pic} alt="Belle2" />
                    </Grid>
                    <Grid item xl={6} md={6} sm={12} xs={12}>
                         <Paper elevation={3} style={{padding: 30, backgroundColor:"#e5ffff"}}>
                         <Typography variant="subtitle2" align="left">
                              I received a Certificate in Full Stack Web Development from Southern Methodist University where I learned best practices for writing clean code and designing mobile-friendly websites and applications.
                              <br />
                              I've also completed the relevant courses: Numerical Analysis, Abstract Algebra, Matrix Theory, and Vector Calculus towards a BA in Mathematics from the University of North Texas.
                              <br />
                              <br />
                              On my down time, I enjoy spoiling my cats, Kitsune and Mittens, learning new recipes, and tending my garden.
                         </Typography>
                         </Paper>
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
                         <Card elevation={3} style={{backgroundColor: "#e5ffff"}}>
                              <CardContent>
                                   <Typography variant="h6">
                                        Technical Skills
                                   </Typography>
                                   <List align="left">
                                        <ListItem>
                                             <ListItemText primary="Programming Languages:"
                                                  secondary={
                                                       <React.Fragment>
                                                            <Typography variant="body2">
                                                                 React.js, Next.js, JavaScript, Express.js, Node.js, HTML, CSS, SQL, NoSQL
                                                            </Typography>
                                                       </React.Fragment>
                                                  }>
                                             </ListItemText>
                                        </ListItem>
                                        <Divider />
                                        <ListItem>
                                             <ListItemText primary="Database Management:"
                                                  secondary={
                                                       <React.Fragment>
                                                            <Typography variant="body2">
                                                                 Mysql, MongoDB
                                                            </Typography>
                                                       </React.Fragment>
                                                  }>
                                             </ListItemText>
                                        </ListItem>
                                        <Divider />
                                        <ListItem>
                                             <ListItemText primary="Library/Frameworks:"
                                                  secondary={
                                                       <React.Fragment>
                                                            <Typography variant="body2">
                                                                 Material-UI, Bootstrap, Geist-UI, Materialize
                                                            </Typography>
                                                       </React.Fragment>
                                                  }>
                                             </ListItemText>
                                        </ListItem>
                                        <Divider />
                                        <ListItem>
                                             <ListItemText primary="Other Technologies:"
                                                  secondary={
                                                       <React.Fragment>
                                                            <Typography variant="body2">
                                                                 Vercel, Git, Handlebars, Heroku, IndexedDB
                                                            </Typography>
                                                       </React.Fragment>
                                                  }>
                                             </ListItemText>
                                        </ListItem>
                                   </List>
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

