import {body , validationResult} from "express-validator"

export const registerValidator = [
    body("name")
    .exists().withMessage("name is required")
    .trim()
    .isString().withMessage("name should be a string")
    .isLength({min:2 , max:50}).withMessage("Name must be between 2 to 50  characters"),

    body("email")
    .exists().withMessage("eamil is required")
    .trim()
    .isEmail().withMessage("Enter a valaid email"),

    body("passwordHash")
    .exists().withMessage("Password is required")
    .isString().withMessage("password must be a string")
    .trim()
    .isLength({min:6}).withMessage("password must be at least 6 characters long"),

    (req , res , next) =>{
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                message:"invalaid request",
                errors:errors.array()
            })
        }

        next()
    }
]

export const loginValidator = [
    body("email")
    .exists().withMessage("Enter is required")
    .trim()
    .isEmail().withMessage("Enter a valaid email")
    .isString().withMessage("Email must be a string"),

    body("password")
    .exists().withMessage("Password is required")
    .isString().withMessage("Password must be a string")
    .trim()
    .isLength({min:6}).withMessage("Password must be atleast 6 characters"),

    (req , res , next)=>{
      const errors = validationResult(req);

      if(!errors.isEmpty()){
        return res.status(400).json({
            message:"Invalid request",
            errors:errors.array()
        })
      }

      next()
    }
]