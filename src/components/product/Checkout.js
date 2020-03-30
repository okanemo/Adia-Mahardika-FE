import React, {Component} from 'react'
import { Modal, Button, Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux'
import {checkout} from '../redux/actions/order'
import { cancelCart } from '../redux/actions/cart'

class Checkout extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            name: localStorage.getItem('name'),
            id: parseInt(localStorage.getItem('user-id')),
        }
    }

    parseToRupiah(number) {
    var rupiah = '';		
    var numberrev = number.toString().split('').reverse().join('')
    for(var i = 0; i < numberrev.length; i++) if(i%3 == 0) rupiah += numberrev.substr(i,3)+'.'
    return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('')
    }

    onChangeValue = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    async checkout(cart) {
        const data = {
            user_id: this.state.id,
            product: this.props.carts,
            total: this.props.total
        }
        await this.props.dispatch(checkout(data))
        await this.props.dispatch(cancelCart(cart))
        this.props.onHide()
    }

    render(){
        const {carts, total} = this.props
        return(
            <Modal show={this.props.show} onHide={this.props.onHIde}>
                <Modal.Header closeButton>
                    <Modal.Title>Checkout</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {carts.map(cart => (
                        <Row>
                            <Col>
                                <ul>{cart.name}</ul>
                            </Col>
                            <Col>
                                <ul>{cart.quantity}</ul>
                            </Col>
                            <Col>{this.parseToRupiah(cart.price * cart.quantity)}</Col>
                        </Row>
                    ))}
                    <Row>{this.parseToRupiah(total)}</Row>
                    <Row>Cashier: {this.state.name}</Row>
                    <Button onClick={()=> this.checkout(carts)}>Confirm</Button>
                </Modal.Body>
            </Modal>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        carts: state.carts.carts,
    total: state.carts.total
    }
}
export default connect(mapStateToProps)(Checkout)