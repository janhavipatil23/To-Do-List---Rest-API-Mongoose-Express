import express from 'express';
import * as todosController from './../controllers/todos-controller.js';

const router = express.Router();
/**
 * Constructs the URL 
 */
router.route('/todos')
    //add a task
    .post(todosController.post)
    //search tasks
    .get(todosController.index);

router.route('/todos/:id')
    .get(todosController.get)
    .put(todosController.update)
    .delete(todosController.remove);


export default router;