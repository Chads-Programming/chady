import {
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';
import { v4 as isUUID } from 'uuid';

export function IsUUIDArray(validationOptions?: ValidationOptions) {
  // biome-ignore lint/complexity/noBannedTypes: Object is a required tyoe for metadata
  return (object: Object, propertyName: string) => {
    registerDecorator({
      name: 'isUUIDArray',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        // biome-ignore lint/suspicious/noExplicitAny: value is for metadata
        validate(value: any, args: ValidationArguments) {
          if (!Array.isArray(value)) {
            return false;
          }

          return value.every((uuid) => isUUID(uuid));
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be an array of valid UUIDs`;
        },
      },
    });
  };
}
