import { readonly, deprecate } from 'core-decorators' // https://github.com/jayphelps/core-decorators#readonly

// WEB: https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841
// babel --optional es7.decorators
// es7 Decorator - https://github.com/GoogleChrome/samples/tree/gh-pages/decorators-es7/read-write

/* readonly, deprecate */
class MathHow {
  constructor(name, last) {
    this.name = name
    this.last = last
  }

  @log
  add(a, b) {
    return a + b;
  }

  @readonly
  eventReadOnly(info) {
    return `${ this.name + info} says Meow!!`
  }

  sample() {
    /* apply sample */
    // console.log('sample', testApply.apply(null, ['joel', 'gonzales'])
    return console.log('sample apply', testApply.apply(this, ['joel', 'gonzales']))
  }

  sample2() {
    /* call sample */
    // console.log('sample', testApply.call(null, ['joel', 'gonzales'])
    return console.log('sample call', testApply.call(this, 'joel', 'gonzales'))
  }
  // call and apply, work equal, but - apply use a array with arguments, and the call use the arguments directly

  @deprecate('We stopped to support this method', { url: 'http://sample.com'})
  remove(text) {
    console.log('text', text)
    return text
  }
}

/* readonly */
class Meal {
  @readonly
  entree() { 
    return 'steak'
  }

}

var dinner = new Meal();
// dinner.entree = 'salmon';

console.log('Current meal info', dinner.entree)

var a = new MathHow('JOEL', 'villa')
a.add(10,2)
a.sample()

console.log('DADA :::', a.eventReadOnly('INFO'))

a.remove('dasds')





/* apply */
function testApply(name = '!!', last='!!!') {
  return 'sample data' + this.name + this.last
}

/* log data arguments */
function log(target, name, descriptor) {
  var oldValue = descriptor.value;
  descriptor.value = function() {
    console.log(`Calling "${name}" with`, arguments);
    return oldValue.apply(null, arguments);
  };
  return descriptor;
}

/* readonly */
// function readonly(target, key, descriptor) {
//   descriptor.writable = false;
//   return descriptor;
// }




/* Decorating a class */
function superhero(target) {
  target.isSuperhero = true;
  target.power = 'flight'
}

@superhero
class MysuperHero {

}

console.log('isSuperHero?', MysuperHero.isSuperhero) // true
console.log('have the power?', MysuperHero.power) // flight



/*  defining our decorator function as a factory */
function supperhero(value) {
  return function(target) {
    target.isSuperhero = value
  }
}

@supperhero(true)
class MySuperheroClass {}
console.log('This second is a superhero ??', MySuperheroClass.isSuperhero) // true

@supperhero(false)
class MySuperheroSecondClass {}
console.log('This third is a superhero ??', MySuperheroSecondClass.isSuperhero) // false


