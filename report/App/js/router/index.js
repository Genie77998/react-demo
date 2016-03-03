import React from 'react'
import Index from '../components/Index.react'
import Report from '../components/Report.react'
import Result from '../components/Result.react'
const App = React.createClass({
    render() {
        return (
          <div className="container">
                {this.props.children}
          </div>
        )
    }
})
const routes = {
  path: '/',
  component: App,
  indexRoute : {component: Index},
  childRoutes: [
  	{ path: 'index' , component: Index},
    { path: 'report' , component: Report},
    { path: 'result' , component: Result}    
  ]
}
export default routes
