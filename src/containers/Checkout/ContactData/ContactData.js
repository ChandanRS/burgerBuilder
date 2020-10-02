import React,{Component} from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import Button from '../../../components/UI/Button/Button'
import Styles from './ContactData.module.css'
import {Route} from 'react-router-dom'
import Orders from '../Orders/Orders'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import { connect } from 'react-redux'

class ContactData extends Component{
    state = {
        name : '',
        address: '',
        email:'',
        pin:'',
        loading: false
    }

    nameInputHandler=event=>{
        event.preventDefault()
        this.setState({
            name:event.target.value  
        })
    }

    addressInputHandler=event=>{
        event.preventDefault()
        this.setState({
            address:event.target.value  
        })
    }

    emailInputHandler=event=>{
        event.preventDefault()
        this.setState({
            email:event.target.value  
        })
    }


    pinInputHandler=event=>{
        event.preventDefault()
        this.setState({
            pin:event.target.value  
        })
    }

    submitHandler = e =>{
        e.preventDefault();
        // alert(`${this.state.name} ${this.state.address} ${this.state.email} ${this.state.pin}`)
        this.setState( { loading: true } );
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            customer: {
                name: this.state.name,
                address:  this.state.address,
                email: this.state.email
            },
            deliveryMethod: 'fastest'
        }
        console.log(order)
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false  } );
                // this.props.history.push('/')
            } )
            .catch( error => {
                console.log(error)
                this.setState( { loading: false } );
            } );
    }   

    render(){
      console.log(this.props)
        return this.state.loading ? (
          <Spinner />
        ) : (
          <Form className={Styles.FormContainer}>
            <h3 className={Styles.contactHeader}>
              Please Enter Your Contact Data
            </h3>

            <InputGroup className="mb-3 m-auto col-lg-6">
              <FormControl
                value={this.state.name}
                onChange={this.nameInputHandler}
                placeholder="Your Name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <InputGroup className="m-auto mb-3 col-lg-6">
              <FormControl
                value={this.state.email}
                onChange={this.emailInputHandler}
                placeholder="Your Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <InputGroup className="m-auto mb-3 col-lg-6">
              <FormControl
                // value={this.state.address}
                onChange={this.addressInputHandler}
                placeholder="Your Address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <InputGroup className="m-auto mb-4 col-lg-6">
              <FormControl
                value={this.state.pin}
                onChange={this.pinInputHandler}
                placeholder="Your Pin Code"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <Button
              btnType="Success"
              type="submit"
              clicked={this.submitHandler}
              className={["Styles.submitBtn", "col-lg-4"].join(", ")}
            >
              ORDER
            </Button>
            <Route path='/orders' render={()=> <Orders />} />
            <Route
              path={this.props.match.path + "/orders"}
              component={Orders}
            />
          </Form>
        );
    }
}
const mapStateToProps =  state => {
  return {
      ings : state.ingredients,
      price: state.totalPrice
  }
}

export default connect(mapStateToProps)(ContactData);