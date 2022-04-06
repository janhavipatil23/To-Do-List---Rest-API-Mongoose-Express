import Todo from './../models/todo.js';

/**
 * creating a new Todo item  
 * @param {*} todo 
 * @returns new saved todo item
 */
export const save = (newTodo) => {
    const todo = new Todo(newTodo);
    return todo.save();
}

/**
 * Search for items
 * @param {*} params 
 * @returns 
 */
export const search = (query) => {
    const params = {...query };
    return Todo.find(params).exec();
}

/**
 * Get todo item by ID
 * @param {*} id 
 * @returns 
 */
export const get = (id) => {
    const todo = Todo.findById(id).exec();
    return todo;
}

/**
 * Edit a todo item by id
 * @param {*} todo 
 * @returns 
 */
export const update = (updatedTodo) => {
    updatedTodo.modifiedDate = new Date();
    const todo = Todo
        .findByIdAndUpdate(updatedTodo.id, updatedTodo, { new: true })
        .exec();
    return todo;
}

/**
 * Delete a todo item by ID.
 * @param {*} id 
 * @returns 
 */
export const remove = (id) => {
    const todo = Todo.findByIdAndDelete(id).exec();
    return todo;
}