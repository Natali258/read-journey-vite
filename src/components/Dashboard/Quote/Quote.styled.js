import s from 'styled-components'
import { breakpoints } from '../../../breakpoints '

    export const QuoteUl = s.ul`
    display: none;
    @media (min-width: ${breakpoints.desktop}) {
        display: flex;
        flex-direction: row;
        gap: 14px;
        padding: 15px 20px 15px 20px;
        border-radius: 12px;
        background-color: var(--select-background-color);
    }
    `

    export const QuoteLiImg = s.li`
    display: flex;
    align-items: center;
    `
    export const QuoteLiText = s.li`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 15px;
    line-height: 129%;
    letter-spacing: -0.02em;
    color: var(--grey-text-color);
    `

    export const QuoteLiTextSpan = s.span`
    color: var(--main-text-color);
    `