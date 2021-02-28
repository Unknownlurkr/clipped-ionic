# **Syntax**

> Putting this information first in an attempt to set up some logical structure to the documentation; feedback welcome on structure!
> - Pteropticon

## v-bind and v-on shorthand syntax

The v- prefix in Vue directives is a visual indicator that a Vue template attribute is being used. For
simplicity, Vue provides shorthands for the commonly used v-bind and v-on directives.
The v-bind directive can be shortened with the : symbol:

// the full syntax

```html <img v-bind:src="submission.submissionImage" />```

// the shorthand syntax

```html <img :src="submission.submissionImage" /> ```

And the v-on directive can be shortened with the @ symbol:

// the full syntax

```html <span v-on:click="upvote(submission.id)"></span> ```

// the shorthand syntax

```html<span @click="upvote(submission.id)"></span>```

This shorthand syntax is completely optional but allows us to use the v-bind and v-on directives
without explicitly typing out the full syntax.



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

> Define functions under the **computed** property to be called in the HTML markup
> - Pteropticon
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

> Literally the same as a normal stylesheet, just embedded in the .Vue file underneath the script section
> - Pteropticon

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

![Components](public\assets\images\documentation\vue-components.png)

Our input in inputComponent needs to be dynamically-bound to a data value to allow it to
communicate with the parent instance. To bind a data value, we’ll set up the v-model directive
with input as the name of the input property:

![Components](public\assets\images\documentation\vue-components_v-model_directive.png)

## Between Siblings

===============================================================================

# Vue Instance Lifecycle (specifically, lifecycle hooks!)

Lifecycle hooks, within a Vue instance are named functions that occur throughout the lifecycle of
the instance. The lifecycle refers to the time an instance has been created, mounted, updated, and
even destroyed. Vue gives us the ability to create actions whenever a lifecycle hook has been run.

```javascript 
1 new Vue({
2   el: '#app',
3   data: {
4     book: 'FullStack Vue'
5   },
6   created () {
7     alert('This book is ' + this.book);
8   }
9 });

```

An example of such a lifecycle hook is the **created** hook. The **created** hook is run when the instance
has just been created and the instance data and events are active

===============================================

The updated hook can be used to apply an action whenever there are any data changes to a Vue
instance causing it to re-render

```javascript
1 new Vue({
2   el: '#app',
3     data: {
4     count: 'FullStack Vue'
5   },
6     updated () {
7     console.log('The count is ' + this.count);
8   },
9   methods: {
10    updateCount () {
11    this.count++;
  12   }
13   }
14 })

```

# Event bus 
 
 > Unfinished...putting the conclusion in for now; will create proper documentation for the EventBus Section and the subsequent section eventually. Hopefully by 2/28/2021 @ midnight
> - Pteropticon

In much larger Vue applications, the global Event Bus can be extracted to its own separate file (e.g.
event-bus.js) and imported whenever needed. The Event Bus itself can also be modified to have
more internal logic to communicate with a server or a real-time backend. This set-up is useful since
all events will be handled within a central location.

Different developers have different use cases for different applications. However, as mentioned in
the previous chapter, a global Event Bus is not the recommended way of managing data between
components

Though incredibly easy to set-up, things get difficult to track really quickly. Having a large number
of event emitters/listeners sporadically placed in your components can make code frustrating to maintain and can become a source of bugs.

The main pain-point arises from the tight coupling between user interactions and data changes.
For complex web applications, oftentimes a single user interaction can affect many different, discrete
parts of the state.

This is where the advantage of using **Vuex**, the Flux-like library for state management, comes in.
**Vuex** is the preferred method for managing data within applications

# Veux!! (library for state mgmt)

## Based on the Flux design pattern created by Facebook and the great Zuck :snake:

===============================================

Flux is a design pattern created by Facebook. The Flux pattern is made up of four parts, organized
as a one-way data pipeline:

![flux pipeline](.\public\assets\images\documentation\statemgmt\flux-pipeline.png)

## Key Ideas of Vuex:

- All of our application's data is in a single data structure called the __state__, which is held in the __store__
- Our app reads the __state__ from this __store__
- The __state__ is never mutated directly outside the __store__
- The __views__ dispatch __actions__ that describe what happened
- The __actions__ commit to __mutations__
- __Mutations__ directly mutate/c hange store state
- When the __state__ is mutated, relevant components/views are re-rendered
