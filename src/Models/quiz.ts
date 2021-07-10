
import mongoose from '@Util/connect'



const QuizSchema = new mongoose.Schema({
    title: {
        type: "String",
        required: true
    },
    description: {
        type: "String",
        required: true,
    },
    randomQuestions: {
        type: "Boolean",
        required: true,
    },
    randomAlternatives: {
        type: "Boolean",
        required: true,
    },
    questions: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Questions"
    }
});



const collectionName = "Quizzes"

const Quiz = mongoose.models[collectionName] || mongoose.model( collectionName, QuizSchema, collectionName );

export default Quiz
