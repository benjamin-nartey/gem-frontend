// "use client";

// import { TrendingUp } from "lucide-react";
// import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";

// export const description = "A multiple bar chart";

// const chartData = [
//   { department: "IT", employees: 186, appraiser: 80 },
//   { department: "FINANCE", employees: 305, appraiser: 200 },
//   { department: "ESTATE", employees: 237, appraiser: 120 },
//   { department: "HR", employees: 190, appraiser: 73 },
//   { department: "SPECIAL SERVICE", employees: 209, appraiser: 130 },
//   { department: "RESEARCH", employees: 214, appraiser: 140 },
// ];

// const chartConfig = {
//   employees: {
//     label: "Employees",
//     color: "hsl(var(--chart-1))",
//   },
//   appraiser: {
//     label: "appraiser",
//     color: "hsl(var(--chart-2))",
//   },
// } satisfies ChartConfig;

// export function BarchartComponent() {
//   return (
//     <Card className="w-full shadow-md">
//       <CardHeader>
//         <CardTitle>Appraisal Chart</CardTitle>
//         <CardDescription>January - June 2024</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ChartContainer config={chartConfig}>
//           <BarChart accessibilityLayer data={chartData}>
//             <CartesianGrid vertical={false} />
//             <XAxis
//               dataKey="department"
//               tickLine={false}
//               tickMargin={10}
//               axisLine={false}
//               tickFormatter={(value) => value}
//             />
//             <ChartTooltip
//               cursor={false}
//               content={
//                 <ChartTooltipContent
//                   className="bg-primary text-white"
//                   indicator="dashed"
//                 />
//               }
//             />
//             <Bar dataKey="employees" fill="var(--color-employees)" radius={4} />
//             <Bar dataKey="appraiser" fill="var(--color-appraiser)" radius={4} />
//           </BarChart>
//         </ChartContainer>
//       </CardContent>
//       <CardFooter className="flex-col items-start gap-2 text-sm">
//         <div className="flex gap-2 font-medium leading-none">
//           5.2% Appraiser completed this month <TrendingUp className="h-4 w-4" />
//         </div>
//         <div className="leading-none text-muted-foreground">
//           Showing total appraisers for the last 6 months
//         </div>
//       </CardFooter>
//     </Card>
//   );
// }

"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

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
  { month: "january", attendance: 275, fill: "var(--color-january)" },
  { month: "february", attendance: 200, fill: "var(--color-february)" },
  { month: "march", attendance: 187, fill: "var(--color-march)" },
  { month: "april", attendance: 173, fill: "var(--color-april)" },
  { month: "may", attendance: 90, fill: "var(--color-may)" },
];

const chartConfig = {
  attendance: {
    label: "Attendance",
  },
  january: {
    label: "January",
    color: "hsl(var(--chart-1))",
  },
  february: {
    label: "February",
    color: "hsl(var(--chart-2))",
  },
  march: {
    label: "March",
    color: "hsl(var(--chart-3))",
  },
  april: {
    label: "April",
    color: "hsl(var(--chart-4))",
  },
  may: {
    label: "May",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function BarchartComponent() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Attendance Chart</CardTitle>
        <CardDescription>January - May 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="attendance" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="attendance" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total attendance for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
