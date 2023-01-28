/**
 * Replaces the string with the object key value
 * @param obj - object to be replaced
 * @param data - string to be replaced
 * @param variableIdentifiers
 * @returns string
 *
 * @example
 * replacer({ name: "Rayhan", age: 26 }, "my name is #name# and my age is #age#", ["#_#", "{{_}}"])
 * // returns "my name is Rayhan and my age is 26"
 *
 * replacer({ name: "Rayhan", age: 26 }, "my name is #name# and my age is #age#", ["#_#", "{{_}}", "%_%"])
 * // returns "my name is Rayhan and my age is 26"
 *
 */
function replacer(
  variables: { [key: string]: any },
  data: string,
  variableIdentifiers: string[] = ["#_#", "{{_}}", "%_%"]
) {
  let newString = data;
  const keys = Object.keys(variables);
  keys.forEach((key) => {
    variableIdentifiers.forEach((identifier) => {
      const [start, end] = identifier.split("_");
      let regEx = new RegExp(`${start}\\s*${key}\\s*${end}`, "g");
      newString = newString.replace(regEx, variables[key]);
    });
  });

  return newString;
}

export default replacer;
