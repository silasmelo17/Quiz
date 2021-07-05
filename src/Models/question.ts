
import mongoose from '@Util/connect'



const QuestionSchema = new mongoose.Schema({
    text: {
        type: "String",
        required: true
    },
    correct: {
        type: "Number",
        required: true
    },
    alternatives: {
        type: ["String"],
        required: true
    }
})



const collectionName = "Questions"

const Question = mongoose.models[collectionName] || mongoose.model( collectionName, QuestionSchema, collectionName );

export default Question
