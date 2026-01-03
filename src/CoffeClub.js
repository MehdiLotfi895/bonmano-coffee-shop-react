import "./CoffeClub.css"
function CoffeClub(){
    return(
        <div id="coffeclub">
           <div style={{width:"15%" ,display:"flex",alignItems:"center"}}>
            <div style={{width:"60%",marginRight:"20%",display:"flex",alignItems:"center"}}>
            <img src="./diamond.png" style={{width:"100%"}}/>
            </div>
           </div>
           <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <div style={{fontSize:"40px",color:"white",fontWeight:"bold"}}>کافی کلاب</div>
            <div style={{fontSize:"14px",color:"white"}}>میدونستی میتونب با امتیاز هات قهوه بگیری؟</div>
           </div>
           <div style={{display:"flex",alignItems:"center",width:"30%",gap:"3%",marginRight:"10%"}}>
            <div style={{width:"30%",height:"70%",backgroundColor:"white",color:"rgba(27, 106, 78, 1)",display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"10px"}}><img src="./Discovery.svg" style={{width:"40%",marginTop:"20px"}}/><div style={{fontSize:"12px",marginTop:"5px"}}>چرخ و بخت</div></div>
            <div style={{width:"30%",height:"70%",backgroundColor:"white",color:"rgba(27, 106, 78, 1)",display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"10px"}}><img src="./Activity.svg" style={{width:"40%",marginTop:"20px"}}/><div style={{fontSize:"12px",marginTop:"5px"}}>ماموریت ها</div></div>
            <div style={{width:"30%",height:"70%",backgroundColor:"white",color:"rgba(27, 106, 78, 1)",display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"10px"}}><img src="./Ticket-Star.svg" style={{width:"40%",marginTop:"20px"}}/><div style={{fontSize:"12px",marginTop:"5px"}}>جایزه ها</div></div>
           </div>
           <div style={{marginRight:"8%",display:"flex",justifyContent:"center",flexDirection:"column",color:"white"}}>
            <div style={{fontWeight:"bold",fontSize:"18px"}}>500</div>
            <div style={{fontSize:"14px"}}>امتیاز شما</div>
            <button style={{color:"white",background:"linear-gradient(to right,#e8d7b9,#f59f0bff)",border:"none",borderRadius:"20px",fontSize:"14px",padding:"5px 10px",fontFamily:"Dana-Regular-ttf",marginTop:"6px",marginRight:"-8px"}}>
                دریافت جایزه
                </button>
           </div>

        </div>
    )
}

export default CoffeClub