function isObjectsEqual(obj1, obj2) {
  // Kiem tra kieu du lieu cua 2 obj
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  // Kiem tra so luong keys cua 2 obj
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key in obj1) {
    // check xem obj2 co chua cac keys cua obj1 hay khong
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }

    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      if (!isObjectsEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
    else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

const obj1 = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: {
    e: 'e',
    f: 'f',
  },
};

const obj2 = {
  b: 'b',
  c: 'c',
  a: 'a',
  d: {
    e: 'e',
    f: 'f',
  },
};

console.log(isObjectsEqual(obj1, obj2));
