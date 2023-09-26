export default function add(a, b) {
  if (!a || !b) {
    throw Error("The add function requires 2 arguments");
  }

  return a + b;
}
