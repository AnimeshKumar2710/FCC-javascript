
function checkCashRegister(price, cash, cid) {
  var curr = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  var count = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var total = 0;
  var diff = cash - price;
  var change = [];
  var status = 'OPEN';
  for (let i = 0; i < cid.length; i++){
    total += cid[i][1];
  }
  total = total.toFixed(2);
  if(total < diff){
    status = "INSUFFICIENT_FUNDS";
  }else if (total == diff){
    status = "CLOSED";
    change.push(...cid);
  }else
  {
      var temp = 8;
      let i;
      for (i = 8; i > -2; i--){
        if (i < temp){
          console.log(count[temp])
          if(count[temp] > 0){
            change.push([cid[temp][0], count[temp] * curr[temp]]);
            total -= cid[temp][1];
            }
            temp = i;
          }
          if (i == temp){
            if (diff >= curr[i] && cid[i][1] > 0){
              diff -= curr[i];
              diff = diff.toFixed(2);
              cid[i][1] -= curr[i];
             count[i]++;
              i++;
            }
         }
         if(i == 0 && diff > 0 && diff > cid[0][1]){
          status = "INSUFFICIENT_FUNDS";
          return {status, change : []};
        }
      } 
  }
return {status, change};
}
