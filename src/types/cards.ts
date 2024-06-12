export type Card = {
  company: Company;
  customerMarkParameters: CustomerMarkParameters;
  mobileAppDashboard: MobileAppDashboard;
};

type Company = {
  companyId: string;
};

type CustomerMarkParameters = {
  loyaltyLevel: LoyaltyLevel;
  mark: number;
};

type LoyaltyLevel = {
  number: number;
  name: string;
  requiredSum: number;
  markToCash: number;
  cashToMark: number;
};

type MobileAppDashboard = {
  companyName: string;
  logo: string;
  backgroundColor: string;
  mainColor: string;
  cardBackgroundColor: string;
  textColor: string;
  highlightTextColor: string;
  accentColor: string;
};

export type Cards = Card[];
