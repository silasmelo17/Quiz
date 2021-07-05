
import { 
    createContext, 
    useContext,
    useEffect,
    useState,
} from "react";

import { Alternative, Quiz } from '@Types/quiz'



interface QuizProps {
    data: Quiz,
    children: Element
}

interface QuizParams {
    quizTitle: string;
    quizDescription: string;
    questionNumber: number;
    questionLength: number;
    currentQuestion: string;
    currentAlternatives: Array<Alternative>;
    questionSelected: string;
    startQuestion: () => void;
    nextQuestion: () => void;
    selectAlternative: (value: string) => void;
    progressQuiz: string;
}



const QuizContext = createContext<QuizParams>({} as QuizParams);

export function QuizProvider ({ data, children }: QuizProps) {
    const [quizTitle] = useState<string>(data.title);
    const [quizDescription] = useState<string>(data.description);

    const [questionNumber, setQuestionNumber] = useState<number>(1);
    const [questionLength] = useState<number>(data.questions.length)

    const [currentQuestion, setCurrentQuestion] = useState<string>('');
    const [currentAlternatives, setCurrentAlternatives] = useState<Array<Alternative>>([]);
    const [questionSelected, setQuestionSelected] = useState<string>('');
    const [ responsesQuestions, setResponsesQuestions ] = useState<Array<string>>([]);

    const [ progressQuiz, setProgressQuiz ] = useState<string>('BEGINNING');



    useEffect( () => {
        const question = data.questions[questionNumber-1]

        setCurrentQuestion(question.question);
        setCurrentAlternatives(question.alternatives);
    }, [questionNumber] )



    const startQuestion = () => {
        setQuestionNumber(1);
        setProgressQuiz("STARTED");
        setResponsesQuestions([]);
    }

    const nextQuestion = () => {
        if( questionNumber === questionLength )
            setProgressQuiz('COMPLETED');
        
        setResponsesQuestions( responses => [ ...responses, questionSelected ] );
        setQuestionNumber( old => 
            (old + 1) <= questionLength 
                ? old + 1
                : old
        );
        setQuestionSelected('');
    }

    const selectAlternative = (value: string) => {
        setQuestionSelected(value);
    }

    const calculateResultQuiz = () => {
        return data.questions.map( ({ question, correct }, index) => ({
            question, correct,
            selected: responsesQuestions[index] 
        }))
    }



    const params: QuizParams = {
        quizTitle,
        quizDescription,
        questionNumber,
        questionLength,
        currentQuestion,
        currentAlternatives,
        questionSelected,
        startQuestion,
        nextQuestion,
        selectAlternative,
        progressQuiz
    }

    return (
        <QuizContext.Provider value={params}>
            {children}
        </QuizContext.Provider>
    );
}

export const useQuiz = () => useContext<QuizParams>(QuizContext);
