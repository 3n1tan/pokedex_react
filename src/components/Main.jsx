import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'

const Main = () => {
  return (
    <Wrapper>
        <Outlet />
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
    min-height: 100vh;


`