import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import {addCart, addQuantity, reduceQuantity, deleteCart} from '../redux/actions/cart'

class Cart extends Component {
    addCart=(data)=>{
        this.props.dispatch(addCart(data))
    }
    addQuantity=(id) => {
        this.props.dispatch(addQuantity(id))
    }
    reduceQuantity=(id) => {
        this.props.dispatch(reduceQuantity(id))
    }
    deleteCart=(data) => {
        this.props.dispatch(deleteCart(data))
    }
    render(){
        const {carts, total, parseToRupiah} = this.props
        console.log(this.props)
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
                        <button type="button" className='fa fa-fw fa-trash' style={{border: 'none', backgroundColor: 'transparent', color: '#e91e63'}} onClick={this.deleteQuantity}/>
                        </div>
                        </div>
                        </div>
                    </li> 
                )}
                    <Row style={{ fontWeight: "bold" }}>
                    <Col sm={3} style={{ fontSize: "25px" }}>Total: </Col>
                    <Col sm={9} style={{ fontSize: "25px" }}>Rp. {total}</Col>
                    </Row>
                    <div>Checkout</div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    console.log(state)
    return{
    carts: state.carts.carts
    }
}
export default connect(mapStateToProps)(Cart)