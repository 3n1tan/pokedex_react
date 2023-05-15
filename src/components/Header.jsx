import React from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <Container>
        <h1>3N1TAN</h1>
        <div className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pokemons">Pokemon-List</NavLink>

        </div>
        

    </Container>
  )
}

export default Header


const Container = styled.div`
    h1 {
        color: black;
    }

    h1:hover {
        color: red;
    }

    div a{
        text-decoration: none;
        color: blue;
    }



`