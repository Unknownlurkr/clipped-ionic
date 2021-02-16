<template>
<link rel="stylesheet" href="./main.css">
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>My Account</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
        
          <ion-title size="large">Profile</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card-content>
        <img class="profile photo" height="100" width="100" src="../Images/Default.png" />
        <h2>UserName</h2>
      
      </ion-card-content>
      
    </ion-content>
    
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';



export default  {
  name: 'Profile',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>