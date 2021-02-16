# __*Parts of a Vue Component*__

# 1. *Template*

```html
<template>
  <div id="calendar-entry">
    <div class="calendar-entry-note">
      <input type="text" placeholder="New Event" v-model="inputEntry" required />
      <p class="calendar-entry-day">
        Day of event: <span class="bold">{{ titleOfActiveDay }}</span>
      </p>
      <a class="button is-primary is-small is-outlined"
        @click="submitEvent(inputEntry)">
        Submit
      </a>
      <p style="color: red; font-size: 13px" v-if="error">
        You must type something first!
      </p>
    </div>
  </div>
</template> 
```


# 2. *Script*

> - Define functions under the **computed** property to be called in the HTML markup
```javascript

<script>
import { store } from '../store.js';

export default {
  name: 'CalendarEntry',
  data () {
    return {
      inputEntry: '',
      error: false
    }
  },
  
  computed: {
    titleOfActiveDay () {
      return store.getActiveDay().fullTitle;
    }
  },
  methods: {
    submitEvent (eventDetails) {
      if (eventDetails === '') return this.error = true;

      store.submitEvent(eventDetails);
      this.inputEntry = '';
      this.error = false;
    }
  }
}
</script>

```



# 3. *Styling*

```css
<style lang="scss" scoped>
#calendar-entry {
  background: #FFF;
  border: 1px solid #42b883;
  border-radius: 10px;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;

  .calendar-entry-note {
    input {
      width: 200px;
      font-weight: 600;
      border: 0;
      border-bottom: 1px solid #CCC;
      font-size: 15px;
      height: 30px;
      margin-bottom: 10px;

      &:focus {
        outline: none;
      }
    }

    .calendar-entry-day {
      color: #42b883;
      font-size: 12px;
      margin-bottom: 10px;
      padding-bottom: 5px;

      .bold {
        font-weight: 600;
      }
    }

    .submit {
      display: block;
      margin: 0 auto;
    }
  }
}

```



# Managing Data Between Components


## Parent-Child Components

Since every component has it’s own isolated scope, child components can never (and should never)
reference data directly from parent components. For a child component to access data from a parent,
**data has to flow from the parent down to the child** with the help of ***PROPS***. This design greatly
simplifies the understanding of an applications data flow since child components will never be able
to mutate parent state directly.

![GitHub Logo](public\assets\images\documentation\vue-components.png)

## Between Siblings

#### ----------- With Vue.observable ---------------

    >   The solution:
     To achieve communication between components we will use Vue.observable. which can be used as a minimal, cross-component state store for simple scenarios.

  