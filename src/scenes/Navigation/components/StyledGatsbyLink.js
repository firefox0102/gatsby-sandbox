import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled.div`
  display: inline-block;
  margin-right: 1rem;
`

export const StyledGatsbyLink = props => (
  <StyledLink>
    <Link to={props.to}>{props.children}</Link>
  </StyledLink>
)

StyledGatsbyLink.propTypes = {
  to: PropTypes.string.isRequired,
}
