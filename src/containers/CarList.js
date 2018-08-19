import React, {Component} from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {selectCar} from "../actions"

class CarList extends Component{

    showCars(){
        return this.props.cars.map((
            car
        ) =>{
            return(
                <li onClick={()=> this.props.select(car)} key={car.id} >{car.name}</li>
            )
        })
    }

    render(){
        return (
            <ol>
                {this.showCars()}
            </ol>
        )
    }
}

function MapStateToProps(state) {
    return{
        cars: state.cars
    }
}

function MatchDispatchToProps(dispatch) {
    return bindActionCreators({
        select: selectCar
     }, dispatch)
}

export default connect(MapStateToProps, MatchDispatchToProps)(CarList)