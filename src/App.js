import { useState } from 'react';
import './App.css';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
//در این پروژه از ارایه به دلیل نبود ای پی ای برای فتش کردن دیتا استفاده که این روش پیشنهاد نمی شود
const NewProductItems=[
  {name:"قهوه اسپرسو بن مانو مدل پریسکا",weight:"250",offPercent:0,value:175000,number:1,img:"./p4.png",exist:true,score:4},
  {name:"قهوه آمریکانو بن مانو مدل پریسکا",weight:"250",offPercent:0,value:175000,number:1,img:"./p3.png",exist:false,score:3},
  {name:"قهوه لاته بن مانو مدل پریسکا",weight:"250",offPercent:12,value:175000,number:1,img:"./p1.png",exist:true,score:5},
  {name:"قهوه کاپوچینو بن مانو مدل پریسکا",weight:"250",offPercent:0,value:175000,number:1,img:"./p2.png",exist:true,score:4},
  {name:"قهوه موکا بن مانو مدل پریسکا",weight:"250",offPercent:12,value:175000,number:1,img:"./p1.png",exist:true,score:4},
  {name:"قهوه ماکیاتو بن مانو مدل پریسکا",weight:"250",offPercent:0,value:175000,number:1,img:"./p2.png",exist:false,score:2},
  {name:"قهوه فلت  بن مانو مدل پریسکا",weight:"250",offPercent:0,value:175000,number:1,img:"./p4.png",exist:true,score:5},
  {name:" قهوه ترک بن مانو مدل پریسکا",weight:"250",offPercent:0,value:175000,number:1,img:"./p3.png",exist:true,score:4},

]
const bestSeller=[
  {name:"قهوه کورتادو بن مانو مدل پریسکا",weight:"250",offPercent:12,value:175000,number:1,img:"./p5.png",exist:true,score:5},
  {name:"قهوه  ایرلندی بن مانو مدل پریسکا",weight:"250",offPercent:0,value:175000,number:1,img:"./p6.png",exist:false,score:4},
  {name:"قهوه آفوگاتو بن مانو مدل پریسکا",weight:"250",offPercent:0,value:175000,number:1,img:"./p7.png",exist:true,score:4},
  {name:"قهوه ریسترتو بن مانو مدل پریسکا",weight:"250",offPercent:0,value:175000,number:1,img:"./p8.png",exist:true,score:4},
]
function App() {
  const[listOfShoppingBasket,setListOfShoppingBasket]=useState(()=>{
    return(JSON.parse(localStorage.getItem("listOfShoppingBasket"))||[]);
  });
  const[showShoppingBasket,setShoppingBasket]=useState(false);
  const[dark,setDark]=useState(()=>{
    return(localStorage.getItem("dark")=="true");
  });
  return (
    <div style={(dark)?{backgroundColor:"#29272a"}:{backgroundColor:"#f7f6fb"}}>
      <Header listOfShoppingBasket={listOfShoppingBasket} setListOfShoppingBasket={setListOfShoppingBasket} showShoppingBasket={showShoppingBasket}setShoppingBasket={setShoppingBasket}dark={dark}setDark={setDark}></Header>
      <Main object={NewProductItems} bestSeller={bestSeller}listOfShoppingBasket={listOfShoppingBasket} setListOfShoppingBasket={setListOfShoppingBasket}dark={dark}setDark={setDark}></Main>
      <Footer dark={dark}setDark={setDark}></Footer>
    </div>

  );
  
}

export default App;

