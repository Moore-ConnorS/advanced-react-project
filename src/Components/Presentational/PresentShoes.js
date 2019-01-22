import React, { Component } from 'react'

export default class PresentShoes extends Component {
    render() {
        const shoeList = this.props.shoes.map(shoe => {
            return (
                <div key={shoe.id}>
                    <div>{shoe.name}</div>
                    <div>{shoe.price}</div>
                    <div><img src={shoe.image} /></div>
                </div>
            )
        })
        return (
            <div>
                {shoeList}
            </div>
        )
    }
}