import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}







const showConfirmationDialog = (title, confirmationText, onConfirm) => {
  Swal.fire({
    title: title,
    text: confirmationText,
    icon: "question",
    width: "20em",
    color: "#fff",
    background: "#13131a",
    showCancelButton: true,
    confirmButtonColor: "#4acd8d",
    cancelButtonColor: "#1c1c24",
    confirmButtonText: "Yes",
    showLoaderOnConfirm: true,
    customClass: {
      cancelButton: "bordered-alert",
      popup: "bordered-alert",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm();
    } else {
      console.log("Cancelled");
    }
  });
};

const handleDeleteButton = () => {
  showConfirmationDialog(
    "Deactivate account",
    "This will permanently deactivate your account",
    () => {
      // Code to handle account deactivation
      Swal.fire({
        title: "Deactivated!",
        text: "Your account has been permanently deactivated.",
        icon: "success",
        color: "#fff",
        background: "#13131a",
        showLoaderOnConfirm: true,
        customClass: {
          popup: "bordered-alert",
        },
      });
    }
  );
};

const handleSignOutButton = () => {
  showConfirmationDialog(
    "Logout",
    "Are you sure you want to log out?",
    () => {
      // Code to handle sign out
      signOut({ callbackUrl: "/" });
    }
  );
};






import { Empty } from "@/components/ui/Empty";
export default function test() {
  return <Empty />;
}
