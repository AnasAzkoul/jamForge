<script setup lang="ts">
import {Field} from "vee-validate"
type Props = {
  placeholder?: string;
  type: 'text' | 'password' | 'email' | 'file' | 'url' | 'phone' | 'number' | 'checkbox' | 'radio';
  name: string;
  class?: string;
  label?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text'
});
</script>

<template>
  <Field
      :type="type"
      :name="name as string"
      :placeholder="placeholder as string"
      :class="{
        'border-2 focus:ring-0 focus:outline-0 focus:border-2 focus:border-gray-500 px-2 py-2.5 rounded-sm placeholder:italic': true,
        [props.class as string]: typeof props.class !== 'undefined'
      }"
      :label="label"
      autocomplete="current-password"
  />
</template>
