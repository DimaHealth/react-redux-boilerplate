import React, {Component} from "react"
import {connect} from "react-redux"

class Detail extends Component{
    render(){
        if (!this.props.car){
            return(
                <div>
                    Выберите автомобиль
                </div>
            )
        }
        return(
            <div>
                <h2>{this.props.car.name}</h2>
                <img src={this.props.car.img} alt=""/>
                <p>Описание: {this.props.car.desc}</p>
                <p>Скорость: {this.props.car.speed}, Вес {this.props.car.weight}</p>
            </div>

        )
    }

}

function MapStateToProps(state) {
    return{
        car: state.active
    }
}


export default connect(MapStateToProps)(Detail)