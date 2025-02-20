"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AuthType, authValidation } from "@/validations/auth";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
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
import useUserStore from "@/stores/UserState";

/**
 * Signup component renders a user sign-up form using `react-hook-form`.
 * It validates the input data with Zod schema and handles user sign-up
 * using the `signupUser` function from `useUserStore`.
 * 
 * The form includes fields for username and password, and upon successful
 * sign-up, the user is redirected to the home page. Displays input validation
 * messages and uses Next.js router for navigation.
 */
const Signup: React.FC = () => {
    const form = useForm<AuthType>({
        resolver: zodResolver(authValidation),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const { signupUser } = useUserStore();
    const router = useRouter();

    const onSubmit = (values: AuthType) => {
        try {
            //* sign up and redirect to home page
            const isSuccess = signupUser(values);
            if (isSuccess) {
                router.replace("/");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Card className="rounded-t-none">
            <CardHeader className="text-center">
                <CardTitle>ثبت نام کاربر جدید</CardTitle>
                <CardDescription>لطفا اطلاعات خود را وارد نمایید</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem className="max-w-sm w-full mx-auto">
                                    <FormLabel>نام کاربری</FormLabel>
                                    <FormControl>
                                        <Input
                                            dir="ltr"
                                            className="text-center"
                                            placeholder="نام کاربری"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="max-w-sm w-full mx-auto">
                                    <FormLabel>رمز عبور</FormLabel>
                                    <FormControl>
                                        <Input
                                            dir="ltr"
                                            className="text-center"
                                            placeholder="رمزعبور"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
            </CardContent>
            <CardFooter>
                <Button
                    variant={"default"}
                    type="submit"
                    className="max-w-sm w-full mx-auto"
                    onClick={form.handleSubmit(onSubmit)}>
                    ثبت نام
                </Button>
            </CardFooter>
        </Card>
    );
};

export default Signup;
