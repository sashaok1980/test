 $('.submit__click').on( "click", function sizeCounter(){
    var userBackValue = $('.calculator__back_user').val();
    var userBreastValue = $('.calculator__breast_user').val();
    var userNeckValue = $('.calculator__neck_user').val();
    var sizeValueCounter = [
      sizeS = [30, 40, 27, 35, 45, 31,'S'],
      sizeM = [35, 48, 31, 41, 50, 35, 'M'],
      sizeL = [41, 51, 35, 47, 59, 39,'L'],
      sizeXL= [48, 60, 39, 58, 69, 42, 'XL'],
      sizeSPlus = [45, 66, 45, 49, 72, 50,'S+'],
      sizeMPlus = [50, 73, 50, 55, 75, 55,'M+'],
      sizeLPlus = [55, 80, 55, 60, 85, 60, 'L+'],
      sizeXLPlusMin = [60, 85, 60, 65, 90, 65, 'XL+'],
    ]
    

    var answer = $('.counter');



      for( let i=0; i<sizeValueCounter.length; i++){
        for( let i=0; i<sizeValueCounter.length; i++){
        if (
          sizeValueCounter[i][0]<= userBackValue && userBackValue <= sizeValueCounter[i][3]
          && sizeValueCounter[i][1]<= userBreastValue && userBreastValue <= sizeValueCounter[i][4]
          && sizeValueCounter[i][2]<= userNeckValue && userNeckValue <= sizeValueCounter[i][5]
          ){
            answer.html(sizeValueCounter[i][6]);
        }

      }
      
  });
