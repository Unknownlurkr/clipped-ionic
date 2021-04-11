<template>
  <ion-page>

          <CalendarWeek/>
          <CalendarEntry/>

  </ion-page>
</template>

<script>

import CalendarWeek from './CalendarWeek.vue';
import CalendarEntry from './CalendarEntry.vue';
import { IonPage} from "@ionic/vue";

export default {
  name: 'TestArea',
  components: {
    CalendarWeek,
    CalendarEntry,
    IonPage,

  }
};
</script>

<style>
html,
body {
  background: #f2f6fa;
}

#test-area-container {
  height: 100%;
  align-items: center;
  justify-content: center;
}

@media screen and (min-width: 769px) {
  html,
  body {
    height: 100%;
  }
}
</style>
