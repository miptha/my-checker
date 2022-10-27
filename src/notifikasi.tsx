import { IonBackButton, IonButton, IonButtons, IonCard, IonChip, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonGrid, IonHeader, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { busOutline, cardOutline, logoFacebook, logoGoogle, logoInstagram, logoTwitter, logoVimeo, logoWhatsapp, peopleCircleOutline, person, share } from 'ionicons/icons';

import './notifikasi.css';
import $ from "jquery";
import { useState } from 'react';
import { Capacitor } from '@capacitor/core';
import { useHistory } from 'react-router';


const Notifikasi: React.FC = () => {
  const user_id = localStorage.getItem('userid');
  const url='https://xpdcargo.id/login/login';
  const url1='https://xentra.mplayer.my.id/login';
  const [notifikasiList, setNotifikasiList] = useState([]);
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
  const [Pengiriman, setPengiriman] = useState(Number);
  const [Promo, setPromo] = useState(Number);
  const [Info, setInfo] = useState(Number);
  const [filter, setFilter] = useState('');
  const history = useHistory()
 
  
  useIonViewWillEnter(() => {
    let formAll = new FormData();
    formAll.append('user_id', String(localStorage.getItem('userid')))
    formAll.append('max', '10')
    $.ajax({
      type: "POST",
      url: "https://xpdcargo.id/login/Callback/getFilterNotifikasi",
      data: formAll,
      processData:false,
      contentType:false,
      dataType:"json",
      success:function(res){
        setNotifikasiList(res.data)
      }
    })

    let form = new FormData()
    form.append('where', 'user_id')
    form.append('id', String(localStorage.getItem('userid')))
    form.append('table', 'order_notifikasi')
    form.append('target', String(localStorage.getItem('userid')))
    form.append('where_change', 'status')
    form.append('target_change', '0')
    $.ajax({
      type: "POST",
      url: url+"/apps_update_notif_all",
      data: form,
      processData:false,
      contentType:false,
      dataType:'json'
    })
  })

  const pushData = (max) => {
    let formData = new FormData();
    formData.append('user_id', String(localStorage.getItem('userid')))
    formData.append('max', max)
    if(filter === 'pengiriman'){
      formData.append('fillter', 'pengiriman')
    }else if(filter === 'promo'){
      formData.append('fillter','voucher')
    }else if(filter === 'news'){
      formData.append('fillter','news')
    }
    $.ajax({
      type: "POST",
      url: "https://xpdcargo.id/login/Callback/getFilterNotifikasi",
      data: formData,
      processData:false,
      contentType:false,
      dataType:"json",
      success:function(res){
        if(res.data.length > 0){
          setNotifikasiList(res.data)
        }
      }
    })    
}
  const loadData = (ev: any) => {
    var before = notifikasiList.length;
    setTimeout(() => {
      pushData(before+10);
      console.log('Loaded data');
      ev.target.complete();
      if (notifikasiList.length === 1000) {
        setInfiniteDisabled(true);
      }
    }, 1000);
  }  

  function predictLink(type, id){
    if(type === 'Reweight'){
      history.push('/OrderInvoice?id='+id);
    }else if(type === 'Pembayaran'){
      history.push('/orderList');
    }else if(type === 'Promo'){
      history.push('/voucherlist');
    }else if(type === 'Saldo'){
      history.push('/refferal');
    }else if(type === 'Pengiriman'){
      history.push('/orderdetail?order_id='+id);
    }else if(type === 'News'){
      history.push('/news?id='+id)
    }
    else{
      history.push('/orderList');
  }
}

  function predicticon(notif) {
    if(notif === 'pembayaran') {
      // var src = 'asssets/icon/SVG Pembayaran.svg';
      return (
        <div><IonIcon src='assets/icon/SVG Pembayaran.svg' style={{fontSize:'28px'}}/></div>
        
      )
  }else if (notif === 'pengiriman') {
    return (
      <div><IonIcon src='assets/icon/SVG Pengiriman.svg' style={{fontSize:'28px'}}/></div>
    )
      // console.log(src)
     
  }else if (notif === 'reweight') {
    return (
      <div><IonIcon src='assets/icon/SVG Reweight.svg' style={{fontSize:'28px'}}/></div>
    )
  }else if (notif === 'promo') {
    return (
      <div><IonIcon src='assets/icon/SVG Promo.svg' style={{fontSize:'28px'}}/></div>
    )
  }else if (notif === 'saldo') {
    return (
      <div><IonIcon src='assets/icon/SVG Pembayaran.svg' style={{fontSize:'28px'}}/></div>
    )
  }else if (notif === 'news') {
    return (
      <div><IonIcon src='assets/icon/announcement.svg' style={{fontSize:'28px'}}/></div>
    )
  }else{
    return (
      <div><IonIcon src='assets/icon/SVG Pengiriman.svg' style={{fontSize:'28px'}}/></div>
    )
  }
  
}

function convDate(tgl){

    var getHoursIOS = String(tgl).substring(11, 13)
    var getHoursNowIOS = new Date().toLocaleTimeString('id', {hour:'2-digit', hour12:false})

    var getMinutesIOS = String(tgl).substring(14, 16)
    var getMinutesNowIOS = new Date().toLocaleTimeString('id', {minute:'2-digit'})

    var getDayIOS = String(tgl).substring(8, 10)
    var getDayNowIOS = new Date().toLocaleTimeString('id', {day:'2-digit'})

    var getMonthIOS = String(tgl).substring(5, 7)
    var getMonthNowIOS = new Date().toLocaleTimeString('id', {month:'2-digit'})

    var getYearIOS = String(tgl).substring(0, 4)
    var getYearNowIOS = new Date().toLocaleTimeString('id', {year:'numeric'})

    var diffHour = Number(getHoursNowIOS) - Number(getHoursIOS);
    var diffMinute = Number(getMinutesNowIOS) - Number(getMinutesIOS);
    var diffDay = Number(getDayNowIOS) - Number(getDayIOS);
    var diffYear = Number(getYearNowIOS) - Number(getYearIOS);
    var diffMonth = Number(getMonthNowIOS) - Number(getMonthIOS);
  


  // console.log("Year : "+getYear);
  if(diffYear === 0){
    if(diffMonth === 0){
      if(diffDay === 0){
        if(diffHour === 0){
          console.log('dibawah 1 jam')
          var now = diffMinute+' menit lalu'
          var nowIOS = diffMinute+' menit lalu'
        }else{
          console.log('diatas 1 jam')
          var now = diffHour+' jam lalu'
          var nowIOS = diffHour+' jam lalu'
        }
        console.log('dihari yang sama')
      }else{
          if(diffDay >= 7){
            console.log('sudah lebih dari 7 hari')
            var now = getDayIOS + "/" + getMonthIOS + "/" + getYearIOS
          }else{
            console.log('belum lebih dari 7 hari')
            var now = diffDay+' hari lalu'
          }
      }
    }else{
      var now = getDayIOS + "/" + getMonthIOS + "/" + getYearIOS
    }
  }else{
    var now = getDayIOS + "/" + getMonthIOS + "/" + getYearIOS
  }return now;
}

function filterClick(type:String){
  let css_property =
  {
    "color": "white",
    // "background": "#00F0FF"
    "background":"#128ae3"
  }
  let css_property_normal =
  {
    "color": "white",
    "background": "#DEDEDE"
  }
  let formData = new FormData();
  
  formData.append('max', '10');
  if(type === 'inbound'){
    formData.append('user_id', String(localStorage.getItem('userid')));
    formData.append('fillter', 'inbound');
    setFilter('inbound')
    $("#chipsInbound").css(css_property);
    $("#chipsSemua").css(css_property_normal);
    $("#chipsSVC").css(css_property_normal);
    $("#chipsOutbound").css(css_property_normal);
  }else if(type === 'outbound'){
    formData.append('fillter', 'outbound');
    setFilter('outbound')
    $("#chipsOutbound").css(css_property);
    $("#chipsSemua").css(css_property_normal);
    $("#chipsSVC").css(css_property_normal);
    $("#chipsInbound").css(css_property_normal);
  } else if(type === 'svc'){
    formData.append('fillter', 'svc');
    setFilter('svc')
    $("#chipsSVC").css(css_property);
    $("#chipsSemua").css(css_property_normal);
    $("#chipsOutbound").css(css_property_normal);
    $("#chipsInbound").css(css_property_normal);
  }
  else{
    formData.append('fillter', 'semua');
    setFilter('semua')
    $("#chipsSemua").css(css_property);
    $("#chipsInbound").css(css_property_normal);
    $("#chipsOutbound").css(css_property_normal);
    $("#chipsSVC").css(css_property_normal);
  }

  $.ajax({
    type: "POST",
    url: "https://xpdcargo.id/login/Callback/getFilterNotifikasi",
    data: formData,
    processData: false,
    contentType: false,
    dataType: "json",
    beforeSend: function(){
      setNotifikasiList([]);
    },
    success:function(res){
      if(res.data.length > 0){
        setNotifikasiList(res.data);
        console.log(res.data);  
      }else{
        pushData(10)
      }
    }
  })
}

  return (
    <IonPage className='anim-scale-out anim-linear'>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton style={{color:"#0000A0", fontSize:"30px"}}/>
            </IonButtons>
        {/* <IonButtons slot="start">
          <IonBackButton style={{color:"#0000A0"}} defaultHref='/Beranda' ></IonBackButton>
        </IonButtons> */}
          <IonTitle className='ion-text-center' style={{color:"#0000A0"}}>Notifikasi</IonTitle>
        </IonToolbar>
        </IonHeader>
        <IonList className='horizontal-scroll' style={{textAlign:"left"}} >
       <div>
        <IonChip style={{background:"#DEDEDE"}} id='chipsSemua' onClick={()=>{filterClick('semua')}}>
          <IonLabel style={{color:"#0000A0"}} >Semua</IonLabel>
        </IonChip>
        <IonChip style={{background:"#DEDEDE"}} id='chipsInbound' onClick={()=>{filterClick('inbound')}}>
          <IonLabel style={{color:"#0000A0"}} >Inbound</IonLabel>
        </IonChip>
        <IonChip style={{background:"#DEDEDE"}} id='chipsOutbound' onClick={()=>{filterClick('outbound')}}>
          <IonLabel style={{color:"#0000A0"}}  >Outbound</IonLabel>
        </IonChip>
        <IonChip style={{background:"#DEDEDE"}} id='chipsSVC' onClick={()=>{filterClick('svc')}}>
          <IonLabel style={{color:"#0000A0"}} >Scan SVC</IonLabel>
        </IonChip>
       </div>
       </IonList>
      <IonContent>
      {/* {(notifikasiList)?notifikasiList.map((a,index) => { */}
        
          {/* return( */}
            {/* <div key={index}>  */}
            <div>
              {/* <IonCard className={(a['status'] === '1')?'new':'old'} id='item' onClick={() => {predictLink((a['reweight'] === '1')?'Reweight':(a['pembayaran'] === '1')?'Pembayaran':(a['voucher'] === '1')?'Promo':(a['saldo'] === '1')?'Saldo':(a['pengiriman'] === '1')?'Pengiriman':(a['news'] === '1')?'News':'',a['order_id'])}}> */}
              <IonCard style={{borderRadius:"10px"}}>
                <IonGrid style={{background:'transparent'}}>
                  <IonRow >
                    <IonCol>
                    <IonRow>
                      <IonCol size='6'style={{textAlign:'start', padding:'2px'}}>
                        <IonRow>
                          <IonCol size='2' style={{fontSize:'18px'}}>
                          <IonIcon src='assets/icon/svc.svg' style={{fontSize:'30px'}}/>
                            {/* {(a['reweight'] === '1')?predicticon('reweight'):(a['pembayaran'] === '1')?predicticon('pembayaran'):(a['voucher'] === '1')?predicticon('promo'):(a['saldo'] === '1')?predicticon('saldo'):(a['pengiriman'] === '1')?predicticon('pengiriman'):(a['news'] === '1')?predicticon('news'):predicticon('8678')} */}
                          </IonCol>
                          <IonCol style={{padding:'10px', margin:'0'}}>
                            <IonText mode='ios' style={{fontWeight:'bold', fontSize:'18px'}}>
                                Scan SVC
                            {/* {(a['reweight'] === '1')?'Tagihan':(a['pembayaran'] === '1')?'Pembayaran':(a['voucher'] === '1')?'Promo':(a['saldo'] === '1')?'Saldo':(a['pengiriman'] === '1')?'Pengiriman':(a['news'] === '1')?'News & Tips':''} */}
                            </IonText>
                          </IonCol>
                        </IonRow>
                      </IonCol>
                      <IonCol size='6' style={{padding:'10px', margin:'0', textAlign:'end', fontSize:'16px'}}>
                        {/* <IonText mode='ios'>{convDate(a['created_at'])}</IonText> */}
                        25/10/2022
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol style={{textAlign:'start', fontSize:'17px'}}>
                        <IonText mode='ios'>
                         {/* {(a['message'])?a['message']:'Pesanan Berhasil Dibuat'} */}
                         Barang dengan No. Tracking XPDC20229495 telah berhasil di delivery
                        </IonText>
                      </IonCol>
                    </IonRow>
                    </IonCol>
                  </IonRow>
                </IonGrid>
                </IonCard>

                <IonCard style={{borderRadius:"10px"}}>
                <IonGrid style={{background:'transparent'}}>
                  <IonRow >
                    <IonCol>
                    <IonRow>
                      <IonCol size='6'style={{textAlign:'start', padding:'2px'}}>
                        <IonRow>
                          <IonCol size='2' style={{fontSize:'18px'}}>
                          <IonIcon src='assets/icon/pickup1.svg' style={{fontSize:'25px'}}/>
                            {/* {(a['reweight'] === '1')?predicticon('reweight'):(a['pembayaran'] === '1')?predicticon('pembayaran'):(a['voucher'] === '1')?predicticon('promo'):(a['saldo'] === '1')?predicticon('saldo'):(a['pengiriman'] === '1')?predicticon('pengiriman'):(a['news'] === '1')?predicticon('news'):predicticon('8678')} */}
                          </IonCol>
                          <IonCol style={{padding:'10px', margin:'0'}}>
                            <IonText mode='ios' style={{fontWeight:'bold', fontSize:'18px'}}>
                                Inbound
                            {/* {(a['reweight'] === '1')?'Tagihan':(a['pembayaran'] === '1')?'Pembayaran':(a['voucher'] === '1')?'Promo':(a['saldo'] === '1')?'Saldo':(a['pengiriman'] === '1')?'Pengiriman':(a['news'] === '1')?'News & Tips':''} */}
                            </IonText>
                          </IonCol>
                        </IonRow>
                      </IonCol>
                      <IonCol size='6' style={{padding:'10px', margin:'0', textAlign:'end', fontSize:'16px'}}>
                        {/* <IonText mode='ios'>{convDate(a['created_at'])}</IonText> */}
                        25/10/2022
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol style={{textAlign:'start', fontSize:'17px'}}>
                        <IonText mode='ios'>
                         {/* {(a['message'])?a['message']:'Pesanan Berhasil Dibuat'} */}
                         Barang dengan No. Tracking XPDC20229495 perlu segera di pickup
                        </IonText>
                      </IonCol>
                    </IonRow>
                    </IonCol>
                  </IonRow>
                </IonGrid>
                </IonCard>
                <IonCard style={{borderRadius:"10px"}}>
                <IonGrid style={{background:'transparent'}}>
                  <IonRow >
                    <IonCol>
                    <IonRow>
                      <IonCol size='6'style={{textAlign:'start', padding:'2px'}}>
                        <IonRow>
                          <IonCol size='2' style={{fontSize:'18px'}}>
                          <IonIcon src='assets/icon/deliver1.svg' style={{fontSize:'30px'}}/>
                            {/* {(a['reweight'] === '1')?predicticon('reweight'):(a['pembayaran'] === '1')?predicticon('pembayaran'):(a['voucher'] === '1')?predicticon('promo'):(a['saldo'] === '1')?predicticon('saldo'):(a['pengiriman'] === '1')?predicticon('pengiriman'):(a['news'] === '1')?predicticon('news'):predicticon('8678')} */}
                          </IonCol>
                          <IonCol style={{padding:'10px', margin:'0'}}>
                            <IonText mode='ios' style={{fontWeight:'bold', fontSize:'18px'}}>
                                Outbound
                            {/* {(a['reweight'] === '1')?'Tagihan':(a['pembayaran'] === '1')?'Pembayaran':(a['voucher'] === '1')?'Promo':(a['saldo'] === '1')?'Saldo':(a['pengiriman'] === '1')?'Pengiriman':(a['news'] === '1')?'News & Tips':''} */}
                            </IonText>
                          </IonCol>
                        </IonRow>
                      </IonCol>
                      <IonCol size='6' style={{padding:'10px', margin:'0', textAlign:'end', fontSize:'16px'}}>
                        {/* <IonText mode='ios'>{convDate(a['created_at'])}</IonText> */}
                        25/10/2022
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol style={{textAlign:'start', fontSize:'17px'}}>
                        <IonText mode='ios'>
                         {/* {(a['message'])?a['message']:'Pesanan Berhasil Dibuat'} */}
                         Barang dengan No. Tracking XPDC20221025 perlu segera di delivery
                        </IonText>
                      </IonCol>
                    </IonRow>
                    </IonCol>
                  </IonRow>
                </IonGrid>
                </IonCard>
            </div>
        {/* //   )}):''} */}

        <IonInfiniteScroll
            onIonInfinite={loadData}
            threshold="100px"
            disabled={isInfiniteDisabled}>
    
            <IonInfiniteScrollContent
                loadingSpinner="bubbles"
                loadingText="Loading more data..."
            ></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
 );
}


export default Notifikasi
