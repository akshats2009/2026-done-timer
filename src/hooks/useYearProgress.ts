import { useState, useEffect } from "react";
import { getYearProgress, type YearProgressData } from "@/utils/yearProgress";

export function useYearProgress(intervalMs = 1000): YearProgressData {
  const [data, setData] = useState<YearProgressData>(() => getYearProgress());

  useEffect(() => {
    const id = setInterval(() => {
      setData(getYearProgress());
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return data;
}
