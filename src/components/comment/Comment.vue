 <template>           
  <div id="container-comment">
    <CalendarWeek />
    <CalendarEntry />
  </div>
</template>

<script>
import CalendarWeek from "../CalendarWeek"
import CalendarEntry from '../CalendarEntry.vue';

export default {
  name: 'Comment',
  components: {
    CalendarWeek,
    CalendarEntry
  }
}
</script>


<style lang="scss" scoped>
#container-comment {
  padding-left: 10%;
  padding-right: 10%;

}
</style>