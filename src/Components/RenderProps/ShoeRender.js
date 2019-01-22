import React from 'react';

function ShoeRender(props) {
    const shoeList = props.data.map(shoe => {
        return (
            <div>
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

export default ShoeRender