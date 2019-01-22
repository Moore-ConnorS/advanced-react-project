import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Shoes from './Components/HOC/Shoes';
import presentational from './Components/Presentational/presentational';
import RenderProps from './Components/RenderProps/RenderProps';
import ShoeRender from './Components/RenderProps/ShoeRender';


export default <Switch>
    <Route exact path='/' component={presentational} />
    <Route path='/hoc' component={Shoes} />
    <Route path='/render-props' render={() => {
        return <RenderProps
            url='/api/products'
            render={(data) => {
                return <ShoeRender data={data} />
            }}
        />
    }} />
</Switch>