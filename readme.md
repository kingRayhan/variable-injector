## Welcome to the Variable Injector

The `variable-injector` package is a powerful tool for replacing variables in strings. It allows you to easily replace variables in a string with their corresponding values, using a flexible and customizable syntax.

### Features

- **Flexible variable syntax**: The Replacer package supports any variable syntax you want to use, whether it's `{{variable}}`, `#variable#`, or `%variable%`. Simply pass in your desired syntax as the second argument to the `replacer()` function.
- **Supports any data type**: The Replacer package can handle any data type as values for the variables, whether it's a string, number, or even an object.
- **Easy to use**: The Replacer package is designed to be easy to use, with a simple and intuitive API.

## Installation

To install the Replacer package, simply run the following command:

```bash
npm install variable-injector
```

**API Documentation**

```js
injector(data: string, variables: { [key: string]: any }, identifier: string): string
```

The package exports a single function `variableInjector(obj: {[key:string]:any}, variableIdentifier: string, data: string)`

**Parameters**

- `data`: The string which contains the variables to be replaced.
- `variables`: An object containing the key-value pairs of variables to be replaced in the data string.
- `identifier`: A string indicating the starting and ending characters of the variables to be replaced.

The function returns the data string with the variables replaced by their corresponding values in the variables object.

## Usage

Using the Replacer package is easy. Simply pass in an object containing your variables and their values, the variable syntax you want to use, and the string you want to replace the variables in.

Here's an example:

```js
import inject from "variable-injector";

const str =
  "Welcome to our package, {{packageName}}! We are so excited to offer you a powerful tool for replacing variables in strings. With {{packageName}}, you can easily replace variables in your strings with any values you desire. Whether you are looking to personalize a message or update data in a template, {{packageName}} has got you covered. Give it a try and see the difference it can make in your projects.";

const result = inject({ packageName: "Variable Injector" }, str);

console.log(result);
```
