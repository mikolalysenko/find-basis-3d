find-basis-3d
=============
Given a single "up" vector, finds a triple of orthogonal basis vectors such that the first two are orthogonal to the last, which is parallel to the input vector.  This can be used to assign tangent spaces to flat planes.

## Install

    npm install find-basis-3d

## Example

```javascript
var findBasis = require("find-basis-3d")

var normal = [1, 0.5, 0]

console.log(findBasis(normal))
```

### `require("find-basis-3d")(up)`
Finds an orthonormal basis aligned along `up`.

* `up` is the z-vector for the new basis

**Returns** An array of 3 vectors, where the first two vectors are orthogonal to `up`, and the last is parallel.  All vectors are orthonormal.

## Credits
(c) 2013 Mikola Lysenko. MIT License