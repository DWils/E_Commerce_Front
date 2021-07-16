import React, { useEffect, useState } from 'react'
import CardProduct from '../components/CardProduct';
import axiosInstance from '../components/axiosInstance';
import Filter from '../components/Filter';
import { useHistory } from 'react-router';

const PageListerProduits = ({ cart, setCart }) => {

    const [listeProduitsAll, setListeProduitsAll] = useState([]);
    const [listeProduits, setListeProduits] = useState([]);
    const history = useHistory()


    useEffect(() => {
        fetchAllProducts()
    }, [])

    const fetchAllProducts = () => {
        if (localStorage.getItem("JWT")) {
            axiosInstance.get("/produits")
                .then(res => {
                    console.log(res);
                    setListeProduitsAll(res.data);
                    setListeProduits(res.data);
                }
            )
        }else{
            history.push("/login")
        }

    }

    const addToCart = (product) => {
        const cartItems = cart.slice();
        let alreadyInCart = false;
        cartItems.forEach(item => {
            if (item.id === product.id) {
                item.count++;
                alreadyInCart = true;
            }
        })
        if (!alreadyInCart) {
            cartItems.push({ ...product, count: 1 })
        }
        setCart(cartItems)
    }

    const sortProducts = (event) => {
        const sort = event.target.value
        setListeProduits(listeProduits.slice().sort((a, b) => (
            sort === "LOWEST" ?
                ((a.unitPrice < b.unitPrice) ? -1 : 1) :
                sort === "HIGHEST" ?
                    ((a.unitPrice > b.unitPrice) ? -1 : 1) :
                    ((a.id > b.id) ? 1 : -1)
        )))

    }

    const filterProducts = (event) => {
        const type = event.target.value
        console.log(listeProduits);
        if (type == "All") {
            setListeProduits(listeProduitsAll)
        } else {
            setListeProduits(listeProduitsAll.filter(produit => produit.productType === type))
        }
    }

    return (
        <div>
            <Filter count={listeProduits.length} filterProducts={filterProducts} sortProducts={sortProducts} />

            <div className="products-gallery">
                {console.log(cart)}

                {listeProduits.map(produit =>
                    <CardProduct cart={cart} setCart={setCart} product={produit} addToCart={addToCart} />
                )}

            </div>
        </div>

    )
}

export default PageListerProduits
