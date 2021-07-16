import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import defaultImage from '../img/defaultImage.png'

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    btn: {
        border : 'solid 1px grey'
    },
    cardAction: {
        display: 'flex',
        justifyContent: 'center'
    }
    
});



export default function CardProduct(props) {
    const classes = useStyles();
    const addToCart = props.addToCart;
    const {id, productName, unitPrice , productType } = props.product

    // const addToCart = (info) => {
    //     alert( "1 " + info.productName  + " a été ajouté au panier")
    //     if(props.cart.filter(prod => prod.productName === info.productName) > -1){
    //         props.setCart(prevCart => [...prevCart,{nom : info.productName, nombre: 1 }]);
    //     }else {
    //         props.setCart(prevCart => [...prevCart,{nom : info.productName, nombre: 2 }]);
    //     }
        
    // }

    return (
        // <Link to={`/produit/${id}`}>
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <img src={defaultImage}/>
                <Typography variant="h5" component="h2">
                    {productName}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {productType}
                </Typography>
                <Typography variant="body2" component="p">
                    {unitPrice} €/Kg
                </Typography>
            </CardContent>
            <CardActions className={classes.cardAction}>
                <Button className={classes.btn} size="Large" onClick={() => addToCart(props.product)}>Ajouter</Button>
            </CardActions>
        </Card>
        // </Link>
    );
}
