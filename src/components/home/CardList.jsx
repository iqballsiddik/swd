import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import './Home.css';
import Skeleton from '@material-ui/lab/Skeleton';
import { RootContext } from '../router/Routers';


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

// this is use arrow function
const CardList = ({ id, title, image, color, price, props }) => {
  const classes = useStyles();
  const productContainer = { id, title, image, color, price };
  return (
    <RootContext.Consumer>
      {value => {
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
                  {
                    value.loading ?
                      <Skeleton variant="rect" width={260} height={218} />
                      : <CardMedia className={classes.media} image={image} />
                  }
                </Link>
                <CardContent>
                  {
                    value.loading ?
                      <Skeleton animation="wave" width="60%" />
                      : <Typography variant="h5" className="title-product">{title}</Typography>
                  }
                  <div className="price text-right text-bold">
                    {
                      value.loading ?
                        <Skeleton animation="wave" width="40%" />
                        : <h5>Rp.{price}</h5>
                    }
                    {
                      value.loading ?
                        <Skeleton animation="wave" width="20%" />
                        : <small>Tersedia</small>
                    }
                  </div>
                </CardContent>
              </CardContent>
            </Card>
          </Grid>
        )
      }
      }
    </RootContext.Consumer>
  );
};

// this is default props title and price
CardList.defaultProps = {
  title: 'Belum ada judul',
  price: 0
};

export default CardList;
