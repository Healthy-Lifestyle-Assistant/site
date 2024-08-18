import { TFunction } from 'i18next';

interface ValidationRule {
  required: string;
  minLength: {
    value: number;
    message: string;
  },
  maxLength: {
    value: number;
    message: string;
  }
}

export const createValidationRules = (
  minLegnth: number,
  maxLength: number,
  requiredMessage: string,
  minLengthMessage: string,
  maxLengthMessage: string,
): ValidationRule => ({
  required: requiredMessage,
  minLength: {
    value: minLegnth,
    message: minLengthMessage,
  },
  maxLength: {
    value: maxLength,
    message: maxLengthMessage,
  },
});

const containsForbiddenChars = (str: string, forbiddenChars: string[]) => {
  return forbiddenChars.some(char => str.includes(char));
};

export const validateEmail = (email: string, t: TFunction): string | boolean => {
  const invalidChars = [' ', ',', ';', '<', '>', '(', ')', '[', ']', '\\', '"', '$', '%', '^', '*'];
  const minLength = 7;
  const maxLength = 60;
  const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (email.includes('@')) {
    const [localPart, domain] = email.split('@', 2);

    if (!localPart.length || !domain.length) {
      return t('contact.validation.email.missingTextAroundAtSymbol');
    } else {
      const domainParts = domain.split('.');
      const isDomainInvalid = domainParts.length < 2
        || domainParts.some(part => !part.length)
        || domainParts[0].length === 0
        || domainParts[domainParts.length - 1].length === 0;

      if (isDomainInvalid) {
        return t('contact.validation.email.invalidDomainFormat');
      }
    }

    if (email.length < minLength || email.length > maxLength) {
      return t('contact.validation.email.lengthOutOfRange', { minLength, maxLength });
    }

    if (containsForbiddenChars(email, invalidChars)) {
      return t('contact.validation.email.forbiddenCharacters', { forbiddenChars: invalidChars.join(' ') });
    }
  } else {
    return t('contact.validation.email.missingAtSymbol');
  }

  if (!emailPattern.test(email)) {
    return t('contact.validation.email.invalidFormat');
  }

  return true;
};
