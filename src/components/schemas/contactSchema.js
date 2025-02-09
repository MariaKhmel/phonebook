import { string, number, object } from "yup";

const contactSchema = object.shape({
  name: string().min(3).max(50).required(),
  number: number().min(3).max(50).required()
})

export { contactSchema };