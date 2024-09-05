import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/lib/shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "./ui/use-toast";

const RegisterForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    console.log(values);
    toast({
      variant: "default",
      title: "You've successfully registered!",
      description: "Check your email for verification link.",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your username"
                  className=""
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-center items-center">
          <Button type="submit" size="lg">
            Register
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
