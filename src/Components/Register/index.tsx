
import Head from 'next/head'

import { Form, QuizTitle, QuizDescription, PlusQuestion, Label, ContentColumn } from './style'
import { QuizNext } from '@Components/Quiz/style'

import SwitchButton from '@Components/SwitchButton'
import { FormEvent } from 'react'



export default function Register () {

    const onSubmitPreventDefault = (e:FormEvent ) => {
        e.preventDefault()
    }
 
    return(<>
        <Head>
            <title>Register quiz</title>
        </Head>
        <Form action="" onSubmit={onSubmitPreventDefault} method="POST">
            <QuizTitle 
                type="text" 
                name="title" 
                placeholder="Titulo"
                autoComplete="off"
            />
            
            <ContentColumn>
                <Label htmlFor="description">
                    Descrição
                </Label>
                <QuizDescription
                    id="description" 
                    name="description"
                />
            </ContentColumn>

            <ContentColumn>
                <Label>
                    <span>
                        Questões randômicas
                    </span>
                    <SwitchButton id="q_random" />
                </Label>

                <Label>
                    <span>
                        Alternativas randômicas
                    </span>
                    <SwitchButton id="a_random" />
                </Label>
            </ContentColumn>

            <ContentColumn>
                <Label>Questões</Label>


                <PlusQuestion>+</PlusQuestion>
            </ContentColumn>

            <QuizNext type="submit">
                Enviar
            </QuizNext>
        </Form>
    </>)
}
