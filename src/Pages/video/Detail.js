import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Comment, List,Card, Layout,Avatar } from 'antd';
const { Sider, Content } = Layout;
const { Meta } = Card;

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {},
            user:{},
            talks:[]
        }
    }

    componentDidMount() {
        axios.get('https://cors-anywhere.herokuapp.com/' +
            `https://cnodejs.org/api/v1/topic/${this.props.match.params.bid}`)
            .then((res) => {
                console.log(res);
                this.setState({
                    detail: res.data.data,
                    user:res.data.data.author,
                    talks:res.data.data.replies
                })
            }).catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <Layout>
            <Content>
                <h3><Link to='/video/flutter/'>返回列表</Link></h3>
                <h2>{this.state.detail.title}</h2>
                <hr></hr>
                <p>原文链接：
                <a href={`https://cnodejs.org/topic/${this.state.detail.id}`} target="_blank" rel="noopener noreferrer">{`https://cnodejs.org/topic/${this.state.detail.id}`}
                    </a>
                </p>
                <div dangerouslySetInnerHTML={{ __html:this.state.detail.content }} />
               
            <div>
            <List
                className="comment-list"
                header={`${this.state.talks.length} 评论`}
                itemLayout="horizontal"
                dataSource={this.state.talks}
                renderItem={item => (
                <li>
                    <Comment
                    author={item.author.loginname}
                    avatar={item.author.avatar_url}
                    content={<div dangerouslySetInnerHTML={{ __html: item.content }} />}
                    />
                </li>
                )}
            />
             </div>
            </Content>
            <Sider width={300} theme={'light'}>
             <Card
            style={{ width: 300 }}
            cover={
            <img
            alt="example"
            src="https://raw.githubusercontent.com/helloqingfeng/Wendy-pic/master/img/20190815162513.gif"
                />
                }
            >
                <Meta
                avatar={<Avatar src={this.state.user.avatar_url} />}
                title={this.state.user.loginname}
                description="两袖清风"
                />
            </Card>
            </Sider>
      </Layout>
        );
    }

    

}

export default Detail;