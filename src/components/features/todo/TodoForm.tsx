import { useForm } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns-jalali";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
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
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import useAppStore from "@/stores/AppState";

interface TodoFormProps {
    onClose?: () => void;
}

/**
 * TodoForm component allows users to add a new todo item with a title, state, and date.
 * It uses react-hook-form for form handling and validation with zod.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Function} [props.onClose] - Optional callback function to be called when the form is closed
 * 
 * @returns {JSX.Element} The rendered TodoForm component
 * 
 * @example
 * <TodoForm onClose={() => console.log('Form closed')} />
 */
export const TodoForm: React.FC<TodoFormProps> = ({ onClose }) => {
    const form = useForm<TodoFormType>({
        resolver: zodResolver(todoValidation),
        defaultValues: {
            title: "",
            date: new Date(),
            state: todoStateValues[0],
        },
    });

    const addTodo = useAppStore(state => state.addTodo);

    const onSubmit = (values: TodoFormType) => {
        addTodo(values);
        onClose?.();
    };

    return (
        <div className="flex flex-1 flex-col gap-3">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
                                <FormLabel asChild>
                                    <p>زمان تسک</p>
                                </FormLabel>
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
                                            disabled={(date: Date) => date <= new Date()}
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
            <Button onClick={form.handleSubmit(onSubmit)} className="mt-1">
                افزودن
            </Button>
        </div>
    );
};

export default TodoForm;
