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
                <ion-input type="password" v-model="creds.password"></ion-input>
            </ion-item>
            <div class="ion-padding">
                <ion-button @click="doCreateAccount" expand="block">Create Account</ion-button>
                <ion-button @click="router.push('/login')" expand="block" fill="clear">Cancel</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
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
    import dataService from "../dataservice";

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
            //get reference to router to use for redirect later
            const router = useRouter();

            //instantiate email and password Strings for subsequent use
            const creds = ref({
                email: "",
                password: ""
            });

            const {
                createAccount
            } = dataService();

            const doCreateAccount = async () => {
                const {
                    email,
                    password
                } = creds.value;
                alert(`Calling create account method in dataService.js with: ${email} and inputted password `);
                try {
                    /**
                     * invoke createAccount call to Supabase backend and
                     * destructure user and error return values from createAccount function call in dataservice.js
                     */
                    const {
                        user,
                        error
                    } = await createAccount(email, password);

                    //if sign in successful and therefore user != empty
                    if (user) router.replace("/vids");
                    //otherwise display the error message as defined by the Supabase API
                    if (error) throw error;
                } catch (e) {
                    alert(e.message);
                }
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