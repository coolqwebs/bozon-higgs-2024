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
import { register } from "@/lib/queries";
import { useMutation } from "@tanstack/react-query";
import { Spinner } from "./ui/spinner";

const RegisterForm = () => {
  const mutation = useMutation({
    mutationFn: register,
  });
  const { toast } = useToast();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      userName: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    const data = await mutation.mutateAsync(values);
    if (data.errors) {
      toast({
        variant: "destructive",
        title: "Oops, something went wrong",
        description: data.errors[""][0],
      });
      return;
    }
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
          name="userName"
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
            {mutation.isPending ? <Spinner /> : "Register"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
