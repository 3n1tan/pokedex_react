import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Card = (props) => {
  return (
    <Wrapper>
        <img src={props.image} alt={props.name} />
        <p>{props.name}</p>
        <Link to={props.name}>See more</Link>
    </Wrapper>
  )
}

export default Card

const Wrapper = styled.div`
    width: 300px;
    border: solid 1px rgb(8, 8, 8);
    border-radius: none;
    position: relative;
    background-color: #FFF3E2;
    color: blue;
    cursor: pointer;

    img {
        height: 50px;
    }

    a {
        text-decoration: none;
        color: red;
        padding: 1rem 1rem;
    }

    a:hover {
        color: blue;
    }
`