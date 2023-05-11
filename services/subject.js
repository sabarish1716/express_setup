const subjectSchema = require('../models/subjects')

exports.createSubject = async (req,res) => {
    let {name , password,email,mobile_number} = req.body
    let obj = {
        name :name,
        email:email,
        mobile_number:mobile_number,
        password:password   
    }
    let data = await subjectSchema.create(obj).then(data =>{
        res.status(200).send("client creaated successfully")
    }).catch((e)=>{
        console.log(e)
        res.status(400).send(e)
    }
    )
}

exports.getAllSubject = async (req,res) =>{
    await subjectSchema.find().then(data=>{
        res.status(200).send({subjects:data})
    }).catch(e=>res.send(e))
}

exports.getSubjectById = async (req,res) => {
    await subjectSchema.findById(req.params.id).then(doc=>{
        res.status(200).send(doc)
    }).catch(e=>res.send(e))
}

exports.updateSubject = async (req,res) =>{
    await subjectSchema.findByIdAndUpdate(req.params.id,req.body).then((doc)=>{
        res.status(200).send(doc)
    }).catch(e=> res.send(e))
}
exports.deleteSubject = async (req,res) =>{
    await subjectSchema.findByIdAndDelete(req.params.id).then(doc=>{
        res.status(200).send(doc)
    }).catch(e=>res.send(e))

}