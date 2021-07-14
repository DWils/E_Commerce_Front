import React from 'react'
import axiosInstance from '../components/axiosInstance';

const PageDetailProduit = (props) => {

    const productId = props.match.params.productId;

    console.log("Detail ", props);
    return (
        <div>
            Détail du produit {productId}
        </div>
    )
}

export default PageDetailProduit
