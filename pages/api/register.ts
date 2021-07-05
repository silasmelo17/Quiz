// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'

import Quiz from "@Models/quiz"
import Question from "@Models/question"
import mongoose from '@Util/connect';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = JSON.parse(req.body);

    const questions_id = await Question.insertMany(body.questions);
    questions_id.map(question => question._id);

    const result = await Quiz.insertMany([{
        ...body,
        questions: questions_id
    }]);

    return res.status(200).json(result);
}
