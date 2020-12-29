import bcrypt from 'bcrypt';

export default function handleHash() {
  const makeHash = function (data: any, rounds: number) {
    const salt = bcrypt.genSaltSync(rounds);
    const hash = bcrypt.hashSync(data, salt);
    return hash;
  };

  const validateHash = function (data: any, encrypted: string) {
    const result = bcrypt.compareSync(data, encrypted);
    return result;
  };

  return Object.freeze({
    makeHash,
    validateHash,
  });
}
