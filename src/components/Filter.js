import React from 'react'

const Filter = ({ count, filterProducts, sortProducts }) => {
    return (
        <div className="filter-container">
            <div className="filter-result">{count} articles</div>
            <div className="filter-sort"> 
                Ordre :{" "} 
                <select onChange={sortProducts}>
                    <option value="" >aucun</option>
                    <option value="LOWEST">Moins chère</option>
                    <option value="HIGHEST">Plus chère</option>
                </select>
            </div>
            <div className="filter-type">
                Catégorie :{" "} 
                <select onChange={filterProducts}>
                    <option value="All">Tous les produits</option>
                    <option value="FRUIT">Fruits</option>
                    <option value="LEGUME">Légumes</option>
                    <option value="AUTRE">Autres</option>
                </select>
            </div>
        </div>
    )
}

export default Filter
