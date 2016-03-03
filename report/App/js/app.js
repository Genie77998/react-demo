import '../scss/style.scss'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory , Router } from 'react-router'
import routes from './router'
const rootElement = document.getElementById('myApp')
const init = function(){
	window.addEventListener('load', function() {
	  FastClick.attach(document.body);
	}, false)
	render(<Router routes={routes} history={browserHistory} />, rootElement)
}

if(__PROD__){
	document.addEventListener("DazeJSObjReady", () => {
        init()
    }, false);
}else{
    init()
}



