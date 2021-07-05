
import React from 'react'

import { ChangeEvent } from 'react';
import { useQuiz } from './context';
import {
    QuizContainer,
    QuizNumber,
    QuizTitle,
    QuizContent,
    QuizQuestion,
    QuizOption,
    QuestionContainer,
    QuizNext
} from './style'

import ProgressBar from '@Components/ProgressBar';



const QuizAlternatives = () => {
    const { currentAlternatives, questionSelected, selectAlternative } = useQuiz();

    const onChangeSelectedQuestion = ( e:ChangeEvent<HTMLInputElement> ) => {
        selectAlternative(e.target.value);
    }

    return(<>
        {currentAlternatives.map( ({ value, text }) => (
            <QuizOption>
                <input
                    type="radio"
                    name="question"
                    value={value}
                    id={`@id_option_${value}`}
                    checked={questionSelected===value}
                    onChange={onChangeSelectedQuestion}
                />
                <label htmlFor={`@id_option_${value}`}>
                    <p style={{ margin: 0 }}>
                        {value}. It's the {text} alternative.
                    </p>
                </label>
            </QuizOption>
        ))}
    </>)
}

const QuizResult = () => {
    const {  } = useQuiz();

    return(<>

    </>)
}



export default function Quiz() {
    const {
        quizTitle,
        quizDescription,
        questionNumber,
        questionLength,
        currentQuestion,
        questionSelected,
        progressQuiz,
        startQuestion,
        nextQuestion
    } = useQuiz();



    return (<>
        <QuizContainer>
            <QuizNumber>
                { progressQuiz !== 'BEGINNING' &&
                    <span>
                        Pergunta {questionNumber} de {questionLength}.
                    </span>
                }
            </QuizNumber>
            <QuizTitle>{quizTitle}</QuizTitle>

            <QuizContent>

                <QuizQuestion>
                    { progressQuiz === 'BEGINNING' && quizDescription }
                    { progressQuiz === 'STARTED' && currentQuestion }
                    { progressQuiz === 'COMPLETED' && <>
                        <p>Parabêns, você completou todas as {questionLength} perguntas do quiz.</p>
                        <p>Confira o resultado clicando no botão abaixo</p>
                    </> }
                </QuizQuestion>

                <QuestionContainer>
                    { progressQuiz === 'STARTED' && <QuizAlternatives />}
                </QuestionContainer>


                {progressQuiz === 'BEGINNING' && <QuizNext onClick={startQuestion}>Start</QuizNext>}
                {progressQuiz === 'STARTED' && 
                    <QuizNext
                        disabled={questionSelected === ''}
                        onClick={nextQuestion}
                    >
                        {(questionNumber < questionLength) ? "NEXT": "FINISH"}
                    </QuizNext>
                }
                {progressQuiz === 'COMPLETED' && 
                    <QuizNext
                        onClick={() => {}}
                    >
                        Result
                    </QuizNext>
                }
            </QuizContent>

            {
                progressQuiz !== 'BEGINNING' && 
                <ProgressBar 
                    step={ progressQuiz === 'STARTED'
                        ? (questionNumber-1)/questionLength 
                        : 1
                    } 
                />
            }
        </QuizContainer>
    </>)
}