<template>
    <ion-list inset="true">
        <ion-item>
            <ion-avatar slot="start">
                <img src="../../public/assets/images/avatars/face1.png">
            </ion-avatar>
            <ion-label>
                <h2>Finn</h2>
                <h3>I'm a big deal</h3>
                <p>Listen, I've had a pretty messed up day...</p>
            </ion-label>
        </ion-item>

        <ion-item>
            <ion-avatar slot="start">
                <img src="../../public/assets/images/avatars/Face2.png">
            </ion-avatar>
            <ion-label>
                <h2>V</h2>
                <h3>Look, kid...</h3>
                <p>I've got enough on my plate as it is, and I...</p>
            </ion-label>
        </ion-item>

        <ion-item>
            <ion-avatar slot="start">
                <img src="../../public/assets/images/avatars/Face3.png">
            </ion-avatar>
            <ion-label>
                <h2>Arthur</h2>
                <h3>I can handle myself</h3>
                <p>I'm gonna count to 3 partner</p>
            </ion-label>
        </ion-item>
    </ion-list>
</template>

<script lang="ts">
import Vue from 'vue'
import { IonList, IonItem, IonAvatar, IonLabel } from "@ionic/vue";
import { helpCircle, personCircle } from "ionicons/icons";

export default {
    name: "StaticListEx",
    components: {
        IonList,
        IonItem,
        IonAvatar,
        IonLabel
    },
    setup() {
        return [
            helpCircle,
            personCircle
        ]
    }
}
</script>