const containsForbiddenChars = (str: string, forbiddenChars: string[]) => {
  return forbiddenChars.some(char => str.includes(char));
};

export const validateEmail = (email: string): string | boolean => {
  const invalidChars = [' ', ',', ';', '<', '>', '(', ')', '[', ']', '\\', '"', '$', '%', '^', '*'];
  const minLength = 7;
  const maxLength = 60;
  const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (email.includes('@')) {
    const [localPart, domain] = email.split('@', 2);

    if (!localPart.length || !domain.length) {
      return 'Email should contain an "@" symbol with text before and after it. ';
    } else {
      const domainParts = domain.split('.');
      const isDomainInvalid = domainParts.length < 2
        || domainParts.some(part => !part.length)
        || domainParts[0].length === 0
        || domainParts[domainParts.length - 1].length === 0;

      if (isDomainInvalid) {
        return 'Email should contain a "." symbol (not the first or last character). ';
      }
    }

    if (email.length < minLength || email.length > maxLength) {
      return 'Email length should be between ' + minLength + ' and ' + maxLength + ' characters. ';
    }

    if (containsForbiddenChars(email, invalidChars)) {
      return `Email contains forbidden characters: (${invalidChars.join(' ')}). `;
    }
  } else {
    return 'Email should contain an "@" symbol. ';
  }

  if (!emailPattern.test(email)) {
    return 'Invalid email address format. ';
  }

  return true;
};

export const firstNameValidation = {
  required: 'First Name is required',
  minLength: {
    value: 2,
    message: 'First Name must be at least 2 characters long',
  },
  maxLength: {
    value: 30,
    message: 'First Name must be no more than 30 characters long',
  },
};

export const lastNameValidation = {
  required: 'Last Name is required',
  minLength: {
    value: 2,
    message: 'Last Name must be at least 2 characters long',
  },
  maxLength: {
    value: 30,
    message: 'Last Name must be no more than 30 characters long',
  },
};

export const emailValidation = {
  required: 'Email is required',
  maxLength: {
    value: 50,
    message: 'Email must be no more than 50 characters long',
  },
  validate: validateEmail,
};

export const messageValidation = {
  required: 'Message is required',
  minLength: {
    value: 10,
    message: 'Message must be at least 10 characters long',
  },
  maxLength: {
    value: 500,
    message: 'Message must be no more than 500 characters long',
  },
};