var td=document.querySelectorAll("td")
var tableData=[]

var progressBar=document.getElementById("progress-bar")

var timeBox=document.querySelector(".time")

//Zelimo da napravimo niz koji ce zadrzati sve td
function push(){
   for(let q=0; q<td.length; q++){
      tableData.push(td[q])
   }
}
push()

let time=20
var numbers=[]
var numbers1=[]

document.body.onload=function(){
  var interval=setInterval(function(){
     time--
     timeBox.innerHTML=time+"s"
     if(time=="0"){
        alert("Vreme je isteklo, igra će se refrešovati")
        clearInterval(interval)
        setInterval(function(){
         location.reload()
      },1500)
      for(let q=0; q<td.length; q++){
         td[q].style.pointerEvents="none"
      }
     }
  },1000)
  while(numbers.length<10 || numbers1.length<10){
      //Naprvili smo dva radnom broja da bi se generisala dva razlicita
      var randomNumber=Math.floor(Math.random()*10+1)
      var randomNumber1=Math.floor(Math.random()*10+1)

      if(numbers.indexOf(randomNumber)===-1 ){
      numbers.push(randomNumber)
      }
      if(numbers1.indexOf(randomNumber1)===-1){
         numbers1.push(randomNumber1)
      }
   //Dodajemo elemente iz liste numbers1 u listu nambers
   } 
   for(let a=0;a<10;a++){
      numbers.push(numbers1[a])
   }
   //Dodajemo vrednosti u tabelu iz genersiane liste numbers
   for(let b=0;b<20;b++){
      td[b].innerHTML=numbers[b]
   }

 }
//Hocemo da sve id koje smo prethodno kliknuli da cuvamo u ovjo listi
 var prethodniId=[]
 
 function nesto(polje,index){
   polje.style.background="white"
   let id=polje.id
   prethodniId.push(id)
   
   //i mora da se definise ovde nikako van funkcije jer onda ne radi
   for(let i=0; i<prethodniId.length-1; i++){
      //proveramo da li je poslednji id u listi prethodnih id
      if(prethodniId[i]==prethodniId[prethodniId.length-1]){
         alert("Ovo polje si vec kliknuo")

         //pop removuje last element i onda kada je isti klik na otvreno polje u prethodne id-eve ne svrtsava poslednji
         prethodniId.pop(id)
      }
       //Proveramo da li su parovi reseni uzimajacu da je index za td       zapravo id -1 (id je smesten prethodno i prethodnim id-evima) a       max broj u listi prehodni id je 2 pa gleddamo o i prvi index
       else if(td[prethodniId[0]-1].innerHTML==td[prethodniId[1]-1].innerHTML){
         
         // resenom paru postavljamo drugi background color i       onemogucavamo da se dalje klikne 
         td[prethodniId[0]-1].style.background="green"
         td[prethodniId[1]-1].style.background="green"
      
         td[prethodniId[0]-1].style.pointerEvents="none"
         td[prethodniId[1]-1].style.pointerEvents="none"

         //moramo staviti da kada su reseni da u prethonde id se ne nalazi ni jedan
         prethodniId=[]
        
         //pravimo progressbarpart koji apendujemo tako da izgleda da se progressbar uvecava
         let progressBarPart=document.createElement("div")
         progressBarPart.setAttribute("class","progressBarPart")
         
         //dodajemo 5 sekudni za resenisvaki par
         time+=5
         progressBar.appendChild(progressBarPart)
      }

      //Kada se otvori trece polje ako je id razlicit od prethodna dva onda se postavlja background red za dva prethodno otvorena

      else if(prethodniId.length=="3" && prethodniId[0]!==prethodniId[1] && prethodniId[1]!==prethodniId[2] && prethodniId[1]!==prethodniId[2]){

         //ako polja nemaju isti innerHTML stavljamo red background za prv dva kliknuta
         td[prethodniId[0]-1].style.background="red";
         td[prethodniId[1]-1].style.background="red";

         //pri cemu se u prethodne id-eve scrstava samo zadnje otvoren id
         prethodniId=[polje.id]

         //otovrenom polju se daje bck color white
         td[polje.id-1].style.background="white"
       
      }
      //cekiramo da li su sva polja zelena
     function checkingArray(tableDatas){
      return tableDatas.style.background=="green"
     }
      //ako jesu refresujemo stranicu
      if(tableData.every(checkingArray)){
         
            alert("Pogodio si sve parove, igra će se refrešovati")
            setInterval(function(){
               location.reload()
            },1500)
         }
      
   }
   

 }

 
 