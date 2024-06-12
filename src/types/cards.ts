export type TCard = {
  company: TCompany;
  customerMarkParameters: TCustomerMarkParameters;
  mobileAppDashboard: TMobileAppDashboard;
};

export type TCompany = {
  companyId: string;
};

export type TCustomerMarkParameters = {
  loyaltyLevel: TLoyaltyLevel;
  mark: number;
};

export type TLoyaltyLevel = {
  number: number;
  name: string;
  requiredSum: number;
  markToCash: number;
  cashToMark: number;
};

export type TMobileAppDashboard = {
  companyName: string;
  logo: string;
  backgroundColor: string;
  mainColor: string;
  cardBackgroundColor: string;
  textColor: string;
  highlightTextColor: string;
  accentColor: string;
};

export type TCards = TCard[];
