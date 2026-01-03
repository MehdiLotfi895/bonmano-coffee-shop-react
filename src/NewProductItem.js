import { useEffect, useState } from "react";
import "./NewProductItem.css"
function NewProductItem({object,listOfShoppingBasket,setListOfShoppingBasket,dark}){
    const[successMessage,setSuccesMessage]=useState(false)
    const[failureMessage,setFailurMessage]=useState(false)
    const arr1=[];
    for(let i=1;i<=object.score;i++){
        arr1.push(i)
    }

    const arr2=[];
    for(let i=1;i<=(5-object.score);i++){
        arr2.push(i)
    }
    useEffect(()=>{
        localStorage.setItem("listOfShoppingBasket",JSON.stringify(listOfShoppingBasket))
    },[listOfShoppingBasket])
    return(
        <>
        {
            (successMessage)?<div style={{position:"fixed",top:"90%",left:"1%",backgroundColor:"rgba(46,204,113,0.2)",color:"#2ecc71",maxWidth:"300px",padding:"10px 16px",borderRadius:"10px",zIndex:1000,fontSize:"14px"}}>
                کالا با موفقیت به سبد خرید اضافه شد
            </div>:<></>
        }
        {
            (failureMessage)?<div style={{position:"fixed",top:"90%",left:"1%",backgroundColor:"rgba(231,76,60,0.15)",color:"rgb(192,57,43)",maxWidth:"320px",padding:"10px 16px",borderRadius:"10px",zIndex:1000,fontSize:"14px"}}>
           به دلیل عدم موجودی کالا به سبد خرید اضافه نشد
        </div>:<></>
        }
       
        <div id="showProduct" style={(dark)?{backgroundColor:"#3e4046",color:"white"}:{backgroundColor:"white",color:"black"}}>
        {
            (object.offPercent!=0)?<button id="buttonForPercent"style={{color:"white",backgroundColor:"#f59f0bff",border:"none",paddingRight:"4%",paddingLeft:"4%",borderRadius:"20px",paddingTop:"5px",paddingBottom:"5px",position:"relative",top:"20px",right:"8%"}}>{object.offPercent}%</button>:<></>

        }
   
        
            <div id="x10"style={(object.offPercent==0)?{width:"80%",height:"50%",position:"relative",top:"15px",right:"10%"}:{width:"80%",height:"50%",position:"relative",top:"-11px",right:"10%"}}><img id="x11" src={object.img} style={{width:"100%"}}/></div>
            <div className={(object.offPercent==0)?"y1":"y2"}style={(object.offPercent==0)?{width:"100%",height:"%40",marginTop:"20%"}:{width:"100%",height:"%40",marginTop:"9%"}}>
                <div id="Name1"style={{marginRight:"8%"}}>قوه ترک بن مانو مقدار 250 گرم</div>
                <div id="Name2"style={{marginRight:"8%"}}>{object.name}</div>
                <div id="toman"style={{marginRight:"8%",color:"#2cc0a8",fontSize:"12px",marginTop:"10px"}}>
                    {
                        (object.exist)?(object.offPercent==0)?<><span className="valueOfProduct"style={{fontSize:"16px",fontWeight:"bold"}}>{object.value}</span>تومان</>:
                        <> 
                        <span className="valueOfProduct"style={{fontSize:"16px",fontWeight:"bold"}}>{object.value*(100-object.offPercent)/100}</span>تومان
                        <span className="valueOfProduct"style={{fontSize:"16px",fontWeight:"bold",color:"rgba(190, 183, 183, 1)",marginRight:"3%"}}>{object.value}</span><span style={{color:"rgba(190, 183, 183, 1)"}}>تومان</span>
                        <div id="redLine"style={{backgroundColor:"red",width:"37.5%",height:"1px",position:"relative",top:"-13px",right:"39%"}}></div>
                        </>:
                        <><span id="notExist"style={{color:"red",fontSize:"16px"}}>فعلا موجود نیست</span></>
                    }
                    </div>
                <div className="y3"style={{marginRight:"8%",display:"flex",marginTop:"10px"}}>
                    <button style={{width:"27px",height:"27px",borderRadius:"100%",backgroundColor:"rgba(238, 235, 235, 1)",border:"none"}} onClick={()=>{
                        if(object.exist){
                            let si=true;
                            listOfShoppingBasket.map((value,index)=>{
                                if(value.name==object.name){
                                   let newArr=[...listOfShoppingBasket];
                                   newArr[index].number=newArr[index].number+1;
                                   setListOfShoppingBasket(newArr)
                                   si=false;
                                   
                                }
                            })
                            if(si){
                        let newArr=[...listOfShoppingBasket]
                        newArr.push(object)
                        setListOfShoppingBasket(newArr)}
                        setSuccesMessage(true)
                        setTimeout(() => {
                            setSuccesMessage(false)
                        }, 2000);
                          }
                          else{
                            setFailurMessage(true);
                            setTimeout(() => {
                                setFailurMessage(false)
                            }, 2000);

                          }                        
                    }}>
                    <svg style={{marginRight:"-6px",marginTop:"-7px"}}width="40px" height="40px" viewBox="-14.64 -14.64 53.28 53.28" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.192"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2ZM18 13H7.78078L6.28078 7H20.1211C20.6742 7 21.0063 7.40675 20.9794 7.81078C20.9034 8.9522 20.6906 10.3318 20.1836 11.3949C19.6922 12.4251 19.0201 13 18 13ZM18 20.9938C17.4511 20.9938 17.0062 20.5489 17.0062 20C17.0062 19.4511 17.4511 19.0062 18 19.0062C18.5489 19.0062 18.9938 19.4511 18.9938 20C18.9938 20.5489 18.5489 20.9938 18 20.9938ZM7.00617 20C7.00617 20.5489 7.45112 20.9938 8 20.9938C8.54888 20.9938 8.99383 20.5489 8.99383 20C8.99383 19.4511 8.54888 19.0062 8 19.0062C7.45112 19.0062 7.00617 19.4511 7.00617 20Z" fill="rgba(96, 88, 88, 1)"></path> </g></svg>
                    </button>
                    <div style={{marginRight:"15px"}}>
                    <div ><img src="./arrow2.png"/></div>
                    <div style={{marginTop:"-25px"}}><img src="./arrow1.png"/></div>
                    </div>
                    <div id="Stars"style={{width:"45%",height:"20px",marginTop:"5px",marginRight:"20%",display:"flex"}}>
                       {
                        arr2.map((value)=>{
                            return(
                            <img src="./star2.png" id="Star2"/>)
                        })
                       }
                       {
                        arr1.map(value=>{
                            return(
                                <img src="./star1.png" id="Star1"/>
                            )
                        })
                       }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NewProductItem