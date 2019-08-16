import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Index from './Pages/Index';
import Video from './Pages/Video';
import Workplace from './Pages/Workplace';
import About from './Pages/About';
import 'antd/dist/antd.css';
import {Layout } from 'antd';
const { Header,Footer, Content } = Layout;

function AppRouter(){
    let routeConfig=[
        {path:'/',title:'博客首页',exact:true,component:Index},
        {path:'/video/',title:'技术资源',exact:false,component:Video},
        {path:'/workplace',title:'日常生活',exact:false,component:Workplace},
        {path:'/about',title:'关于我',exact:false,component:About}
    ]
    return(
        <Router>
            <Layout>
                <Header>
                    <h1 style={{color:'coral',fontSize:'40px'}} className="center">明月清风</h1>
                </Header>
            <Content>
            <div className='maindiv'>
            <div className="leftnav">
                    <h1>个人博客</h1>
                    <ul>
                        {
                            routeConfig.map((item,index)=>{
                                return(
                                    <li key={index}><Link to={item.path}>{item.title}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="rightmain">
                    {
                        routeConfig.map((item,index)=>{
                            return(
                                <Route path={item.path} exact={item.exact} component={item.component} key={index}
                                ></Route>
                            )
                        })
                    }
                    
                </div>
                </div>
            </Content>
            <Footer><h3 className="center">
                <img src="https://api.gushi.ci/all.svg" 
                style={{maxWidth:'100%'}} alt="gushi" /><copyright>Copyright © 2019 </copyright>
            </h3>
            </Footer>
            </Layout>
            
        </Router>
    )
}

export default AppRouter;