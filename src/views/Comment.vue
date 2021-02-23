<template>
  <div id="container-comment">
    <CalendarWeek />
    <CalendarEntry />
  </div>
</template>

<script>
import CalendarWeek from '../components/CalendarWeek.vue';
import CalendarEntry from '../components/CalendarEntry.vue';

export default {
  name: 'Comment',
  components: {
    CalendarWeek,
    CalendarEntry
  }
}
</script>

<style lang="scss">
 body {
   
  height: inherit;
}
</style>

<style lang="scss" scoped>
#container-comment {
  height: 1px;
  background: #6e6e6e;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
  float: right;
}
</style>