<template>
  <dynamic-form :form="form" @change="valueChanged" />
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import {
  ref
} from "vue";
import {
  CheckboxField,
  TextField,
  SelectField,
} from '@asigloo/vue-dynamic-forms';

export default defineComponent({
  name: 'BasicDemo',
  setup() {
    const form = ref({
      id: 'basic-demo',
      fields: {
        username: TextField({
          label: 'Username',
        }),
        games: SelectField({
          label: 'Games',
          options: [
            {
              value: 'the-last-of-us',
              label: 'The Last of Us II',
            },
            {
              value: 'death-stranding',
              label: 'Death Stranding',
            },
            {
              value: 'nier-automata',
              label: 'Nier Automata',
            },
          ],
        }),
        checkIfAwesome: CheckboxField({
          label: 'Remember Me',
        }),
      },
    });

    function valueChanged(values: any) {
      console.log('Values', values);
    }

    return {
      form,
      valueChanged,
    };
  },
});
</script>