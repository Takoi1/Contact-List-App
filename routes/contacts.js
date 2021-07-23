const express = require('express');
const router = express.Router();
const contact = require('../models/contact')




router.get('/',async(req,res) =>{
  
    res.send('test')
})

//add new contact
router.post('/',async(req,res)=>{
    try {
        // const {name,URL}=req.body
        const newContact=new contact(req.body)
        const findContact= await contact.findOne({email:req.body.email})
        if(findContact){
         return   res.status(400).send('contact already exists')
        }
        await newContact.save()
        res.status(200).send({msg:"contact added",contact:newContact}) 
    } catch (error) {
        res.status(500).send({msg:"server error",error})
    }
})


//get all conatcs
router.get('/all',async(req,res) =>{
    try{
        const contacts=await contact.find()
    res.status(200).send({msg:"get contact successfully",contacts})}
    catch(error){
        res.status(500).send({msg:"server error",error})
    }

})


// router.put('/:id',async(req,res)=>{
//     try {
        
//         const movie= await Movie.updateOne({_id:req.params.id},{ $set:{...req.body} })
       
//         res.status(200).send({msg:"movie updated"}) 
//     } catch (error) {
//         res.status(400).send({msg:"user not found",error})
//     }

// })
// router.get('/:id',async(req,res)=>{
//     try {
        
//         const movie= await Movie.findOne({_id:req.params.id})
       
//         res.status(200).send(movie) 
//     } catch (error) {
//         res.status(400).send({msg:"user not found",error})
//     }

// })


//deltete one contact y id
router.delete('/:id',async(req,res)=>{
    try {
        
       await contact.deleteOne({_id:req.params.id})
       
        res.status(200).send({msg:"deleted"}) 
    } catch (error) {
        res.status(400).send({msg:"user not found",error})
    }

})


//get one contact by id
router.get('/:id',async(req,res)=>{
    try {
        
        const user= await contact.findOne({_id:req.params.id})
        if(!user){
       
            res.status(400).send({msg:"user not found", user})
        }
        res.send({
            msg:"contact found",
            user
        })
    } catch (error) {
        res.status(400).send({msg:"user not found",error})
    }

})
//update by id
router.put('/:id',async(req,res)=>{
    try {
        
        const updateContact= await contact.updateOne(
            {_id:req.params.id},
            { $set:{...req.body} })
       
        res.status(200).send({msg:"contact updated"}) 
    } catch (error) {
        res.status(400).send({msg:"user not found",error})
    }

})

module.exports = router ;