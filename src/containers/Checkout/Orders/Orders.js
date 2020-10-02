import React, { Component } from 'react';
import Order from '../../../components/Order/Order'
import axios from 'axios'

class Orders extends Component {
    state = {
        orders : []
    }

async componentDidMount(){
    
        try{
            const res = await axios.get('https://cors-anywhere.herokuapp.com/https://chandanrs-burger-builder.firebaseio.com/orders.json')
            // console.log(Object.values(res.data))
            const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
            console.log(fetchedOrders)

                this.setState({loading: false, orders: fetchedOrders});
        }
        catch(err){
            console.log(err)
        }
    

}
    
    render() {
        console.log(this.state.orders)
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                ))}
            </div>
        );
    }
}

export default Orders;