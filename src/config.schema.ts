import { ConfigModuleOptions } from '@nestjs/config';
import * as Joi from 'joi';

export const configSchema: ConfigModuleOptions = {
  validationSchema: Joi.object({
    MECURIS_DB_HOST: Joi.string().required(),
    MECURIS_DB_PORT: Joi.string().required(),
    MECURIS_DB_USER: Joi.string().required(),
    MECURIS_DB_PASSWORD: Joi.string().required().allow(''),
    MECURIS_DB_NAME: Joi.string().required(),
  }),
  validationOptions: {
    abortEarly: true,
  },
};
