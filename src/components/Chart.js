import React ,{Component} from 'react'
import {Highcharts} from 'highcharts'

require('highcharts/modules/exporting')(Highcharts)

const config = {
  chart: {
      type: 'column'
  },
  title: {
      text: 'My first Highcharts chart'
  },
  xAxis: {
      categories: ['苹果', '香蕉', '橙子']   //指定x轴分组
  },
  yAxis: {
      title: {
          text: 'something'
      }
  },
   series: [{                                //指定数据列
      name: '小明',                          //数据列名
      data: [1, 0, 4]                        //数据
  }, {
      name: '小红',
      data: [5, 7, 3]
  }]
}

export default Chart = ()=>{
  return(
    Highcharts.chart('container', {options})
  )
}