const runningEffects = [];
const createEffects = fn => {
  const effect = () => {
    runningEffects.push(effect);
    fn();
    runningEffects.pop();
  };
  effect();
};
createEffects(function () {
  console.log(1 + 1);
})

const user = {
  name: 'brian',
  num1: 1,
  num2: 2,
  sum: 0
}

const handle = {
  get(target, property) {
    console.log('call get.')
    if (property === 'sum') return target['num1'] + target['num2']
    return target[property];
  }
}
const proxy = new Proxy(user, handle);
console.log(proxy.name);
console.log(proxy.sum);
proxy.num1 = 100
console.log(proxy.sum);


const handle1 = {
  get() {
    console.log('call handle1 get.')
    // return target[property];
    return Reflect.get(...arguments);
  }
}
const proxy1 = new Proxy(user, handle1);
console.log(proxy1.name);
