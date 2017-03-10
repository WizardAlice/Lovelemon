const residences = [{
  value: 'software',
  label: '软件园',
  children: [{
    value: 'softwareProject',
    label: '软件工程',
    children: [{
      value: '2013',
      label: '2013级',
    },{
      value: '2014',
      label: '2014级',
    }],
  },{
    value: 'computer',
    label: '计算机',
    children: [{
      value: '2013',
      label: '2013级',
    },{
      value: '2014',
      label: '2014级',
    }],
  }],
}, {
  value: 'center',
  label: '中心校区',
  children: [{
    value: '',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}]
export{
  residences
}
