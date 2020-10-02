import React from 'react';
import Style from './Burger.module.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const Burger = (props) =>{
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            // console.log(igKey)
            return <BurgerIngredient key={igKey+i} type={igKey} />
        })
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[])

    if(transformedIngredients.length === 0){
        transformedIngredients = <p style={{marginLeft: "25%"}}>Please start adding ingredients</p>
    }

  

    // console.log(transformedIngredients)
    return (
        <div className={Style.Burger}>
            <BurgerIngredient type="bread-top" />
                {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )

}

export default Burger