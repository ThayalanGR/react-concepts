import mongoose, {
    Schema
} from 'mongoose';

const todoItemSchema = Schema({
    item: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});


export default mongoose.model('todo-items', todoItemSchema);