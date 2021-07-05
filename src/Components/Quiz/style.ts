
import styled from 'styled-components';



export const QuizContainer = styled.section`
    max-width: 600px;
    margin: 10px 40px;
    background: white;
    border-radius: 4px;
    box-shadow: 4px 4px 8px #ccc;
`

export const QuizNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background: #f74242;
    color: white;
    padding: 8px 0;

    & > span {
        font-size: 16px;
        font-weight: 600;
    }
`

export const QuizTitle = styled.h1`
    font-size: 42px;
    text-align: center;

    padding: 60px 0;
    margin: 0;
`




export const QuizContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
`

export const QuestionContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0;

    margin: 48px 0;
`

export const QuizQuestion = styled.article`
    & > p {
        font-size: 18px;
        font-weight: 400;
        text-align: center;
    }
`

export const QuizOption = styled.div`
    display: flex;
    align-items: center;
    transition: background 200ms;

    &:hover {
        background: #ccc;
    }

    & > input {
        display: none;
    }

    & > label {
        flex: 1;
        padding: 8px 16px;
        cursor: pointer;
        transition: background 100ms;
    }

    & > input:checked + label {
        background: #4e924e;
        color: white;
    }
`

export const QuizNext = styled.button`
    padding: 8px 48px;
    margin-left: auto;
    background: #f74242;
    
    color: white;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2px;
    
    cursor: pointer;
    
    border: 0;
    border-radius: 4px;
    box-shadow: 2px 2px 4px #ccc;
    transition: background 200ms;

    &:disabled {
        background: #ccc;
    }
`