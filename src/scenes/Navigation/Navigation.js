import React from 'react'
import styled from 'styled-components'
import { StyledGatsbyLink } from './components/StyledGatsbyLink'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <StyledGatsbyLink to={props.to}>{props.children}</StyledGatsbyLink>
  </li>
)

const MainAppLink = styled(StyledGatsbyLink)`
  text-shadow: none;
  background-image: none;
`

const NavContainer = styled.div`
  margin-bottom: 1.5rem;
`

export const Layout = () => (
  <NavContainer>
    <MainAppLink to="/">
      <h3 style={{ display: `inline` }}>MySweetSite</h3>
    </MainAppLink>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
  </NavContainer>
)
