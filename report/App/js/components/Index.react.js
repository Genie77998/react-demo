import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
let _img = require('../../images/bxad.jpg')
let _src = '.'+_img
const Index = React.createClass({   
    render() {
        return (
          <div className="index_box">
                <div className="banner">
                    <img src={_src}/>
                </div>
               <div className="linkBtn">
                    <Link to="report">
                        <span className="btn">快速报价</span>
                    </Link>
               </div>
          </div>
        )
    }
});

export default Index
