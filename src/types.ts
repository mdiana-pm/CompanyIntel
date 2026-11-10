export interface ProductItem {
  name: string;
  description: string;
}

export interface ClientProfileItem {
  targetSegment: string;
  description: string;
  examples?: string[];
}

export interface WebsiteAnalysis {
  url: string;
  headline: string;
  summary: string;
  keyHighlights: string[];
}

export interface MonetizationModel {
  summary: string;
  modelType: string;
  revenueStreams: string[];
  pricingStructure?: string;
}

export interface CompanyVitals {
  createdYear: string;
  employeeCount: string;
  headquarters: string;
  paidClients?: string;
}

export interface CompetitorItem {
  name: string;
  website?: string;
  marketShare?: string;
  sharePercent?: number;
  focusDifference: string;
}

export interface OtherMarketShare {
  percentage: string;
  sharePercent: number;
  description: string;
}

export interface MarketIntel {
  marketShare: string;
  companySharePercent?: number;
  marketPosition: string;
  competitors: CompetitorItem[];
  otherMarketShare?: OtherMarketShare;
}

export interface CompanySummaryReport {
  companyName: string;
  website: string;
  simpleExplanation: string;
  websiteAnalysis: WebsiteAnalysis;
  products: ProductItem[];
  clientProfiles: ClientProfileItem[];
  vitals: CompanyVitals;
  monetization: MonetizationModel;
  marketIntel?: MarketIntel;
  sources: Array<{ title: string; url: string }>;
}

export interface CompanyDisambiguationOption {
  id: string;
  name: string;
  website: string;
  industry: string;
  headquarters: string;
  shortDescription: string;
  foundingYear?: string;
  employeeCount?: string;
}

export interface DisambiguationResponse {
  type: 'disambiguation';
  query: string;
  message?: string;
  hasMore?: boolean;
  totalCount?: number;
  options: CompanyDisambiguationOption[];
}

export interface CompanyNotFoundResponse {
  type: 'notFound';
  query: string;
  message?: string;
}

export type ApiResponse = CompanySummaryReport | DisambiguationResponse | CompanyNotFoundResponse;

