import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import './Home.css'

// tes gitignore
const useStyles = makeStyles({
  root: {
    paddingTop: 20
  },
  card: {
    width: 295
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  paper: {
    height: 140,
    width: 100
  },
  media: {
    height: 250,
    paddingTop: '56.25%' // 16:9
  }
});

const TextCenter = styled.div`
  padding-top: 10px;
  text-align: center;
  color: #222222;
`;

const HargaText = styled.p`
  color: #444444;
`;

// className={classes.card}
// this is use arrow function
const CardList = ({ id, title, image, color, price, props }) => {
  const classes = useStyles();
  const productContainer = { id, title, image, color, price };
  return (
    <Grid item>
      <Card className={classes.card}>
        <CardContent>
          <Link
            to={{
              pathname: '/detailitem',
              state: { foo: productContainer }
            }}
          >
            <CardMedia className={classes.media} image={image} />
          </Link>
          <CardContent>
            <Typography variant="h5" className="title-product">{title}</Typography>
            <div className="price text-right text-bold">
              <h5>Rp.{price}</h5>
              <small>Tersedia</small>
            </div>
          </CardContent>
        </CardContent>
      </Card>
    </Grid>
  );
};

// this is default props title and price
CardList.defaultProps = {
  title: 'Belum ada judul',
  price: 0
};

export default CardList;
