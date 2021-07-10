
import type { NextApiRequest, NextApiResponse } from 'next'

import Quiz from "@Models/quiz"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const result = await Quiz
        .findById( req.query._id )
        .populate('Questions')

    return res.status(200).json(result);
}
