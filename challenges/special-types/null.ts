function returnNull(arg: any): number | null {
  if (typeof arg !== "number") {
    return null;
  }
  return arg;
}

export { returnNull };
