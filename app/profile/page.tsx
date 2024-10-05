import FormContainer from "@/components/Form/FormContainer";
import InputForm from "@/components/Form/InputForm";
import InputImageContainer from "@/components/Form/InputImageContainer";
import SubmitButton from "@/components/Form/SubmitButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getUserProfile } from "@/lib/actions/getUserProfile";
import { updateProfileAction } from "@/lib/actions/updateProfileAction";
import { uploadProfileImageAction } from "@/lib/actions/uploadProfileImageAction";

export const updateImageAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  "use server";
  return { message: "update profile action" };
};

export default async function ProfilePage() {
  const profile = await getUserProfile();

  return (
    <section className="mx-auto flex flex-col gap-4">
      <>
        <h1 className="text-3xl font-bold">Update your profile</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage your personal information, account, and profile picture.
        </p>
      </>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>
            Update your name, email, and username.
          </CardDescription>
        </CardHeader>
        <FormContainer action={updateProfileAction}>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <InputForm
                type="text"
                name="firstName"
                label="First Name"
                defaultValue={profile?.firstName}
              />
              <InputForm
                type="text"
                name="lastName"
                label="Last Name"
                defaultValue={profile?.lastName}
              />
              <InputForm
                type="text"
                name="username"
                label="Username"
                defaultValue={profile?.username}
              />
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton text="Create Profile" />
          </CardFooter>
        </FormContainer>
        <CardHeader>
          <CardTitle>Profile Picture</CardTitle>
          <CardDescription>Update your profile picture.</CardDescription>
        </CardHeader>
        <CardContent>
          <InputImageContainer
            image={profile?.profileImage}
            action={uploadProfileImageAction}
          />
        </CardContent>
      </Card>
    </section>
  );
}
