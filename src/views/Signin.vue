<script setup lang="ts">
import { Form, ErrorMessage } from "vee-validate";

import { Button } from "../components/ui/button";
import { FormControl, Input, Label } from "../components/ui/Form";
import { RouterLink } from "vue-router";

function onSubmit(values: any) {
  console.log(values);
}
</script>

<template>
  <body class="flex flex-col items-center gap-14 min-h-screen">
    <h1 class="mt-15 text-3xl">Sign in to JamForge</h1>
    <Form novalidate @submit="onSubmit">
      <div
        class="flex flex-col justify-center border-2 border-gray-600 rounded-md p-4 gap-6 min-w-xl"
      >
        <FormControl>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            label="Email"
          />
          <ErrorMessage name="email" />
        </FormControl>

        <FormControl>
          <Label for="password">Password</Label>
          <Input type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" />
        </FormControl>

        <Button type="submit" class="cursor-pointer">Sign in</Button>

        <FormControl layout="horizontal" class="self-center">
          <Input type="checkbox" name="remember-me" />
          <Label for="remember-me">Remember Me</Label>
        </FormControl>

        <div class="flex flex-col gap-2 text-gray-500 self-center">
          <p>Forgot your password?</p>
          <p>
            Don't have an account?
            <RouterLink :to="{ name: 'signup' }">Sign up</RouterLink>
          </p>
        </div>
      </div>
    </Form>
  </body>
</template>

