let div=document.createElement("div");
div.setAttribute("class","main1");

let formgroup=document.createElement("div");
formgroup.setAttribute("class","form-group");
//use bootstarp 4.6 for input
let input=document.createElement("input");
input.setAttribute("type","number");
input.setAttribute("class","form-control");
input.setAttribute("id","main");
input.setAttribute("placeholder","enter booknumber:- 1 to 12");
input.style.width="520px";
//use bootstarp 4.6 for button
let button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="200px";
button.style.marginTop="20px";
button.addEventListener("click",foo);
//create elements for book name, isbn,number of pages,authors,publisher,teleased date,characters
let bookname=document.createElement("div");
bookname.setAttribute("id","name");
let isbn =document.createElement("div");
isbn.setAttribute("id","isbn");
let numberOfPages=document.createElement("div");
numberOfPages.setAttribute("id","numberOfPages");
let authors=document.createElement("div");
authors.setAttribute("id","authors");
let publisher=document.createElement("div");
publisher.setAttribute("id","publisher");
let released=document.createElement("div");
released.setAttribute("id","released");
let characters=document.createElement("div");
characters.setAttribute("id","characters"); 
let abc=document.createElement("div");
abc.setAttribute("id","nonumber");
//append in forn group
formgroup.append(input,button,bookname,isbn,numberOfPages,authors,publisher,released,characters,abc);
//append in div
div.append(formgroup);
// div.append(abc);
//append in document.body
document.body.append(div);
// get input from userS

//foo function for fetch data in api
async function foo(){
try {
let booknumber=document.getElementById("main").value;
console.log(booknumber);

let url ='https://anapioficeandfire.com/api/books/'+booknumber;
let res=await fetch(url);
let res1= await res.json();
console.log(res1);
//charters
let url1 ='https://anapioficeandfire.com/api/characters/13'+booknumber;
let res2=await fetch(url1);
let res3= await res2.json();
console.log(res3);
//index for result

console.log(res1.name);
bookname.innerHTML=`BOOK NAME:${res1.name}`;
console.log(res1.isbn); 
isbn.innerHTML=`ISBN NUMBER:${res1.isbn}`;
console.log(res1.numberOfPages); 
numberOfPages.innerHTML=`NUMBER OF PAGES:${res1.numberOfPages}`;
console.log(res1.authors); 
authors.innerHTML=`AUTHORS NAME:${res1.authors}`;
console.log(res1.publisher); 
publisher.innerHTML=`PUBLISHER NAME:${res1.publisher}`;
console.log(res1.released); 
released.innerHTML=`RELEASED DATE:${res1.released}`;
console.log(res3.name); 
characters.innerHTML=`CHARACTERS NAME:${res3.name}`;
}
catch (error) {
  console.log(error);
}
}
// else{
//   console.log("error");
//   abc.innerHTML=<div>please enter the correct number</div>;
// }