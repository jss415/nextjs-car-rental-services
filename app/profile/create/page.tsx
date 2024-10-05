import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CiUser } from "react-icons/ci";
import { createProfileAction } from "@/lib/actions/createProfileAction";
import FormContainer from "@/components/Form/FormContainer";
import InputForm from "@/components/Form/InputForm";
import SubmitButton from "@/components/Form/SubmitButton";

export default function CreateProfilePage() {
  return (
    <section className="mx-auto flex flex-col gap-4">
      <>
        <h1 className="text-3xl font-bold">Create your profile</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage your personal information, and account.
        </p>
      </>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>
            Enter your name, email, and username.
          </CardDescription>
        </CardHeader>
        <FormContainer action={createProfileAction}>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <InputForm type="text" name="firstName" label="First Name" />
              <InputForm type="text" name="lastName" label="Last Name" />
              <InputForm type="text" name="username" label="Username" />
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton text="Create Profile" />
          </CardFooter>
        </FormContainer>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Account Deletion</CardTitle>
          <CardDescription>Delete your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <InputForm type="text" name="password" label="Password" />
            <InputForm
              type="text"
              name="passwordConfirm"
              label="Confirm your password"
            />
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton text="Delete profile" variant="destructive" />
        </CardFooter>
      </Card>
    </section>
  );
}
