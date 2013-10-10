"use strict"

module.exports = findBasis

function findBasis(up) {
  var z = [ up[0], up[1], up[2] ]
  var zl = z[0] * z[0] + z[1] * z[1] + z[2] * z[2]
  if(zl < 1e-8) {
    return [[1, 0, 0], [0,1,0], [0, 0, 1]]
  } else {
    zl = Math.sqrt(zl)
    z[0] /= zl
    z[1] /= zl
    z[2] /= zl
  }
  var y
  while(true) {
    y = [ Math.random(), Math.random(), Math.random() ]
    var d = y[0] * z[0] + y[1] * z[1] + y[2] * z[2]
    var m = d * d
    if(m < 0.1 || m > 0.5) {
      continue
    }
    y[0] -= d * z[0]
    y[1] -= d * z[1]
    y[2] -= d * z[2]
    var d2 = Math.sqrt(y[0] * y[0] + y[1] * y[1] + y[2] * y[2])
    y[0] /= d2
    y[1] /= d2
    y[2] /= d2
    break
  }
  var x = [0,0,0]
  var h = 0.0
  for(var i=0; i<3; ++i) {
    var u = (i + 1) % 3
    var v = (i + 2) % 3
    x[i] = y[u] * z[v] - y[v] * z[u]
    h += x[i] * x[i]
  }
  h = Math.sqrt(h)
  for(var i=0; i<3; ++i) {
    x[i] /= h
  }
  return [x, y, z]
}