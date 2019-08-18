import React from 'react';
import {  Route, Link, Redirect } from "react-router-dom";
import Reactpage from './video/Reactpage';
import Vue from './video/Vue';
import Flutter from './video/Flutter';

function Video(){
    let videoRoute=[
        {path:'/video/reactpage/',title:'iOS 开发',exact:false,component:Reactpage},
        {path:'/video/vue/',title:'前端开发',exact:false,component:Vue},
        {path:'/video/flutter/',title:'Node.js 技术',exact:false,component:Flutter}
    ]

    return(
        <div>
            <div className="topnav">
                <ul>
                    {
                        videoRoute.map((item,index)=>{
                            return(
                            <li key={index}><Link to={item.path}>{item.title}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className="videocontent">
                {
                    videoRoute.map((item,index)=>{
                        return(
                        <div key={index}>
                        <Redirect to="/video/reactpage/" />
                        <Route path={item.path} component={item.component}  key={index}/>
                        </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default Video;