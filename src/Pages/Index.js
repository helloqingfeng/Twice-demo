import React, { Component } from 'react';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="beaut-txt">
                <p className="image">
                <img src="https://raw.githubusercontent.com/helloqingfeng/Wendy-pic/master/img/20190816185118.jpg" alt="付佳美"/>
                </p>
               
            <h3 className="center">入吾室者，但有清风；对吾饮者，惟当明月</h3>
            <hr></hr>
                <p> <b>王国维喜欢春天：</b>四时可爱唯春日，一事能狂便少年。</p>
                <p> <b>杜甫喜欢夏天：</b>黄四娘家花满蹊，千朵万朵压枝低。</p>
                <p> <b>陶渊明喜欢秋天：</b>采菊东篱下，悠然见南山。</p>
                <p> <b>白居易喜欢冬天：</b>晚来天欲雪，能饮一杯无？</p>
                <p> <b>还是宋朝那个和尚说的好：</b>春有百花秋有月，夏有凉风冬有雪。若无闲事挂心头，便是人间好时节。</p>
                
            </div>
        );
    }
}
 
export default Index;