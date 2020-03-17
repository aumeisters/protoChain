const { o3: obj } = require("./protochain");
const firstProtoLevel = Reflect.getPrototypeOf(obj);
const secondProtoLevel = Reflect.getPrototypeOf(firstProtoLevel);
const thirdProtoLevel = Reflect.getPrototypeOf(secondProtoLevel);
let protoName = [];
protoName.push(
  obj.name,
  firstProtoLevel.name,
  secondProtoLevel.name,
  thirdProtoLevel.name
);
console.log(protoName);
exports = protoName;
