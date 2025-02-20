import { z } from 'zod';

export const authValidation = z.object({
    username: z.string().min(3, "نام کاربری باید حداقل 3 کاراکتر باشد").max(20, "نام کاربری باید حداکثر 20 کاراکتر باشد"),
    password: z.string().min(6, "رمز عبور باید حداقل 6 کاراکتر باشد").max(20, "رمز عبور باید حداکثر 20 کاراکتر باشد"),
});

type AuthType = z.infer<typeof authValidation>;