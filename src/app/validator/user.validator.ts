import Joi from 'joi';

export class UserValidator {
  async create(body: any): Promise<Joi.ValidationResult> {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });

    return schema.validate(body, { stripUnknown: true });
  }
}
