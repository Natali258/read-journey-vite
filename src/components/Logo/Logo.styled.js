import styled from 'styled-components';
import { breakpoints } from '../../breakpoints ';
import Icon from '../Icon/Icon';

export const StlLogoContainer = styled.div`
display: inline-flex;
gap: 4px
`
export const LogoIcon = styled(Icon)`
  width: 42px;
  height:17px;
  
`

export const StlLogoText = styled.span`
display: none;
@media (min-width: ${breakpoints.tablet}) {
    display: inline-block;
    font-family: Gilroy;
    font-weight: 700;
    font-style: Bold;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 2%;
    text-transform: uppercase;
    color: var(--main-text-color);
  }
`