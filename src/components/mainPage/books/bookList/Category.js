import React,{Component} from 'react'
import {Card,Icon} from 'antd'

export default class Category extends Component{
  render(){
    return (
     <Card title={<h2><Icon type="book" /> 图书分类</h2>}>
        <Card title="小说">
          <div className="subClass">
            <a href="#">悬疑</a>|
            <a href="#">言情</a>|
            <a href="#">历史</a>|
            <a href="#">社会</a>
          </div>
        </Card>
        <Card title="文艺">
          <div className="subClass">
              <a href="#">文学传记</a>|
              <a href="#">艺术摄影</a>|
              <a href="#">青春</a>|
              <a href="#">青春文学</a>
              <br />
              <a href="#">动漫</a>|
              <a href="#">幽默</a>
          </div>
        </Card>
        <Card title="励志/成功">
          <div className="subClass">
            <a href="#">修养</a>|
            <a href="#">成功</a>|
            <a href="#">职场沟通</a>
          </div>
        </Card>
        <Card title="少儿">
          <div className="subClass">
            <a href="#">0-2</a>|
            <a href="#">3-6</a>|
            <a href="#">7-10</a>|
            <a href="#">11-14</a>|
            <a href="#">科学</a>|
            <a href="#">图画书</a>
            <br />
            <a href="#">文学</a>|
            <a href="#">英语</a>
          </div>
        </Card>
        <Card title="生活">
          <div className="subClass">
            <a href="#">两性</a>|
            <a href="#">孕期</a>|
            <a href="#">育儿</a>|
            <a href="#">亲子关系</a>|
            <a href="#">美妆</a>
            <br />
            <a href="#">手工DIY美食</a>
            <a href="#">旅游休闲</a>|
            <a href="#">家庭家居</a>|
            <a href="#">风水占卜</a>
          </div>
        </Card>
        <Card title="人文社科">
          <div className="subClass">
            <a href="#">历史古迹</a>|
            <a href="#">哲学</a>|
            <a href="#">家教文化政治</a>|
            <a href="#">军事</a>
            <br />
            <a href="#">法律</a>|
            <a href="#">社会科学</a>|
            <a href="#">心理学</a>
          </div>
        </Card>
        <Card title="管理">
          <div className="subClass">
            <a href="#">经济</a>|
            <a href="#">金融</a>|
            <a href="#">营销</a>|
            <a href="#">会计</a>|
            <a href="#">信业</a>
            <br />
            <a href="#">投资理财</a>
          </div>
        </Card>
        <Card title="科技">
          <div className="subClass">
            <a href="#">科普</a>|
            <a href="#">建筑</a>|
            <a href="#">医学</a>|
            <a href="#">计算机</a>|
            <a href="#">农林</a>
            <br />
            <a href="#">自然科学</a>
            <a href="#">工业通信</a>
          </div>
        </Card>
        <Card title="教育">
          <div className="subClass">
            <a href="#">教材</a>|
            <a href="#">外语</a>|
            <a href="#">考试</a>|
            <a href="#">中小学教辅</a>
          </div>
        </Card>
        <div className="allClass">
          <a href="#"><Icon type="plus-circle-o" /><h2>全部分类</h2></a>
        </div>
      </Card> 
    )
  }
}