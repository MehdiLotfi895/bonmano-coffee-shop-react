import "./CoffeClubForMobile.css"
export default function CoffeClubForMobile() {
  return (
    <div id="CoffeClubForMobile">
       <div className="flex">
       <img src="./diamond.png" style={{width:"70px"}}/>
        <div>
        <div style={{fontSize:"20px",color:"white",fontWeight:"bold"}}>کافی کلاب</div>
        <div style={{fontSize:"13px",color:"white"}}>میدونستی میتونی با امتیاز هات قهوه بگیری؟</div>
        </div>
       </div>
       <div className="flex" style={{marginTop:"30px"}}>
       <div style={{display:"flex",alignItems:"center",width:"75%",gap:"5px"}}>
            <div style={{width:"30%",height:"auto",backgroundColor:"white",color:"rgba(27, 106, 78, 1)",display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"10px",paddingBottom:"5px"}}><img src="./Discovery.svg" style={{width:"50%",marginTop:"10px"}}/><div style={{fontSize:"9px",marginTop:"5px"}}>چرخ و بخت</div></div>
            <div style={{width:"30%",height:"auto",backgroundColor:"white",color:"rgba(27, 106, 78, 1)",display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"10px",paddingBottom:"5px"}}><img src="./Activity.svg" style={{width:"50%",marginTop:"10px"}}/><div style={{fontSize:"9px",marginTop:"5px"}}>ماموریت ها</div></div>
            <div style={{width:"30%",height:"auto",backgroundColor:"white",color:"rgba(27, 106, 78, 1)",display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"10px",paddingBottom:"5px"}}><img src="./Ticket-Star.svg" style={{width:"50%",marginTop:"10px"}}/><div style={{fontSize:"9px",marginTop:"5px"}}>جایزه ها</div></div>
        </div>
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",color:"white",width:"25%"}}>
            <div style={{fontWeight:"bold",fontSize:"18px"}}>500</div>
            <div style={{fontSize:"10px",marginTop:"-3px",marginBottom:"3px"}}>امتیاز شما</div>
            <button style={{color:"white",background:"linear-gradient(to right,#e8d7b9,#f59f0bff)",border:"none",borderRadius:"10px",fontSize:"8px",width:"55px",height:"20px",fontFamily:"Dana-Regular-ttf"}}>
                دریافت جایزه
            </button>
           </div>
       </div>
    </div>
  )
}
