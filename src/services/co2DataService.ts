import type { Co2Record } from "../types/co2";

//Lädt fiktive CO2-Daten, welche erstellt wurden mit ChatGPT-5 (2025)
export async function loadCo2Data(): Promise<Co2Record[]> {
  const result = await fetch("/co2-data.json", { cache: "no-store" });
  if (!result.ok) throw new Error("Daten konnten nicht geladen werden");
  const data = (await result.json()) as Co2Record[];
  return data;
}
