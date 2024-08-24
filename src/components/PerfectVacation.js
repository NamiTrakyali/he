import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
// import { GridList,Box,Card,GridListTile,GridListTileBar,IconButton} from '@material-ui/core';

import {Typography,Grid,Container,Button} from '@material-ui/core';

import img_1 from '../utils/cliff.jpg'
import img_2 from '../utils/forest.jpg'
import img_3 from '../utils/cave.jpg'

const useStyles=makeStyles(theme=>({


wrapper:{
    height:'80vh'
}
,
gridImage:{
width:'100%',
height:'100%'
},

gridContainer:{
    marginTop:'6%',height:'70vh',marginLeft:'0%'
},
gridContainer_2:{
    marginTop:'2%',height:'70vh',marginLeft:'5%'
},
text:{
color:'white'
}
,
underline:{backgroundColor:'#707531',
width:"50%",
height:'4%'
// legth:"100%"
},
button:{
    backgroundColor:'#707531',
    borderRadius:'25px',
    width:'40%',
    color:'white',
    "&:hover":{
        backgroundColor:"#BFBD31"
    }

}


}))

const PerfectVacation = () => {
    const classes=useStyles();
    return (
        <Container className={classes.wrapper} disableGutters='true'>
            
          <Grid container lg={12} className={classes.gridContainer} >
          <Grid container lg={6} style={{width:'50%'}}>
          <Grid container items style={{height:'94%',paddingRight:'2%',margin:'auto'}}lg={7}><img src={img_1} className={classes.gridImage} alt=''/></Grid>
          <Grid container items lg={5}>
          <Grid container items style={{height:'44%',paddingBottom:'2%',margin:'auto',paddingLeft:'10%'}}  ><img src={img_3} className={classes.gridImage} alt=''/></Grid>
          <Grid container items style={{height:'44%',paddingTop:'2%',margin:'auto',paddingLeft:'10%'}} ><img src={img_2} className={classes.gridImage} alt=''/></Grid>
          </Grid>
          </Grid>


         <Grid container items lg={5} className={classes.gridContainer_2}>
         <Grid container items style={{height:'25%',display:'flex',flexDirection:'vertical'}}><Typography variant='h3' className={classes.text}>Mükemmel bir tatil yapın.</Typography>
         <div className={classes.underline}></div>
         </Grid>
         <Grid container items style={{height:'30%'}}><Typography variant='h5'className={classes.text}>Aile tatili, hafta sonu kaçamağı veya maceralı bir gezi mi planlıyorsunuz? Türkiye'deki tatil kiralamaları her türlü seyahat için uygundur. Ege'nin güzel köylerinden Karadeniz'in huzurlu yaylalarına kadar, birçok harika seçeneği bulabilirsiniz. 
         </Typography></Grid>
         <Grid container items style={{height:'4%'}}><Button className={classes.button}><Typography variant="h5">Hemen Arayın!</Typography></Button></Grid>

         </Grid>
         
          </Grid>


        </Container>
    )
}

export default PerfectVacation;