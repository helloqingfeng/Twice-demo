import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'antd';

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            txtList:[],
            imgList:{},
            gushiList:{}
         }
    }

    componentDidMount(){
        axios.get('https://v1.hitokoto.cn/?c=f')
        .then((res)=>{
            console.log(res)
            this.setState({
                txtList:res.data
            })
        });
        axios.get('https://img.xjh.me/random_img.php?type=bg&ctype=acg&return=json')
        .then((res)=>{
            console.log(res)
            this.setState({
                imgList:res.data.img
            })
        });
        axios.get('https://api.gushi.ci/all')
        .then((res)=>{
            console.log(res)
            this.setState({
                gushiList:res.data
            })
        })
    }
    
    render() {
        return ( 
            <div className="center">
                <div className="ci-box">
                
                <div style={{ backgroundImage: `url(${this.state.imgList})`}}
                className="ci-bgm">
                </div>
                <div className="ci-content">
                <div className="bracket-left">『</div>
                <p>{this.state.gushiList.content}</p>
                <div className="bracket-right">』</div>
                <p>作者：{this.state.gushiList.author} </p>
                </div>
                </div>

                <Card
                hoverable
                style={{ margin:"0 auto",fontSize:'24px'}}
                cover={<img alt="熊猫" src="https://raw.githubusercontent.com/helloqingfeng/Wendy-pic/master/img/20190815162159.jpg" />}
                >
                <h3 className="beaut-txt">{this.state.txtList.hitokoto}</h3>
                <a href={'https://hitokoto.cn?id='+this.state.txtList.id} target="_blank" rel="noopener noreferrer">
                https://hitokoto.cn?id=+{this.state.txtList.id}</a>
                </Card>
            </div>
         );
    }
}
 
export default Text;