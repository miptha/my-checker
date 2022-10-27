import {
  IonAccordion,
  IonAccordionGroup,
  IonAlert,
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonLoading,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonModal,
  IonNote,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, busOutline, closeOutline, cubeOutline, heartOutline, heartSharp, homeOutline, locationOutline, logOutOutline, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, qrCodeOutline, readerOutline, scanCircle, scanOutline, scanSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';
import { useState } from 'react';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Beranda',
    url: '/page/Beranda',
    iosIcon: 'assets/icon/home.svg',
    mdIcon: 'assets/icon/home.svg'
  },
  {
    title: 'Courier',
    url: '/page/Courier',
    iosIcon: 'assets/icon/courier.svg',
    mdIcon: 'assets/icon/courier.svg'
  },
  {
    title: 'Deliver',
    url: '/page/Deliver',
    iosIcon: 'assets/icon/delivery.svg',
    mdIcon: 'assets/icon/delivery.svg'
  },
  {
    title: 'Pickup',
    url: '/page/pickup',
    iosIcon: 'assets/icon/pickup.svg',
    mdIcon: 'assets/icon/pickup.svg'
  },
  {
    title: 'Reweight',
    url: '/page/Reweight',
    iosIcon: 'assets/icon/reweight.svg',
    mdIcon: 'assets/icon/reweight.svg'
  },
  {
    title: 'Keluar',
    url: '/page/Login',
    iosIcon: 'assets/icon/keluar.svg',
    mdIcon: 'assets/icon/keluar.svg'
  }
];
const Menu: React.FC = () => {
  
  const [openmodalubahnama, setOpenModalUbahNama] = useState(false);
  const [openmodalubahemail, setOpenModalUbahEmail] = useState(false);
  const [openmodalubahpassword, setOpenModalUbahPassword] = useState(false);
  const location = useLocation();
  const nama = localStorage.getItem('userNama');
  const email = localStorage.getItem('userEmail');
  const password = localStorage.getItem('userPassword');
  const [loadingUbahNama, setLoadingUbahNama] = useState(false);
  const [alertUbahNama, setAlertUbahNama] = useState(false);
  const [loadingUbahEmail, setLoadingUbahEmail] = useState(false);
  const [alertUbahEmail, setAlertUbahEmail] = useState(false);
  const [loadingUbahPassword, setLoadingUbahPassword] = useState(false);
  const [alertUbahPassword, setAlertUbahPassword] = useState(false);
  const [msg, setMsg] = useState('')
  // function home(){
  //   window.open('/Beranda', '_self')
  // }

  function modalnama(){
    setOpenModalUbahNama(true)
  }
  function modalemail(){
    setOpenModalUbahEmail(true)
  }
  function modalpassword(){
    setOpenModalUbahPassword(true)
  }

  return (
    <IonMenu contentId="main" type="overlay" >
      <IonContent style={{backgroundImage:"url('assets/shape.jpg')" ,backgroundSize:"cover"}}>
        <IonList style={{background:"transparent"}}>
          <IonRow style={{textAlign:"center", justifyContent:"center"}}>
            <img src='assets/images/logo-xentra.png' width="25%" height="auto" style={{textAlign:"center", justifyContent:"center"}}></img>
          </IonRow>
          {/* <IonFab vertical='top' horizontal='end' >
            <IonFabButton color='danger' >
              <IonIcon icon={closeOutline} onClick={home}></IonIcon>
            </IonFabButton>
          </IonFab> */}
          <IonRow style={{padding:"10px", textAlign:"center", justifyContent:"center", background:"transparent", color:"#FFFFFF"}}>
          <IonAccordionGroup style={{background:"transparent", color:"#FFFFFF"}}>
            <IonAccordion value="first" style={{background:"transparent", color:"#FFFFFF"}}>
              <IonItem slot="header" style={{color:"#0000A0"}}>
                <IonRow>
                <IonText>{email}</IonText>
                </IonRow>
              </IonItem>
              <IonItem style={{textAlign:"center", justifyContent:"justify", margin:"0", padding:"0", color:"#0000A0"}} slot="content" onClick={modalnama}>
                <IonText>Ubah Nama</IonText>
              </IonItem>
              <IonItem style={{textAlign:"center", justifyContent:"justify", margin:"0", padding:"0", color:"#0000A0"}}  slot="content" onClick={modalemail}>
                <IonText>Ubah Email</IonText>
              </IonItem>
              <IonItem style={{textAlign:"center", justifyContent:"justify", margin:"0", padding:"0", color:"#0000A0"}} slot="content" onClick={modalpassword}>
               <IonText>Ubah Password</IonText>
              </IonItem>
            </IonAccordion>
          </IonAccordionGroup>
            {/* <IonCol>
              <IonRow>
                <IonText style={{color:"black", fontSize:""}}>Miptha</IonText>
              </IonRow>
              <IonRow>
                <IonText style={{color:"black", fontSize:""}}>dev.miptha@gmail.com</IonText>
              </IonRow>
            </IonCol> */}
          </IonRow>
          {/* {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })} */}
          
          <IonMenuToggle>
            <IonItem href='/Beranda'style={{color:"#FFFFFF"}}>
              <IonIcon icon={homeOutline} style={{fontSize:"30px", color:"#0000A0"}}></IonIcon>
              <IonText mode='ios' style={{padding:"10px", fontSize:"20px", color:"#0000A0"}}>Beranda</IonText>
            </IonItem>
            <IonItem href='/inbound' style={{color:"#FFFFFF"}}>
              <IonIcon icon={cubeOutline} style={{fontSize:"30px", color:"#0000A0"}}></IonIcon>
              <IonText mode='ios' style={{padding:"10px", fontSize:"20px", color:"#0000A0"}}>Inbound</IonText>
              <IonBadge className='badge' mode='ios' style={{position:"relative", top:"0", right:"0", marginRight:"10px", fontSize:"18px", background:"red"}}>0
              </IonBadge>
            </IonItem>
            <IonItem href='/outbound' style={{color:"#FFFFFF"}}>
              <IonIcon icon={busOutline} style={{fontSize:"30px", color:"#0000A0"}}></IonIcon>
              <IonText mode='ios' style={{padding:"10px", fontSize:"20px", color:"#0000A0"}}>Outbound</IonText>
              <IonBadge className='badge' mode='ios' style={{position:"relative", top:"0", right:"0", marginRight:"10px", fontSize:"18px", background:"red"}}>8
              </IonBadge>
            </IonItem>
            <IonItem href='/manifest' style={{color:"#FFFFFF"}}>
              <IonIcon icon={locationOutline} style={{fontSize:"30px", color:"#0000A0"}}></IonIcon>
              <IonText mode='ios' style={{padding:"10px", fontSize:"20px", color:"#0000A0"}}>Manifest</IonText>
              <IonBadge className='badge' mode='ios' style={{position:"relative", top:"0", right:"0", marginRight:"10px", fontSize:"18px", background:"red"}}>5
              </IonBadge>
            </IonItem>
            <IonItem href='/svc' style={{color:"#FFFFFF"}}>
              <IonIcon icon={qrCodeOutline} style={{fontSize:"30px", color:"#0000A0"}}></IonIcon>
              <IonText mode='ios' style={{padding:"10px", fontSize:"20px", color:"#0000A0"}}>Scan SVC</IonText>
              <IonBadge className='badge' mode='ios' style={{position:"relative", top:"0", right:"0", marginRight:"10px", fontSize:"18px", background:"red"}}>8
              </IonBadge>
            </IonItem>
            
            <IonItem href='/Login' style={{color:"#FFFFFF"}}>
              <IonIcon icon={logOutOutline} style={{fontSize:"30px", color:"#0000A0"}}></IonIcon>
              <IonText mode='ios' style={{padding:"10px", fontSize:"20px", color:"#0000A0"}}>Keluar</IonText>
            </IonItem>
          </IonMenuToggle>
        </IonList>

        <IonModal isOpen={openmodalubahnama}>
          <IonHeader>
            <IonToolbar mode="ios">
              <IonTitle style={{textAlign:"center", color:"#0000A0"}}>Ubah Nama</IonTitle>
              <IonButtons slot="end">
                <IonButton mode="ios" onClick={() => setOpenModalUbahNama(false)}>
                  <IonIcon src="/assets/icon/close.svg" style={{fontSize:"30px"}} ></IonIcon>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
          <IonCard style={{borderRadius:"10px"}}>
            <IonRow style={{padding:"20px", fontSize:"18px" , paddingBottom:"0"}}>Nama</IonRow>
            <IonRow style={{margin:"15px", padding:"5px",fontSize:"18px", outline:"none", background:"#DEDEDE", borderRadius:"10px"}}>
              <input style={{border:"none", outline:"none",background:"#DEDEDE", color:"black", padding:"10px", width:"100%"}} placeholder="Nama" type='text' defaultValue={String(nama)} name='nama'></input>
            </IonRow>
         <IonRow>
          
         </IonRow>
          <IonButton style={{padding:"15px", background:"#0000A0", borderRadius:"10px",margin:"15px"}} color="#0000A0" expand="block" shape="round" mode='ios'>
            <IonText>SIMPAN</IonText>
            </IonButton>
            </IonCard>
        </IonContent>
        <IonAlert
          isOpen={alertUbahNama}
          onDidDismiss={() => {setAlertUbahNama(false);window.open('/Beranda','_self')}}
          header="Pesan"
          // subHeader="Periksa Kembali Formulir"
          message={msg}
          buttons={['OK']}
          mode='ios'
        />
        <IonLoading 
          isOpen={loadingUbahNama} 
          message="Menunggu Proses..."
          spinner="bubbles"
          mode="ios"
        />
        </IonModal>
        
        <IonModal isOpen={openmodalubahemail}>
          <IonHeader>
            <IonToolbar mode="ios">
              <IonTitle style={{textAlign:"center", color:"#0000A0"}}>Ubah Email</IonTitle>
              <IonButtons slot="end">
                <IonButton mode="ios" onClick={() => setOpenModalUbahEmail(false)}>
                  <IonIcon src="/assets/icon/close.svg" style={{fontSize:"30px"}} ></IonIcon>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
          <IonCard style={{borderRadius:"10px"}}>
            <IonRow style={{padding:"20px", fontSize:"18px" , paddingBottom:"0"}}>Email</IonRow>
            <IonRow style={{margin:"15px", padding:"5px",fontSize:"18px", outline:"none", background:"#DEDEDE", borderRadius:"10px"}}>
              <input style={{border:"none", outline:"none",background:"#DEDEDE", color:"black", padding:"10px", width:"100%"}} placeholder="Email" type='text' defaultValue={String(email)} name='email'></input>
            </IonRow>
         <IonRow>
          
         </IonRow>
          <IonButton style={{padding:"15px", background:"#0000A0", borderRadius:"10px",margin:"15px"}} color="#0000A0" expand="block" shape="round" mode='ios'>
            <IonText>SIMPAN</IonText>
            </IonButton>
            </IonCard>
        </IonContent>
        <IonAlert
          isOpen={alertUbahEmail}
          onDidDismiss={() => {setAlertUbahEmail(false);window.open('/Beranda','_self')}}
          header="Pesan"
          // subHeader="Periksa Kembali Formulir"
          message={msg}
          buttons={['OK']}
          mode='ios'
        />
        <IonLoading 
          isOpen={loadingUbahEmail} 
          message="Menunggu Proses..."
          spinner="bubbles"
          mode="ios"
        />
        </IonModal>
        <IonModal isOpen={openmodalubahpassword}>
          <IonHeader>
            <IonToolbar mode="ios">
              <IonTitle style={{textAlign:"center", color:"#0000A0"}}>Ubah Password</IonTitle>
              <IonButtons slot="end">
                <IonButton mode="ios" onClick={() => setOpenModalUbahPassword(false)}>
                  <IonIcon src="/assets/icon/close.svg" style={{fontSize:"30px"}} ></IonIcon>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
          <IonCard style={{borderRadius:"15px"}}>
                    <IonRow style={{textAlign:"start", justifyContent:"start", margin:"17px"}}>
                        <IonText mode="ios" style={{textAlign:"start", justifyContent:"start", fontSize:"18px"}}>Buat kata sandi yang kuat untuk akun Anda</IonText>
                    </IonRow>
                    <IonRow style={{textAlign:"start", margin:"15px",padding:"5px", background:"#DEDEDE", borderRadius:"10px"}}>
                        <IonCol size="2" style={{padding:"10px", margin:"0"}}>
                            <img src="assets/icon/password1.svg" style={{width:"24px"}}/>
                        </IonCol>
                        <IonCol style={{textAlign:'start'}}> 
                            <input style={{border:"none", outline:"none", fontSize:"18px", textAlign:'start', background:"#DEDEDE", color:"black", padding:"10px", width:"100%"}} placeholder="Kata Sandi Lama" type='password' name="passwordlama"></input>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{textAlign:"start", margin:"15px",padding:"5px", background:"#DEDEDE", borderRadius:"10px"}}>
                        <IonCol size="2" style={{padding:"10px", margin:"0"}}>
                            <img src="assets/icon/password1.svg" style={{width:"24px"}}/>
                        </IonCol>
                        <IonCol style={{textAlign:'start'}}> 
                            <input style={{border:"none", outline:"none", fontSize:"18px", textAlign:'start',background:"#DEDEDE", color:"black", padding:"10px", width:"100%"}} placeholder="Kata Sandi Baru" type='password' name="password"></input>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{textAlign:"start", margin:"15px",padding:"5px", background:"#DEDEDE", borderRadius:"10px"}}>
                        <IonCol size="2" style={{padding:"10px", margin:"0"}}>
                            <img src="assets/icon/password1.svg" style={{width:"24px"}}/>
                        </IonCol>
                        <IonCol style={{textAlign:'start'}}> 
                            <input style={{border:"none", outline:"none", fontSize:"18px", textAlign:'start', background:"#DEDEDE", color:"black", padding:"10px", width:"100%"}} placeholder="Ketik Ulang Kata Sandi" type='password' name="password2"></input>
                        </IonCol>
                    </IonRow>
                    <IonRow style={{border:"2px solid #D9D9D9", borderRadius:"10px", padding:"10px", margin:"15px", background:"#C2C2C2"}}>
                        <IonText mode="ios" style={{justifyContent:"justify"}}>
                            Setelah kata sandi diubah, silahkan masuk kembali dengan kata sandi baru di aplikasi
                        </IonText>
                    </IonRow>
                    
                    <IonButton className="button-simpan" shape="round" style={{padding:"5px", background:"#0000A0", borderRadius:"15px", margin:"15px"}} color="#0000A0" expand="block">LANJUT</IonButton>
                </IonCard>
        </IonContent>
        <IonAlert
          isOpen={alertUbahPassword}
          onDidDismiss={() => {setAlertUbahPassword(false);window.open('/Beranda','_self')}}
          header="Pesan"
          // subHeader="Periksa Kembali Formulir"
          message={msg}
          buttons={['OK']}
          mode='ios'
        />
        <IonLoading 
          isOpen={loadingUbahPassword} 
          message="Menunggu Proses..."
          spinner="bubbles"
          mode="ios"
        />
        </IonModal>
      </IonContent>
    
    </IonMenu>
  );
};

export default Menu;
