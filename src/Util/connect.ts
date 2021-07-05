
import mongoose from 'mongoose'

const user = "QuizApi"
const password = "qp3iuxOU79iQOaX3"
const database = "Quiz"

mongoose.connect( `mongodb+srv://${user}:${password}@personalcluster.epfkf.mongodb.net/${database}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export default mongoose
