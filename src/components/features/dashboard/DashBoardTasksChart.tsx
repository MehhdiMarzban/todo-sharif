"use client";

import {
    PieChart,
    Pie,
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";
import { Todo } from "@/types";
import { todoStateValues } from "@/types/Todo";

const COLORS = [
    "#f59e0b", // در انتظار (نارنجی)
    "#3b82f6", // در حال انجام (آبی)
    "#10b981", // تکمیل شده (سبز)
];

interface DashBoardTasksChartProps {
    todos: Todo[];
}

/**
 * DashBoardTasksChart component displays a pie chart and a bar chart
 * representing the distribution of tasks based on their states.
 *
 * @param {DashBoardTasksChartProps} props - The props for the component.
 * @param {Todo[]} props.todos - An array of Todo objects representing the tasks.
 *
 * @returns {JSX.Element} The rendered DashBoardTasksChart component.
 *
 * @component
 *
 * @example
 * const todos = [
 *   { id: 1, state: 'در انتظار', title: 'Task 1' },
 *   { id: 2, state: 'در حال انجام', title: 'Task 2' },
 *   { id: 3, state: 'تکمیل شده', title: 'Task 3' },
 * ];
 * 
 * <DashBoardTasksChart todos={todos} />
 */
const DashBoardTasksChart : React.FC<DashBoardTasksChartProps> = ({ todos }) => {
    // process data
    const countData = todoStateValues.map((state) => ({
        name: state,
        value: todos.filter((todo) => todo.state === state).length,
    }));

    return (
        <Card className="col-span-full p-6 bg-background/80 backdrop-blur-md border border-secondary dark:border-gray-800/50 shadow max-w-2xl w-full">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="bg-primary/10 p-2 rounded-lg">📊</span>
                آمار وضعیت تسک‌ها
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 h-100 md:h-50 w-full">
                <div className="h-50">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={countData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                animationDuration={800}>
                                {countData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                        stroke={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    background: "hsl(var(--background))",
                                    borderColor: "hsl(var(--border))",
                                    borderRadius: "var(--radius)",
                                }}
                                itemStyle={{ color: "hsl(var(--foreground))" }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* bars */}
                <div className="h-50 w-full flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={countData}>
                            <XAxis
                                dataKey="name"
                                stroke="hsl(var(--foreground))"
                                tickLine={{ stroke: "hsl(var(--border))" }}
                            />
                            <YAxis
                                stroke="hsl(var(--foreground))"
                                tickLine={{ stroke: "hsl(var(--border))" }}
                            />
                            <Tooltip
                                contentStyle={{
                                    background: "hsl(var(--background))",
                                    borderColor: "hsl(var(--border))",
                                    borderRadius: "var(--radius)",
                                }}
                                itemStyle={{ color: "hsl(var(--foreground))" }}
                            />
                            <Bar dataKey="value" radius={[4, 4, 0, 0]} animationDuration={800}>
                                {countData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/*  colors menu */}
            <div className="flex flex-wrap gap-4 mt-6 justify-center">
                {todoStateValues.map((state, index) => (
                    <div key={state} className="flex items-center gap-2">
                        <span
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: COLORS[index] }}
                        />
                        <span className="text-sm text-muted-foreground">{state}</span>
                    </div>
                ))}
            </div>
        </Card>
    );
}

export default DashBoardTasksChart;