import React from "react";
import { publicRouters } from "../router/route";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";


const AppRouter = ()=>{
    return (
        <Switch>
            {publicRouters.map(route =>
                <Route component={route.component}
                       path={route.path}
                       exact={route.exact}
                       key={route.path}
                />
            )}
            <Redirect to='/it-industrial-private' />
        </Switch>
    )
}

export default AppRouter
