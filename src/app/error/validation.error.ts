import { HttpError } from './http.error';

export class ValidationError extends HttpError {
  constructor(errors: string[]) {
    super(400, 'validation error', errors);
  }
}
