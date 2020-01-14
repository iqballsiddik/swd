import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  bgFooter: {
    background: '#ededed',
    marginTop: '50px'
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.bgFooter}>
      <Grid
        item
        xs={12}
        container
        direction="row"
        justify="center"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Grid item xs={3}>
          <Typography variant="h5">SWD</Typography>
          <div class="pt-3">
            <ul class="noneList">
              <li class="textFotter">
                <span class="subTitle">Mail:</span> swd@gmail.com
              </li>
              <li class="">
                <span class="subTitle">Whatsapp:</span> +62 857 2027 7508
              </li>
              <li class="">
                <span class="subTitle">Line@:</span> @swd.order
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h5">Address</Typography>
          <div class="pt-3">
            <ul class="noneList">
              <li class="">
                <span class="subTitle">Store & Office</span>
              </li>
              <li class="">
                <span class=""></span>Jalan Kesehatan V Tangerang Selatan
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h5">Follow US</Typography>
          <div class="pt-3">
            <ul class="noneList">
              <li class="">
                <span class="subTitle">
                  <a href="#">
                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.instagram.com/swd.official/">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} class="copyRight">
        <Typography variant="v5">
          <i class="fa fa-copyright" aria-hidden="true"></i>
          2019 SWD
        </Typography>
      </Grid>
    </div>
  );
}

export default Footer;
