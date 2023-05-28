import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react'
import Rect from './Rect'

class App extends Component{

  constructor(props){
    super()
    this.state = {
      counter:0,
      msg:'count start!',
      flg:true
    }
    
    this.doAction = this.doAction.bind(this)  
  }

  doAction(event){
    this.setState({
      counter:this.state.counter + 1,
      msg : this.state.counter,
      flg:!this.state.flg
  })
  }
  render(){
  return <div>
    <h1 className='bg-primary text-white display-4'>{this.title}</h1>
    <div className='container'>
      <p className='subtitle'>Count number</p>
    {
    this.state.flg ?
    <div className='alert alert-warning text-right'>
      <p className='alert alert-warning' >count:{this.state.msg}</p>
    </div>
    :
    <div className='alert alert-warning text-left'>
        <p className='alert alert-warning'>{this.state.msg}です</p>
    </div>
    }
    <div className='text-center '>
      <button className='btn btn-primary' onClick={this.doAction}>Click</button>
    </div>
    </div>
    </div>
  }
}

export default App;
