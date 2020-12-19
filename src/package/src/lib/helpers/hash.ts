export default function hash(string) {
  let hased = `${string}${Math.random() * 100}`;
  return {
    getHash: () => hased,
  };
}
