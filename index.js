const findSmallest = (arr) => {
    let smallestValue = arr[0];
    let smallestIndex = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallestValue) {
        smallestValue = arr[i];
        smallestIndex = i;
      }
    }
    return smallestIndex;
  };
  
  const selectionSort = (arr) => {
    let newArray = [];
  
    for (let i = arr.length; i > 0; i--) {
  
      let smallestValue = findSmallest(arr);
      const value = arr.splice(smallestValue, 1);
      newArray.push(value[0]);
    }
    return newArray;
  };
  
  console.log(selectionSort([2, 3, 5, 6, 3, 5, 6, 1]));
  