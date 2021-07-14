import React, { useEffect, useState } from 'react'
import CardProduct from '../components/CardProduct';
import axiosInstance from '../components/axiosInstance';
import Filter from '../components/Filter';

const PageListerProduits = () => {

    const [listeProduitsAll, setListeProduitsAll] = useState([]);
    const [listeProduits, setListeProduits] = useState([]);
    const [cart, setCart] = useState([]);
    

    useEffect(() => {
        fetchAllProducts()
    }, [])

    const fetchAllProducts = () => {
        axiosInstance.get("/produits")
            .then(res => {
                console.log(res);
                setListeProduitsAll(res.data);
                setListeProduits(res.data);
            }
        )
    }

    const sortProducts = (event) => {
        const sort = event.target.value
            setListeProduits(listeProduits.slice().sort((a,b) =>(
                sort === "LOWEST" ?
                ((a.unitPrice < b.unitPrice)? -1 : 1) :
                sort === "HIGHEST" ?
                ((a.unitPrice > b.unitPrice)? -1 : 1) :
                (( a.id > b.id)? 1 : -1)
            )))
        
    }

    const filterProducts = (event) => {
        const type = event.target.value
        console.log(listeProduits);
        if(type == "All"){
            setListeProduits(listeProduitsAll)
        }else{
            setListeProduits(listeProduitsAll.filter(produit => produit.productType === type))
        }
    }

    return (
        <div>
            <Filter count={listeProduits.length} filterProducts={filterProducts} sortProducts={sortProducts} />
            
            <div className="products-gallery">
                {console.log(cart)}
                
                {listeProduits.map(produit =>
                    <CardProduct cart={cart} setCart={setCart} product={produit}/>

                )}

            </div>
        </div>

    )
}

export default PageListerProduits
