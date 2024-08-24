import React from 'react';
import "../styles/banner.css";
import Navbar from './Navbar'
import { Typography,Grid} from '@material-ui/core';
// import {GridList,Box,Container,Card,GridListTile,GridListTileBar,IconButton,Button}from '@material-ui/core';
import {makeStyles} from "@material-ui/styles"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const useStyles=makeStyles(them=>({

banner_header:{
 
    fontSize:'12rem',
    color:'white',
    fontWeight:'900',
     paddingTop:'10%',
     textAlign:'center'
    
},

text:{
    color:'#ffffff',
    textAlign:'center'
},
carouselText:{
color:'white',
fontWeight:'200'
}
// text_overlay:{
//     position:'relative',
//     zIndex:'3',
//     top:"0",
//     opacity:'1'

// }


}))


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner = () => {
    const classes=useStyles();

    return (
        <div className="banner">
            <div className='overlay'>
            <Navbar/>
     
            <Typography className={classes.banner_header}>Gezi Dalgası</Typography>
            <Typography variant="h4" className={classes.text}>Açık Hava Maceranızı Bizimle Keşfedin</Typography>
          <Carousel responsive={responsive}
          className="carousel"
         
          dotListClass="custom-dot-list-style"
          autoPlaySpeed={1000}
          >
            <Grid ><Typography variant='h6'className={classes.carouselText}></Typography></Grid>
            <Grid ><Typography variant='h6'className={classes.carouselText}>Gezi</Typography></Grid>
            <Grid ><Typography variant='h6'className={classes.carouselText}>Dalgası</Typography></Grid>
            <Grid ><Typography variant='h6'className={classes.carouselText}>Ayrıcalıklarıyla</Typography></Grid> 

          </Carousel>
            </div>
         
            </div>
    )  
}

export default Banner;