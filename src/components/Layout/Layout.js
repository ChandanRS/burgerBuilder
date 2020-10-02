import React,{ Component } from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidedrawer from '../../components/Navigation/Toolbar/Sidedrawer/sidedrawer'
import Aux from '../../hoc/Auxillary'
import Styles from './Layout.module.css'

class Layout extends Component {
    state = {
        showSideDrawer : false
    }

    sideDrawerCloseHandler=()=>{
        this.setState({
            showSideDrawer : false
        })
    }
    sideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return { showSideDrawer : !prevState.showSideDrawer}
        })
    }

    render(){
        return (
            <Aux>
                <Sidedrawer open = {this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} />
                <Toolbar openSideDrawer={this.sideDrawerToggleHandler} />
                <main className={Styles.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
    
} 

export default Layout;