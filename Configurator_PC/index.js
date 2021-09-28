// function favTutorial() {
//     var mylist = document.getElementById("myList");
//     document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
    
// }
// function favTutorial2() {
//     var mylist = document.getElementById("myList2");
//     document.getElementById("favourite2").value = mylist.options[mylist.selectedIndex].text;
    
// }
function getOption() {
    var obj = document.getElementById("mySelect");
    document.getElementById("demo").innerHTML = 
    obj.options[obj.selectedIndex].text;
  }
  function getOption2() {
    var obj = document.getElementById("mySelect2");
    document.getElementById("demo2").innerHTML = 
    obj.options[obj.selectedIndex].text;
  }
  function getOption3() {
    var obj = document.getElementById("mySelect3");
    document.getElementById("demo3").innerHTML = 
    obj.options[obj.selectedIndex].text;
  }
  function getOption4() {
    var obj = document.getElementById("mySelect4");
    document.getElementById("demo4").innerHTML = 
    obj.options[obj.selectedIndex].text;
  }
  function getOption5() {
    var obj = document.getElementById("mySelect5");
    document.getElementById("demo5").innerHTML = 
    obj.options[obj.selectedIndex].text;
  }
  function getOption6() {
    var obj = document.getElementById("mySelect6");
    document.getElementById("demo6").innerHTML = 
    obj.options[obj.selectedIndex].text;
  }
  function getOption7() {
    var obj = document.getElementById("mySelect7");
    document.getElementById("demo7").innerHTML = 
    obj.options[obj.selectedIndex].text;
  }
  function getOption8() {
    var obj = document.getElementById("mySelect8");
    document.getElementById("demo8").innerHTML = 
    obj.options[obj.selectedIndex].text;
  }


  
  let id = Symbol("id");
  let infoComponent ={
    name : "Intel Core i7-7700K",
    [id]: "Socket B (LGA 1366)"
  }
  let infoComponent_second ={
    name : "Ryzen 7 3700X",
    [id]: " Socket AM4"
  }
  let infoComponent_third ={
    name : "Intel Core i5-5600",
    [id]: " Socket LGA 1322"
  }
  let infoComponent_thour ={
    name : "Ryzen 5 1600X",
    [id]: "Socket AM4456"
  }
  let infoComponent_five ={
    name : "Охлаждение Deepcool CASTLE",
    [id]: "Socket B (LGA 1366)"
  }
  let infoComponent_six ={
    name : "Deepcool EWDC-GAMMAXX 300R",
    [id]: "Socket AM4456"
  }
  let infoComponent_seven ={
    name : "Кулер Deepcool LUCIFER V2",
    [id]: "Socket 775/1150/1151"
  }
  let infoComponent_eight ={
    name : "Кулер Deepcool GAMMAXX GTE",
    [id]: "Socket 115x/20xx AM4/FM2/AM3"
  }
  let infoComponent_nine ={
    name : "Asus Prime B460M-K",
    [id]: "Socket B (LGA 1366)"
  }
  let infoComponent_ten ={
    name : "MSI B450M PRO-VDH",
    [id]: " Socket AM4"
  }
  let infoComponent_eleven ={
    name : "ASRock AB350 Pro4",
    [id]: "Socket AM4456"
  }
  let infoComponent_twelve ={
    name : "ASUS ROG Strix X570-F Gaming",
    [id]: "Socket B (LGA 1366)"
  }
  let infoComponent_thirteen ={
    name : "AFOX PCI-Ex Radeon 4GB",
    [id]: "Socket B (LGA 1366)"
  }
  let infoComponent_thirdteen ={
    name : "MSI PCI-Ex GeForce 3060",
    [id]: " Socket AM4"
  }
  let infoComponent_fifteen ={
    name : "AFOX PCI-Ex GeForce 4 GB",
    [id]: "Socket AM4456"
  }
  let infoComponent_sixteen ={
    name : "Gigabyte PCI-Ex GeForce",
    [id]: "Socket 115x/20xx AM4/FM2/AM3"
  }



 






function myFunction(){
var items = [""];
items.push(infoComponent,infoComponent_second,infoComponent_third,infoComponent_thour,infoComponent_five,infoComponent_six,infoComponent_seven,infoComponent_eight,infoComponent_nine,infoComponent_ten,infoComponent_eleven,infoComponent_twelve,infoComponent_thirteen, infoComponent_thirdteen,infoComponent_fifteen,infoComponent_sixteen);
console.log(items);
}