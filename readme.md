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
injector(data: string, variables: { [key: string]: any }, variableIdentifiers: string[] = ["#_#", "{{_}}", "%_%"]): string
```

This function takes in 3 arguments, the string which needs to be modified, the variables which needs to replace in the string and the variable identifier which is used to find the variables in the string.

**Arguments**

-   `data` (string): The string which needs to be modified.
-   `variables` (object): An object containing key-value pairs of variables to be replaced in the string. The keys should match the variables used in the `data` string.
-   `variableIdentifiers` (string[]): An array of strings that should be used as variable identifiers in the `data` string. The default value is `["#_#", "{{_}}", "%_%"]`.


##### Returns
-   (string): The modified string with replaced variables.

## Examples


```js
import injector from 'variable-injector';

const data = "My name is #name# and I am #age# years old";
const variables = { name: "Rayhan", age: 25 };
const modifiedData = injector(data, variables);
console.log(modifiedData);
// Output: "My name is Rayhan and I am 25 years old"

```

```js
import injector from 'variable-injector';

const data = "My name is #name# and I am #age# years old";
const variables = { name: "Rayhan", age: 25 };
const modifiedData = injector(data, variables,["#_#","{{_}}"]);
console.log(modifiedData);
// Output: "My name is Rayhan and I am 25 years old"
```


### Testing

To test the package, you can use the jest package. Run the command


```bash
npm run test
```

This package is built using TypeScript and it is well documented and tested.

### Contributing

We welcome contributions to the Replacer package. If you have an idea for a new feature or find a bug, please open an issue or submit a pull request on the [GitHub repository](https://github.com/kingRayhan/variable-injector).

### License

The Replacer package is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).

### Conclusion

The Replacer package is a powerful and flexible tool for replacing variables in strings. It's easy to use, supports any data type, and allows you to customize the variable syntax to your liking. Give it a try and see how it can help you in your projects!
