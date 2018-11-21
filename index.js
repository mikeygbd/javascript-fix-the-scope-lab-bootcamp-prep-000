var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat'
  return animal
}
const two = 2
function add2(n) {
  return (n + two)

  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
<<<<<<< HEAD
var theFunk = funkyFunction
var theFunk = funkyFunction()()
=======
var theFunk = funkyFunction()
>>>>>>> 781478a05ed7d08a4f6b3fd5a04ec598f39356fc
