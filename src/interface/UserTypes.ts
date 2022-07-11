export default interface IUser {
  full_name: string;
  email: string;
  email_confirmation: string;
  cpf: string;
  cellphone: string;
  birthdate?: string;
  email_sms?: boolean;
  whatsapp: boolean;
  country: string;
  citt: string;
  postal_code: string;
  address: string;
  number: number;
}
