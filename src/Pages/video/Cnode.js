import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import axios from 'axios';
import Detail from './Detail';

class Cnode extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tapList:[],
            listid:''
         }
    }

    componentDidMount(){
        axios.get('https://cnodejs.org/api/v1/topics')
        .then((res)=>{
            this.setState({
                tapList:res.data.data
            })
        })
        .catch((error)=>{
            console.log('获取失败'+error)
        })
    }

    render() {
        return (
            <Router>
            <Switch>
            <Route path="/video/flutter/" exact>
            <ul>
            {
                this.state.tapList.map((item,index)=>{
                return(
                    <li key={index}>
                    <Link to={`/video/flutter/${item.id}`}>{item.title}</Link>
                    </li>
                )
                })
            }
            </ul>
            </Route>
            <Route path={'/video/flutter/:bid'} component={Detail}></Route>
        </Switch>
        </Router>
        );
    }
}
 
export default Cnode;