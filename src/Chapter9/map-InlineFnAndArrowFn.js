// map(mappingFn)
// map(transformFn)
// map(callbackFn)

function map(arr, callbackFn) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') return undefined;

  const arrResult = [];
  for (let i = 0; i < arr.length; i++) {
    arrResult.push(callbackFn(arr[i], i));
  }

  if (Array.isArray(arrResult)) return arrResult;
}

// console.log(map([1, 2, 3, 4], (number, i) => (i % 2 === 0 ? number + 1 : number * 2)));
console.log(map(['Pham', 'Phu', 'Loc'], x => x.length));

// Note trong arrow function
// 1. Neu trong có từ 2 truong hop (dong lenh) tro len OR khi su dung anonymous-inline function() thi, trong tung truong hop ta phai co return va dc dat trong dau {}
// 2. Con neu chi co 1 truong hop duy nhat thi ta k can return va cap ngoac {}

// Cac truong hop khi truyen 1 callbackFn vao 1 function()
// 1. Inline-Anonymous function.   ex: FUNCTION(..., function(args) { return x});
// 2. Arrow function.              ex: FUNCTION(..., (args) => {... return x})  // truong hop callBackFn co nhieu dong lenh
// 3. Array function short hand.   ex: FUNCTION(..., (args) => x * 2            // truong hop callBackFn co 1 dong lenh 
//                                                                              nen bo lun return va dau ngoac {}