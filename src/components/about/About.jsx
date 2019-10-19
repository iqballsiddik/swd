import React from 'react';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center'
    // color: theme.palette.text.secondary
  }
}));

const WrapTitle = styled.div`
  padding-top: 8%;
  color: #757575;
`;
const WrapContent = styled.div`
  color: #757575;
  text-align: center;
`;
const WrapCulture = styled.div`
  padding-bottom: 200px;
  color: #757575;
  text-align: center;
`;

function Profile() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
}

const Content = () => {
  return (
    <div>
      <WrapTitle>
        <Typography
          variant="h2"
          component="h2"
          className="text-center"
          gutterBottom
        >
          About Us
          <hr width="150px" />
        </Typography>
      </WrapTitle>
      <WrapContent>
        <Container>
          <Typography>
            Berlokasi di Tangerang Selatan, Indonesia, workshop kami merupakan
            rumah bagi sekelompok pelaku kreatif yang melihat kesempatan di
            antara hal-hal yang mustahil. Satu tujuan yang menggerakkan kami
            untuk kian berinovasi adalah menciptakan kontinuitas dengan
            kepercayaan atas komitmen dan orisinalitas untuk menciptakan
            penunjuk waktu yang senantiasa menginspirasi. Mengutamakan presisi
            dan kualitas di setiap detail terkecil, pengrajin kami menghadirkan
            sebuah fasion dengan sentuhan simple basic dan nyaman untuk setiap
            penggunanya.
          </Typography>
        </Container>
      </WrapContent>
      <hr />
      <Banner />
      <WrapTitle>
        <Typography
          variant="h2"
          component="h2"
          className="text-center"
          gutterBottom
        >
          Culture
          <hr width="150px" />
        </Typography>
      </WrapTitle>
      <WrapCulture>
        <Container>
          <Typography>
            Culture yang kami miliki masih menjunjung tinggi rasa kekeluargaan.
            Tiap individu tidak mementingkan diri sendiri dan saling bekerja
            sama untuk dapat mencapai tujuan bersama. Tiap permasalahan dapat
            dibicarakan dengan baik-baik agar dapat mencapai solusi yang
            terbaik. Kami pun merespon tiap inspirasi dengan rasa penasaran,
            untuk mengulik segala cara dan kemungkinan yang diperlukan dalam
            membuat suatu produk dan campaign. penggunanya.
          </Typography>
        </Container>
      </WrapCulture>
    </div>
  );
};

const Banner = () => {
  return (
    <div>
      <div
        className="jumbotron"
        style={{
          backgroundImage: "url('./assets/img/banner/banner2.PNG')",
          backgroundSize: 'cover',
          backgroundRepeat: 'nerepeat'
        }}
      ></div>
    </div>
  );
};

export default Profile;
