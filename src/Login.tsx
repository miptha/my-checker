import { IonAlert, IonButton, IonButtons, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonList, IonLoading, IonMenu, IonMenuToggle, IonModal, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react"
import { useState } from "react";
import { useHistory } from "react-router";
import $ from 'jquery';
import './Login.css';
import { StatusBar } from '@capacitor/status-bar';
import { PushNotifications, Token, PushNotificationSchema, ActionPerformed } from "@capacitor/push-notifications";

const Login: React.FC = () => {
    const [alert, setAlert] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();
    const [alertLoading, dismissAlertLoading] = useState(false);
    const [alertLanjutkan, setAlertLanjutkan] = useState(false);
    const [isAlert, setIsAlert] = useState(false);
    const [alertHeader, setAlertHeader] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [isEmail, setIsEmail] = useState(true);
    const [isPhone, setIsPhone] = useState(false);
    const [phone, setPhone] = useState('');
    const [alertMsg, setAlertMsg] = useState('');
    const [openlupakatasandi, setOpenLupaKataSandi] = useState(false);
    const [getToken, setGetToken] = useState('');
    const [tokenFCM, setTokenFCM] = useState('');

    const Auth = async (e: any) => {
        e.preventDefault();


        var isInputEmail = email.includes('@')
        if(isInputEmail){
            var Login = 'https://xpdcargo.id/login/login/singleLoginGET?email='+email+'&password='+password;
        }else{
            var Login = 'https://xpdcargo.id/login/login/singleLoginGET?email='+email+'&password='+password+'&phone='+email;
        }

        $.ajax({
            type:"get",
            url: Login,
            beforeSend:function(){
                dismissAlertLoading(true)
            },
            dataType:'json',
            success:function(res){
                dismissAlertLoading(false)
                console.log(res)
                setMsg(res.msg);
                if (res.status === 1) {
                    if(res.verify_email != ''){
                        localStorage.setItem("userEmail", res.email)
                        localStorage.setItem("userPhone", res.phone)
                        localStorage.setItem("userNama", res.name)
                        localStorage.setItem("usersvc", res.service_center_id)
                        localStorage.setItem("userhub", res.hub_id)
                        localStorage.setItem("userLevel", res.level)
                        localStorage.setItem("userlogin", res.status)
                        localStorage.setItem("userid", res.user_id)
                        localStorage.setItem("verifyPhone", res.verify_phone)
                        localStorage.setItem("verifyEmail", res.verify_email)
                        localStorage.setItem("userPin", res.pin)
                        localStorage.setItem("notifikasi", 'Ya')
                        localStorage.setItem("referralReferensi", res.referral_referensi)
                      
                       
                        history.push("/Beranda");
                    }else{
                        setAlertHeader('Invalid Email')
                        setAlertMessage('Email belum terverifikasi')
                        setIsAlert(true)
                    }
                } else {
                    setAlertLanjutkan(true)
                    // history.push("/log")
                }
            },
            error: function (xhr, ajaxOptions, thrownError) { 
                dismissAlertLoading(false)
                setAlertHeader("Login Failed")
                setAlertMessage("Server sedang dalam perbaikan")
                setAlertMsg("Silahkan coba login kembali beberapa munit kemudian")
                setIsAlert(true)    
            }
            
        })
    }

    useIonViewWillEnter(() => {
        PushNotifications.addListener('registration',(token: Token) => {
            // alert(`Token: ${token.value}`);
            setGetToken(token.value)
            setTokenFCM(token.value);
            localStorage.setItem('fcm_token', token.value)
        })
    
})

    function lupakatasandi(){
        window.open('/Lupapassword','_self')
    }

    function openbantuan(){
        window.open('https://api.whatsapp.com/send?phone=+628117000133&text=Hi XPDC',"_self");
      }

    StatusBar.setBackgroundColor({color:"#0000A0"});
    return (
        <IonPage> 
            <IonMenu contentId="main" type="overlay" disabled={false} swipeGesture={false}>
                <IonContent>
                    <IonList id="inbox-list">
                    </IonList>
                </IonContent>
            </IonMenu>
            <IonContent style={{color:"white", opacity:"1"}} >
                <IonRow style={{paddingTop:"20px", textAlign:"center", justifyContent:"center"}} >
                    <img src="assets/images/checker1.png"></img>
                </IonRow>
                <IonGrid style={{borderRadius:"40px 40px 0 0", transform:"translateY(-10%)",background:"white"}}>
                    <section>
                        <form onSubmit={Auth}>
                        <IonGrid style={{maxWidth:"90%", padding:"15px 0 0 0"}}>
                            <IonRow style={{margin:"20px 0 15px 0", textAlign:"start", justifyContent:"start", padding:"15px", background:"#D9D9D9", borderRadius:"10px"}} className={(isEmail)?'anim-start-slide-left':'anim-start-slide-right'}>
                            <IonCol size='2' style={{margin:"0", padding:"0"}}>
                            {(isEmail)?
                                <img src="assets/icon/avatar.svg" style={{height:"25px", width:"25px"}}></img>:
                                <img src="assets/icon/telepon.svg" style={{height:"25px", width:"25px"}}></img>}
                            </IonCol>
                            <IonCol size='10' style={{padding:"0", margin:"0", width:"100%"}}>
                                {(isEmail)?
                                <input type="text" style={{outline:"none",width:"100%", borderBottom:"1px solid #C2C2C2", border:"none",background:"transparent", fontSize:"17px"}} placeholder="Email atau No.Hp" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off"></input>:
                                <input type="number" style={{outline:"none",width:"100%", borderBottom:"1px solid #C2C2C2", border:"none",background:"transparent", fontSize:"16px"}} placeholder="Nomor HP" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="off"></input>}
                            </IonCol>
                            </IonRow>
                            <IonRow style={{margin:"20px 0 15px 0", textAlign:"start", justifyContent:"start", padding:"15px", background:"#D9D9D9", borderRadius:"10px"}} className={(isEmail)?'anim-start-slide-left':'anim-start-slide-right'}>
                            <IonCol size='2' style={{margin:"0", padding:"0"}}>
                                <img src="assets/icon/pw.svg" style={{height:"25px", width:"25px"}}></img>
                            </IonCol>
                            <IonCol size='10' style={{padding:"0", margin:"0", width:"100%"}}>
                                <input type="password" style={{outline:"none", borderBottom:"1px solid #C2C2C2", background:"transparent", border:"none", fontSize:"17px"}} placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off"/>
                            </IonCol>
                            </IonRow>
                            <IonRow style={{margin:"10px 0", textAlign:"center", justifyContent:"center"}} onClick={lupakatasandi}>
                                <IonText mode="ios" style={{textAlign:"center", justifyContent:"center"}}>Lupa Kata Sandi?</IonText>
                            </IonRow>
                            <IonRow style={{ textAlign:"center", justifyContent:"center", padding:"5px"}}>
                            <button style={{width:"100%", background:"#0000A0", borderRadius:"10px", display:"flex",justifyContent:"center"}} >
                                <IonText mode='ios' style={{fontSize:"16px", color:"white", margin:"15px 5px"}}>LOGIN
                                </IonText>
                            </button>
                            </IonRow>
                            </IonGrid>
                        </form>
                    </section>
                </IonGrid>
                <IonAlert
                isOpen={alertLanjutkan}
                onDidDismiss={() => setAlertLanjutkan(false)}
                header="Pesan"
                
                message={msg}
                buttons={['OK']}
                mode='ios'
                cssClass="custom-alert"
                />
                <IonAlert
                isOpen={isAlert}
                onDidDismiss={() => setIsAlert(false)}
                header={alertHeader}
            
                message={alertMessage}
                buttons={['OK']}
                mode='ios'
                />
                <IonLoading 
                isOpen={alertLoading} 
                message="Proses Login..."
                spinner="bubbles"
                mode="ios"
                />
            </IonContent>
        </IonPage>
    )
}
export default Login