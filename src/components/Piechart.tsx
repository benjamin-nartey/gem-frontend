"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { residence: "akuafo", visitors: 275, fill: "var(--color-akuafo)" },
  { residence: "limann", visitors: 200, fill: "var(--color-limann)" },
  { residence: "pent", visitors: 287, fill: "var(--color-pent)" },
  { residence: "sarbah", visitors: 173, fill: "var(--color-sarbah)" },
  {
    residence: "elizabethSey",
    visitors: 190,
    fill: "var(--color-elizabethSey)",
  },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  akuafo: {
    label: "Akuafo",
    color: "hsl(var(--chart-1))",
  },
  limann: {
    label: "Limann",
    color: "hsl(var(--chart-2))",
  },
  pent: {
    label: "Pent",
    color: "hsl(var(--chart-3))",
  },
  sarbah: {
    label: "Mensah-Sarbah",
    color: "hsl(var(--chart-4))",
  },
  elizabethSey: {
    label: "Elizabeth Sey",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function PiechartComponent() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card className="flex flex-col w-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Visitors Chart</CardTitle>
        <CardDescription>January - May 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="residence"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
