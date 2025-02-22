import { todoStateValues } from "@/types/Todo";
import { z } from "zod";
export const todoValidation = z.object({
    title: z
        .string({ required_error: "عنوان تسک ضروری است !" })
        .min(3, "تسک باید حداقل 3 کاراکتر باشد")
        .max(60, "تسک باید حداکثر 60 کاراکتر باشد"),
    date: z.date({ required_error: "انتخاب تاریخ تسک ضروری است !" }),
    state: z.enum(todoStateValues, { required_error: "انتخاب وضعیت تسک ضروری است !" }),
});

export type TodoFormType = z.infer<typeof todoValidation>;
