
import styled from 'styled-components'



export const ProgressBarContainer = styled.div`
    flex: 1;
`

export const ProgressBarStatus = styled.div`
    background: #4e924e;
    transition: width 200ms;
    width: ${ ({step}) => (step*100)}%;
    height: ${ step => step !== 0 ? 20: 0 }px;
`
