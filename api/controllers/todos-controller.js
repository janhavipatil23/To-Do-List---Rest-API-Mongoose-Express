import * as todosService from './../services/todos-services.js'
/**
 * Function for success response
 * @param {*} data 
 * @param {*} response 
 */
const setErrorResponse = (error, response) => {
    response.status(500);
    response.json(error);
}

/**
 * Function for error response 
 * @param {*} message 
 * @param {*} response 
 */
const setSuccessResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

/**
 * Creates a new todo on POST method  
 * @param {*} request 
 * @param {*} response returns the saved todo item
 */
export const post = async(request, response) => {
    try {
        const payload = request.body;
        const todo = await todosService.save(payload);
        setSuccessResponse(todo, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

/**
 * Returns all updated todo by task name or task description
 * @param {*} request 
 * @param {*} response returns all the todo items in the collection
 */
export const index = async(request, response) => {
    try {
        const taskName = request.query.taskName;
        const taskDescription = request.query.taskDescription;
        const query = {};
        if (taskName) {
            query.taskName = taskName;
        }
        if (taskDescription) {
            query.taskDescription = taskDescription;
        }
        const todos = await todosService.search(query);
        setSuccessResponse(todos, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

/**
 * Returns todo item for a given id
 * @param {*} request 
 * @param {*} response 
 */
export const get = async(request, response) => {
    try {
        const id = request.params.id;
        const todo = await todosService.get(id);
        setSuccessResponse(todo, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

/**
 * Updates todo item for a given id
 * @param {*} request 
 * @param {*} response 
 */
export const update = async(request, response) => {
    try {
        const id = request.params.id;
        const updated = {...request.body };
        updated.id = id;
        const todo = await todosService.update(updated);
        setSuccessResponse(todo, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

/**
 * Deletes todo item for a given id
 * @param {*} request 
 * @param {*} response 
 */
export const remove = async(request, response) => {
    try {
        const id = request.params.id;
        const todo = await todosService.remove(id);
        setSuccessResponse({ message: `Sucessfully Removed ${id}` }, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}