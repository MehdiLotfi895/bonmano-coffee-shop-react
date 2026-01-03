import { useState } from "react"
import "./Header.css";
function Header({listOfShoppingBasket,setListOfShoppingBasket,showShoppingBasket,setShoppingBasket,dark,setDark}){
    const [showMenu,setShowMenu]=useState(false);
    let sum=0;
    for(let i=0;i<=listOfShoppingBasket.length-1;i++)
        sum+=(Number(listOfShoppingBasket[i].value)*Number(listOfShoppingBasket[i].number)*(100-listOfShoppingBasket[i].offPercent)/100);
        console.log(sum)
        console.log(listOfShoppingBasket)
        const x=(dark)?{backgroundColor:"#3e4046",color:"white "}:{backgroundColor:"white "};
        const y=(dark)?{color:"white "}:{color:"black "};
        console.log(dark)
    return(
        <>
        {
        (showMenu)?
        <div id="menuForMobile" style={x}>
            <div style={{display:"flex",alignItems:"center",marginTop:"5px",paddingRight:"10px",paddingLeft:"10px",justifyContent:"space-between"}}>
             <img src="./app-logo.png" style={{width:"40px"}}/>
             <img src="./app-logo-type.svg" style={{width:'80px',marginRight:"-50px"}}/>
             {(!dark)?<img src="./x.png" style={{width:"10px",height:"10px"}} onClick={()=>{setShowMenu(false)}}/>:<img src="./whitex.png" onClick={()=>{setShowMenu(false)}}style={{width:"20px",height:"20px",marginLeft:"-4px"}}/>}
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"20px",marginTop:"20px",paddingRight:"10px",fontSize:"17px"}}>
                <div style={{display:"flex",color:"#ebc076ff",gap:"10px"}}><img className="img" src="./home.png"/><p>صفحه اصلی</p></div>
                <div style={{display:"flex",color:"#ebc076ff",gap:"10px"}}><img className="img" style={{marginTop:"-2px"}}src="./shop.png"/><p>فروشگاه</p></div>
                <div  style={{marginRight:"30px"}}><p>قهوه ویژه</p></div>
                <div style={{marginRight:"30px"}}><p>قهوه درجه یک</p></div>
                <div style={{marginRight:"30px"}}><p>کپسول قهوه</p></div>
                <div style={{display:"flex",gap:"10px"}}>{(dark)?<img src="./whitemessage.png" className="img"/>:<img className="img"src="./message.png"/>}<p>دیکشنری</p></div>
                <a style={{textDecoration:"none",...y}}href="#y18"><div onClick={()=>{setShowMenu(false)}}style={{display:"flex",gap:"10px"}}>{(dark)?<img src="./whitebag.png" className="img"/>:<img className="img"src="./bag.png"/>}<p>درباره ما</p></div></a>
                <a style={{textDecoration:"none",...y}}href="#content"><div onClick={()=>{setShowMenu(false)}}style={{display:"flex",gap:"10px"}}>{(dark)?<img src="./whitenote.png" className="img"/>:<img className="img"src="./note.png"/>}<p>بلاگ ها</p></div></a>
                <a style={{textDecoration:"none",...y}}href="#y32"><div onClick={()=>{setShowMenu(false)}}style={{display:"flex",gap:"10px"}}>{(dark)?<img src="./whitephone.png" className="img"/>:<img className="img"src="./phoneformobile.png"/>}<p>تماس با ما</p></div></a>
                <div style={{display:"flex",gap:"10px",color:"#ebc076ff"}}>
                <img className="img"src="./enter.png"/>
                <div>ورود | ثبت نام</div> 
                </div>
                <div style={{display:"flex",color:"#ebc076ff"}} onClick={()=>{if(!dark){setDark(true);localStorage.setItem('dark',"true")} else{setDark(false);localStorage.setItem('dark',"false") }     }}>
                   
                    {
                            (!dark)?
                       <svg style={{marginTop:'-14px',marginRight:"-16px"}}width="48px" height="48px" viewBox="-13.2 -13.2 50.40 50.40" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#ebc076ff" stroke-width="1.272" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> 
                        :
                        <img src="./sunmobile.png" style={{width:"30px",marginTop:"-5px",marginRight:"-7px"}}/>
                    }
                    {(dark)?
                     <p style={{marginRight:"10px"}}>تم روشن</p>:
                    <p>تم تیره</p>
                     }
                    </div>
                <div onClick={()=>{setShowMenu(false);setShoppingBasket(true)}}style={(dark)?{display:"flex",color:"#ebc076ff",marginTop:"10px"}:{display:"flex",color:"#ebc076ff"}}>
                    <svg style={{marginTop:"-30px",marginRight:"-15px"}}width="48px" height="48px" viewBox="-14.64 -14.64 53.28 53.28" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.192"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2ZM18 13H7.78078L6.28078 7H20.1211C20.6742 7 21.0063 7.40675 20.9794 7.81078C20.9034 8.9522 20.6906 10.3318 20.1836 11.3949C19.6922 12.4251 19.0201 13 18 13ZM18 20.9938C17.4511 20.9938 17.0062 20.5489 17.0062 20C17.0062 19.4511 17.4511 19.0062 18 19.0062C18.5489 19.0062 18.9938 19.4511 18.9938 20C18.9938 20.5489 18.5489 20.9938 18 20.9938ZM7.00617 20C7.00617 20.5489 7.45112 20.9938 8 20.9938C8.54888 20.9938 8.99383 20.5489 8.99383 20C8.99383 19.4511 8.54888 19.0062 8 19.0062C7.45112 19.0062 7.00617 19.4511 7.00617 20Z" fill={(dark)?"#ad9770ff":"#ebc076"}></path> </g></svg>
                    <p style={{marginTop:"-15px"}}>سبد خرید</p><img src=""/>
                    </div>
            </div>
        </div>
        :
        <></>
        }
        {
         (showShoppingBasket)?
         <div id="shopbasketMobile" style={x}>
           <div style={{display:"flex",marginTop:"20px",justifyContent:"space-between",height:"35px"}}>
             {(!dark)?<img src="./x.png" style={{width:"10px",height:"10px"}} onClick={()=>{setShoppingBasket(false)}}/>:<img src="./whitex.png" onClick={()=>{setShoppingBasket(false)}}style={{width:"20px",height:"20px",marginLeft:"-4px"}}/>}
             <p>سبد خرید</p>
           </div>
           <div style={{width:"92%",marginRight:"4%",height:"1px",backgroundColor:`${(dark)?"white":"black"}`}}></div>
           {
               (listOfShoppingBasket.length!=0)?
               <>
 {
                    listOfShoppingBasket.map((value,index)=>{
                        if(index<3){
                        return(
                            < >
                               <div style={{width:"90%",marginRight:"5%",display:"flex",alignItems:"center",marginTop:"15px"}}>
                                <div style={{width:"30%",display:"flex",justifyContent:"start"}}><img style={{width:"100%",padding:"0"}}src={value.img}/></div>
                                <div style={{width:"72%",fontSize:"15px"}}>
                                    <div>{value.name} {value.weight}گرمی</div>
                                    <div style={{display:"flex",marginTop:"30px"}}>
                                        <div style={{border:"1px solid #cfcfcc",borderRadius:"20px",width:"40%",height:"35px",display:"flex",justifyContent:"space-between",alignItems:"center",color:"#f3cb86",fontSize:"18px",fontWeight:"bold",...x}}>
                                            <button style={{backgroundColor:"transparent",border:"none",fontSize:"20px",marginRight:"10%",color:"#f3cb86"}} onClick={()=>{
                                                let newArr=[...listOfShoppingBasket];
                                                newArr[index].number=newArr[index].number+1;
                                                setListOfShoppingBasket(newArr);
                                            }}>+</button>
                                             <div>{value.number}</div>
                                            <button style={{backgroundColor:"transparent",border:"none",fontSize:"20px",marginLeft:"15%",color:"#f3cb86",marginTop:"-18px"}} onClick={()=>{
                                                if(listOfShoppingBasket[index].number>1){
                                                let newArr=[...listOfShoppingBasket];
                                                newArr[index].number=newArr[index].number-1;
                                                setListOfShoppingBasket(newArr);}}}>_</button>
                                        </div>
                                        <div style={{marginRight:"3%"}}>
                                            <div style={{fontSize:"11px",color:"rgb(16,147,138)",fontWeight:"bold",marginTop:"-3px"}}>{Number(value.offPercent)*Number(value.value)/100}هزار تومان تخفیف</div>
                                            <div style={{marginTop:"10px",fontSize:"12px",color:"rgba(122, 119, 119, 1)"}}><span style={(dark)?{fontWeight:"bold",fontSize:"16px",color:"white"}:{fontWeight:"bold",fontSize:"16px",color:"black"}}>{value.value}</span>تومان </div>
                                        </div>
                                    </div>
                                </div>
                               </div>
                               <div className="shopLines" style={(index==(listOfShoppingBasket.length-1))?{backgroundColor:"rgb(96, 85, 85)"}:{backgroundColor:"rgb(226, 220, 220)"}}></div>
                            </> 
                        )
                    }
                    if(index==3){
                        return(
                            <div style={{color:"rgba(34, 198, 231, 1)",marginRight:"20px",marginTop:"5px"}}>و موارد دیگر...</div>
                        )
                    }
                }
                   
                )
                }
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",position:"absolute",bottom:"60px",left:"10px",width:"70vw"}}>
                    <div>
                        <button className="orderButton" style={{width:"90px"}}>ثبت سفارش</button>
                    </div>
                    <div>
                        <div style={(dark)?{color:"rgba(234, 232, 232, 1)",fontSize:"13px"}:{color:"rgba(158, 148, 148, 1)",fontSize:"13px"}}>مبلغ قابل پرداخت</div>
                        <div style={{fontWeight:"bold"}}>
                        {sum} <span style={(dark)?{color:"rgba(190, 185, 185, 1)",fontWeight:"normal",fontSize:"12px"}:{color:"rgba(81, 77, 77, 1)",fontWeight:"normal",fontSize:"12px"}}>تومان</span>
                        </div>
                    </div>
                </div>
               </>
               :
               <>
               <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                  <div style={{marginTop:"30px"}}>
                  <svg width="64px" height="64px" viewBox="-2.88 -2.88 21.76 21.76" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={(dark)?"#3e4046":"#ffffff"} stroke-width="0.64"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#bfbfbf"> <path fill-rule="evenodd" d="M1.25 1.5a.75.75 0 000 1.5h1.154a.75.75 0 01.736.604l.874 4.413.405 2.15A2.25 2.25 0 006.63 12h6.095a2.25 2.25 0 002.214-1.848l.727-4A2.25 2.25 0 0013.453 3.5H4.648l-.037-.187A2.25 2.25 0 002.404 1.5H1.25zm4.237 6.236L4.945 5h8.508a.75.75 0 01.738.884l-.728 4a.75.75 0 01-.738.616H6.63a.75.75 0 01-.737-.611l-.406-2.153z" clip-rule="evenodd"></path> <path d="M7.5 13.75c0 .69-.56 1.25-1.25 1.25h-.01a1.25 1.25 0 110-2.5h.01c.69 0 1.25.56 1.25 1.25zM14 13.75c0 .69-.56 1.25-1.25 1.25h-.01a1.25 1.25 0 110-2.5h.01c.69 0 1.25.56 1.25 1.25z"></path> </g> </g></svg>
                  </div>
                  <p style={{fontSize:"14px",marginTop:"0px"}}>هنوز محصولی به سبد خرید اضافه نشده</p>
                  <a style={{textDecoration:"none"}} href="#showProduct"><button id="shppingPage" style={{width:"160px"}}onClick={()=>{setShoppingBasket(false)}}>مشاهده صفحه فروشگاه</button></a>
                </div>
               </>
           }
         </div>
         :<></>
        }
        <div id="forMobile">
            <div>
                {(!dark)?
            <svg onClick={()=>{if(showMenu){setShowMenu(false)};setShoppingBasket(true)}}width="48px" height="48px" viewBox="-14.64 -14.64 53.28 53.28" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.192"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2ZM18 13H7.78078L6.28078 7H20.1211C20.6742 7 21.0063 7.40675 20.9794 7.81078C20.9034 8.9522 20.6906 10.3318 20.1836 11.3949C19.6922 12.4251 19.0201 13 18 13ZM18 20.9938C17.4511 20.9938 17.0062 20.5489 17.0062 20C17.0062 19.4511 17.4511 19.0062 18 19.0062C18.5489 19.0062 18.9938 19.4511 18.9938 20C18.9938 20.5489 18.5489 20.9938 18 20.9938ZM7.00617 20C7.00617 20.5489 7.45112 20.9938 8 20.9938C8.54888 20.9938 8.99383 20.5489 8.99383 20C8.99383 19.4511 8.54888 19.0062 8 19.0062C7.45112 19.0062 7.00617 19.4511 7.00617 20Z" fill="rgba(0, 0, 0, 1)"></path> </g></svg>
              :
              <svg onClick={()=>{if(showMenu){setShowMenu(false)};setShoppingBasket(true)}}width="48px" height="48px" viewBox="-14.64 -14.64 53.28 53.28" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.192"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2ZM18 13H7.78078L6.28078 7H20.1211C20.6742 7 21.0063 7.40675 20.9794 7.81078C20.9034 8.9522 20.6906 10.3318 20.1836 11.3949C19.6922 12.4251 19.0201 13 18 13ZM18 20.9938C17.4511 20.9938 17.0062 20.5489 17.0062 20C17.0062 19.4511 17.4511 19.0062 18 19.0062C18.5489 19.0062 18.9938 19.4511 18.9938 20C18.9938 20.5489 18.5489 20.9938 18 20.9938ZM7.00617 20C7.00617 20.5489 7.45112 20.9938 8 20.9938C8.54888 20.9938 8.99383 20.5489 8.99383 20C8.99383 19.4511 8.54888 19.0062 8 19.0062C7.45112 19.0062 7.00617 19.4511 7.00617 20Z" fill="rgba(255, 255, 255, 1)"></path> </g></svg>

        }
            </div>
            <div style={(showMenu)?{display:"none"}:{}}>
                <img src="./app-logo-type.svg"/>
            </div>
            <div onClick={()=>{setShowMenu(true)}}>
                {
                    (!dark)?
                <img src="./menu.png" style={{width:"20px"}} onClick={()=>{if(showShoppingBasket){setShoppingBasket(false)}setShowMenu(true)}}/>
                :
                <img src="./whitemenu.png" style={{width:"20px"}} onClick={()=>{if(showShoppingBasket){setShoppingBasket(false)}setShowMenu(true)}}/>
                } 
                </div>
        </div>
        <div id="container">
          <div id="header">
            <div id="login">
                    <a href="#" id="loginAndRegister" className="headerLogin">
                        <div>ورود | ثبت نام</div> 
                        <svg style={{marginLeft:"-7%",paddingTop:"4%"}}width="64px" height="64px" viewBox="-9.36 -9.36 42.72 42.72" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 8V5C6 4.44772 6.44772 4 7 4H17C17.5523 4 18 4.44772 18 5V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V16M6 12H13M13 12L10.5 9.77778M13 12L10.5 14.2222" stroke="#e8d7b9" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </a> 
                    <div id="line">
                    </div>
                    <button id="colorTheme">
                        {
                            (!dark)?
                       <svg onClick={()=>{setDark(true);localStorage.setItem('dark',"true")}}style={{paddingTop:"10%"}}width="64px" height="64px" viewBox="-13.2 -13.2 50.40 50.40" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#e8d7b9" stroke-width="1.272" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> 
                        :
                        <div style={{width:"64px",height:"64px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src="./sun.png" style={{width:"30px",marginTop:"4px"}}onClick={()=>{setDark(false);localStorage.setItem("dark","false")}}/>
                        </div>
                    }
                    </button>
                    <button style={{ backgroundColor: "transparent",border:"none"}}>
                      <svg onClick={()=>{(showShoppingBasket)?setShoppingBasket(false):setShoppingBasket(true)}}style={{paddingTop:"10%",marginLeft:"-80%"}}width="64px" height="64px" viewBox="-14.64 -14.64 53.28 53.28" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.192"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2ZM18 13H7.78078L6.28078 7H20.1211C20.6742 7 21.0063 7.40675 20.9794 7.81078C20.9034 8.9522 20.6906 10.3318 20.1836 11.3949C19.6922 12.4251 19.0201 13 18 13ZM18 20.9938C17.4511 20.9938 17.0062 20.5489 17.0062 20C17.0062 19.4511 17.4511 19.0062 18 19.0062C18.5489 19.0062 18.9938 19.4511 18.9938 20C18.9938 20.5489 18.5489 20.9938 18 20.9938ZM7.00617 20C7.00617 20.5489 7.45112 20.9938 8 20.9938C8.54888 20.9938 8.99383 20.5489 8.99383 20C8.99383 19.4511 8.54888 19.0062 8 19.0062C7.45112 19.0062 7.00617 19.4511 7.00617 20Z" fill="#e8d7b9"></path> </g></svg>
                    </button>
            </div>
            <div id="nav">
                 <ul id="navBar">
                    <li><a href="#footer" className="headerLinks">تماس با ما</a></li>
                    <li><a href="#content" className="headerLinks">درباره ما</a></li>
                    <li><a href="#coffeclub" className="headerLinks">بلاگ</a></li>
                    <li><a href="#" className="headerLinks">دیکشنری</a></li>
                    <li><a onClick={()=>{(showMenu)?setShowMenu(false):setShowMenu(true)}}  style={(showMenu)?{color:"#f59f0bff"}:{}} className="headerLinks">فروشگاه</a></li>
                    <li><a href="#" className="headerLinks" style={{color:"#e8d7b9"}}>صفحه اصلی</a></li>
                    <li ><a href="#" className="headerLinks" id="appLogo"><img src="./app-logo.png" style={{width:"75%"}}/></a></li>
                 </ul> 
            </div>
            {
              (showMenu)?
            <>
            <div style={{position:"absolute",top:"58px",left:"73.5%",width:"12%",height:"50px",borderRadius:"10px",backgroundColor:"#f59f0bff"}}>

            </div>
            <div style={{position:"absolute",top:"60px",left:"73.5%",backgroundColor:"white",color:"black",width:"12%",height:"225px",borderRadius:"10px",direction:"rtl",fontFamily:"Dana-Regular-ttf",fontSize:"13px",...x}}>
                <div>
                    <ul id="MenuLinks" >
                        <li><a href="#" className="MenuLink" style={(dark)?{color:"white"}:{color:"rgb(73, 70, 70)"}}>قهوه ویژه</a></li>
                        <li><a href="#" className="MenuLink" style={(dark)?{color:"white"}:{color:"rgb(73, 70, 70)"}}>ویژه در سطح جهانی</a></li>
                        <li><a href="#" className="MenuLink" style={(dark)?{color:"white"}:{color:"rgb(73, 70, 70)"}}>قهوه درجه یک</a></li>
                        <li><a href="#" className="MenuLink" style={(dark)?{color:"white"}:{color:"rgb(73, 70, 70)"}}>ترکیبات تجاری</a></li>
                        <li><a href="#" className="MenuLink" style={(dark)?{color:"white"}:{color:"rgb(73, 70, 70)"}}>کپسول قهوه</a></li>
                        <li><a href="#" className="MenuLink" style={(dark)?{color:"white"}:{color:"rgb(73, 70, 70)"}}>قهوه زینو برزیلی</a></li>
                    </ul>
                </div>
            </div>
            </>:<></>
            }
            {
              (showShoppingBasket)?
              <>
              <div style={{width:"23.5%",
                height:"50px",
                backgroundColor:"#f59f0bff",
                position: "absolute",
                top:"58px",
                left:"18.5%",
                borderRadius: "15px",}}></div>
              <div id="shoppingBasket" style={( listOfShoppingBasket.length==0)?{height:"240px",...x}:( listOfShoppingBasket.length<4)?{height:`${-2.5* listOfShoppingBasket.length* listOfShoppingBasket.length+162.5* listOfShoppingBasket.length+80}px`,...x}:{height:"565px",...x}}>            
                {(listOfShoppingBasket.length)?
                 <div style={{direction:"rtl",width:"90%",marginLeft:"5%"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"15px",fontSize:"12px"}}>
                        <div style={{color:"rgba(168, 159, 159, 1)"}}>{listOfShoppingBasket.length}مورد</div>
                        <div style={{color:"#f3cb86ff",display:"flex",alignItems:"center"}}>
                            <div>مشاهده سبد خرید</div>
                            <div style={{marginRight:"-5%"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#f3cb86" stroke="#f3cb86" strokeWidth="0.00024" style={{display:"block",margin:"0 auto",paddingRight:0,paddingTop:0}}><polygon points="15,2 13.6,3.4 20.2,10 13.6,16.6 15,18 23,10" transform="rotate(180,12,12)" /></svg></div>
                            </div>
                        </div>
                {
                    listOfShoppingBasket.map((value,index)=>{
                        if(index<3){
                        return(
                            < >
                               <div style={{width:"90%",marginRight:"5%",display:"flex",alignItems:"center",marginTop:"20px"}}>
                                <div style={{width:"30%",display:"flex",justifyContent:"start"}}><img style={{width:"100%",padding:"0"}}src={value.img}/></div>
                                <div style={{width:"70%",fontSize:"13px"}}>
                                    <div>{value.name}</div>
                                    <div> {value.weight}گرمی</div>
                                    <div style={{display:"flex",marginTop:"30px"}}>
                                        <div style={{border:"1px solid #cfcfcc",borderRadius:"20px",width:"40%",height:"35px",display:"flex",justifyContent:"space-between",alignItems:"center",color:"#f3cb86",fontSize:"18px",fontWeight:"bold",...x}}>
                                            <button style={{backgroundColor:"transparent",border:"none",fontSize:"20px",marginRight:"10%",color:"#f3cb86"}} onClick={()=>{
                                                let newArr=[...listOfShoppingBasket];
                                                newArr[index].number=newArr[index].number+1;
                                                setListOfShoppingBasket(newArr);
                                            }}>+</button>
                                             <div>{value.number}</div>
                                            <button style={{backgroundColor:"transparent",border:"none",fontSize:"20px",marginLeft:"15%",color:"#f3cb86",marginTop:"-18px"}} onClick={()=>{
                                                if(listOfShoppingBasket[index].number>1){
                                                let newArr=[...listOfShoppingBasket];
                                                newArr[index].number=newArr[index].number-1;
                                                setListOfShoppingBasket(newArr);}}}>_</button>
                                        </div>
                                        <div style={{marginRight:"3%"}}>
                                            <div style={{fontSize:"9px",color:"rgb(16,147,138)",fontWeight:"bold",marginTop:"-3px"}}>{Number(value.offPercent)*Number(value.value)/100}هزار تومان تخفیف</div>
                                            <div style={{marginTop:"10px",fontSize:"12px",color:"rgba(122, 119, 119, 1)"}}><span style={(dark)?{fontWeight:"bold",fontSize:"16px",color:"white"}:{fontWeight:"bold",fontSize:"16px",color:"black"}}>{value.value}</span>تومان</div>
                                        </div>
                                    </div>
                                </div>
                               </div>
                               <div className="shopLines" style={(index==(listOfShoppingBasket.length-1))?{backgroundColor:"rgb(96, 85, 85)"}:{backgroundColor:"rgb(226, 220, 220)"}}></div>
                            </> 
                        )
                    }
                    if(index==3){
                        return(
                            <div style={{color:"rgba(34, 198, 231, 1)"}}>و موارد دیگر...</div>
                        )
                    }
                }
                   
                )
                }
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
                    <div style={{width:"50%"}}>
                        <div style={(dark)?{color:"rgba(234, 232, 232, 1)",fontSize:"10px"}:{color:"rgba(158, 148, 148, 1)",fontSize:"10px"}}>مبلغ قابل پرداخت</div>
                        <div style={{fontWeight:"bold"}}>
                        {sum}<span style={(dark)?{color:"rgba(190, 185, 185, 1)",fontWeight:"normal",fontSize:"12px"}:{color:"rgba(81, 77, 77, 1)",fontWeight:"normal",fontSize:"12px"}}>تومان</span>
                        </div>
                    </div>
                    <div style={{width:"50%"}}>
                        <button className="orderButton">ثبت سفارش</button>
                    </div>

                </div>
                </div>
                :
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                  <div style={{marginTop:"30px"}}>
                  <svg width="64px" height="64px" viewBox="-2.88 -2.88 21.76 21.76" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={(dark)?"#3e4046":"#ffffff"} stroke-width="0.64"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#bfbfbf"> <path fill-rule="evenodd" d="M1.25 1.5a.75.75 0 000 1.5h1.154a.75.75 0 01.736.604l.874 4.413.405 2.15A2.25 2.25 0 006.63 12h6.095a2.25 2.25 0 002.214-1.848l.727-4A2.25 2.25 0 0013.453 3.5H4.648l-.037-.187A2.25 2.25 0 002.404 1.5H1.25zm4.237 6.236L4.945 5h8.508a.75.75 0 01.738.884l-.728 4a.75.75 0 01-.738.616H6.63a.75.75 0 01-.737-.611l-.406-2.153z" clip-rule="evenodd"></path> <path d="M7.5 13.75c0 .69-.56 1.25-1.25 1.25h-.01a1.25 1.25 0 110-2.5h.01c.69 0 1.25.56 1.25 1.25zM14 13.75c0 .69-.56 1.25-1.25 1.25h-.01a1.25 1.25 0 110-2.5h.01c.69 0 1.25.56 1.25 1.25z"></path> </g> </g></svg>
                  </div>
                  <p style={{fontSize:"14px",marginTop:"-10px"}}>هنوز محصولی به سبد خرید اضافه نشده</p>
                  <button id="shppingPage">مشاهده صفحه فروشگاه</button>
                </div>}
              </div>
              </>
              :<></>
            }
          </div>
          <div id="description">
            <p id="pageName">قهوه عربیکا تانزانیا</p>
            <p id="hp">یک فنجان بالانس!</p>
            <div id="line1"></div>
            <div id="dc">قطعا نام اشنای عربیکا را شنیده اید.عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند  قهوه کشت میشود</div>
          </div>
        </div>
        </>
    )
}

export default Header
