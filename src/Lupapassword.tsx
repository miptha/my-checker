import { IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"

const Lupapassword: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonBackButton style={{color:"#0000A0"}} defaultHref='/Login'></IonBackButton>
                        <IonTitle style={{color:"#0000A0", textAlign:"center", justifyContent:"center"}}>Lupa Kata Sandi</IonTitle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonRow style={{textAlign:"center", justifyContent:"center", margin:"15px"}}>
                    <img src="assets/images/lupa.svg" ></img>
                </IonRow>
                <IonCard mode="ios">
                    <IonRow style={{textAlign:"center", justifyContent:"center",margin:"15px"}}>
                        <IonText mode="ios" style={{fontSize:"20px", color:"black"}}>Atur Ulang Password</IonText>
                    </IonRow>
                    <IonRow style={{textAlign:"justify", justifyContent:"justify"}}>
                        <IonText mode="ios" style={{textAlign:"justify", justifyContent:"justify", margin:"10px"}}>Masukan email yang terdaftar. Kami akan mengirimkan link untuk atur ulang kata sandi</IonText>
                    </IonRow>
                    <IonRow>
                        <input style={{border:"none",padding:"15px",background:"#D9D9D9", borderRadius:"10px", margin:"10px", width:"100%", outline:"none"}} placeholder="Masukan Email"></input>
                    </IonRow>
                    <IonRow style={{textAlign:"center", justifyContent:"center"}}>
                        <button style={{padding:"15px", borderRadius:"10px", width:"100%", margin:"10px", background:"#0000A0", color:"white"}}>LANJUT</button>
                    </IonRow>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}
export default Lupapassword