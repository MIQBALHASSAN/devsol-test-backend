import Cars from '../models/car.model';
import Users from '../models/user.model';
import { generateMessages } from '../utils/generate-message';
import helper from '../utils/middlewares/helper';

class Car {
  constructor() {}

  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      let user = await Users.findOne({ email: email });

      if (!user) throw generateMessages('NO_RECORD_FOUND');

      if (user && !(password === user.password))
        throw generateMessages('PASSWORD_INCORRECT');

      res.status(200).json({ status: true, message: 'SUCCESS', user });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async addCarInfo(req, res, next) {
    try {
      const { model, price, phone, city, noOfImg, images } = req.body;

      const car = new Cars({
        model,
        price,
        phone,
        noOfImg,
        images,
      });

      await car.save();

      res
        .status(200)
        .json({ status: true, message: 'Car information added successfully!' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Car;
