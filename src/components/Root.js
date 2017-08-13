import React from 'react'
import {Link} from 'react-router-dom'

class Root extends React.Component{
    constructor(props){
        console.log('root props is:')
        console.log(props)
        super(props)
    }
    render(){
        return (
            <div>
                <h1>我爱美美</h1>
                
            <Link to="/imgs">美美的照片</Link>
            </div>
        )
    }
}

export default Root