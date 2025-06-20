// import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart"
import { SAMPLE_ORDER_STATUS, utilityColours } from "../../../utils/constants"
const chartData = SAMPLE_ORDER_STATUS.map((status) => {
    return {
        status: status.type, visitors: 500, fill: utilityColours[Math.round(Math.random() * utilityColours.length - 1)]      
    }
}); 

[
  { status: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { status: "safari", visitors: 200, fill: "var(--color-safari)" },
  { status: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { status: "edge", visitors: 173, fill: "var(--color-edge)" },
  { status: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  status: {
    label: "Staus",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function OrdersChart() {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Order status</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
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
              nameKey="status"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  )
}
