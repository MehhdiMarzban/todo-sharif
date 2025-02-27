"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const ErrorPage: React.FC<{ error: Error & { digest?: string }; reset: () => void }> = ({
    error,
    reset,
}) => {
    return (
        <html>
            <body>
                <div className="flex justify-center items-center min-h-screen">
                    <Card className="text-center max-w-lg w-full">
                        <CardHeader>
                            <h1 className="text-base sm:text-lg md:text-xl font-bold">
                                متاسفانه مشکلی در اجرای برنامه پیش آمده
                            </h1>
                        </CardHeader>
                        <CardContent>
                            <h2 className="text-base md:text-lg">{error.message}</h2>
                        </CardContent>
                        <CardFooter>
                            <Button
                                variant={"default"}
                                className="max-w-sm w-full mx-auto
                "
                                onClick={reset}>
                                تلاش مجدد
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </body>
        </html>
    );
};

export default ErrorPage;
