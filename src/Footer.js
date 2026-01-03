import "./Footer.css"
function Footer(dark,setDark){
    return(
        <div id="footer" >
            <div id="y29"style={{marginRight:"5%",marginTop:"50px",width:"25%"}}>
                <div style={{display:'flex',gap:"3%"}}>
                    <img src="logo.svg"/>
                    <img src="logo-type.svg"/>
                </div>
                <div style={{marginTop:"20px",fontSize:"16px"}}>
                ما برآنیم تا با پیشرو بودن در فرآیند تولید نوع و کیفیت محصول خدمات و توزیع برای تولید کنندگان ایرانی باشیم و به رجع فرهنگ قهوه در ایران تبدیل شویم.می پنداریم که نظر مردم و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می کوشیم.

                </div>
            </div>
            <div id="y30"style={{width:"20%",marginTop:"58px"}} >
                <div style={{fontSize:"18px",fontWeight:"bold"}}>دسترسی سریع</div>
                <div id="y31"style={{display:"flex",gap:"20%",marginTop:"40px"}}>
                    <div>
                        <ul style={{display:"flex",flexDirection:"column",gap:"20px",width:"100%",}}className="Nav">
                            <li >حریم خصوصی</li>
                            <li>عودت کالا</li>
                            <li>شرایط استفاده</li>
                            <li>ثبت سفارش</li>
                        </ul>
                    </div>
                    <div >
                        <ul style={{display:"flex",flexDirection:"column",gap:"20px",width:"100%"}}className="Nav">
                            <li>پرسش های متداول</li>
                            <li>فرصت های شغلی</li>
                            <li>ضمانت نامه ها</li>
                            <li>ارتباط با ما</li>
                        </ul>
                    </div>
                </div>
        </div> 
        <div id="y32"style={{width:"30%",marginTop:"58px",marginLeft:"5%"}}>
            <div style={{fontWeight:"bold",fontSize:"18px"}}>در تماس باشیم</div>
            <div style={{display:"flex",marginTop:"39px"}}>
                <img src="./location4.png" style={{width:"5%"}}/>
                <div id="y33">
                    تهران _ فردوس  _ پلاک 31
                </div>

            </div>
            <div id="y34"style={{display:"flex",marginTop:"24px"}}>
                <div style={{display:"flex",color:"#ffd7ab",}}>
                <img src="./email1.png" style={{width:"23px",height:"23px"}}/>
                <div style={{marginRight:"5%"}}>
                    GoldenCoffe@gmail.com
                 </div>
                </div>
                <div id="y36"style={{marginRight:"5%"}}>
                <img src="./phoneFooter.png" style={{width:"23px"}}/>
               </div>
               <div style={{marginRight:"2%"}}>0999999999</div>
               <div style={{marginRight:"2%"}}>021-5583469</div>
            </div>
            <div style={{display:"flex",marginTop:"30px"}}>
                <div className="y35"style={{width:"40%",backgroundColor:" #ffd7ab",height:"36px",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <img src="./insta.svg" style={{width:"16%",}}/>
                    <div style={{color:"black",direction:"ltr",marginRight:"3%"}}>@golden-coffee</div>
                </div>
                <div className="y35"style={{width:"40%",background:"#ffd7ab",height:"36px",borderRadius:"10px",marginRight:"10%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <img src="./telegram.svg" style={{width:"16%"}}/>
                    <div style={{color:"black",marginRight:"3%",direction:"ltr"}}>
                        @golden-coffee
                    </div>

                </div>
            </div>
            
            
        </div>
        </div>
    )
}

export default Footer