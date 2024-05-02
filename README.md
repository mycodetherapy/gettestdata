# gettestdata

## This package allows you to get an array of objects with fields of a certain type.

### Installation: `npm install gettestdata`

### Using:
* Import getTestData into your project `import getTestData from 'gettestdata';`
* The first parameter is the number of items you want to get.
* The second parameter is an object of type:
```javascript
type FieldCounts = {
  string?: number;
  number?: number;
  boolean?: number;
  null?: number;
  undefined?: number;
  symbol?: number;
  nested?: FieldCounts;
  array?: FieldCounts[];
};
```
### Example 1:
```javascript
getTestData(2, { 'string': 2, 'number': 1, 'boolean': 1 });
```
### Result:
```javascript
[
  {
    name1: 'Anthony',
    name2: 'Savannah',
    age: 26,
    status: false,
  },
  {
    name1: 'Scarlett',
    name2: 'Mia',
    age: 74,
    status: false,
  },
];
```
### Example 2:
```javascript
const fieldTemplate = {
  string: 2,
  array: [{ string: 2 }, { number: 1 }],
  nested: { boolean: 1, string: 1 },
};

getTestData(2, fieldTemplate);
```

### Result: 
```javascript
[
  {
    name1: 'Hannah',
    name2: 'Emily',
    array: [{ name1: 'Charles', name2: 'Ellie' }, { age: 38 }],
    nested: { status: false, name2: 'Layla' },
  },
  {
    name1: 'Natalie',
    name2: 'Joshua',
    array: [{ name1: 'Aubrey', name2: 'Mateo' }, { age: 54 }],
    nested: {
      status: true,
      name2: 'Amelia',
    },
  },
];
```


