import { z } from "zod";

//* regex for english text with number and common symbols
const englishPattern = /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]+$/;

export const authValidation = z.object({
    username: z
        .string()
        .min(3, "نام کاربری باید حداقل 3 کاراکتر باشد")
        .max(20, "نام کاربری باید حداکثر 20 کاراکتر باشد")
        .regex(englishPattern, "متن فقط میتواند شامل حروف انگلیسی، اعداد و نمادهای معمولی باشد"),
    password: z
        .string()
        .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد")
        .max(20, "رمز عبور باید حداکثر 20 کاراکتر باشد")
        .regex(englishPattern, "متن فقط میتواند شامل حروف انگلیسی، اعداد و نمادهای معمولی باشد"),
});

export type AuthType = z.infer<typeof authValidation>;
