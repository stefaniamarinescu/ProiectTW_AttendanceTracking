const express=require('express');
const router=express.Router();
const otherControllers=require('../controllers').other;

router.get('/reset',otherControllers.resetDB);
module.exports=router;