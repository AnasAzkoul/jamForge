<script setup lang="ts">
import AuthLayout from "../layouts/AuthLayout.vue";
import { z } from "zod";
import { Form, ErrorMessage } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { Button } from "../components/ui/button";
import { FormControl, Input, Label } from "../components/ui/Form";
import { RouterLink } from "vue-router";
import Card from "../components/ui/Card/Card.vue";

const schema = toTypedSchema(
  z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  }),
);

function onSubmit(values: any) {
  console.log(values);
}
</script>

<template>
  <AuthLayout>
    <template #header>Sign up to JamForge</template>
    <Form :validation-schema="schema" @submit="onSubmit">
      <Card>
        <FormControl>
          <Label for="userName">User Name</Label>
          <Input
            name="userName"
            type="text"
            placeholder="Enter your username"
          />
          <ErrorMessage name="userName" />
        </FormControl>
        <FormControl>
          <Label for="email">Email</Label>
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" />
        </FormControl>

        <FormControl>
          <Label for="password">Password</Label>
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" />
        </FormControl>

        <FormControl>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
          />
          <ErrorMessage name="confirmPassword" />
        </FormControl>

        <Button type="submit">Sign up</Button>

        <div>
          <p class="text-gray-500">
            Already have an account?
            <RouterLink :to="{ name: 'signIn' }">Sign in</RouterLink>
          </p>
        </div>
      </Card>
    </Form>
  </AuthLayout>
</template>

<style scoped></style>
