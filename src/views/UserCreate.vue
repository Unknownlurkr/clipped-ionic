<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>
                    Create Account
                </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="ion-padding">
            <ion-item>
                <ion-label>Email</ion-label>
                <ion-input type="email" v-model="creds.email"></ion-input>
            </ion-item>
                        <ion-item>
                <ion-label>Password</ion-label>
                <ion-input type="password" v-model="creds.psddeotf"></ion-input>
            </ion-item>
            <div class="ion-padding">
                <ion-button @click="doCreateAccount" expand="block">Login</ion-button>
                <ion-button 
                    @click="router.push('/login')"
                     expand="block"

                     fill="clear"
                     >Cancel</ion-button>
                
            </div>
        </ion-content>
    </ion-page>
</template>

<script >

    import {
        IonContent,
        IonPage,
        IonItem,
        IonLabel,
        IonInput,
        IonButton,
        IonTitle,
        IonToolbar

    } from "@ionic/vue";
import {
    useRouter
} from "vue-router";
import {
    ref
} from "vue"

export default ({
    name: "UserCreate",
    components: {
        IonContent,
        IonPage,
        IonItem,
        IonLabel,
        IonInput,
        IonButton,
        IonTitle,
        IonToolbar
    },
    setup() {
        const router = useRouter();
        const creds = ref({
            email: "",
            password: ""
        });

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        const doCreateAccount = async () => {
            alert("doCreateAccount");
        };
        return {
            creds,
            doCreateAccount,
            router
            // logo
        };
    },
}) 
</script>

<style lang="scss" scoped>

</style>