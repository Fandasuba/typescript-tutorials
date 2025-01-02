function checkUndefined(value: string | undefined) {
  if (value === undefined) {
    return undefined;
  }
  return value;
}

export { checkUndefined };
