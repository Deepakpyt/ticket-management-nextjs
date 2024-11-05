import { Priority } from "@prisma/client";
import { Flame } from "lucide-react";
import React from "react";

interface Props {
  priority: Priority;
}

const priorityMap: Record<Priority, { lable: string; level: 1 | 2 | 3 }> = {
  LOW: { lable: "Low", level: 1 },
  MEDIUM: { lable: "Medium", level: 2 },
  HIGH: { lable: "High", level: 3 },
};

const TicketPriority = ({ priority }: Props) => {
  return (
    <div className="flex justify-between">
      <Flame
        className={`${
          priorityMap[priority].level >= 1 ? "text-red-500" : "text-muted"
        }`}
      />
      <Flame
        className={`${
          priorityMap[priority].level >= 2 ? "text-red-500" : "text-muted"
        }`}
      />
      <Flame
        className={`${
          priorityMap[priority].level >= 3 ? "text-red-500" : "text-muted"
        }`}
      />
    </div>
  );
};

export default TicketPriority;
