import React from 'react';
import {render} from 'react-dom'
import App from './App'
import index from './assets/css/index.css'


render(
    <App />,
    document.getElementById('root')
)

//react-router知识点
//1、exact
//2、history.push() params.newsid
//3、render={()=>{}}
//4、{...props}
//5、注意两种写法：()=>{}和()=>()