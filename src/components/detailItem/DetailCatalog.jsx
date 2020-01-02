import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { RootContext } from '../router/Routers';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// this is dialog
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '90px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing(1)
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));
// this is styled component
const WrapPadding = styled.div`
  padding-top: 20px;
`;

const WrapIcon = styled.div`
  padding: 20px;
  background-color: yellow;
`;

const WrapValue = styled.div`
  padding-top: 18px;
`;

function DetailCatalog(props) {
  const classes = useStyles();
  const dataOrder = props.data;

  return (
    <div className={classes.root}>
      <Container>
        <h4>Detail {dataOrder.title} </h4>
        <hr></hr>
        <Grid container spacing={2}>
          <Grid item xs={6} className="text-center">
            <figure class="figure">
              <img
                src={dataOrder.image}
                class="figure-img img-fluid rounded"
                alt="..."
                width="500"
                height="auto"
              />
            </figure>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className="titleCatalog">
              {dataOrder.title}
            </Typography>
            <div className="hr"></div>
            <WrapPadding>
              <p className="price">{dataOrder.price}</p>
            </WrapPadding>
            <hr />
            <WrapPadding>
              <p className="price">Warna *</p>
              <Grid container item xs={12}>
                <div className="text-center">
                  <WrapIcon style={{ backgroundColor: dataOrder.color }}>
                    <CheckCircleOutlineIcon />
                  </WrapIcon>
                </div>
              </Grid>
            </WrapPadding>
            <hr />
            <WrapPadding>
              <AddCart {...props} />
            </WrapPadding>
            <hr />
            <WrapPadding>
              <Panels />
            </WrapPadding>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

// this is addCart order
// proses add cart sampe sini. belum di perbaiki add cart nambah barang pass data barang ke counter
const AddCart = (props) => {
  const classes = useStyles();
  const tes = props.data;
  return (
    <div>
      <RootContext.Consumer>
        {value => {
          return (
            <Grid container item xs={12}>
              <IconButton
                className={classes.button}
                aria-label="minus"
                color="secondary"
                size="large"
                onClick={() => value.handleChangeState({ type: 'MINUS' })}
              >
                <IndeterminateCheckBoxIcon />
              </IconButton>
              <WrapValue>
                <Typography>{value.order}</Typography>
              </WrapValue>
              <IconButton
                className={classes.button}
                aria-label="add"
                color="primary"
                onClick={() => value.handleChangeState({ type: 'PLUS' })}
              >
                <AddCircleIcon />
              </IconButton>
              <BtnAddCart />
            </Grid>
          );
        }}
      </RootContext.Consumer>
    </div>
  );
};

// this is buttom cart
const BtnAddCart = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddShoppingCartIcon />}
        onClick={handleClickOpen}
      >
        ADD TO CART
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{'Sorry'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Mohon maaf untuk pelanggan setia,Add Cart Sedang tahap
            maintance.Silahkan hubungi contact yang tertera dibio kami.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

// this is panels informasi,bagikan,bantuan
const Panels = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Informasi Produk</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Size : 120x120cm (segiempat)
            <br />
            <br />
            Bahan : Voal Waffle (tekstur kotak-kotak seperti waffle & sedikit
            bergelombang,ringan,mudah dibentuk,tegap di dahi,ironless dan tidak
            terawang).
            <br />
            <br />
            Detail : Jahit tepi rapih
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Bantuan</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <WhatsAppIcon style={{ color: ' green' }} />
            +62 851 2345 678
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default DetailCatalog;
