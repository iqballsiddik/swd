import React from 'react';
import Navbar from '../../navBar/NavBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import './Hijab.css';

const useStyles = makeStyles({
	card: {
		width: 295,
		margin: 10,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
	},
	media: {
		height: 250,
		paddingTop: '56.25%', // 16:9
	},
})

const img2 = '/assets/img/catalog/left1.jpeg';

function Hijab(params) {
	const classes = useStyles();
	return (
		<div>
			<Navbar />
			<Container sm style={{ marginTop: 130 }}>
				<hr></hr>
				<Grid item xs={12}>
					<Grid container justify="center" spacing={2}>
						<Card className={classes.card}>
							<CardContent>
								<CardMedia className={classes.media} image={img2} />
								<Typography variant="h5" className="title-product">Tes Coba</Typography>
							</CardContent>
						</Card>
						<Card className={classes.card}>
							<CardContent>
								<CardMedia className={classes.media} image={img2} />
								<Typography variant="h5" className="title-product">Tes Coba</Typography>
							</CardContent>
						</Card>
						<Card className={classes.card}>
							<CardContent>
								<CardMedia className={classes.media} image={img2} />
								<Typography variant="h5" className="title-product">Tes Coba</Typography>
							</CardContent>
						</Card>
						<Card className={classes.card}>
							<CardContent>
								<CardMedia className={classes.media} image={img2} />
								<Typography variant="h5" className="title-product">Tes Coba</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}

export default Hijab;