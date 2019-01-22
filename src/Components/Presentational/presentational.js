import React, { Component } from 'react'
import axios from 'axios'

import PresentShoes from './PresentShoes'

export default class presentational extends Component {
    constructor() {
        super()
        this.state = {
            shoes: []
        }
    }

    componentDidMount() {
        axios.get('/api/products').then(res => {
            this.setState({
                shoes: res.data
            })
        })
    }
    render() {

        return (
            <div>
                <PresentShoes shoes={this.state.shoes} />
            </div>
        )
    }
}