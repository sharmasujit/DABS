import Joi from "joi";

const registerDTO =  Joi.object({
    name:Joi.string().min(2).max(50).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(8).max(25).required(),
    confirmPassword:Joi.string().equal(Joi.ref('password')).required().messages({"any.only":"Password and Confirm password doesnot match"}),
    phone:Joi.string(),
    address:Joi.string()
})


export default registerDTO;