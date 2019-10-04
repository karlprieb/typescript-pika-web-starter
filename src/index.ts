type double = (value: number) => number
const double: double = value => {
  return value * 2
}

console.log(double(4))
