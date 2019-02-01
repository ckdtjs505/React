import React, { Component } from 'react';
import styled from 'styled-components'
import Receive from './receive'
import Send from './send'
import Input from './comps/input'
import Button from './comps/button'
import Flash from './flash'
import Mam from './mam'
import iotaImage from './img/logo.png'

/*

FUMFHAPNIEHJFPIXMWPIAJJSFSPTBOOBPOJQGCQMJSOLOCZWHTIIFPOWKIAFYTHTFGLNOWMXIPKFNYPPR

*/

export default class Pet extends Component {

  constructor() {
    super()
    this.state = {
      mode: null,
      flash: false,
      mam: false,
      seedInput: '',
    }
  }

  render() {
    const { iota, actions, utils } = this.props
    const { balance, creatingRandom, gettingBalance } = iota
    const isConnected = balance || balance === 0
    let { mode, flash, mam } = this.state

    //mode = mode === 'receive' && !addresses ? null : mode
    return (
      <Wallet>
        <Content>

          <img src={iotaImage} style={{ width: "250px", marginTop: "40px" }}></img>

          {!isConnected && <Button title="Random Seed"
            disabled={gettingBalance}
            active={creatingRandom} margin="auto"
            onClick={() =>
              /* 랜덤 시드 생성 함수 추가 */ 
              console.log('랜덤 시드 생성')} 
            />}

          {!isConnected && <Seed>
            <div >
              <Input
                value={this.state.seedInput}
                onChange={(e) => this.setState({ seedInput: utils.validSeed(e.target.value) })}
                placeholder="Enter Seed"
              />
              <Button title="Login" margin="auto"
                disabled={!this.state.seedInput || creatingRandom} active={gettingBalance}
                onClick={() => actions.login(this.state.seedInput)} />
            </div>
          </Seed>}

          {isConnected && <Header mode={mode}>
          <Balance>Balance:&nbsp;&nbsp;{utils.reducer(balance)}&nbsp;</Balance>
          </Header>}
          {isConnected && this.props.flash && <Flash {...this.props} show={flash} />}
          {/* {isConnected && this.props.mam && <Mam {...this.props} show={mam} />} */}
          {isConnected && <Tabs mode={mode}>
            <div>
              <HeaderFab show={mode || flash} onClick={() => {
                this.setState({ mode: null, flash: null })
              }}>
                <X style={{ width: 12, height: 20, stroke: 'white' }} />
              </HeaderFab>
              {this.props.flash && <HeaderFab show
                lineHeight="33px" hideBorder mode={mode}
                onClick={() => this.setState({ flash: true, mam: false, mode: null })}>
                <Lightning style={{ fill: iota.flash ? '#38f9d7' : 'white', height: 18 }} />
              </HeaderFab>}
              {this.props.mam && <HeaderFab show
                lineHeight="29px" hideBorder mode={mode}
                onClick={() => this.setState({ mam: true, flash: false, mode: null })}>
                <Message style={{ fill: iota.mam ? '#38f9d7' : 'white', height: 13 }} />
              </HeaderFab>}
            </div>
            {!mode && <Tab onClick={() => this.setState({ mode: 'send' })}>
              Send
          </Tab>}
            {!mode && <Tab onClick={() => this.setState({ mode: 'receive' })}>
              Receive
          </Tab>}
            <Send {...this.props} hidden={!(mode === 'send')} />
            {mode === 'receive' && <Receive {...this.props} />}
          </Tabs>}
        </Content>
      </Wallet>)
  }
}

const X = ({ style }) => {
  return <svg style={style} viewBox="0 0 60 60">
    <path style={{ strokeWidth: 5, strokeLinecap: 'round' }}
      d="M 15.674663,15.572746 L 44.587629,44.485711 M 45.118838,15.420972 L 15.522889,45.016920"></path>
  </svg>
}

const Lightning = ({ style }) => {
  return <svg style={style} viewBox="0 0 512 512">
    <path d="M302.7,64L143,288h95.8l-29.5,160L369,224h-95.8L302.7,64L302.7,64z" />
  </svg>
}

const Message = ({ style }) => {
  return <svg style={style} viewBox="0 0 24 24">
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
}

const Wallet = styled.div`

`//009dad

const Content = styled.div`
 text-align: center;
`

const Seed = styled.div`

` // Login seed part

const Header = styled.div`
width : 250px;
margin : auto;
border-radius: 10%;
`

const Balance = styled.div`
font-size : 15px;
border-bottom: 1px solid BLACK;
max-width : 250px;
margin: auto;
` // Balance value

const HeaderFab = styled.div`
transition: all .12s ease-in-out;
display: inline-block;
vertical-align: top;
margin-top:11px;
margin-right:9px;
font-size: 9px;
cursor: ${p => p.mode === 'flash' ? 'default' : 'pointer'};
pointer-events: ${p => p.mode === 'flash' ? 'none' : 'auto'};
height: 20px;
width: 20px;
color: white;
background: ${p => p.mode === 'flash' ? 'teal' : '#A9A9A9'};
border: 1px solid ${p => p.hideBorder && p.mode !== 'flash' ? 'transparent' : 'white'};
border-radius: 50%;
text-align: center;
&:hover{
  background: teal;
  border: 1px solid white;
}

line-height: ${p => p.lineHeight || 'auto'};
` // x button , icon button

const Tabs = styled.div`
width : 250px;
margin : auto;
` // Send, Receive Button

const Tab = styled.div`
width : 250px;
margin : auto;
border: 1px solid white;
background: #3F3F3F;
color : white;
  &:first-child{
    border-right: 1px solid white;
    width: calc(50% - 1px);
  }
  &:hover{
    background: ${p => p.active ? 'transparent' : '#A9A9A9'};
    color : white;
  }
  &::before{
    content:"";
    background:white;
    height:1px;
    width:100%;
    position:absolute;
    bottom:-1px;
    left:0px;
  }
`



