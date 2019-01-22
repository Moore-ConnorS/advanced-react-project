import React from 'react';
import hoc from './hoc';

function Shoes(props) {
    const shoeList = props.data.map(shoe => {
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

export default hoc(Shoes, '/api/products')