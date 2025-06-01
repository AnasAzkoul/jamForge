<script setup lang="ts">
import { Form, ErrorMessage } from "vee-validate";
import { Button } from "../components/ui/button";
import { FormControl, Input, Label } from "../components/ui/Form";
import { RouterLink } from "vue-router";
import Card from "../components/ui/Card/Card.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

// const { errors } = useForm({
//   validationSchema: schema,
// });

function onSubmit(values: any) {
  console.log(values);
}
</script>

<template>
  <AuthLayout>
    <template #header>Sign in to JamForge</template>
    <Form :validation-schema="schema" @submit="onSubmit">
      <Card>
        <FormControl>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            label="Email"
          />
          <ErrorMessage
            name="email"
            class="text-red-500 capitalize text-sm"
          />
        </FormControl>

        <FormControl>
          <Label for="password">Password</Label>
          <Input type="password" name="password" placeholder="Password" />
          <ErrorMessage
            name="password"
            class="text-red-500 capitalize text-sm"
          />
        </FormControl>

        <Button type="submit" class="cursor-pointer">Sign in</Button>

        <FormControl layout="horizontal" class="self-center">
          <Input type="checkbox" name="remember-me" unchecked />
          <Label for="remember-me">Remember Me</Label>
        </FormControl>

        <div class="flex flex-col gap-2 text-gray-500 self-center">
          <p>Forgot your password?</p>
          <p>
            Don't have an account?
            <RouterLink :to="{ name: 'signup' }">Sign up</RouterLink>
          </p>
        </div>
      </Card>
    </Form>
  </AuthLayout>
</template>
