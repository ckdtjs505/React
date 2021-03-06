import React, { Component } from 'react';
import styled from 'styled-components'
import Input from './comps/input'
import Button from './comps/button'

export default class Send extends Component {

  constructor(){
    super()
    this.state={
      recipient:'',
      amount:''
    }
  }

  componentDidMount(){
    if(!this.props.recipient){
      setTimeout(()=>{
        //this.addressInputRef.focus()
      },150)
    }
  }

  componentWillReceiveProps(newProps){
    //console.log('newProps',newProps)
  }

  onSubmit = () => {
    console.log('send iota')
    this.props.actions.sendTransfer(this.state.recipient, parseInt(this.state.amount))
  }

  render(){
    const {iota, hidden, utils} = this.props
    const {sendingTransfer} = iota
    if (hidden) return <span />
    return <Content>
        <Input type="text" 
          placeholder= "Send to Address"
          innerRef={r=>this.addressInputRef=r}
          onChange={(e)=>this.setState({recipient:utils.validSeed(e.target.value)})}
          value={this.state.recipient}
          width="100%" />
        
          <Input type="text" 
            placeholder= "Amount"
            onChange={(e)=>this.setState({amount: utils.validAmount(e.target.value)})}
            value={this.state.amount}
            width="50%" />
         
    
        <Button title="Send" active={sendingTransfer}
            onClick={this.onSubmit} margin="auto"
            disabled={!this.state.recipient || !this.state.amount || sendingTransfer} />
    </Content>
  }
}

const Content = styled.div`
  overflow:hidden;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
`


