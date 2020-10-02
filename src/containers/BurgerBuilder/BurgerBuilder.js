import React, { Component } from 'react';
// import Aux from '../../hoc/Auxillary'
import { connect } from 'react-redux'
import axios from '../../axios-orders'
import Burger from '../../components/Burger/Burger'
// import BurgerControls from '../../components/Burger/buildControls/buildControls'
import Style from './BurgerBuilder.module.css'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/orderSummary/orderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import BuildControls from '../../components/Burger/buildControls/buildControls'
import Aux from '../../hoc/Auxillary'
import * as actionTypes from '../../store/action'

// const INGREDIENT_PRICES = {
//     salad : 5,
//     cheese : 6,
//     meat : 20,
//     bacon : 10
// }

class BurgerBuilder extends Component {
  // constructor(props){
  //     super(props)
  //     this.state = {

  //     }
  // }

  state = {
    purchasing: false,
    loading: false,
    //error:false
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        // console.log(el)
        return sum + el;
      }, 0);
    // this.setState({purchasable : sum>0})
    return sum > 0;
  }

  // addIngredientHandler = (type) =>{
  //     const oldCount = this.state.ingredients[type]
  //     const updatedCount = oldCount + 1;
  //     const updatedIngredients = {
  //         ...this.state.ingredients
  //     }
  //     updatedIngredients[type] = updatedCount;
  //     const priceAddition = INGREDIENT_PRICES[type]
  //     const oldPrice = this.state.totalPrice;
  //     const newPrice = oldPrice + priceAddition
  //     this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
  //     this.updatePurchaseState(updatedIngredients)
  // }
  // removeIngredientHandler= (type) =>{
  //     const oldCount = this.state.ingredients[type]
  //     const updatedCount = oldCount === 0 ? oldCount : oldCount - 1;
  //     const updatedIngredients = {
  //         ...this.state.ingredients
  //     }
  //     updatedIngredients[type] = updatedCount;
  //     const priceReduction = INGREDIENT_PRICES[type]
  //     const oldPrice = this.state.totalPrice;
  //     const newPrice = oldPrice - priceReduction
  //     this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
  //     this.updatePurchaseState(updatedIngredients)
  // }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.history.push("/checkout");
  };
  async componentDidMount() {
    // const response = await axios.get('https://cors-anywhere.herokuapp.com/https://chandanrs-burger-builder.firebaseio.com/ingredients.json')
    // console.log(response.data)
    // this.setState({
    //     ingredients: response.data
    // })
  }

  render() {
    const disabledInfo = {
      ...this.props.ings,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = this.state.error ? (
      <p>Ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    );
    // let orderSummary =  <OrderSummary ingredients={this.state.ingredients}
    //                 purchaseCancel = {this.purchaseCancelHandler}
    //                 purchaseContinue = {this.purchaseContinueHandler}
    //                 price = {this.state.totalPrice}
    //             />

    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            purchasable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
            price={this.props.price}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          price={this.props.price}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    // console.log(this.state.purchasing)
    return (
      <div className={Style.main}>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
        {/* <Burger ingredients={this.state.ingredients}/>
                <BurgerControls
                    ingredientAdded = { this.addIngredientHandler}
                    ingredientRemoved = { this.removeIngredientHandler}
                    disabled = { disabledInfo}
                    purchasable = {this.state.purchasable}
                    price = {this.state.totalPrice}
                    ordered = {this.purchaseHandler}
                /> */}
      </div>
    );
  }
}
const mapStateToProps =  state => {
    return {
        ings : state.ingredients,
        price: state.totalPrice
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded : (ingName) => dispatch({ type : actionTypes.ADD_INGREDIENT,ingredientName: ingName}),
        onIngredientRemoved : (ingName) => dispatch({ type : actionTypes.REMOVE_INGREDIENT,ingredientName: ingName})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios))