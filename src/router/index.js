import React from 'react'
import {HashRouter as Router ,Route,Link} from 'react-router-dom'
import Main from '../containers/Main'
import Root from '../components/Root'
import ImageDetail from '../containers/ImageDetail'
import Player from '../containers/Player'

const router = (
    <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/image/:id" component={ImageDetail} />
            <Route path="/player" component={Player} />
          </div>
    </Router>
)

export default router