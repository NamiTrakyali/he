import React from 'react';
import { Typography,Grid,Box,IconButton} from '@material-ui/core';
// import {GridList,Container,Card,GridListTile,GridListTileBar,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import img_1 from '../utils/footer.jpg'
import img_2 from '../utils/logo1.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import  TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles=makeStyles(theme=>({

container:{
    height:"55vh",

    backgroundImage:`url(${img_1})`,
   
    zIndex:'0'

},
overlay:{
height:'55vh',
position:'relative',
bottom:'0',
zIndex:'2',
backgroundColor:'black',
opacity:'0.8'
},

topContainer:{

 height:'55vh',
 position:'relative',
 bottom:'0',
 zIndex:'300',
//  opacity:'0.1'


},
innerContainer:{
    opacity:'1',
    color:'white',
    display:'block',
    height:'44vh'
},
logo:{
  width:'60%',
  height:'50%',
  marginTop:'15%',

  opacity:'1',
  zIndex:'100',
  border:'0',
  
  marginLeft:'30%'
},
text_header:{
    color:'white',
    marginTop:'30%',
    marginLeft:'2%',
},
text:{
    color:'white',
    marginTop:'2%',
    marginLeft:'2%',

    '&:hover':{
        color:'#BFBD31',
        cursor:'pointer'
    }
},
contact_header:{
    marginTop:'20%',marginLeft:'5%'
},

contact_text:{
    marginLeft:'5%',
    color:'white',
    marginTop:'2%',
},
footer_box:{
    borderTop:'solid 1% #BFBD31',
    height:'10vh',
},
icons_box:{
    display:'flex'
},
icons:{
    color:'black',
    backgroundColor:'white',
    borderRadius:'50%',
    width:'20%',
    height:'10%',
    margin:'30% 2%',

    '&:hover':{
        backgroundColor:'#BFBD31',
        
    }

}


}))
 const Footer = () => {
     const classes=useStyles();
    return (
     
        <div className={classes.container} >
        <div className={classes.overlay}>

        <Grid container  className={classes.topContainer}>
       <Grid container items lg={12} xs={12} sm={12} md={12} >
        <Grid container items className={classes.innerContainer} lg={3} xs={3} sm={3} md={3}>
         <img src={img_2} alt='' className={classes.logo}>

         </img>
         
        </Grid>

        <Grid container items lg={2} xs={2} sm={2} md={2} className={classes.innerContainer}>
<Typography variant='h4' className={classes.text_header}>Bilgiler</Typography>
<Typography variant='h6' className={classes.text}>Macera</Typography>
<Typography variant='h6' className={classes.text}>Hakkımızda    </Typography>
<Typography variant='h6' className={classes.text}>Bloğumuz</Typography>
</Grid>

<Grid container items lg={2} xs={2} sm={2} md={2} className={classes.innerContainer}>
<Typography variant='h4' className={classes.text_header}>Hızlı linkler</Typography>
<Typography variant='h6' className={classes.text}>Turlar</Typography>
<Typography variant='h6' className={classes.text}>Bağış</Typography>
<Typography variant='h6' className={classes.text}>Oteller</Typography>
            
</Grid>

<Grid container items lg={3} xs={3} sm={3} md={3} className={classes.innerContainer}>
<Typography variant='h4' className={classes.contact_header}>İletişim kurun.</Typography>
<Typography variant='h6' className={classes.contact_text}>Özerler, İş Bankası Pasajı, Turgutbey Cd. No:12/110 Kat:1, 39750 Lüleburgaz/Kırklareli;<br/></Typography>
<Typography variant='h6' className={classes.contact_text}><br/></Typography>
<Typography variant='h6' className={classes.contact_text}>0533 962 94 96<br/></Typography>
</Grid>

<Grid container items lg={2} xs={2} sm={2} md={2} className={classes.innerContainer}>
<Box className={classes.icons_box}>
 <IconButton className={classes.icons}><FacebookIcon></FacebookIcon></IconButton>
 <IconButton className={classes.icons}><TwitterIcon></TwitterIcon></IconButton>
 <IconButton className={classes.icons}><InstagramIcon></InstagramIcon></IconButton>


</Box>
            
</Grid>



<Grid container items>
      
</Grid>           
</Grid>
       </Grid>
        </div>



        </div>
            

        )
}

export default Footer;