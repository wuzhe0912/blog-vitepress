# Arrow Function

:::tip
Arrow functions are a new way to write anonymous function expressions. They are a more concise syntax for writing function expressions. Arrow functions are always anonymous. They can't be used as constructors and do not have a prototype property.
:::

## Compare traditional and arrow functions (寫法對比)

### Traditional function

```html
<div class="click1">click1</div>
```

```js
document.querySelector('.click1').addEventListener('click', function () {
  console.log('click1');
});
```

### Arrow function

```html
<div class="click2">click2</div>
```

```js
document.querySelector('.click2').addEventListener('click', () => {
  console.log('click2');
});
```

Can be seen, change `function()` to `() =>`.

## this (指向問題)

In general function, this will direct to DOM element itself :

```js
document.querySelector('.click1').addEventListener('click', function () {
  console.log(this); // print HTML tag
});
```

But, in arrow function, this direct will back to the previous level, enter the global environment. It can also be understood as not having this.

```js
document.querySelector('.click2').addEventListener('click', () => {
  console.log(this); // print window object
});
```

Therefore, if I wanted to find DOM element in arrow function, need pass by parameter.

```js
document.querySelector('.click2').addEventListener('click', (e) => {
  console.log(e.target); // print HTML tag
});
```

## Designated Variable (指定變數)

If designated variable to function, can also be written as arrow function.

```js
// Notice, declare variable is require.
const plus = () => {
  console.log('test');
};
plus();
```

Pass by parameter :

```js
const plus = (val, subVal) => {
  return val + subVal;
};
console.log(plus(4, 14)); // print 18
```

If return is only one line, it can also be abbreviated with：

```js
const plus = (val, subVal) => val + subVal;
console.log(plus(2, 8)); // print 10
```
