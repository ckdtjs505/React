import React, { Component } from 'react';
//import ReactDOM from 'react-dom'
//import './app.css';
import IotaProvider from './lib'
import Wallet from './wallet'
import styled, {injectGlobal} from 'styled-components'

// const seeds = [
//   'V9SLUPAIGRIMWZQFRRMZJSCVREPJWRGWWZUDWI9WRELTIHSVDHYNRGWWOFOJZVJXQGKGKSK9MLIBZSGFF',
//   'MXYYKEHWREFHFXC9SWJVTBNPPIAUUUM9XUITFIJEQMITPVME9UBGTYFEMOLYJFQFNVOAAWYFDSMDBZSNL'
// ]

// const spinner = require('./ajax-loader-small.gif')

class App extends Component {

  render() {
    return (
      <Body>
        <div>
          <IotaProvider {...this.props}>
            <Wallet mam />
          </IotaProvider>
        </div>
      </Body>
    );
  }
}

export default App

injectGlobal`
  html{
    height:100%;
    width:100%;
    background: #f2f2f2;
  }
  body {
    background: #f2f2f2;
  }
}
`

const Body = styled.div`
  height:100%;
`
