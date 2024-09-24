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
import { loginSchema } from "@/lib/shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useToast } from "./ui/use-toast";
import { useLoginMutation } from "@/store/api";
import { useAppDispatch } from "@/store/store";
import { setAuthData } from "@/store/slice";
import { Spinner } from "./ui/spinner";

const LoginForm = () => {
  const { toast } = useToast();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      const data = await login(values).unwrap();
      dispatch(setAuthData(data));
      form.reset();
      navigate("/challenges");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: error.data.errors[""][0],
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <h2 className="text-3xl text-center mb-5">Sign in</h2>

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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-center items-center">
          <Button type="submit" size="lg" className="">
            {isLoading ? <Spinner /> : "Login"}
          </Button>
        </div>
        <p className="text-center text-xl mt-5">
          Don't have an account?
          <Link className="text-primary text-xl ml-2" to="/register">
            Sign up
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default LoginForm;
