import * as crypto from 'crypto-js';

export const generateMD5 = (value: string): string => {
  return crypto.MD5(value).toString();
};
