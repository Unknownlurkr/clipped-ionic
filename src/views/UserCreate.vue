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
    import { useRouter } from "vue-router";
    import { ref } from "vue"
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
        const router = useRouter();
        const creds = ref({
            email: "",
            password: ""
        });
        const { createAccount } = dataService();

       
        const doCreateAccount = async () => {
            const { email, password } = creds.value;
            console.log(`Creating Account with : ${email}  ${password}`);
            
            try {
                const { user, error } = await createAccount(email, password);
                 if(user) router.replace("/home");
                 if(error) throw error;
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