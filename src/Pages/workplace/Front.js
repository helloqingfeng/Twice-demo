import React from "react";
import axios from "axios";
import ProductList from "./ProductList";

// 容器组件（父组件）
class Front extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        webList:[]
    }
}

    componentDidMount(){
        axios.get('https://cors-anywhere.herokuapp.com/' +
        'http://gank.io/api/data/拓展资源/30/1')
        .then((res)=>{
            this.setState({
                webList:res.data.results
                    })
        })
        .catch((error)=>{
            console.log('获取失败'+error)
        })
    }

    render() {
        return (
            <div>
                <ProductList webList={this.state.webList}></ProductList>
            </div>
        )
    }

}
export default Front;