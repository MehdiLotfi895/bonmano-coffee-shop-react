import "./Main.css"
import NewProductItem from "./NewProductItem";
import Section from "./Section.js"
import Things from "./Things.js"
import CoffeClub from "./CoffeClub.js";
import Content from "./Content.js"
import Servis from "./Servis.js";
import CoffeClubForMobile from "./CoffeClubForMobile.js";
function Main({object,bestSeller,listOfShoppingBasket,setListOfShoppingBasket,setShoppingBasket,dark,setDark}){
    const x=(dark)?{color:"white"}:{color:"black"}
    const y=(dark)?{backgroundColor:"#3e4046"}:{backgroundColor:"white"}
    return(
        <div id="main">
            <div id="lastestProducts"style={{position:"relative",top:"150px",right:"18%",fontSize:"30px",fontWeight:"bold",...x}}>جدید ترین محصولات</div>
            <div>
                <div id="dc2"style={{position:"relative",top:"157px",right:"18%",fontSize:"20px",...x}}>فرآوری شده از دانه قهوه</div>
                <div id="dc3"style={{position:"relative",top:"135px",right:"72%",color:"#f6a416ff",display:"flex"}}>
                    <div>مشاهده همه محصولات</div>
                    <div id="dc4"style={{marginTop:"4px"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#f9bd57ff" stroke="#f9bd57ff" strokeWidth="0.00024" style={{display:"block",margin:"0 auto",paddingRight:0,paddingTop:0}}><polygon points="15,2 13.6,3.4 20.2,10 13.6,16.6 15,18 23,10" transform="rotate(180,12,12)" /></svg></div>
                </div>
            </div>
            <div id="Producs"style={{marginTop:"165px",marginRight:"18%",width:"66%",display:"flex",gap:"10px 1%",flexWrap:"wrap"}}>
            {
                object.map((value)=>{
                    
                    return(
                        <NewProductItem object={value} listOfShoppingBasket={listOfShoppingBasket}setListOfShoppingBasket={setListOfShoppingBasket}setShoppingBasket={setShoppingBasket} dark={dark}></NewProductItem>
                    )
                })
            }
            </div>
            <div id="sectionss"style={{marginTop:"60px",display:"flex",gap:"1%",width:"66%",marginRight:"18%"}}>
            <Section description1="انواع قهوه" description2="ترکیبی و تک خاستگاه" img="./category-right.jpg">
            </Section>
            <Section description1="پودر های فوری" description2="نسکافه و هات چاکلت و ماسلا" img="./category-left.jpg" >
            </Section>
            </div>
            <div id="y4"style={{marginTop:"60px",display:"flex",gap:"10%",width:"66%",marginRight:"18%"}}>
                <Things img="./category1.png" name="قهوه دمی و اسپرسو" dark={dark}></Things>
                <Things img="./category2.png" name="لوازم جانبی و تجهیزات"dark={dark}></Things>
                <Things img="./category3.png" name="اسپسو ساز"dark={dark}></Things>
                <Things img="./category4.png" name="پک تستر قهوه"dark={dark}></Things>
                <Things img="./category5.png" name="قهوه ترک"dark={dark}></Things>
            </div>
            <div id="y7"style={{position:"relative",top:"150px",right:"18%",fontSize:"30px",fontWeight:"bold",...x}}>محصولات پرفروش</div>
            <div>
                <div id="y8"style={{position:"relative",top:"157px",right:"18%",fontSize:"20px",...x}}>پیشنهاد قهوه خور ها...</div>
                <div style={{position:"relative",top:"135px",right:"72%",color:"#f6a416ff",display:"flex"}}>
                    <button className="y9"style={{marginTop:"-4px",width:"30px",height:"30px",border:"none",borderRadius:"100%",marginRight:"6.5%",transform:"rotate(180deg)",...y}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={(dark)?"white":"black"} stroke="black" strokeWidth="0.00024" style={{display:"block",margin:"-9px 3px"}}><polygon points="15,2 13.6,3.4 20.2,10 13.6,16.6 15,18 23,10" transform="rotate(180,12,12)" /></svg></button>
                    <button className="y9"style={{marginTop:"-4px",width:"30px",height:"30px",border:"none",borderRadius:"100%",marginRight:"1%",...y}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={(dark)?"white":"black"}  stroke="black" strokeWidth="0.00024" style={{display:"block",margin:"-9px 3px"}}><polygon points="15,2 13.6,3.4 20.2,10 13.6,16.6 15,18 23,10" transform="rotate(180,12,12)" /></svg></button>
                </div>
            </div>
            <div id="y10"style={{marginTop:"165px",marginRight:"18%",width:"66%",display:"flex",gap:"1%"}}>
            {
                bestSeller.map((value,index)=>{
                    if(index<4){
                    return(
                        <NewProductItem object={value}listOfShoppingBasket={listOfShoppingBasket}setListOfShoppingBasket={setListOfShoppingBasket}setShoppingBasket={setShoppingBasket}dark={dark}></NewProductItem>
                    )}
                })
            }
            </div>
            <div  id="y11"style={{marginTop:"70px",marginRight:"18%",width:"66%"}}>
                <CoffeClubForMobile></CoffeClubForMobile>
                <CoffeClub></CoffeClub>
            </div>
            <div id="y12"style={{marginTop:"70px",marginRight:"18%",width:"66%",display:"flex",justifyContent:"space-between"}}>
                <div id="y13"style={{fontSize:"30px",fontWeight:"bold",...x}}>مطالب خواندی</div>
                <div style={{display:"flex"}}>
                <div id="y14"style={{color:"#f9bd57ff",display:"flex",alignItems:"center"}}>مشاهده همه مطالب</div>
                <div id="y15"style={{marginTop:"14px"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#f9bd57ff" stroke="#f9bd57ff" strokeWidth="0.00024" style={{display:"block",margin:"0 auto",paddingRight:0,paddingTop:0}}><polygon points="15,2 13.6,3.4 20.2,10 13.6,16.6 15,18 23,10" transform="rotate(180,12,12)" /></svg></div>
                </div>
            </div>
            <div id="y16"style={{marginTop:"70px",marginRight:"18%",width:"66%",display:"flex",justifyContent:"space-between"}}>
                <Content date={[21,"مرداد","1403"]} content="طرز تهیه قهوه دمی با دستگاه اروپرس" img="./blog-1.png" dark={dark}></Content>
                <Content date={[21,"مرداد","1403"]} content="یک نوشیدنی هیجان انگیز و پرکالری برای شروع  روز" img="./blog-2.png"dark={dark}></Content>
                <Content date={[21,"مرداد","1403"]} content="طرز تهیه یک فنجان کافه زینو برزیلی" img="./blog-3.png"dark={dark}></Content>
                <Content date={[21,"مرداد","1403"]} content="طرز تهیه دالگونا مناسب روز های کرونایی"img="./blog-4.png"dark={dark}></Content>

            </div>
            <div id="y18"style={{marginTop:"70px",marginRight:"18%",width:"66%",display:"flex",justifyContent:"space-between"}}>
                <div id="y20"style={{width:"25%"}}>
                    <img src="./contact.png" style={{width:"100%"}}/>
                </div>
                <div id="y21"style={(dark)?{color:"white"}:{color:"black"}}>
                    <div id="y22"style={{fontSize:"30px",fontWeight:"bold"}}>یکی از بهترین قهوه ها!</div>
                    <div id="y23">کیفیت قهوه را از ما بخواهید...</div>
                    <div>. . .</div>
                    <div id="y24">فضای گرم و دنج ما را احساس کنید .جایی که همه میتواند قهوه معطری پیدا کنند و دسر های خوشمزه ما را کاملا با قهوه داغ همراه شده است امتحان کنند .فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می سازد!</div>
                    <button style={{border:"1px solid #f59f0bff", backgroundColor:"transparent",paddingTop:"10px",paddingBottom:"4px",paddingRight:"10px",paddingLeft:"10px",color:"#f59f0bff",borderRadius:"20px",fontFamily:"Dana-Regular-ttf",marginTop:"5px",display:"flex"}}>
                    <img src="./phone3.png" style={{marginTop:"-5px"}}/>
                    <div >ثبت سفارش تلفنی</div>
                    </button>
                </div>
            </div>
            <div id="y25"style={{marginTop:"70px",marginRight:"18%",width:"66%",display:"flex",justifyContent:"space-between"}}>
                <Servis img={(dark)?"./24.png":"./support.svg"} description={["پشتیبانی شبانه روزی","7روز هفته و24 ساعته"]}dark={dark}></Servis>
                <Servis img={(dark)?"./box.png":"./express-delivery.svg"} description={["امکان تحویل اکسپرس","ارسال بسته با سرعت باد"]}dark={dark}></Servis>
                <Servis img={(dark)?"./Coffe.png":"./coffee.svg"} description={["رست تخصصی","تازه برداشت شده وبا کیفیت"]}dark={dark}></Servis>
                <Servis img={(dark)?"./parch.png":"./pitcher.svg"} description={["اکسسوری قهوه","وسایل و ادوات دم اوری"]}dark={dark}></Servis>

            </div>
        </div>
    )
}

export default Main;