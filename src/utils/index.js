export function checkType(val, type) {
  if (Array.isArray(type)) {
    return type.some(t=>Object.prototype.toString.call(val) === `[object ${t}]`);
  } else {
    return Object.prototype.toString.call(val) === `[object ${type}]`;
  }
}