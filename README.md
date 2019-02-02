# VecJS
Immutable functional vector library.
Currently it only has the `Vec2` the 2D vector type. 

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
| dot | `(a) .dot (b)` | a.x*b.x + a.y*b.y |
| max | `(a) .max (b)` | (max(a.x, b.x), max(a.y, b.y)) |
| min | `(a) .min (b)` | (min(a.x, b.x), min(a.y, b.y)) |
| map | `(a) .map (x => x*2)` | (f(a.x), f(b.x)) |
| proj | `(a) .furrier (b)` | { res: the furrier coefficient of **a** and **b** (number), err: boolean } |
| proj | `(a) .proj (b)` | { res: projection of **a** to the vector **b** (Vec2), err: boolean } |

Computed properties:
| name | example | description|
| --- | --- | --- |
| lenSquare | `(a) .lenSquare` | a.x^2 + b.y^2 |
| len | `(a) .len` | sqrt(a.x^2 + b.y^2) |
| norm | `(a) .norm` | { res: (a.x/a.len , a.y/a.len), err: boolean } |

Properties:
| name | example | description|
| --- | --- | --- |
| x | `(a).x` | The x coordinate |
| y | `(a).y` | The y coordinate |

## All functions can be used in prefix mode
These are predefined for you:
```javascript
Vec2.add = (a, b) => (a).add(b)
Vec2.sub = (a, b) => (a).sub(b)
Vec2.dot = (a, b) => (a).dot(b)
Vec2.min = (a, b) => (a).min(b)
Vec2.max = (a, b) => (a).max(b)
Vec2.furrier = (a, b) => (a).furrier(b)
Vec2.proj = (a, b) => (a).proj(b)
Vec2.map = (a, f) => a.map(f)
Vec2.norm = (a) => (a).norm
Vec2.lenSquare = (a) => (a).lenSquare
Vec2.len = (a) => (a).len
```

## Tests
basic operations
    ✓ tests (a) .add (b)
    ✓ tests (a) .sub (b)
    ✓ tests (a) .dot (b)
    ✓ tests (a) .max (b)
    ✓ tests (a) .min (b)
    ✓ tests (a) .map (function)
    ✓ tests (a) .lenSquare
    ✓ tests (a) .len
    furrier
      ✓ tests (a) .furrier (b)
      ✓ tests error of (a) .furrier (b)
    projection
      ✓ tests (a) .proj (b)
      ✓ tests error of (a) .proj (b)
    normal form
      ✓ tests (a) .norm
      ✓ tests error of (a) .norm
