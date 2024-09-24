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
import { Spinner } from "./ui/spinner";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "@/store/api";

const RegisterForm = () => {
  const { toast } = useToast();
  const [register, { isLoading }] = useRegisterMutation();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      userName: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    try {
      await register(values).unwrap();
      toast({
        variant: "default",
        title: "You've successfully registered!",
        description: "Check your email for next steps.",
      });
      form.reset();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: error.data.errors[""][0],
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <h2 className="text-3xl text-center mb-5">Sign up</h2>
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
            {isLoading ? <Spinner /> : "Register"}
          </Button>
        </div>

        <p className="text-center text-xl mt-5">
          Already have an account?
          <Link className="text-primary text-xl ml-2" to={"/login"}>
            Sign in
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default RegisterForm;
