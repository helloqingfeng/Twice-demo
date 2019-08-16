import React, { Component } from 'react';
import axios from 'axios';

class Girl extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            imglist:[]
         }
    }

    componentDidMount() {
        axios.get('https://easy-mock.com/mock/5d3734d52cac0e2b10c4be18/twice001/girl')
            .then((res) => {
                this.setState({
                    imglist: res.data.results
                })
            })
            .catch((error) => {
                console.log('axos 数据获取失败' + error)
            })
    }

    render() {
        return (
            <div className="gridgirl">
            {
                this.state.imglist.map((item, index) => {
                    return (
                    <div key = { index } >
                    <img src={item.url}  alt="美女" width="750px"/>
                    </div>
                    )
                })
            } 
            </div>
        );
    }

   
}
 
export default Girl;