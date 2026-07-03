import s from 'styled-components';
import { breakpoints } from '../../breakpoints ';

export const MyBookContainer = s.div`
display: flex;
flex-direction: column;
gap: 40px;
padding: 40px 20px;
border-radius: 30px;
background-color: var(--container-background-color);
@media (min-width: ${breakpoints.tablet}) {
  gap: 32px;
  padding: 40px;
  padding-bottom: 25px;
}
@media (min-width: ${breakpoints.desktop}) {
  gap: 44px;
}
`
export const MyBookTitle = s.p`
display: inline-block;
font-weight: 700;
font-size: 20px;
line-height: 100%;
letter-spacing: 0.02em;
color: var(--main-text-color);
@media (min-width: ${breakpoints.tablet}) {
    font-size: 28px;
    line-height: 114%;
}
`
export const MyBookBox = s.div`
text-align: center;
@media (min-width: ${breakpoints.desktop}) {
    width: 767px;
}
`
export const MyBookImg = s.img`
width: 137px;
height: 208px;
@media (min-width: ${breakpoints.tablet}) {
    width: 169px;
    height: 256px;
}
`

export const MyBookName = s.p`
margin-top: 10px;
margin-bottom: 4px;
font-weight: 700;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
color: var(--main-text-color);
@media (min-width: ${breakpoints.tablet}) {
    margin-top: 25px;
    font-size: 20px;
    line-height: 100%;
}
    @media (min-width: ${breakpoints.desktop}) {
    width: 400px;
    margin: 0 auto;
    margin-top: 25px;
}
`

export const MyBookAuthor = s.p`
margin-bottom: 20px;
font-family: var(--font-family);
font-weight: 500;
font-size: 10px;
line-height: 120%;
letter-spacing: -0.02em;
color: var(--grey-text-color);
@media (min-width: ${breakpoints.tablet}) {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 129%;
}
@media (min-width: ${breakpoints.desktop}) {
    margin-bottom: 25px;
}
`

// Button

export const IconButton = s.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #fff;
  background: #0f0f0f;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition: transform 200ms ease;

  &:hover {
    transform: scale(1.08);
  }

    ${({ $active }) =>
    $active &&
    `
      ${Inner} {
        width: 18px;
        height: 18px;
        border-radius: 4px;
        transform: scale(1.15) rotate(90deg);
      }
    `}
@media (min-width: ${breakpoints.tablet}) {
  width: 50px;
  height: 50px;
}
`

export const Inner = s.div`
  width: 30px;
  height: 30px;
  background: #ff0000;
  border-radius: 50%;
  transition: transform 200ms ease;
  text-align: center;
@media (min-width: ${breakpoints.tablet}) {
  width: 40px;
  height: 40px;
}
`
