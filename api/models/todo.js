import mongoose from 'mongoose';

/**
 * Defines the structure of the collection
 */
const Schema = new mongoose.Schema({
    taskName: {
        type: String,
        required: 'Task Name is required'
    },
    taskDescription: {
        type: String,
        required: 'Task Description is required'
    },
    dueDate: {
        type: String,
        required: 'Due Date is required'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    modifiedDate: {
        type: Date,
        default: Date.now
    }
}, { skipVersioning: true });

// Schema.virtual('id', () => this._id.toHexString());
// Schema.set('toJSON', { virtuals: true });

const model = mongoose.model('todo', Schema);

export default model;