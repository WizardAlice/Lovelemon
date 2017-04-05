import React ,{Component} from 'react' 
import cookie from 'react-cookie'
import ReactHighcharts from 'react-highcharts'

const config = {
    legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
    },
    xAxis: {
        categories: ['种类'],
        labels: {
            x: -10
        }
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: '金额'
        }
    },
    series:  []
    
}
export default class  Chart extends Component{
    state={
        lala:false
    }

    componentDidMount(){
        let string = "http://localhost:3000/biao"+"?userid="+cookie.load('userid')
        fetch(string,{
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }).then((data)=>{
            return data.json()
        }).then((result)=>{
            result.map((res,index)=>{
                let data={
                    type: 'column',
                    name:'',
                    data:[]
                }
                data.name=res.typeName
                data.data[0]=res.count
                config.series.push(data)
            })
            this.setState({
                lala:true
            })

        })
    }
    render(){
        console.log(config.series)
        return(
            <ReactHighcharts config = {config}/>
        )
    }
}