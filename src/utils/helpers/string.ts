export const snakeCase = (name: string) => {
  return name
    ?.replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "_")
    .toLowerCase();
}

export const isEmpty = (value: string) => value.trim().length === 0