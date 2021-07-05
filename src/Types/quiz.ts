
export interface Alternative {
    value: string,
    text: string,
}

export interface Question {
    question: string,
    correct: string,
    alternatives: Array<Alternative>
}

export interface Quiz {
    title: string,
    description: string,
    questions: Array<Question>
}
