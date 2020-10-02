import React,{Component} from 'react';
import StyleSheet from'./BurgerIngredients.module.css'
import propTypes from 'prop-types'


class BurgerIngredient extends Component{

render(){
    let ingredient = null;

    switch (this.props.type){
        case ('bread-bottom'):
            ingredient = <div className = {StyleSheet.BreadBottom}></div>
            break;
        case ('bread-top'):
            ingredient =(
                <div className = {StyleSheet.BreadTop}>
                    <div className = {StyleSheet.Seeds1}>
                        <div className = {StyleSheet.Seeds2}>
                    </div>
                    </div>
                </div>
            ) 
            break;
        case ('meat'):
            ingredient = <div className = {StyleSheet.Meat}></div>
            break;
        case ('cheese'):
            ingredient = <div className = {StyleSheet.Cheese}></div>
            break;
        case ('salad'):
            ingredient = <div className = {StyleSheet.Salad}></div>
            break;
        case ('bacon'):
            ingredient = <div className = {StyleSheet.Bacon}></div>
            break;

    default : 
                ingredient = null;
    }

    return ingredient;
}

}


BurgerIngredient.propTypes = {
    type : propTypes.string.isRequired
}
export default BurgerIngredient;