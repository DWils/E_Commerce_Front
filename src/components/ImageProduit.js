import React from 'react'
import orange from '../img/orange.jpg'
import defaultImage from '../img/defaultImage.png'

const ImageProduit = ({productName , zone }) => {

    const imageProd = (productName , zone ) => {
        switch (productName) {
            case "Orange":
                return <img className={`image-produit ${zone}`} src={require('../img/orange.jpg').default}/>
            case "Pomme":
                return <img className={`image-produit ${zone}`} src={require('../img/pomme.jpg').default}/>
            case "Poire":
                return <img className={`image-produit ${zone}`} src={require('../img/poire.jpg').default}/>
            case "Fromage":
                return <img className={`image-produit ${zone}`} src={require('../img/fromage.jpg').default}/>
            case "Chocolat en poudre":
                return <img className={`image-produit ${zone}`} src={require('../img/chocolat.jpg').default}/>
            case "Lait":
                return <img className={`image-produit ${zone}`} src={require('../img/lait.jpg').default}/>
            case "Courgette":
                return <img className={`image-produit ${zone}`} src={require('../img/courgette.jpg').default}/>
            case "Abricot":
                return <img className={`image-produit ${zone}`} src={require('../img/abricot.jpg').default}/>
            case "Asperge":
                return <img className={`image-produit ${zone}`} src={require('../img/asperge.jpg').default}/>
            case "Fraise":
                return <img className={`image-produit ${zone}`} src={require('../img/fraise.jpg').default}/>
        
            default:
                return <img src={defaultImage}/>
        }
    }

    return (
        <>
            {imageProd(productName, zone)}
        </>
    )
}

export default ImageProduit
