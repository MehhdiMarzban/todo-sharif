"use client";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
} from "@/components/ui/dialog";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";

interface TodoModalProps {
    title: string;
    withCancelButton: boolean;
    FormRender: React.FC<{ onClose: () => void }>;
    TriggerButton: React.JSX.Element;
}
const TodoModal: React.FC<React.PropsWithChildren<TodoModalProps>> = ({
    title = "",
    FormRender,
    TriggerButton,
    withCancelButton,
}) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const [open, setOpen] = useState(false);

    return isDesktop ? (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{TriggerButton}</DialogTrigger>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <FormRender onClose={() => setOpen(false)} />
                {withCancelButton && (
                    <DialogClose asChild>
                        <Button className="max-w-sm w-full mx-auto" variant={"secondary"}>
                            لغو
                        </Button>
                    </DialogClose>
                )}
                {/* //* to prevent aria-accessability warning error */}
                <DialogDescription></DialogDescription>
            </DialogContent>
        </Dialog>
    ) : (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>{TriggerButton}</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>{title}</DrawerTitle>
                </DrawerHeader>
                <div className="p-4 space-y-2">
                    <FormRender onClose={() => setOpen(false)} />
                    {withCancelButton && (
                        <DrawerClose asChild>
                            <Button className="max-w-sm w-full mx-auto" variant={"secondary"}>
                                لغو
                            </Button>
                        </DrawerClose>
                    )}
                </div>

                {/* //* to prevent aria-accessability warning error */}
                <DrawerDescription></DrawerDescription>
            </DrawerContent>
        </Drawer>
    );
};

export default TodoModal;
