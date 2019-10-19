import React, { useState, useEffect } from 'react';
import NavBar from '../navBar/NavBar';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardList from './CardList';
import Footer from '../footer/Footer';
import BannerSlider from './BannerSlider';

const WrapBoxBody = styled.div`
  margin: 82px;
`;

const img1 = './assets/img/catalog/left1.jpeg';
const img2 = './assets/img/catalog/left2.jpeg';
const img3 = './assets/img/catalog/left3.jpeg';
const img4 = './assets/img/catalog/md1.jpeg';
const img5 = './assets/img/catalog/md2.jpeg';
const img6 = './assets/img/catalog/md3.jpeg';
const img7 = './assets/img/catalog/rg1.jpeg';
const img8 = './assets/img/catalog/rg2.jpeg';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Grid item xs={12} style={{ paddingTop: 65 }}>
        <BannerSlider />
      </Grid>
      <WrapBoxBody>
        <Container>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <CardList
                title="Sienna"
                price="65.000"
                img={img1}
                color=" #aaff80
                "
              />
              <CardList
                title="Sakha"
                price="65.000"
                img={img2}
                color="#d1e0e0"
              />
              <CardList
                title="Sakha"
                price="65.000"
                img={img3}
                color="#002266"
              />
              <CardList
                title="Sava vol 1"
                price="55.000"
                img={img5}
                color="#D3D3D3"
              />
              <CardList
                title="Sava vol 2"
                price="55.000"
                img={img4}
                color="#D3D3D3"
              />
              <CardList
                title="Sava vol 3"
                price="55.000"
                img={img6}
                color="#ffff1a"
              />
              <CardList
                title="Safina Brick"
                price="135.000"
                img={img7}
                color="#ff471a"
              />
              <CardList
                title="Safina Spablue"
                price="135.000"
                img={img8}
                color="cyan"
              />
            </Grid>
          </Grid>
        </Container>
      </WrapBoxBody>
      <Footer />
    </div>
  );
}
