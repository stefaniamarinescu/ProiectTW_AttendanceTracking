const express=require('express');
const router=express.Router();
const otherRouter=require('./others');
const userRouter=require('./user');
const eventGroupRouter=require('./eventGroup');
const eventRouter=require('./event');
const userPresentRouter=require('./userPresent');

router.use('/',otherRouter);
router.use('/users',userRouter);
router.use('/eventGroup',eventGroupRouter);
router.use('/event',eventRouter);
router.use('/userPresent',userPresentRouter);

module.exports=router;