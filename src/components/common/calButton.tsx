"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

type CalButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function CalButton({
  children,
  className = "",
  onClick,
}: CalButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "schedule" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      type="button"
      data-cal-namespace="schedule"
      data-cal-link="sachin-sureka-rl4esy/schedule"
      data-cal-config='{"layout":"month_view"}'
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}
