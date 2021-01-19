function palindrome(str) {
  let arr = str.split(/\W|_/)
  let newarr = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i]){
      newarr.push(arr[i].toLowerCase())
    }
  }
  let checkarr = newarr.join("").split("");
  console.log(checkarr)
  for (let i = 0; i < checkarr.length / 2; i++){

    if (!(checkarr[i] == checkarr[checkarr.length - 1- i]))
    {
      return false;
    }
  }
  
  return true;
}
