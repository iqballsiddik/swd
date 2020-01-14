import React from 'react';
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

const product = [
  {
    id: 1,
    title: "Sienna",
    image: img1,
    color: "#aaff80",
    price: "65.000"
  },
  {
    id: 2,
    title: "Sakha",
    image: img2,
    color: "#d1e0e0",
    price: "65.000"
  },
  {
    id: 3,
    title: "Sakha",
    image: img3,
    color: "#002266",
    price: "65.000"
  },
  {
    id: 4,
    title: "Sava vol 1",
    image: img4,
    color: "#D3D3D3",
    price: "55.000"
  },
  {
    id: 5,
    title: "Sava vol 2",
    image: img5,
    color: "#D3D3D3",
    price: "55.000"
  },
  {
    id: 6,
    title: "Sava vol 3",
    image: img6,
    color: "#ffff1a",
    price: "55.000"
  },
  {
    id: 7,
    title: "Safina Brick",
    image: img7,
    color: "#ff471a",
    price: "55.000"
  },
  {
    id: 8,
    title: "Safina Spablue",
    image: img8,
    color: "cyan",
    price: "55.000"
  },
]


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
              {
                product.map(p => <CardList key={p.id} {...p} />)
              }
            </Grid>
          </Grid>
        </Container>
      </WrapBoxBody>
      <Footer />
    </div>
  )
}
