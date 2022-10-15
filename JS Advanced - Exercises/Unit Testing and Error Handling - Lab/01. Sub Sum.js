function subSum(arr, start, end) {
  let sum = 0;
  if (!Array.isArray(arr)) {
    return NaN;
  }
  if (start < 0) {
    start = 0;
  }
  if (end > arr.length - 1) {
    end = arr.length - 1;
  }

  for (let i = start; i <= end; i++) {
    sum += Number(arr[i]);
  }

  return sum;
}
