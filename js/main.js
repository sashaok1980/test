  $('.submit__click').on( "click", function sizeCounter(){
    var userBackValue = $('.calculator__back_user').val();
    var userBreastValue = $('.calculator__breast_user').val();
    var userNeckValue = $('.calculator__neck_user').val();
    var sizeSMin = [30, 40, 27];
    var sizeSMax = [35, 45, 31];
    var sizeMMin = [35, 48, 31];
    var sizeMMax = [41, 50, 35];
    var sizeLMin = [41, 51, 35];
    var sizeLMax = [47, 59, 39];
    var sizeXLMin = [48, 60, 39];
    var sizeXLMax = [58, 69, 42];
    var sizeSPlusMin = [45, 66, 45];
    var sizeSPlusMax = [49, 72, 50];
    var sizeMPlusMin = [50, 73, 50];
    var sizeMPlusMax = [55, 75, 55];
    var sizeLPlusMin = [55, 80, 55];
    var sizeLPlusMax = [60, 85, 60];
    var sizeXLPlusMin = [60, 85, 60];
    var sizeXLPlusMax = [65, 90, 65];

    var answer = $('.counter');

    if(
      sizeSMin[0] <= userBackValue && userBackValue <= sizeSMax[0]
      && sizeSMin[1] <= userBreastValue && userBreastValue <= sizeSMax[1]
      && sizeSMin[2] <= userNeckValue && userNeckValue <= sizeSMax[2]
      ){
      answer.html('S')
    }else if(
      sizeMMin[0] <= userBackValue && userBackValue <= sizeMMax[0]
      && sizeMMin[1] <= userBreastValue && userBreastValue <= sizeMMax[1]
      && sizeMMin[2] <= userNeckValue && userNeckValue <= sizeMMax[2]
    ){
      answer.html('M')
    }else if(
      sizeLMin[0] <= userBackValue && userBackValue <= sizeLMax[0]
      && sizeLMin[1] <= userBreastValue && userBreastValue <= sizeLMax[1]
      && sizeLMin[2] <= userNeckValue && userNeckValue <= sizeLMax[2]
    ){
      answer.html('L')
    }else if(
      sizeXLMin[0] <= userBackValue && userBackValue <= sizeXLMax[0]
      && sizeXLMin[1] <= userBreastValue && userBreastValue <= sizeXLMax[1]
      && sizeXLMin[2] <= userNeckValue && userNeckValue <= sizeXLMax[2]
    ){
      answer.html('XL')
    }else if(
      sizeSPlusMin[0] <= userBackValue && userBackValue <= sizeSPlusMax[0]
      && sizeSPlusMin[1] <= userBreastValue && userBreastValue <= sizeSPlusMax[1]
      && sizeSPlusMin[2] <= userNeckValue && userNeckValue <= sizeSPlusMax[2]
    ){
      answer.html('S+')
    }else if(
      sizeMPlusMin[0] <= userBackValue && userBackValue <= sizeMPlusMax[0]
      && sizeMPlusMin[1] <= userBreastValue && userBreastValue <= sizeMPlusMax[1]
      && sizeMPlusMin[2] <= userNeckValue && userNeckValue <= sizeMPlusMax[2]
    ){
      answer.html('M+')
    }else if(
      sizeLPlusMin[0] <= userBackValue && userBackValue <= sizeLPlusMax[0]
      && sizeLPlusMin[1] <= userBreastValue && userBreastValue <= sizeLPlusMax[1]
      && sizeLPlusMin[2] <= userNeckValue && userNeckValue <= sizeLPlusMax[2]
    ){
      answer.html('L+')
    }else if(
      sizeXLPlusMin[0] <= userBackValue && userBackValue <= sizeXLPlusMax[0]
      && sizeXLPlusMin[1] <= userBreastValue && userBreastValue <= sizeXLPlusMax[1]
      && sizeXLPlusMin[2] <= userNeckValue && userNeckValue <= sizeXLPlusMax[2]
    ){
      answer.html('XL+')
    } else{
      answer.html('еще не запрограмирован, подождите пожалуйста') 
    }



  });
