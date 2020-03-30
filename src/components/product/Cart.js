import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import {addCart, addQuantity, reduceQuantity, deleteCart, cancelCart} from '../redux/actions/cart'
import {checkout} from '../redux/actions/order'
import Checkout from './Checkout'
class Cart extends Component {
    state ={
        show: false,
        count: 0,
        id: parseInt(localStorage.getItem('user-id')),
        name: localStorage.getItem('name')
    }
    addCart=(data)=>{
        this.props.dispatch(addCart(data))
    }
    addQuantity=(id) => {
        this.props.dispatch(addQuantity(id))
    }
    reduceQuantity=(id) => {
        this.props.dispatch(reduceQuantity(id))
    }
    deleteCart=(id) => {
        this.props.dispatch(deleteCart(id))
    }
    cancelCart=(data) => {
        this.setState({
            show: false
        })
        this.props.dispatch(cancelCart(data))
    }
    handleShow = () => {
        this.setState({
            show:true
        })
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    }
    // pushClose = (event) => {
    //     event.preventDefault()
    //     this.props.history.push('/history')
    // }
    // checkout = (event) => {
    //     event.preventDefault()
    //     this.setState({
    //         show: true
    //     })
    //     const data = {
    //         id_user: this.state.id,
    //         total: this.props.total,
    //         product: this.props.carts
    //     }
    //     this.props.dispatch(checkout(data))
    // }
    
    render(){
        const {carts, total, parseToRupiah} = this.props
        return(
            <div>
                {carts.map((cart) =>
                    <li class="media" style={{ marginBottom: "10px", paddingTop: "10px", paddingBottom: "10px"}}>
                        <img src={cart.image} class="mr-3" alt="" style={{height:'64px', width:'64px', borderRadius:'12px 12px 12px 12px'}} />
                        <div class="media-body">
                        <h5 class="mt-0 mb-1"><strong>{cart.name}</strong></h5>
                        {parseToRupiah(cart.price)} 
                        <div className="flex-container" style={{display: 'flex', justifyContent : 'center', alignItems: 'baseline', flexWrap:'wrap'}}>
                        <button type="button" className='fa fa-fw fa-minus' style={{border: 'none', backgroundColor: 'transparent', color: '#e91e63'}} onClick={()=>(this.reduceQuantity(cart.id))} />
                        <div type="text" class="form-control" style={{width:'40px', display:'inline', backgroundColor:'transparent', border:'none'}} aria-describedby="basic-addon1" > {cart.quantity} </div>
                        <button type="button" className='fa fa-fw fa-plus' style={{border: 'none', backgroundColor: 'transparent', color: '#e91e63'}} onClick={()=>(this.addQuantity(cart.id))}/>
                        <div>
                        <button type="button" className='fa fa-fw fa-trash' style={{border: 'none', backgroundColor: 'transparent', color: '#e91e63'}} onClick={this.deleteCart}/>
                        </div>
                        </div>
                        </div>
                    </li> 
                )}
                    <Row style={{ fontWeight: "bold" }}>
                    <Col sm={2} style={{ fontSize: "25px" }}>Total: </Col>
                    <Col sm={10} style={{ fontSize: "25px", textAlign:'right' }}>{parseToRupiah(total)}</Col>
                    </Row>
                    <Row>
                        <Col style={{textAlign:'center'}}><button onClick={this.cancelCart}>Cancel</button></Col>
                        <Col style={{textAlign:'center'}}><button onClick={this.handleShow}>Checkout</button></Col>
                    </Row>
                    <Checkout show={this.state.show} onHide={this.handleClose}/>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
    carts: state.carts.carts,
    total: state.carts.total
    }
}
export default connect(mapStateToProps)(Cart)