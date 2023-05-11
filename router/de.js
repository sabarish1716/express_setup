const express = require('express')
const router = express.Router()
const subjectService = require('../services/subject')

router.post('/create',async (req,res)=>{
   return await subjectService.createSubject(req,res).then((doc)=>{}).catch((e)=>{
    console.log(e)
   })

})

router.get('/get',async (req,res)=>{
    return await subjectService.getAllSubject(req,res).catch(e=>res.send(e))
})

router.get('/get/:id',async (req,res)=>{
    return await subjectService.getSubjectById(req,res).catch(e=>res.send(e))
})

router.delete('/delete/:id',async (req,res)=>{
    return await subjectService.deleteSubject(req,res).catch(e=>res.send(e))
})
router.put('/update/:id',async (req,res)=>{
    return await subjectService.updateSubject(req,res).catch()
})

module.exports = router