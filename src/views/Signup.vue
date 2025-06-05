<script setup lang="ts">
import { ref } from "vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import { z } from "zod";
import { Form, ErrorMessage } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { Button } from "../components/ui/button";
import { FormControl, Input, Label } from "../components/ui/Form";
import { RouterLink } from "vue-router";
import Card from "../components/ui/Card/Card.vue";
import { signUp } from "../database/database";
import { useRouter } from "vue-router";
import { type FormActions } from "vee-validate";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { Loader2 } from "lucide-vue-next";

const loading = ref(false);

const router = useRouter();

const schema = toTypedSchema(
  z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
  }),
);

async function onSubmit(values: any, { resetForm }: FormActions<any>) {
  if (loading.value) return;
  console.log("submitting");
  loading.value = true;
  try {
    const signUpData = await signUp(values.email, values.password);
    console.log(signUpData);
    router.push({ name: "home" });
  } catch (error) {
    if (error instanceof Error) {
      toast.error(`${error.message}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 5000,
      });
      console.error(error.message, "This is from Signup page");
    }
    resetForm();
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <AuthLayout>
    <template #header>Sign up to JamForge</template>
    <Form novalidate @submit="onSubmit">
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

        <Button
          type="submit"
          :disabled="loading"
          :class="{
            'opacity-50 cursor-not-allowed': loading,
          }"
        >
          <span
            v-if="loading"
            class="flex justify-center items-center gap-2"
          >
            <Loader2 class="w-4 h-4 mr-2 animate-spin" />
            Please wait
          </span>
          <span v-else> Sign up </span>
        </Button>

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
