"use client";

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

const Signin: React.FC = () => {
    const form = useForm<AuthType>({
        resolver: zodResolver(authValidation),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const onSubmit = (values: AuthType) => {
        console.log(values);
    };

    return (
        <Card className="rounded-t-none">
            <CardHeader className="text-center">
                <CardTitle>ورود کاربر</CardTitle>
                <CardDescription>
                    خوش آمدید، لطفا مشخصات خود را وارد نمایید 
                </CardDescription>
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
                    ورود
                </Button>
            </CardFooter>
        </Card>
    );
};

export default Signin;

