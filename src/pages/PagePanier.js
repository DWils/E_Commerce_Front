import React from 'react'
import defaultImage from '../img/defaultImage.png'
import { useHistory } from 'react-router-dom'
import { Button , makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
   
    btn: {
        border : 'solid 1px grey'
    },
    btn_proceed :{
        border : 'solid 1px grey',
        backgroundColor : 'lime'
    },
    btn_remove : {
        border : 'solid 1px grey',
        backgroundColor : 'red'
    }
});

const PagePanier = ({cartItems = [] , removeFromCart }) => {
    const history = useHistory()
    const classes = useStyles();
    return (
        <>
        <div className="cart cart-header">
            {cartItems.length === 0 ? 
            <div>Votre panier en vide</div> 
            :
            <div>Votre panier contient {cartItems.length} article(s)</div> 
            }
        </div>
        <div className="cart">
            <div className="cart-items">
                {cartItems.map(item =>(
                    <div key={item.id} className="cart-item-card">
                        <div><img src={defaultImage} alt="defaultImage" /></div>
                        <div>{item.productName}</div>
                        <div>{item.unitPrice} € x {item.count}</div>
                        <Button className={classes.btn_remove} onClick={() => removeFromCart(item)}>Supprimer</Button>
                    </div>
                ))}
            </div>
        </div>
        
        <div className="cart">
            <div className="total">
                <div>
                    {cartItems.reduce((a,c) => a + c.unitPrice * c.count,0)} €
                </div>
                <Button className={classes.btn_proceed}>
                    Payer
                </Button>
            </div>
        </div>
        <div className="cart">
            <Button className={classes.btn} onClick={() => history.push("/")}>Retour à la liste</Button>
        </div>
        </>
    )
}

export default PagePanier

