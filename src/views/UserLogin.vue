<template>
    <ion-page>
        <ion-content :fullscreen="true" class="ion-padding">
            <div class="ion-padding" style="padding-top:42px; padding-bottom:32px;">
                <ion-img :src="logo" class="logo-clipped"></ion-img>
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
                <ion-button @click="router.push('/create-account')" expand="block" fill="clear">Create Account
                </ion-button>
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

import logo from "../../public/assets/icon/logo-clipped.png"
import {
    IonContent,
    IonPage,
    IonItem,
    IonLabel,
    IonInput,
    IonImg,
    IonButton,
    IonFooter
} from "@ionic/vue";
import {
    useRouter
} from "vue-router";
import {
    ref
} from "vue";
import dataService from "../dataservice";

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
        //get reference to router to use for redirect later
        const router = useRouter();

        //instantiate email and password Strings for subsequent use
        const creds = ref({
            email: "",
            password: ""
        });

        const {
            login,
            forgotPassword
        } = dataService();

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        const doLogin = async () => {
            try {
                const {
                    email,
                    password
                } = creds.value;
                const {
                    user,
                    error
                } = await login(email, password);
                if (user.aud == "authenticated") router.replace("/home");
                if (error) throw error;
            } catch (e) {
                alert(e.message);
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        const doForgotPassword = async () => {
            alert("Executing ForgotPassword call to Supabase API");
            const {
                email
            } = creds.value;
            try {
                const {
                    error
                } = await forgotPassword(email);
                if (error) throw error;
                alert("Check email to reset password");

            } catch (e) {
                alert(e.message);
            }
        };
        return {
            creds,
            doLogin,
            doForgotPassword,
            router,
            logo
        };
    },
})
</script>

<style lang="scss" scoped>
    .logo-clipped{
        width: 10%;
        height: 10%;
    }
</style>