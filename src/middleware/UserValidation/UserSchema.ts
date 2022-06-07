import Joi from 'joi';

const UserSchema = Joi.object()
  .keys({
    full_name: Joi.string().min(3).required(),
    email: Joi.string().required(),
    email_confirmation: Joi.string().email().valid(Joi.ref('email')).required(),
    cpf: Joi.string().required(),
    cellphone: Joi.string().min(11).max(13).required(),
    birthdate: Joi.date().required(),
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
