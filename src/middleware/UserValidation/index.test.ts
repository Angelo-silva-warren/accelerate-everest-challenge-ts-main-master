import IUser from '@interface/UserTypes';
import UserSchema from '@middleware/UserValidation/UserSchema';
import StatusError from '@util/StatusError';
import { Request, Response } from 'express';
import index from '@middleware/UserValidation/index';

const req = {} as Request;
const res = {} as Response;
const next = jest.fn();
const spyValidateAsync = jest.spyOn(UserSchema, 'validateAsync');

describe('createMiddleware', () => {
  it("Should run next without parameters when validation doesn't throw", async () => {
    spyValidateAsync.mockResolvedValue({} as IUser);
    await index(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
  it('Should run next with throwed Error when validation fails', async () => {
    const validationError = new Error();
    spyValidateAsync.mockRejectedValue(validationError);
    await index(req, res, next);
    expect(next).toHaveBeenCalledWith(
      new StatusError(422, `${validationError}`),
    );
  });
});
