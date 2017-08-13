import React from 'react'
import PropTypes from 'prop-types'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'
import router from './router'

let store = createStore(reducers)

const App = ()=> (
    <Provider store={store}>
        {router}
    </Provider>
)

export default App