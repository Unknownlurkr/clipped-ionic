<template>
    <ion-page>

        <ion-content :fullscreen="true" class="ion-padding">
            <div class="ion-padding" style="padding-top:42px; padding-bottom:32px;">
                <ion-img :src="logo"></ion-img>
            </div>
            <ion-item>
                <ion-label>Email</ion-label>
                <ion-input type="email" v-model="creds.email"></ion-input>
            </ion-item>
                        <ion-item>
                <ion-label>Password</ion-label>
                <ion-input type="password" v-model="creds.password"></ion-input>
            </ion-item>
            <div class="ion-padding">
                <ion-button @click="doLogin" expand="block">Login</ion-button>
                <ion-button 
                    @click="router.push('/create-account')"
                     expand="block"

                     fill="clear"
                     >Create Account</ion-button>
                >
            </div>
        </ion-content>
        <ion-footer class="ion-text-center">
            <ion-button @click="doForgotPassword" fill="clear">
                Forgot Password
            </ion-button>
        </ion-footer>
    </ion-page>
</template>

<script>

// import logo from "@/assets/icon/logo-clipped.png";
import {IonContent,
IonPage, 
IonItem,
IonLabel,
IonInput,
IonImg,
IonButton,
IonFooter
} from "@ionic/vue";
import { useRouter } from "vue-router";
import {
    ref
} from "vue"

export default ({
    name: "UserLogin",
    components: {
        IonContent,
        IonImg,
        IonPage,
        IonItem,
        IonLabel,
        IonInput,
        IonButton,
        IonFooter,
    },
    setup() {
        const router = useRouter();
        const creds = ref({
            email: "",
            password: ""
        });

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        const doLogin = async () => {
            const { email, password } = creds.value;
            alert(`doLogin: ${email}  ${password}`);
        };
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        const doForgotPassword = async () => {
            alert("ForgotPassword")
        };
        return {
            creds,
            doLogin,
            doForgotPassword,
            router
            // logo
        };
    },
}) 
</script>

<style lang="scss" scoped>

</style>