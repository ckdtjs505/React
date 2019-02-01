import React from 'react';
import styled from 'styled-components'

const I = props => {
  return <Content width={props.width}>
    <Input {...props} type={props.type || 'text'} />
    <Label value={props.value}>
      {props.label}
    </Label>
    
  </Content>
}

const Content = styled.div`
  
`

const Input = styled.input`
  

}
`

const Label = styled.label`
  
`

export default I
