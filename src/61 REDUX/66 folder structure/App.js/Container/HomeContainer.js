import React from 'react'
import {connect} from 'react-redux'
import Home from '../Components/Home'
import {add_to_cart} from '../Services/Actions/Actions'
const mapDispatchToProps = dispatch => ({
    add_to_cartHandler: data => dispatch(add_to_cart(data))
})

const mapStateToProps = state => ({

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)