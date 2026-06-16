import styled from "styled-components";
import { breakpoints } from "../../breakpoints ";

export const StlHeaderContainer = styled.div`
display: flex;
align-items: center;
padding: 11px 20px 11px 20px;
border-radius: 15px;
background-color: var(--container-background-color);
@media (min-width: ${breakpoints.tablet}) {
    padding: 16px;
}
`

export const StlBtnLogOut = styled.button`
display: none;
@media (min-width: ${breakpoints.tablet}) {
    display:block;
    margin-left: 16px;
    padding: 12px 28px;
    border: 1px solid var(--border-color);
    border-radius: 30px;

    font-family: Gilroy;
    font-weight: 700;
    font-style: Bold;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 2%;
    color: var(--main-text-color);

    &:hover {
        background-color: var(--main-text-color);
        color: var(--body-background-color);
}
}
`
export const BurgerBtn = styled.button`
  margin-left: 10px;
  width: 28px;
  height: 20px;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;

  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: white;
    transition: 0.3s;
  }

  span:nth-child(1) {
    top: 0;
  }

  span:nth-child(2) {
    top: 9px;
  }

  span:nth-child(3) {
    bottom: 0;
  }
@media (min-width: ${breakpoints.tablet}) {
    display: none;
}
`;