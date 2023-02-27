import { NextFunction, Request, Response} from 'express';
import express from 'express';
import Joi from 'joi';
const app = express();
app.use(express.json());


//define schema to validate POST Request
const validate = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
      name: Joi.string().min(6).max(30).required(),
      price: Joi.number().required(),
      category: Joi.string().min(3).max(5).required(),
    });
    // Destructuring the body
    const { name, price, category } = req.body
    const { error } = schema.validate({ name, price, category });
    // Handling Errors
if (error) {
    switch (error.details[0].context.key) {
      case "name":
        res.status(500).json({ message: error.details[0].message });
        break;
      case "price":
        res.status(500).json({ message: error.details[0].message });
        break;
        case "category":
        res.status(500).json({ message: error.details[0].message });
        break;
      default:
        res.status(500).json({ message: "An error occurred." });
        break;
    }
  }
return next();
  }


export default   validate;