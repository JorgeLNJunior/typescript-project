import { internet, name } from 'faker';

import { EmailService } from '../../src/app/mail/email.service';

describe('Email Service', () => {
  test('should send a email', async () => {
    const email = new EmailService({
      userName: name.firstName(),
      userEmail: internet.email(),
    });

    const spy = jest.spyOn(email, 'send');

    await email.send();
    expect(spy).toHaveBeenCalled();
  });
});
