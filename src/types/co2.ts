export interface Co2Record {
  id: string;
  entity: string;
  category: 'country' | 'company';
  sector?: string;
  year: number;
  emissions: number;
  unit: 'tCO2e';
  source?: string;
}

export type SortKey = 'entity' | 'category' | 'sector' | 'year' | 'emissions';