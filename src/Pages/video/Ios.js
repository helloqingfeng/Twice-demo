import React, { Component } from 'react';
import axios from 'axios';

class Ios extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            titleList:[]
         }
    }

    componentDidMount(){
        axios.get('https://gank.io/api/data/iOS/20/2')
        .then((res)=>{
            console.log(res);
            this.setState({
                titleList:res.data.results
            })
        })
        .catch((error)=>{
            console.log('获取失败'+error)
        })
    }
    
    render() { 
        return ( 
            <div>
                {
                    this.state.titleList.map((item,index)=>{
                        return(
                            <ul key={index}>
                                <li>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">  
                                    {item.desc}
                                </a>
                                </li>
                            </ul>
                        )
                    })
                }
            </div>
         );
    }
}
 
export default Ios;