# VecJS
Immutable functional vector library.
Currently it only has `Vec2` the best 2D vector type. 

## Installation
`npm i vecjs`

## Usage

Usage is simple and readable:
```javascript
import { Vec2 } from 'vecjs'

let a = new Vec2(1,2)
let b = new Vec2({x: 3, y:4})
let c = {x: 4, y:5}

let res = (a) .add (b) .sub (c)  // x:0, y: 1

console.log(res)
```

Functions:
| name | example | description|
| --- | --- | --- |
| add | `(a) .add (b)` | (a.x+b.x, a.y+b.y) |
| sub | `(a) .sub (b)` | (a.x-b.x, a.y-b.y) |
| mul | `(a) .mul (b)` | (a.x*b.x, a.y*b.y) |
| div | `(a) .div (b)` | { res: (a.x/b.x, a.y/b.y), err: boolean } |
| avg | `(a) .avg (b)` | ( (a.x+b.x)/2 , (a.y+b.y)/2 ) |
| dot | `(a) .dot (b)` | a.x*b.x + a.y*b.y |
| max | `(a) .max (b)` | (max(a.x, b.x), max(a.y, b.y)) |
| min | `(a) .min (b)` | (min(a.x, b.x), min(a.y, b.y)) |
| map | `(a) .map (x => x*2)` | (f(a.x), f(b.x)) |
| proj | `(a) .furrier (b)` | { res: the furrier coefficient of **a** and **b** (number), err: boolean } |
| proj | `(a) .proj (b)` | { res: projection of **a** to the vector **b** (Vec2), err: boolean } |
| random | `Vec2.random()` | (random between 0 and 1, random between 0 and 1) with borders |
| null | `Vec2.null()` | (0,0) null element |
| id | `Vec2.id()`   | (1,1) identity element |

Computed properties:
| name | example | description|
| --- | --- | --- |
| lenSquare | `(a) .lenSquare` | a.x^2 + b.y^2 |
| len | `(a) .len` | sqrt(a.x^2 + b.y^2) |
| norm | `(a) .norm` | { res: (a.x/a.len , a.y/a.len), err: boolean } |
| normal1 | `(a) .normal1` | (- a.y,   a.x) |
| normal2 | `(a) .normal2` | (  a.y, - a.x) |
| inverse | `(a) .inverse` | (- a.x, - a.y) |
| sign | `(a) .sign` | (sgn(a.x), sgn(a.y)) |
| sum | `(a) .sum` | a.x + a.y |
| diff | `(a) .diff` | a.x - a.y |

Properties:
| name | example | description|
| --- | --- | --- |
| x | `(a).x` | The x coordinate |
| y | `(a).y` | The y coordinate |
