const connection=require('../models').connection;

const controller={
    resetDB:(req,res)=>{
        connection.sync({force:true})
        .then(res.status(201).send({message:"Baza de date a fost resetata"}))
        .catch((err)=>{
            console.log(err);
            res.status(500).send({message:"Baza de date are probleme"});
        });
    },
};

module.exports=controller;