"use client";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { todoStateValues } from "@/types/Todo";
import { CheckIcon, FilterIcon } from "lucide-react";
import { useQueryState } from "nuqs";
import { type MouseEvent, useState } from "react";

export const TodoFilter: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useQueryState("filter");

    const handleFilter = (e: MouseEvent<HTMLButtonElement>) => {
        const { name } = e.currentTarget;
        if (filter === name) {
            setFilter(null);
            return setOpen(false);
        }
        setFilter(name);
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="secondary" size="sm">
                    <FilterIcon />
                    <span className="hidden md:flex">فیلتر</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-fit p-1">
                <div className="flex flex-col gap-2">
                    {todoStateValues.map((filterOption) => (
                        <Button
                            size="sm"
                            variant="ghost"
                            key={filterOption}
                            name={filterOption}
                            onClick={handleFilter}
                            className="justify-between">
                            {filterOption}
                            <CheckIcon
                                className={cn(
                                    filter === filterOption ? "text-primary" : "text-transparent"
                                )}
                            />
                        </Button>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default TodoFilter;
