import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { IonActionSheet, IonBadge, IonButtons, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonItemDivider, IonMenuButton, IonPage, IonRow, IonSegment, IonSegmentButton, IonText, IonToolbar } from "@ionic/react"
import { call, callOutline, ellipseOutline, logoWhatsapp } from "ionicons/icons"
import { useState } from "react";

const svc: React.FC = () => {
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
                    <IonText mode="ios" style={{color:"#0000A0", textAlign:"center", justifyContent:"center"}}>SCAN SVC</IonText>
                </IonRow>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonSegment value="inbound" mode="md" >
            <IonSegmentButton value="inbound" mode="md">
                INBOUND
                <IonBadge className='badge'mode='ios' style={{position:"absolute", top:"10px", right:"0", marginRight:"10px", fontSize:"16px", background:"red"}}>5</IonBadge>
            </IonSegmentButton>
            <IonSegmentButton value="outbound" mode="md">
                OUTBOUND
                <IonBadge className='badge'mode='ios' style={{position:"absolute", top:"10px", right:"0", marginRight:"10px", fontSize:"16px", background:"red"}}>0</IonBadge>
            </IonSegmentButton>
            </IonSegment>

          </IonContent>
          <IonFooter style={{background:"white"}}>
            <IonRow>
                <IonGrid style={{padding:"10px 0"}}>
                    <IonRow>
                        <IonCol size='6' style={{margin:0, padding:"2px 5px"}}>
                            <button style={{width:"100%", background:"#2dd36d", borderRadius:"10px", display:"flex",justifyContent:"center"}} onClick={plugBarcode}>
                                <IonText mode='ios' style={{fontSize:"14px", color:"white", margin:"15px 5px"}}>
                                    Scan Barcode
                                </IonText>
                            </button>
                        </IonCol>
                        <IonCol size='6' style={{margin:0, padding:"2px 5px"}}>
                            <button style={{width:"100%", background:"#0000A0", borderRadius:"10px", display:"flex", justifyContent:"center"}}>
                                <IonText mode='ios' style={{color:"white", fontSize:"14px", margin:"15px 5px"}}>
                                    Simpan
                                </IonText>
                            </button>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonRow>
        </IonFooter>
    </IonPage>
    )
}

export default svc