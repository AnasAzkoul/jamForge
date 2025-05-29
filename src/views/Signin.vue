<script setup lang="ts">
import {Form, Field, ErrorMessage} from "vee-validate";
import { z } from "zod/v4";

const signinSchema = z.object({
  email: z.email().trim().toLowerCase(),
  password: z.string().trim(),
})
</script>

<template>
  <Form :validation-schema="signinSchema">
    <Field type="email" name="email" placeholder="Email"/>
    <ErrorMessage name="email" />

    <Field type="password" name="password" placeholder="Password" />
    <ErrorMessage name="password" />
  </Form>
</template>

<style scoped>

</style>