function conversion() 
{
   var data1 = document.getElementById("value1").value;
   var fromSelection = document.getElementById("from");
   var fromValue = from.options[from.selectedIndex].value;
   var toSelection = document.getElementById("to");
   var toValue = to.options[to.selectedIndex].value;
   var value1 = fromSelection.options[1].value;
   var value2 = fromSelection.options[2].value;
   var value3 = fromSelection.options[3].value;
   var valueA = toSelection.options[1].value;
   var valueB = toSelection.options[2].value;
   var valueC = toSelection.options[3].value;
   if((fromValue == value1 ) && (toValue == valueB)) {
      var convertedData1 = ((data1/5) * 9) +32;
      if(Number.isInteger(convertedData1)) {
         convertedData1 = convertedData1.toFixed(0);
      } 
      else {
         convertedData1 = convertedData1.toFixed(2);
      }
      document.getElementById("displaybox1").value= convertedData1;
   }
   else if ((fromValue == value1) && (toValue == valueC)){
       var convertedData2 = parseFloat(273.15) + parseFloat(data1);
       if(Number.isInteger(convertedData2)) {
         convertedData2 = convertedData2.toFixed(0);
      } 
      else {
         convertedData2 = convertedData2.toFixed(2);
      }
       document.getElementById("displaybox1").value= convertedData2;
   }
   else if ((fromValue == value2) && (toValue == valueA)){
       var convertedData3 = ((data1 - 32) * 5) /9;
       if(Number.isInteger(convertedData3)) {
         convertedData3 = convertedData3.toFixed(0);
      } 
      else {
         convertedData3 = convertedData3.toFixed(2);
      }
      document.getElementById("displaybox1").value= convertedData3;
   }
   else if ((fromValue == value2) && (toValue == valueC)){
       var convertedData4 = (((data1 - 32) * 5) /9) + 273.15;
       if(Number.isInteger(convertedData4)) {
         convertedData4 = convertedData4.toFixed(0);
      } 
      else {
         convertedData4 = convertedData4.toFixed(2);
      }
      document.getElementById("displaybox1").value= convertedData4;
   }
      else if ((fromValue == value3) && (toValue == valueA)){
      var convertedData5 = parseFloat(data1) - parseFloat(273.15);
      if(Number.isInteger(convertedData5)) {
         convertedData5 = convertedData5.toFixed(0);
      } 
      else {
         convertedData5 = convertedData5.toFixed(2);
      }
      document.getElementById("displaybox1").value= convertedData5;
   }

   else if ((fromValue == value3) && (toValue == valueB)){
       var convertedData6 = (parseFloat(data1) - parseFloat(273.15)) * 1.8 + 32;
       if(Number.isInteger(convertedData6)) {
         convertedData6 = convertedData6.toFixed(0);
      } 
      else {
         convertedData6 = convertedData6.toFixed(2);
      }document.getElementById("displaybox1").value= convertedData6;
   }
   else {
      document.getElementById("displaybox1").value= data1;
   }
}
