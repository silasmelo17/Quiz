// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'

import Quiz from "@Models/quiz"
import Question from "@Models/question"



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = JSON.parse(req.body);

    const questions_id = await Question.insertMany(body.questions);
    questions_id.map(question => question._id);

    const result = await Quiz.insertMany([{
        questions: questions_id,
        ...body
    }]);

    return res.status(200).json(result);
}
