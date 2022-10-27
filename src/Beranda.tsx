import { IonBadge, IonButtons, IonCard, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { menuOutline, notifications } from "ionicons/icons"
import './Beranda.css';

const Beranda: React.FC = () => {
    function menu(){
        window.open('/components/Menu')
    }
    function openinbound(){
        window.open('/inbound','_self')
    }
    function openoutbound(){
        window.open('/outbound','_self')
    }
    function openmanifest(){
        window.open('/manifest','_self')
    }
    function opensvc(){
        window.open('/svc','_self')
    }

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton style={{color:"#0000A0"}}/>
                    </IonButtons>
                     {/* Tombol notifikasi */}
                    <IonFab vertical='top' horizontal='end' style={{ top:"5px", right:"5px"}}>
                    <IonFabButton  href='/notifikasi' color="light" style={{top:"0", width:"40px", height:"40px"}}>
                        <IonIcon icon={notifications} style={{color:"#0000A0", top:"0",fontSize:"20px"}}/>
                        {/* {(qtyNotif !== '0')? */}
                        <IonBadge className='badge'mode='ios' style={{background:"red",position:"absolute", top:"0", right:"0", marginRight:"10px"}}>
                            {/* {qtyNotif} */} 3
                        </IonBadge>
                        {/* :''} */}
                    </IonFabButton>
                    </IonFab>

                    <IonRow style={{textAlign:"center", justifyContent:"center"}}>
                        <IonText mode="ios" style={{color:"#0000A0", textAlign:"center", justifyContent:"center", fontWeight:"bold"}}>DASHBOARD</IonText>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <IonRow style={{margin:"15px"}}>
                    <IonText mode="ios" style={{fontSize:"20px", color:"#0000A0", fontWeight:"bold"}}>Hi, Checker TGR</IonText>
                </IonRow>
                {/* <IonRow style={{margin:"0", padding:"0"}}>
                    <img src="assets/images/checker1.png" style={{marginBottom:"15px"}}></img>
                </IonRow> */}
                 {/* Grid Menu */}
                <IonGrid style={{ paddingTop:"45px"}}>
                    <IonRow style={{margin:"0", padding:"0"}}>
                        <IonCol  style={{padding:"10px", position:"relative", paddingLeft:"20px"}}>
                            <img src='assets/icon/inboundm.png' style={{margin:"2px auto", width:"99%", height:"97%"}} onClick={() =>{openinbound()}} className="menu"/>
                            <IonBadge className="menu" mode='ios' style={{position:"absolute", top:"0", right:"0", marginRight:"10px", fontSize:"30px", background:"red"}}>5</IonBadge>
                        </IonCol>
                        <IonCol  style={{padding:"10px", position:"relative"}}>
                            <img src='assets/icon/outboundm.png' style={{margin:"2px auto", width:"100%", height:"100%" }} onClick={() =>{openoutbound()}} className="menu"/>
                            <IonBadge className="menu" mode='ios' style={{position:"absolute", top:"0", right:"0", marginRight:"10px", fontSize:"30px", background:"red"}}>15</IonBadge>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{margin:"0", padding:"0"}}>
                        <IonCol  style={{padding:"10px", position:"relative", paddingLeft:"20px"}}>
                            <img src='assets/icon/manifestm.png' style={{margin:"2px auto", width:"99%", height:"97%"}} onClick={() =>{openmanifest()}} />
                            <IonBadge mode='ios' style={{position:"absolute", top:"0", right:"0", marginRight:"10px", fontSize:"30px", background:"red"}} className="menu" >10</IonBadge>
                        </IonCol>
                        <IonCol  style={{padding:"10px", position:"relative"}}>
                            <img src='assets/icon/svcm.png' style={{margin:"2px auto", width:"100%", height:"100%" }} onClick={() =>{opensvc()}} className="menu"/>
                            <IonBadge className="menu" mode='ios' style={{position:"absolute", top:"0", right:"0", marginRight:"10px", fontSize:"30px", background:"red"}}>8</IonBadge>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}
export default Beranda