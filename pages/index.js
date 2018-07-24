import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default () => (
  <Container>
    <h1>HELLO OTA !</h1>
    <p>Welcome to Idol Platform by Ota-Ingredients</p>
  </Container>
)
