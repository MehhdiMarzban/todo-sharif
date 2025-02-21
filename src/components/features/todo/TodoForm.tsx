import { useForm } from "react-hook-form";
import { format } from "date-fns-jalali";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TodoFormType, todoValidation } from "@/validations/todo";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { todoStateValues } from "@/types/Todo";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

interface TodoFormProps {
    onClose: () => void;
}
export const TodoForm: React.FC<TodoFormProps> = ({ onClose }) => {
    const form = useForm<TodoFormType>({
        resolver: zodResolver(todoValidation),
        defaultValues: {
            title: "",
            date: new Date(),
            state: "none",
        },
    });
    const handleSubmit = async () => {};

    return (
        <div className="flex flex-1 flex-col gap-3">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className="max-w-sm w-full mx-auto">
                                <FormLabel>عنوان تسک</FormLabel>
                                <FormControl>
                                    <Input placeholder="لطفا عنوان تسک را وارد کنید" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                            <FormItem className="max-w-sm w-full mx-auto">
                                <FormLabel>وضعیت تسک</FormLabel>
                                <Select
                                    dir="rtl"
                                    onValueChange={field.onChange}
                                    defaultValue={todoStateValues[0]}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="لطفا وضعیت تسک را انتخاب کنید" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {todoStateValues.map((text) => (
                                            <SelectItem key={text} value={text}>
                                                {text}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem className="flex flex-col max-w-sm w-full mx-auto">
                                <FormLabel asChild><p>زمان تسک</p></FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}>
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>انتخاب زمان تسک</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="center">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date : Date) =>
                                                date <= new Date()
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormDescription>
                                    بعد از انتخاب کردن مقادیر بالا بر دکمه زیر کلیک کنید.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
            <Button onClick={form.handleSubmit(handleSubmit)} className="mt-1">
                افزودن
            </Button>
        </div>
    );
};

export default TodoForm;

// onKeyDown={(e) => {
//     if (e.key === "Enter") handleSubmit();
// }}
