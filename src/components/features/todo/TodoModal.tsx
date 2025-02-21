"use client";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { PlusCircleIcon } from "lucide-react";
import { useState } from "react";
import TodoForm from "./TodoForm";
import { DialogDescription } from "@radix-ui/react-dialog";

const TriggerButton = (
    <Button className="w-full max-w-md">
        <PlusCircleIcon />
        افزودن تسک
    </Button>
);

export default () => {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const [open, setOpen] = useState(false);

    const handleAddTodo = async (task: { id: string; title: string; completed: boolean }) => {};

    return isDesktop ? (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{TriggerButton}</DialogTrigger>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>اضافه کردن تسک جدید</DialogTitle>
                </DialogHeader>
                <TodoForm onClose={() => setOpen(false)} />
                
                {/* //* to prevent aria-accessability warning error */}
                <DialogDescription></DialogDescription>
            </DialogContent>
        </Dialog>
    ) : (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>{TriggerButton}</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>اضافه کردن تسک جدید</DrawerTitle>
                </DrawerHeader>
                <div className="p-4">
                    <TodoForm onClose={() => setOpen(false)} />
                </div>

                {/* //* to prevent aria-accessability warning error */}
                <DrawerDescription></DrawerDescription>
            </DrawerContent>
        </Drawer>
    );
};
