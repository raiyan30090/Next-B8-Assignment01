# Type Narrowing in TypeScript

## Introduction

Type Narrowing is an important feature of TypeScript that helps developers identify the specific type of a variable within a particular condition. It reduces the number of possible types and allows developers to perform operations safely. TypeScript provides different techniques for type narrowing, including `typeof`, `instanceof`, and the `in` operator.

## Detailed Discussion

**1. typeof Operator**

The `typeof` operator checks the type of primitive values such as strings, numbers, and booleans.

Example:

```typescript
function processValue(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else {
        return value.toString();
    }
}
```

Here, TypeScript understands whether the value is a string or a number.

**2. instanceof Operator**

The `instanceof` operator checks whether an object belongs to a particular class.

Example:

```typescript
function showDate(value: Date | string): string {
    if (value instanceof Date) {
        return value.toDateString();
    } else {
        return value.toUpperCase();
    }
}
```

**3. in Operator**

The `in` operator checks whether a specific property exists in an object.

Example:

```typescript
type Admin = { name: string; role: string };
type User = { name: string; age: number };

function getInfo(person: Admin | User): string {
    if ("role" in person) {
        return person.role;
    } else {
        return person.age.toString();
    }
}
```
## Conclusion

Type Narrowing makes TypeScript applications safer and easier to maintain. The `typeof` operator is useful for primitive types, `instanceof` is useful for class objects, and the `in` operator is useful for checking object properties. These techniques help developers write clean, reliable, and type-safe code.