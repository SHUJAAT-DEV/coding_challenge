 function findFirstUnique(arr) {
    for(let i=0 ;i<arr.length ; i++){
           let isUnique = true; 
       for(let j= 0; j<arr.length ; j++){
             if(i===j)continue;
             if(arr[i] === arr[j]){
                   isUnique=false;
             }
       }
     if(isUnique){
           return arr[i];
     }
    }
    return -1;
}

console.log("First unique", findFirstUnique([5,5,6,6,7,8,9,9]));