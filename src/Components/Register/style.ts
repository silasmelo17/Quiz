
import styled from 'styled-components'



export const Form = styled.form`
    display: flex;
    flex-direction: column;

    max-width: 600px;
    margin: 10px 40px;
    background: white;
    border-radius: 4px;
    box-shadow: 4px 4px 8px #ccc;
    padding: 40px;
`

export const Content = styled.section`
    display: flex;
    margin-top: 40px;

    & + & {
        margin-top: 20px;
    }
`

export const ContentColumn = styled(Content)`
    flex-direction: column;
`

export const Label = styled.label`
    margin-bottom: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;

    & > span {
        margin-right: 10px;
    }
`

export const QuizTitle = styled.input`
    background: transparent;
    border: 0;
    color: #757575;

    font-size: 28px;
`

export const QuizDescription = styled.textarea`
    padding: 4px 8px;
    border-color: #ccc;
    border-radius: 4px;
`

export const PlusQuestion = styled.button`
    border: 0;
    background: transparent;
    padding: 8px 16px;
    cursor: pointer;

    &:hover {
        background: #eee;
    }
`