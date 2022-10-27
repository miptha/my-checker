import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { IonActionSheet, IonButton, IonButtons, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonItemDivider, IonLabel, IonMenuButton, IonModal, IonPage, IonRow, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { call, callOutline, closeCircle, ellipseOutline, logoWhatsapp, refreshCircle } from "ionicons/icons"
import { useState } from "react";

const useOutbound: React.FC = () => {
  const [isCloseManifest, setIsCloseManifest] = useState(false);

    function detailinbound(){
        window.open('/inboundDetail','_self')
    }

    function plugBarcode(){
      BarcodeScanner.scan({
        preferFrontCamera:false,
        showFlipCameraButton:false,
        showTorchButton:true,
        torchOn:false,
        prompt:"Scan Barcode Tracking Ke Dalam Kotak Area",
        resultDisplayDuration:500,
        formats:'EAN_13,EAN_8,QR_CODE,PDF_417,CODABAR,CODE_128',
        orientation: 'potrait',
      }).then( r => {
        alert(JSON.stringify(r))
      }).catch(err => {
        alert(err)
      })
    }
    
    return(
    <IonPage >
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton style={{color:"#0000A0", fontSize:"30px"}}/>
                </IonButtons>
                <IonRow style={{textAlign:"center", justifyContent:"center"}}>
                    <IonText mode="ios" style={{color:"#0000A0", textAlign:"center", justifyContent:"center"}}>OUTBOUND ORDER</IonText>
                </IonRow>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonCard style={{border:"solid 1px #0000A0", borderRadius:"10px"}}>
                <IonGrid>
                  <IonRow style={{borderBottom:"solid 1px black"}} >
                    <IonCol size='6' style={{textAlign:"start"}}>
                      <h6 style={{fontWeight:"800", color:"black", margin:"10px 5px", fontSize:"14px"}}>XPDC2022080621</h6>
                    </IonCol>
                    <IonCol size='6' style={{textAlign:"end", padding:"10px 0"}}>
                      <button style={{padding:"5px", borderRadius:"5px", background:"#0000A0", color:"white"}}>Dalam Pengiriman</button>
                    </IonCol>
                  </IonRow>
                  <IonRow onClick={detailinbound}>
                    <IonCol size='2'>
                      <IonRow style={{padding:"10px 0"}}>
                        <IonIcon icon={ellipseOutline} style={{background:"#A3A3A3", width:"24px", height:"24px", borderRadius:"50%", color:"#A3A3A3", margin:"auto"}}></IonIcon>
                      </IonRow>
                      <IonRow style={{padding:"10px 0",marginTop:"10px"}}>
                        <IonIcon icon={ellipseOutline} style={{background:"#0000A0", width:"24px", height:"24px", borderRadius:"50%", color:"#0000A0", margin:"auto"}}></IonIcon>
                      </IonRow>
                    </IonCol>
                    <IonCol>
                      <IonRow style={{textAlign:"start", padding:"5px 0", display:"flex", flexDirection:"column"}}>
                      {/* {a['id']} */}
                        <h6 style={{margin:0, padding:0, color:"black"}}>
                          Dikha Fransananda
                        </h6>
                        <p style={{margin:0, padding:0}}>
                          Kepuluan Riau, Indonesia
                        </p>
                      </IonRow>
                      {/* <IonItem lines='none'> 
                          <a href='/orderdetail?order_id=' slot="end" ><IonIcon icon={chevronForwardOutline} ></IonIcon></a>
                    </IonItem> */}
                      <IonRow style={{textAlign:"start", padding:"5px 0", display:"flex", flexDirection:"column", marginTop:"10px"}}>
                      <h6 style={{margin:0, padding:0, color:"black"}}>
                         Miptha
                        </h6>
                        <p style={{margin:0, padding:0}}>
                         Tangerang, Banten, Indonesia
                        </p>
                      </IonRow>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCard>
              
               {/* IonModal Close Manifest*/}
               <IonModal isOpen={isCloseManifest}>
                  <IonHeader >
                    <IonToolbar style={{background:"#0000A0", color:"#0000A0"}}>
                    <IonButtons slot="start">
                        <IonButton onClick={() => setIsCloseManifest(false)}>
                          <IonIcon src={closeCircle} style={{fontSize:"36px", color:"#0000A0"}}></IonIcon>
                        </IonButton>
                      </IonButtons>
                      <IonTitle style={{textAlign:"center", justifyContent:"center"}}>Close Manifest</IonTitle>
                      <IonButtons slot="end">
                        <IonButton>
                          <IonIcon src={refreshCircle} style={{fontSize:"36px", color:"#0000A0"}}></IonIcon>
                        </IonButton>
                      </IonButtons>
                    </IonToolbar>
                  </IonHeader>
                  <IonContent className="ion-padding">
                    <IonLabel style={{paddingLeft:"5px", fontWeight:"bold"}}>Traffic Controller</IonLabel>
                      <IonSelect placeholder="Pilih Traffic Controller" style={{width:"100%", border:"1px solid #DEDEDE", borderRadius:"5px", marginTop:"5px", marginBottom:"5px"}}>
                        <IonSelectOption value="Afdhal Mukhlis" >Afdhal Mukhlis</IonSelectOption>
                        <IonSelectOption value="Anes Maulana">Anes Maulana</IonSelectOption>
                        <IonSelectOption value="Aprinda Hutomo">Aprinda Hutomo</IonSelectOption>
                        <IonSelectOption value="Jerry Prasetia">Jerry Prasetia</IonSelectOption>
                        <IonSelectOption value="Muslim Halim">Muslim Halim</IonSelectOption>
                      </IonSelect>
                    <IonItem style={{color:"black", justifyContent:"start", textAlign:"start", fontWeight:"bold"}}>Item Scanned</IonItem>
                  </IonContent>
                  <IonFooter>
                    <IonGrid style={{padding:"20px 0", margin:"5px"}} onClick={()=>{setIsCloseManifest(true)}}>
                      <IonRow>
                        <IonCol>
                          <button style={{padding:"15px", marginTop:"10px", width:"100%", borderRadius:"5px", background:"#0000A0", color:"white"}}>SCAN BARCODE</button>
                        </IonCol>
                        <IonCol>
                          <button style={{padding:"15px", marginTop:"10px", width:"100%", borderRadius:"5px", background:"#0000A0", color:"white"}}>SIMPAN</button>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonFooter>
                </IonModal>
                {/* Tutup Modal */}
                
          </IonContent>
          <IonFooter style={{background:"white"}}>
          <IonGrid style={{padding:"10px 0", margin:"5px"}} onClick={() => {setIsCloseManifest(true)}}>
            <IonRow>
                <button style={{width:"100%", background:"#0000A0", borderRadius:"10px", display:"flex",justifyContent:"center"}} >
                    <IonText mode='ios' style={{fontSize:"16px", color:"white", margin:"15px 5px"}}>
                        SCAN CLOSE MANIFEST
                    </IonText>
                </button>
            </IonRow>
          </IonGrid>
        </IonFooter>
    </IonPage>
    )
}

export default useOutbound