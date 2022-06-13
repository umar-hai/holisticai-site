import * as React from "react";
import WidgetCard from "../widget-card";

export default function UseCaseClient({ children }) {
  return (
    <WidgetCard>
      <div className="flex items-center justify-center h-full">{children}</div>
    </WidgetCard>
  );
}
