import Joi from 'joi';

const { object, string, boolean, date } = Joi.types();

const UserSchema = object
  .keys({
    full_name: string.min(3).required(),
    email: string.required(),
    email_confirmation: string.required(),
    cpf: string.min(11).max(14).required(),
    cellphone: string.min(11).max(13).required(),
    birthdate: date,
    email_sms: boolean,
    whatsapp: boolean,
    country: string.required(),
    postal_code: string.required(),
    address: string.required(),
    number: string.required(),
  })
  .or('email_sms', 'whatsapp')
  .options({
    abortEarly: false,
  });

export default UserSchema;
