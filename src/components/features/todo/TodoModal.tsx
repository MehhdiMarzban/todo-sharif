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
    withCancelButton?: boolean;
    FormRender: React.FC<{ onClose: () => void }>;
    TriggerButton: React.JSX.Element;
}

/**
 * A modal component that conditionally renders either a Dialog or a Drawer based on the screen size.
 * It uses the `useMediaQuery` hook to determine if the screen width is at least 768px.
 * 
 * @component
 * 
 * @param {TodoModalProps} props - The properties for the TodoModal component.
 * @param {string} props.title - The title to be displayed in the modal.
 * @param {boolean} [props.withCancelButton=false] - Whether to show a cancel button in the modal.
 * @param {React.FC<{ onClose: () => void }>} props.FormRender - A React component to render the form inside the modal. It receives an `onClose` function as a prop.
 * @param {React.JSX.Element} props.TriggerButton - The button element that triggers the opening of the modal.
 * 
 * @returns {JSX.Element} The rendered TodoModal component.
 */
const TodoModal: React.FC<React.PropsWithChildren<TodoModalProps>> = ({
    title = "",
    FormRender,
    TriggerButton,
    withCancelButton = false,
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
