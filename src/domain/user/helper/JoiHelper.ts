import Joi from 'joi';
import util from '../../../util/util';
import User from '../mocks/UserMock';
import UserHelper from './UserHelper';

const UserSchema = Joi.object()
  .keys({
    full_name: Joi.string().min(3).required(),
    email: Joi.string()
      .email()
      .custom((value, helpers) => {
        if (UserHelper.emailCheck(value, User)) {
          return value;
        }
        return helpers.error('Email Ja Cadastrado');
      })
      .required(),
    email_confirmation: Joi.string().email().valid(Joi.ref('email')).required(),
    cpf: Joi.string()
      .min(11)
      .max(14)
      .custom((value, helpers) => {
        if (util.cpfCheck(value)) {
          return value;
        }
        return helpers.error('CPF invalid');
      })
      .required(),
    cellphone: Joi.string().min(11).max(13).required(),
    birthdate: Joi.date().iso().required(),
    email_sms: Joi.boolean(),
    whatsapp: Joi.boolean(),
    country: Joi.string().required(),
    city: Joi.string().required(),
    postal_code: Joi.string().length(8).required(),
    address: Joi.string().required(),
    number: Joi.number().required(),
  })
  .or('email_sms', 'whatsapp')
  .options({
    abortEarly: false,
  });

export default UserSchema;
