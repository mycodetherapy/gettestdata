# gettestdata

## This package allows you to get an array of objects with fields of a certain type.

### Installation: `npm install`

### Using:
The first parameter is the number of items you want to get.
The second parameter is an object of type: 
` {
    string?: number;
    number?: number;
    boolean?: number;
}`

### Example:
`console.log(getTestData(2, { 'string': 2, 'number': 1, 'boolean': 1 }));`
### Result:
`[
 {
  name1: '0cj34k6v', 
  name2: 'zlb2jopp', 
  age: 26, 
  isWorking: false
 }, 
 {
  name1: 'fws05q2j',
  name2: 'ni6rzoic',
  age: 74, 
  isWorking: false
 }
]`