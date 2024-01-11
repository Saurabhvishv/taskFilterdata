import express from 'express';

const router = express.Router();


import {registerUser, getData, updatedUser, deleteData, filterByDepartment, ascOrder, decOrder} from "../controllers/userController.js"



router.post('/register', registerUser)
router.get('/getData/:employee_id', getData)
router.put('/update/:employee_id', updatedUser)
router.delete('/delete/:employee_id', deleteData)
router.get('/filterdata/:department', filterByDepartment)
router.get('/fetchASC', ascOrder)
router.get('/fetchDEC', decOrder)

export { router as routes };      