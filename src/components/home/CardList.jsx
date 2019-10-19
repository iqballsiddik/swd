import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

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
const CardList = props => {
  const classes = useStyles();
  const dataCatalog = props;
  return (
    <Grid item>
      <Card className={classes.card}>
        <CardContent>
          <Link
            to={{
              pathname: '/detailitem',
              state: { foo: dataCatalog }
            }}
          >
            <CardMedia className={classes.media} image={props.img} />
          </Link>
          <CardContent>
            <TextCenter>
              <Typography variant="h5">{props.title}</Typography>
              <HargaText>Rp.{props.price}</HargaText>
            </TextCenter>
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
