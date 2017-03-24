import React ,{ Component } from 'react'
import cookie from 'react-cookie'
import { Card ,Modal,Button} from 'antd'
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

export default class UserInfo extends Component{
  constructor(props) {
    super(props);
    this.state = {
      src:null,
      cropResult: null,
      loading: false,
      visible: false,
    }
    this.cropImage = this.cropImage.bind(this);
    this.onChange = this.onChange.bind(this);
    this.useDefaultImage = this.useDefaultImage.bind(this);
  }
  onChange(e) {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({ src: reader.result });
    };
    reader.readAsDataURL(files[0]);
  }

  cropImage() {
    if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
      return;
    }
    this.setState({
      cropResult: this.cropper.getCroppedCanvas().toDataURL(),
    });
  }

  useDefaultImage() {
    this.setState({ src });
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  componentDidMount(){
    fetch("http://localhost:3000/getUserInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id:cookie.load('userId')})
    }).then((data)=>{
      return data.json()
    }).then((result)=>{
      let str = "http://ofdukoorb.bkt.clouddn.com/"+result[0].img
      this.setState({src:str})
      result.map((res)=>{
        this.setState(Object.assign({},this.state,res))     
      })
    })
  }

  render(){
    let data = this.state
    console.log(data)
    return(
      <div className="UserInfo" style={{backgroundImage:'URL(http://ofdukoorb.bkt.clouddn.com/'+data.img+')',height:'1000px',backgroundSize:"100%"}}>
        <Card style={{ height: '100%',opacity:'0.5',backgroundColor:"#000",color:"#fff"}}>
          <div style={{textAlign:"center",position:"relative"}}>
            <a onClick={this.showModal} href="javascript:;"><img className="" src={"http://ofdukoorb.bkt.clouddn.com/"+data.img}></img></a>
            <div><h1>name:{data.name}</h1></div>
            <div><h1>id:{data.id}</h1></div>
            <div><h1>address:{data.address}</h1></div>
            <div><h1>phone:{data.phone}</h1></div>
            <div><h1>birthdate:{data.birthdate}</h1></div>
            <div><h1>gender:{data.gender}</h1></div>
            <div><h1>password:{data.password}</h1></div>
          </div>
        </Card>
        <Modal visible={this.state.visible} title="更改头像" onOk={this.handleOk} onCancel={this.handleCancel} footer={[<Button key="back" size="large" onClick={this.handleCancel}>Return</Button>,<Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>提交</Button>,]}>

        <div style={{ width: '100%' }}>
          <input type="file" onChange={this.onChange} />
          <button onClick={this.useDefaultImage}>Use default img</button>
          <br />
          <br />
          <Cropper
            style={{ height: 400, width: '100%' }}
            aspectRatio={16 / 9}
            preview=".img-preview"
            guides={false}
            src={this.state.src}
            ref={cropper => { this.cropper = cropper; }}
          />
        </div>
        <div>

          <div className="box" style={{ width: '50%', float: 'right' }}>
            <h1>Preview</h1>
            <div className="img-preview" style={{ width: '100%', float: 'left', height: 300 }} />
          </div>

          <div className="box" style={{ width: '50%', float: 'right' }}>
            <h1>
              <span>Crop</span>
              <button onClick={this.cropImage} style={{ float: 'right' }}>
                Crop Image
              </button>
            </h1>
            <img style={{ width: '100%' }} src={this.state.cropResult} alt="cropped image" />
          </div>

        </div>
        <br style={{ clear: 'both' }} />
        </Modal>
      </div>
    )
  }
}