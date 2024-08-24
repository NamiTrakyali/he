import React from 'react';
import "../styles/photogrid.css";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, GridList, Grid, Card, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';

import img_1 from "../utils/photo1.jpg";
import img_2 from "../utils/photo2.jpg";
import img_3 from "../utils/photo3.jpg";
import img_4 from "../utils/photo4.jpg";
import img_5 from "../utils/photo5.jpg";
import img_6 from "../utils/photo6.jpg";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#121C20',
    },
    gridlayout: {
        width: '90vw',
    },
    title: {
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        margin: 'auto',
        width: '100%',
    },
    gridImage: {
        width: '100%',
        height: '100%',
        marginLeft: '2.5%',
        marginRight: '0',
        borderRadius: '20px', // Köşeleri yumuşatmak için border-radius eklendi
        objectFit: 'cover', // Görüntünün hücreye sığarken en boy oranını korumasını sağlar
    },
    Card: {
        height: '100%',
        backgroundColor: '#121C20',
        borderRadius: '20px', // Köşeleri yumuşatmak için border-radius eklendi
    },
    Grid: {
        overflowX: 'scroll',
        marginTop: '4%',
    },
    tilebar: {
        width: '100%',
        marginLeft: '2.5%',
        borderRadius: '0 0 20px 20px', // TileBar'ın köşelerini yumuşatmak için border-radius eklendi
        '&:hover': {
            backgroundColor: '#BFBD31',
            cursor: 'pointer',
        }
    }
}));

const Photogrid = () => {
    const classes = useStyles();

    const images = [img_1, img_2, img_3, img_4, img_5, img_6];
    const titles = [
        "Doğu turumuz",
        "Günübirlik",
        "Güneydoğu Anadolu turu",
        "Eylül konaklamalı turlar",
        "Adana Gaziantep Şanlıurfa",
        "Eskişehir turu"
    ];
    const subtitles = [
        "Doğu'nun büyüleyici güzelliklerini keşfedin, tarih ve doğa ile iç içe unutulmaz bir yolculuğa çıkın.",
        "Eylül ayı günübirlik turları",
        "20-26 Eylül 18-24 Ekim 13 Bin TL ",
        "Eylül ayı konaklamalı 4 tur",
        "Adana Gaziantep Şanlıurfa turumuz",
        "21 Eylül günübirlik Eskişehir turu"
    ];

    return (
        <div className="photogrid">
            <Grid>
                <Typography variant='h3' style={{ marginTop: '5%' }} className={classes.title} xs={12}>
                    Gelecekteki turlarımız
                </Typography>
                <Typography variant='h6' className={classes.title}>
                Türkiye'nin dört bir yanını size gezdirmek için sabırsızlanıyoruz.
                </Typography>
            </Grid>
            <GridList cellHeight={350} style={{ marginTop: '2%', width: '80%', alignItems: 'center', paddingLeft: '10vw' }} cols={4}>
                {images.map((img, index) => (
                    <GridListTile key={index} col={1}>
                        <Card className={classes.Card}>
                            <img src={img} className={classes.gridImage} alt='' />
                            <GridListTileBar
                                className={classes.tilebar}
                                title={titles[index]}
                                subtitle={subtitles[index]}
                                actionIcon={<IconButton></IconButton>}
                            >
                            </GridListTileBar>
                        </Card>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default Photogrid;
