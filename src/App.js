import React,{ Component } from 'react';
// import Aux from './hoc/Auxillary'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Layout from './components/Layout/Layout'
import Checkout from './containers/Checkout/CheckoutContainer'
import { Route,Redirect } from 'react-router-dom'
// import ContactData from './containers/Checkout/ContactData/ContactData'
import Orders from './containers/Checkout/Orders/Orders'

class App extends Component {
  render(){
    return (
     <div>
        
         <Layout>
        
           <Route>
            <Route exact path='/' component={BurgerBuilder} />
            <Route path='/burger-builder' component={BurgerBuilder} />
            <Route path='/orders' component={Orders} />
            <Route path='/checkout' component={Checkout} />
            {/* <Route path='/checkout/contact-data' component={ContactData} /> */}

            <Redirect to='/burger-builder' component={Checkout} />
           </Route>
         
         </Layout>
     </div>
    );
  }
  
}

export default App;
