import React ,{Component} from 'react'
import Highcharts from 'react-highcharts'


const pie = {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false
  },
  title: {
      text: '过去三月各种类书籍借书量占比'
  },
  tooltip: {
      headerFormat: '{series.name}<br>',
      pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
  },        plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
          }
      }
  },
  series: [{
      type: 'pie',
      name: '浏览器访问量占比',
      data: [
          ['文艺',   45.0],
          ['小说',       26.8],
          {
              name: '历史',
              y: 12.8,
              sliced: true,
              selected: true
          },
          ['外文',    8.5],
          ['社会科学',     6.2],
          ['其他',   0.7]
      ]
  }]
}
const vertical = {
    title: {
        text: '图书馆总借书量的月分布',
        x: -20
    },
    credits: {
      text: 'Paint By WizardAlice',
      href: 'http://www.example.com'
    },
    subtitle: {
        text: '数据来源: MYSQL数据库',
        x: -20
    },
    xAxis: {
        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    yAxis: {
        title: {
            text: '数量 (本)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: '本'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [{
        name: '小说',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: '文艺',
        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    }, {
        name: '科学',
        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    }, {
        name: '计算机',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
}

export default class HotChart extends Component{
  state ={
    type : "pie",
    config: {
    }
  }
  componentWillMount(){
    this.setState({type:this.props.type})
    if(this.props.type=="pie"){
      this.setState({config:Object.assign({},pie)})
    }
    else{
      this.setState({config:Object.assign({},vertical)})
    }
    // thie.setState({config:(this.state.type=="pie")?Object.assign({},pie):Object.assign({},vertical)})
  }
  render(){
    
    return (
      <Highcharts config = {this.state.config}></Highcharts>
    )
  }
}