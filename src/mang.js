 const findMin = numberlist =>{
     return numberlist.reduce((sum,current) =>{
         return sum < current ? sum : current;
     })
 }
 console.log(findMin([8,15,7,16,2,9]));

 // tìm số lớn nhất
 const findMax = numbermax =>{
     return numbermax.reduce((sum, max) =>{
         return sum > max ? sum : max;
     })
 }
 console.log(findMax([8,15,6,28,2]));

 // tìm dãy số lớn nhất
 const findLongtext = wordList =>{
     if(!Array.isArray(wordList) || wordList.length === 0)
     return null;
         return wordList.reduce((long, longtext) =>{
             return long.length > longtext.length ? long : longtext;
         }, wordList[0]);
     }
 
const wordList= ['duc', 'ducvidai','ducdeptraivkl'];
console.log(findLongtext(wordList));

// Viết hàm để chuyễn đổn mảng thành object như bên dươi sử dụng reduce()
/*
     const itemList = [
         {id: 'key1', value:'superman'},
         {id:'key2', value:'women'};
         {id:'key3', value: 'spiderman'}
     ]

     is coverted to

     const itemMap ={
         key1: 'superman',
         key2: 'women',
         key3: 'spiderman',
     }
 */

 const arrayToobject = (itemList) =>{
     return itemList.reduce((itemMap, item) =>{
         itemMap[item.id] = item.value;
         return itemMap;
     },{});
 }

 const itemList = [
     {id:'key1', value: 'superman'},
     {id: 'key2', value:'women'},
     {id: 'key3', value: 'spiderman'},
 ]

 console.log(arrayToobject(itemList))

 // tìm số chẵn lớn nhất
 const findMaxEventNumber = number =>{
     return number.reduce((numberone,maxnumber) =>{
         if(numberone %2 === 0 && maxnumber %2 === 0){
             return numberone
         }else{
             return maxnumber
         }
     })
 }
 console.log(findMaxEventNumber([12,5,24,13]))

 const findEvenNumbers = numberList => {
    return numberList.reduce((prevResult, current) => {
      if(prevResult % 2 == 0 && current % 2 == 0){
        return current
      } else {
        return prevResult
      }
     
    });
  };
  console.log(findEvenNumbers([46,4, 8, 3, 16, 42, 59]));
  
  const obj = [
    { name: "foo", value: "bar" },
    { name: "Rio", value: "Clint" },
  ];
  const convertedArr = obj => {
    return obj.reduce((acc, obj) => {
      acc[obj.name] = obj.name;
      acc[obj.value] = obj.value;
      return acc;
    }, {});
  };
  console.log(Object.values(convertedArr(obj)));