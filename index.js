function greet(name, age)
{
  return "Woow " + name + " i think your have " + Number(age - 1) + " years you look younger ^_^";
}
function isNotEmpty(text)
{
  if(text != false || text == " ")
    return true;

  return false;
}
function productSumma(price, amount)
{
  return Number.parseFloat(price * amount).toFixed(2);
}
function calculatePoket(summa, balance)
{
  return balance >= summa ? true : false;
}
function flatAmountCalculate(amountFloor)
{
    return amountFloor * 4;
}
function checkRange(chekedItem)
{
    return  chekedItem >= 0 && chekedItem <= 10 ? true : false;
}
function getAbsNumber(number)
{
    return number < 0 ? number * (-1) : number;
}
function getRandomNumber(min, max)
{
    return Math.random() * (max - min) + min;
}
function getSqrt(value)
{
    return Math.sqrt(value);
}
function squareSolution(a, b, c)
{   
  if(a === 0)
    return null;
   
    return ((-b) + ((b * b - 4 * a * c) * (0.5))) / (2 * a)

}
 //1. функция которая вернет сезон года в зависимости от полученного номера месяца
 function defineSizon(month)
 {
     switch (month) {
             case 'January':
                alert("Winter")
             break;
             case 'February':
                alert("Winter")
             break;
             case 'March':
                alert("Spring")
             break;
             case 'April':
                alert("Spring")
             break;
             case 'May':
                alert("Spring")
             break;
             case 'June':
                alert("Summer")
             break;
             case 'July':
                alert("Summer")
             break;
             case 'August':
                alert("Summer")
             break;
             case 'September':
                alert("Otem")
             break;
             case 'October':
                alert("Otem")
             break;
             case 'November':
                alert("Otem")
             break;
             case 1:
                alert("Winter")
             break;
             case 'January':
                alert("Winter")
             break;
             case 2:
                alert("Winter")
             break;
             case 3:
                alert("Spring")
             break;
             case 4:
                alert("Spring")
             break;
             case 5:
                alert("Spring")
             break;
             case 6:
                alert("Summer")
             break;
             case 7:
                alert("Summer")
             break;
             case 8:
                alert("Summer")
             break;
             case 9:
                alert("Otem")
             break;
             case 10:
                alert("Otem")
             break;
             case 11:
                alert("Otem")
             break;
             case 12:
                alert("Winter")
             break;
     
         default:
             break;
     }
 }

 function isAdult(age, country)
 {
      if(country === 'Ukraine')
      {
         if(age >= 18)
            alert("OK");
         else
            alert("You young !");
      }
      else if(country === 'Japan')
      {
            if(age >= 20)
                  alert("OK");
           else
               alert("You young !");
      }
      else if(country === 'Egypt')
      {
            if(age >= 25)
                  alert("OK");
           else
               alert("You young !");
      }
         
 }

//   alert(greet('Andrii', 21));
//   alert(isNotEmpty("f"));
//   alert(productSumma(5.22, 5));
//   if(calculatePoket(100.22, 280.33))
//   {
//     alert("Enought money !");
//   }
//   else{
//         alert("Isn't enought money !!");
//      }
//   alert("Amount flat = " + flatAmountCalculate(5));
//   if(checkRange(1))
//   {
//       alert("All right number in range !");
//   }
//   else{
//     alert("Number in outside range !");
//   }

//   alert(getAbsNumber(-3));


//   alert("Random number equal: " + Number.parseFloat(getRandomNumber(0,10)).toFixed(0));


//   alert(squareSolution(2, 3, 4));

//   defineSizon('January');


 