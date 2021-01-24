console.log("HI");

// question 1
var listQuestion1 = [1, 2, 3, 4];
function findLargest(list){
  var largest = list[0];
  for (var i = 1; i< list.length; i++){
    if (list[i] > largest){
      largest = list[i];
    }
  }
  return largest;
}
console.log(findLargest(listQuestion1));

// question 2
var listQuestion2a = [1, 2, 3, 4];
var listQuestion2b = [5, 6, 7, 8];
function mergeList(lista, listb){
  var newList = [];
  for (var i = 0; i< lista.length; i++){
    newList.push(lista[i])
  }
  for (var i = 0; i< listb.length; i++){
    newList.push(listb[i])
  }
  return newList;
}
console.log(mergeList(listQuestion2a, listQuestion2b));

// question 3
var listQuestion3a = [1, 2, 3, 4];
var listQuestion3b = [5, 6, 7, 8, 9];
function alternateMergeList(lista, listb){
  var listaIndex = 0;
  var listbIndex = 0;
  var newList = [];

  while(listaIndex < listQuestion3a.length && listbIndex < listQuestion3b.length){
    newList.push(lista[listaIndex]);
    newList.push(listb[listbIndex]);
    listaIndex++;
    listbIndex++;
  }
  if(listaIndex < listQuestion3a.length){
    for (var i = listaIndex; i< lista.length; i++){
      newList.push(lista[i])
    }
  }

  if(listbIndex < listQuestion3b.length){
    for (var i = listbIndex; i< listb.length; i++){
      newList.push(listb[i])
    }
  }

  return newList;
}
console.log(alternateMergeList(listQuestion3a, listQuestion3b));

// question 4
var numString = "2345";
function listOfDigits(numString){
  var newList = []
  for (var i = 0; i< numString.length; i++){
    newList.push(Number(numString[i]))
  }
  return newList;
}
console.log(listOfDigits(numString))


// question 5
var list5 = ["My", "name", "is", "Morgan"]
function printStringRectangle(list){
  var largestWord = list[0].length;
  for (var i = 1; i< list.length; i++){
    if (list[i].length > largestWord){
      largestWord = list[i].length;
    }
  }

  for (var i =0; i<list.length; i++){
    var stringToPrint = "*" + list[i];
    var numberOfSpaces = largestWord - list[i].length;
    for (var j = 0; j < numberOfSpaces; j++){
      stringToPrint = stringToPrint + " ";
    }
    stringToPrint = stringToPrint  + "*";
    console.log(stringToPrint);
  }

}
printStringRectangle(list5)
