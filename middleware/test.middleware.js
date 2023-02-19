const express = require('express')
const Joi = require('joi')
const app = express();
app.use(express.json());


// function testmiddleware(req, res, next){
//     console.log('I am now in the test middleware')
//     next()
// }

//defince schema
const validate = (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().min(6).max(30).required(),
      price: Joi.number().required(),
      category: Joi.string().min(3).max(5).required(),
    });
    // More logic goes here
    const { name, price, category } = req.body
    const { error } = schema.validate({ name, price, category });
    // Hidden for simplicity
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


module.exports = { validate }