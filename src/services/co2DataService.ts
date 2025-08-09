import type { Co2Record } from '../types/co2';

export async function loadCo2Data(): Promise<Co2Record[]> {
  const res = await fetch('/co2-data.json', { cache: 'no-store' });
  if (!res.ok) throw new Error('Daten konnten nicht geladen werden');
  const data = await res.json() as Co2Record[];
  return data;
}
