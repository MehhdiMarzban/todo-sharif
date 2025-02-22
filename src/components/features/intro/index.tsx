import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";

/**
 * The `Intro` component is a React functional component that serves as an introduction section
 * for a task management application built with Next.js 15 and TailwindCSS. It displays a heading,
 * a descriptive paragraph, and a button linking to the source code on GitHub.
 *
 * @returns {JSX.Element} A JSX element containing the introduction section.
 */
const Intro: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 text-center w-full animate-in fade-in zoom-in">
            <h1 className="max-w-4xl font-black text-2xl/snug md:text-4xl/snug lg:text-6xl/snug">
                یک <span className="text-primary">مدیریت کننده تسک </span> که با Next.js 15 و
                TailwindCss ساخته شده
            </h1>
            <p className="mx-auto max-w-2xl text-balance text-muted-foreground text-sm lg:text-lg">
                یک اپلیکیشن مدیریت تسک سریع و کم حجم که با Next.js 15 و TailwindCss ساخته شده برای
                سازماندهی بی‌دردسر تسک‌ها.
            </p>
            <p className="mt-2 mx-auto max-w-2xl text-balance text-muted-foreground text-sm lg:text-lg underline underline-offset-8">
                لطفا برای استفاده از اپلیکیشن ابتدا ورود یا ثبت نام کنید
            </p>
            <Button asChild className="mt-4 rounded-full" variant={"outline"}>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/MehhdiMarzban/todo-sharif">
                    <RocketIcon />
                    سورس کد
                </a>
            </Button>
        </div>
    );
};

export default Intro;
