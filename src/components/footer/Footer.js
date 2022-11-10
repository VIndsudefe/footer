import telegram1 from "./telegram.svg"
import watsApp from "./watsapp.svg"
import viber from "./viber.svg"
import classes from "./footer.module.css"
function Footer(){
    return(
        <div className={`${classes.background} backgroundColor`}>
            
            <div className={`${classes.container} container`}>
                <div className={`${classes.box1} box1 `} >
                    <div className={`${classes.box1_1} box1_1 `} >
                        <p className={`${classes.whiteMain_Text} whiteMain_Text`}>Получите консультацию </p>
                        <p className={`${classes.greyMain_Text} greyMain_Text`}>по телефону или в мессенджерах </p>
                    </div>
                    <div className={`${classes.box1_2} box1_2 `} >
                        <p className={`${classes.telNum} telNum`}>+7 (499) 229-22-89 </p>
                        <p className={`${classes.email} email`}>order@qubity.ru</p>
                    </div>
                    <div className={`${classes.box1_3} box1_3 `} >  
                        <img src={watsApp} alt="Wats App"/>
                        <img src={viber} alt="Viber"/>
                        <img src={telegram1} alt="Telegram"/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer