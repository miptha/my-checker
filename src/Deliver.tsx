import { BarcodeScanner } from "@ionic-native/barcode-scanner"
import { IonBackButton, IonButton, IonButtons, IonCard, IonCheckbox, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonLabel, IonMenuButton, IonModal, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { addCircleSharp, callOutline, chevronBackOutline, closeCircle, ellipseOutline, filter, logoWhatsapp, searchCircle } from "ionicons/icons"
import { useState } from "react";
import { useHistory } from "react-router";

const Deliver: React.FC = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenShipment, setIsOpenShipment] = useState(false);

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
        
            <div style={{textAlign:"start", display:"flex", margin:"10px 0"}}>
              {/* <button onClick={history.goBack} style={{padding:"0" ,border:"none" , background: "transparent"}}>
                  <IonIcon icon={chevronBackOutline} id='iconBack' style={{fontSize:"32px" , margin:"0", color:"#0000A0"}}/>
              </button> */}
              <IonTitle>DELIVER</IonTitle>
              <IonButtons slot="end" style={{textAlign:"end"}}>
                <IonButton onClick={() => setIsOpenShipment(true)} style={{textAlign:"end"}}>
                  <IonIcon src={addCircleSharp} style={{fontSize:"36px", color:"#0000A0", textAlign:"end"}}></IonIcon>
                </IonButton>
              </IonButtons>
            </div>
        </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonCard style={{border:"solid 1px #0000A0", borderRadius:"10px"}}>
                <IonGrid>
                  <IonRow style={{borderBottom:"solid 1px black"}} >
                    <IonCol style={{textAlign:"start"}}>
                      <h6 style={{fontWeight:"800", color:"black", margin:"10px 5px", fontSize:"14px"}}>XPDC2022080621</h6>
                      <h6 style={{ color:"#0000A0", margin:"10px 5px", fontSize:"14px"}}>Dalam Pengiriman</h6>
                    </IonCol>
                    <IonCol size='2' style={{textAlign:"end", padding:"5px 0"}} onClick={() => setIsOpen(true)}>
                      <button style={{padding:"10px", borderRadius:"5px", background:"#0000A0", color:"white"}}>Ubah</button>
                    </IonCol>
                  </IonRow>
                  <IonRow >
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
                    <IonCol size="3" style={{marginRight:"20px"}}>
                      <IonRow>
                        <IonCol>
                          <IonText mode="ios" style={{color:"black"}}>Qty: 16</IonText>
                        </IonCol>
                        <IonCol>
                          <IonText mode="ios" style={{color:"black"}}>Jumlah Koli:</IonText>
                        </IonCol>
                      </IonRow>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCard>
              <IonCard style={{border:"solid 1px #0000A0", borderRadius:"10px"}}>
                <IonGrid>
                  <IonRow style={{borderBottom:"solid 1px black"}}>
                    <IonCol style={{textAlign:"start"}}>
                      <h6 style={{fontWeight:"800", color:"black", margin:"10px 5px", fontSize:"14px"}}>XPDC2022080623</h6>
                      <h6 style={{ color:"#28be69", margin:"10px 5px", fontSize:"14px"}}>Diterima</h6>
                    </IonCol>
                    <IonCol size='2' style={{textAlign:"end", padding:"5px 0"}} onClick={() => setIsOpen(true)}>
                      <button style={{padding:"10px", borderRadius:"5px", background:"#0000A0", color:"white"}}>Ubah</button>
                    </IonCol>
                  </IonRow>
                  <IonRow >
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
                      <IonRow style={{textAlign:"start", padding:"5px 0", display:"flex", flexDirection:"column", marginTop:"10px"}}>
                      <h6 style={{margin:0, padding:0, color:"black"}}>
                         Miptha
                        </h6>
                        <p style={{margin:0, padding:0}}>
                         Tangerang, Banten, Indonesia
                        </p>
                      </IonRow>
                    </IonCol>
                    <IonCol size="3" style={{marginRight:"20px"}}>
                      <IonRow>
                        <IonCol>
                          <IonText mode="ios" style={{color:"black"}}>Qty: 16</IonText>
                        </IonCol>
                        <IonCol>
                          <IonText mode="ios" style={{color:"black"}}>Jumlah Koli:</IonText>
                        </IonCol>
                      </IonRow>
                    </IonCol>
                  </IonRow>
                </IonGrid>
            </IonCard>
              
        {/* IonModal  Tambah Shipment*/}
        <IonModal isOpen={isOpenShipment}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Tambah Data Deliver</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpenShipment(false)}>
                  <IonIcon src={closeCircle} style={{fontSize:"36px", color:"#0000A0"}}></IonIcon>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol size='12' style={{display:"flex", justifyContent:"start"}}>
                            <input type='search' placeholder='No Tracking' style={{width:"100%", borderRadius:"10px 0 0 10px", padding:"15px 10px", border:"none", outline:"none", background:"rgba(0, 0, 0, 0.2)", color:"black"}}/>
                            <button style={{background:"#0000A0", borderRadius:"0 10px 10px 0"}} >
                                <IonIcon icon={searchCircle} style={{color:"white", margin:"10px", fontSize:"30px"}} />
                            </button>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonCard style={{border:"solid 1px #0000A0", borderRadius:"10px"}}>
                    <IonRow>
                        <IonCol style={{textAlign:"start"}}>
                        <h6 style={{fontWeight:"600", color:"black", margin:"10px 5px", fontSize:"14px"}}>XPDC2022080621-1</h6>
                        </IonCol>
                        <IonCol size='2' style={{textAlign:"end", margin:"10px 5px"}}>
                        <IonCheckbox ></IonCheckbox>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard style={{border:"solid 1px #0000A0", borderRadius:"10px"}}>
                    <IonRow>
                        <IonCol style={{textAlign:"start"}}>
                            <h6 style={{fontWeight:"600", color:"black", margin:"10px 5px", fontSize:"14px"}}>XPDC2022080621-2</h6>
                        </IonCol>
                        <IonCol size='2' style={{textAlign:"end",  margin:"10px 5px"}}>
                            <IonCheckbox checked={true}></IonCheckbox>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard style={{border:"solid 1px #0000A0", borderRadius:"10px"}}>
                    <IonRow>
                        <IonCol style={{textAlign:"start"}}>
                            <h6 style={{fontWeight:"600", color:"black", margin:"10px 5px", fontSize:"14px"}}>XPDC2022080621-3</h6>
                        </IonCol>
                        <IonCol size='2' style={{textAlign:"end", margin:"10px 5px"}}>
                            <IonCheckbox></IonCheckbox>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard style={{border:"solid 1px #0000A0", borderRadius:"10px"}}>
                    <IonRow>
                        <IonCol style={{textAlign:"start"}}>
                        <h6 style={{fontWeight:"600", color:"black", margin:"10px 5px", fontSize:"14px"}}>XPDC2022080621-4</h6>
                        </IonCol>
                        <IonCol size='2' style={{textAlign:"end", margin:"10px 5px"}}>
                        <IonCheckbox></IonCheckbox>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard style={{border:"solid 1px #0000A0", borderRadius:"10px"}}>
                    <IonRow>
                        <IonCol style={{textAlign:"start"}}>
                        <h6 style={{fontWeight:"600", color:"black", margin:"10px 5px", fontSize:"14px"}}>XPDC2022080621-5</h6>
                        </IonCol>
                        <IonCol size='2' style={{textAlign:"end", margin:"10px 5px"}}>
                        <IonCheckbox checked={true}></IonCheckbox>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard style={{border:"solid 1px #0000A0", borderRadius:"10px"}}>
                    <IonRow>
                        <IonCol style={{textAlign:"start"}}>
                        <h6 style={{fontWeight:"600", color:"black", margin:"10px 5px", fontSize:"14px"}}>XPDC2022080621-6</h6>
                        </IonCol>
                        <IonCol size='2' style={{textAlign:"end", margin:"10px 5px",}}>
                        <IonCheckbox></IonCheckbox>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard style={{border:"solid 1px #0000A0", borderRadius:"10px"}}>
                    <IonRow>
                        <IonCol style={{textAlign:"start"}}>
                        <h6 style={{fontWeight:"600", color:"black", margin:"10px 5px", fontSize:"14px"}}>XPDC2022080621-7</h6>
                        </IonCol>
                        <IonCol size='2' style={{textAlign:"end", margin:"10px 5px"}}>
                        <IonCheckbox checked={true}></IonCheckbox>
                        </IonCol>
                    </IonRow>
                </IonCard>
            </IonContent>
            <IonFooter style={{background:"white"}}>
                <IonGrid style={{padding:"10px 0", margin:"5px"}}>
                <IonRow>
                    <button style={{width:"100%", background:"#0000A0", borderRadius:"10px", display:"flex",justifyContent:"center"}} >
                        <IonText mode='ios' style={{fontSize:"16px", color:"white", margin:"15px 5px"}}>
                            SIMPAN
                        </IonText>
                    </button>
                </IonRow>
                </IonGrid>
            </IonFooter>
        </IonModal>
        {/* Tutup Modal */}

        {/* IonModal  Ubah Koli*/}
        <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Update Data Deliver</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>
                  <IonIcon src={closeCircle} style={{fontSize:"36px", color:"#0000A0"}}></IonIcon>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonLabel>Quantity</IonLabel>
            <IonInput placeholder="Masukan Quantity Barang" type="number" style={{background:"#DEDEDE", borderRadius:"5px", marginTop:"10px"}}></IonInput>
            <IonLabel>Jumlah Koli</IonLabel>
            <IonInput placeholder="Masukan Jumlah Koli" type="number" style={{background:"#DEDEDE", borderRadius:"5px", marginTop:"10px"}}></IonInput>
            <IonRow style={{paddingTop:"5px"}}>
                <IonLabel>File</IonLabel>
            </IonRow>
            <input type="file" style={{paddingTop:"5px"}}></input>
            <button style={{padding:"15px", marginTop:"10px", width:"100%", borderRadius:"5px", background:"#0000A0", color:"white"}}>SIMPAN</button>
          </IonContent>
        </IonModal>
        {/* Tutup Modal */}
        
        </IonContent>
        <IonFooter style={{background:"white"}}>
            <IonGrid style={{padding:"10px 0", margin:"5px"}} onClick={plugBarcode}>
                <IonRow>
                    <button style={{width:"100%", background:"#0000A0", borderRadius:"10px", display:"flex",justifyContent:"center"}}>
                        <IonText mode='ios' style={{fontSize:"16px", color:"white", margin:"15px 5px"}}>
                            SCAN DELIVER
                        </IonText>
                    </button>
                </IonRow>
            </IonGrid>
        </IonFooter>
    </IonPage>
    )
}
export default Deliver