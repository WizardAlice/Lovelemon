import React ,{Component} from 'react'
import ReactHighcharts from 'react-highcharts'


const config = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '2014 某网站各浏览器浏览量占比'
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
          ['Firefox',   45.0],
          ['IE',       26.8],
          {
              name: 'Chrome',
              y: 12.8,
              sliced: true,
              selected: true
          },
          ['Safari',    8.5],
          ['Opera',     6.2],
          ['其他',   0.7]
      ]
  }]
}

export default class HotChart extends Component{
  render(){
    return (
      <ReactHighcharts config = {config}></ReactHighcharts>
    )
  }
}