function rot13(str) {
  let arr = str.split('');
  let size = arr.length;
  let newarr = [];
  for (let i = 0; i < size; i++){
    if (/[a-z]|[A-Z]/.test(arr[i])){
      let code = arr[i].charCodeAt() + 13;
      if (arr[i].charCodeAt() < 110 && arr[i].charCodeAt()> 96){
          newarr.push(String.fromCharCode(arr[i].charCodeAt() + 13));
      }else if(arr[i].charCodeAt() > 64 && arr[i].charCodeAt() < 78){
          newarr.push(String.fromCharCode(arr[i].charCodeAt() + 13));
      }else if (arr[i].charCodeAt() > 109 && arr[i].charCodeAt() < 123){
        newarr.push(String.fromCharCode((arr[i].charCodeAt() + 13) - 26));
      }else {
        newarr.push(String.fromCharCode((arr[i].charCodeAt() + 13) - 26));
      }
      
    }else{
        newarr.push(arr[i]);
      }
  }

  return newarr.join('');
}
