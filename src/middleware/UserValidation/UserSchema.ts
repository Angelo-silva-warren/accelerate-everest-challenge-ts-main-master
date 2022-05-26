import Joi from "joi"

const {
  object, string, boolean,
} = Joi.types()

const UserSchema = object.keys({
  full_name: string.required(),
	email: string.required() ,
	email_confirmation: string.required(),
	cpf: string.required() ,
	cellphone: string.required() ,
	birthdate: string.required() ,
	email_sms: boolean,
	whatsapp: boolean,
	country:string.required() ,
	postal_code: string.required() ,
	address: string.required() ,
	number:  string.required() ,
}).or('email_sms', 'whatsapp').options({
  abortEarly : false,
})

export default UserSchema
