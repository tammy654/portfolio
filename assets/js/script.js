

//Replace Text function		 
$(function () { 
    count = 0; 
    wordsArray = ["Motion Designer", "Web Developer", "Video Editor"]; 
    setInterval(function () { 
      count++; 
      $("#word").fadeOut(500, function () { 
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(500); 
      }); 
    }, 2000); 
  }); 
  //End Replace Text function
