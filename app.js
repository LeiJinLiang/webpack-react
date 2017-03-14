import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
require('./style.css');


const rootRoute = {
    childRoutes: [ {
        path: '/',
        component: require('./components/Main'),
        childRoutes: [
            require('./routes/Calendar'),
            require('./routes/Course')
        ]
    } ]
}

render((
    <Router
        history={browserHistory}
        routes={rootRoute}
    />
), document.getElementById('app'))