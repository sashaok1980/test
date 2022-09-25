// $('.slick__slider_content').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     dots: true,
//   });

//s  sp 30-35 gr 40-45 sh 27-31
//m  sp 35-41 gr 48-50 sh 31-35
//l  sp 41-47 gr 51-59 sh 35-39

//xl  sp 48-58 gr 60-69 sh 39-42

//s+  sp 45-49 gr 66-72 sh 45-50
//m+  sp 50-55 gr 73-75 sh 50-55
//l+  sp 55-60 gr 80-85 sh 55-60
//xl+  sp 6--65 gr 85-90 sh 60-65




  $('.submit__click').on( "click", function sizeCounter(){
    let userBackValue = +$('.calculator__back_user').val();
    let userBreastValue = +$('.calculator__breast_user').val();
    let userNeckValue = +$('.calculator__neck_user').val();
    let sizeValueCounter = [
      sizeS = [30, 40, 27, 35, 45, 31,'S'],
      sizeM = [35, 48, 31, 41, 50, 35, 'M'],
      sizeL = [41, 51, 35, 47, 59, 39,'L'],
      sizeXL= [48, 60, 39, 58, 69, 42, 'XL'],
      sizeSPlus = [45, 66, 45, 49, 72, 50,'S+'],
      sizeMPlus = [50, 73, 50, 55, 75, 55,'M+'],
      sizeLPlus = [55, 80, 55, 60, 85, 60, 'L+'],
      sizeXLPlusMin = [60, 85, 60, 65, 90, 65, 'XL+'],
    ]
    answerTextValue = [
      increasedText = ' с увеличенной ',
      reducedText= ' с уменьшенной ',
      back = 'спиной',
      breast = 'грудью',
      back = 'шей',
    ]
    let answer = $('.counter');
      for( let i=0; i<sizeValueCounter.length; i++){
        if (
          sizeValueCounter[i][0]<= userBackValue && userBackValue <= sizeValueCounter[i][3]
          && sizeValueCounter[i][1]<= userBreastValue && userBreastValue <= sizeValueCounter[i][4]
          && sizeValueCounter[i][2]<= userNeckValue && userNeckValue <= sizeValueCounter[i][5]
          ){
            answer.html(sizeValueCounter[i][6]);
        }
        else if(
          userBackValue == 0 || undefined || "" ||
          userBreastValue == 0 || undefined || "" ||
          userNeckValue == 0 || undefined || ""
        )
        {
          answer.html('Введите параметры')
        }
        else if(
          sizeValueCounter[i][0] > userBackValue
          && sizeValueCounter[i][1]<= userBreastValue && userBreastValue <= sizeValueCounter[i][4]
          && sizeValueCounter[i][2]<= userNeckValue && userNeckValue <= sizeValueCounter[i][5]
        ){
          answer.html(sizeValueCounter[i][6]+answerTextValue[1]+answerTextValue[2])
        }
        else if(
          sizeValueCounter[i][3] < userBackValue
          && sizeValueCounter[i][1]<= userBreastValue && userBreastValue <= sizeValueCounter[i][4]
          && sizeValueCounter[i][2]<= userNeckValue && userNeckValue <= sizeValueCounter[i][5]
        ){
          answer.html(sizeValueCounter[i][6]+answerTextValue[0]+answerTextValue[2])
        }
        else if(
          sizeValueCounter[i][0]<= userBackValue && userBackValue <= sizeValueCounter[i][3]
          && sizeValueCounter[i][1] > userBreastValue 
          && sizeValueCounter[i][2]<= userNeckValue && userNeckValue <= sizeValueCounter[i][5]
        ){
          answer.html(sizeValueCounter[i][6]+answerTextValue[1]+answerTextValue[3])
        }
        else if(
          sizeValueCounter[i][0]<= userBackValue && userBackValue <= sizeValueCounter[i][3]
          && sizeValueCounter[i][4] < userBreastValue 
          && sizeValueCounter[i][2]<= userNeckValue && userNeckValue <= sizeValueCounter[i][5]
        ){
          answer.html(sizeValueCounter[i][6]+answerTextValue[0]+answerTextValue[3])
        }
        else if(
          sizeValueCounter[i][0]<= userBackValue && userBackValue <= sizeValueCounter[i][3]
          && sizeValueCounter[i][1]<= userBreastValue && userBreastValue <= sizeValueCounter[i][4]
          && sizeValueCounter[i][2] > userNeckValue
        ){
          answer.html(sizeValueCounter[i][6]+answerTextValue[1]+answerTextValue[4])
        }
        else if(
          sizeValueCounter[i][0]<= userBackValue && userBackValue <= sizeValueCounter[i][3]
          && sizeValueCounter[i][1]<= userBreastValue && userBreastValue <= sizeValueCounter[i][4]
          && sizeValueCounter[i][5] < userNeckValue
        ){
          answer.html(sizeValueCounter[i][6]+answerTextValue[0]+answerTextValue[4])
        }else{
          answer.html('Индивидуальный пошив')
        }

              
        
        

      }
      
  });
 
