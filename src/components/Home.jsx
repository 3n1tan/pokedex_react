import React from 'react'
import { styled } from 'styled-components'

const Home = () => {
  return (
    <Container>
        <h1>Welcome to the world of Pokedex</h1>
    </Container>
  )
}

export default Home

const Container = styled.div`
    h1 {
        color: red;
    }
`