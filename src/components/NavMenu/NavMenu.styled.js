import styled from "styled-components";
import { NavLink } from 'react-router-dom'

export const StlNavContainer = styled.div`
display:flex;
`

export const StlNavUl = styled.ul`
display:inline-flex;
margin: 0;
margin-left: 334px;
gap: 40px;
`

export const StlNavLink = styled(NavLink)`
font-family: Gilroy;
font-weight: 500;
font-style: Medium;
font-size: 16px;
line-height: 18px;
letter-spacing: -2%;
text-decoration: none;
color: var(--main-text-color);
`