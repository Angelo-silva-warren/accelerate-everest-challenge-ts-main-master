import Joi from 'joi';
import util from '../../../util/util';
import User from '../mocks/UserMock';
import UserHelper from './UserHelper';

const UserSchema = Joi.object()
  .keys({

    email: Joi.string()
      .email()
      .custom((value, helpers) => {
        if (UserHelper.emailCheck(value, User)) {
          return value;
        }
        return helpers.error('Email Ja Cadastrado');
      })
      .required(),

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

  })
  .or('email_sms', 'whatsapp')
  .options({
    abortEarly: false,
  });

export default UserSchema;
