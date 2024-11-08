"use client";

import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Status } from "@prisma/client";

interface dataElement {
  name: Status;
  total: number;
}

interface dataProps {
  data: dataElement[];
}

const DashChart = ({ data }: dataProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Tickets</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width={"100%"} height={360}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Bar dataKey={"total"} fill="#60A5FA" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default DashChart;
