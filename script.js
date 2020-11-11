function printStars(count) {
  let str = '';
  let i, j;

  for(i = 1; i <= count; i++) {
    for(j = 1; j <= i; j++) {
      str += '*';
    }
    str += '\n';
  }
  console.log(str);
}

// 請參考 printStars，
// 並完成 printStars2，使其執行時結果如圖： https://imgur.com/56BptSu
    function printStars2(count) {
      let str = '';
      let i, j;
      
      for(i = 1; i <= count; i++) {
        for(s = count; s-i>0; s--) {
          
          
          str += ' ';
        }
        for(j = 1; j <= i; j++) {
          
          
          str += '*';
        }
        str += '\n';
      }
      console.log(str);
    }
    // 做個三角形
    function printStars3(count) {
      let str = '';
      let i, j;
      
      for(i = 1; i <= count; i++) {
        for(s = count; s-i>0; s--) {
          
          
          str += ' ';
        }
        for(j = 1; j <= (2*i-1); j++) {
          
          
          str += '*';
        }

        str += '\n';
      }
      console.log(str);
    }
