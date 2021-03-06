export interface IVisaFraudReport {
  id: number;
  acquirer_business_id: string;
  issuer_generated_authorization: string;
  market_segment_code: string;
  locator_number: string;
  case_number: string;
  arrest_code: string;
  mailed_from_postal_code: string;
  transaction_identifier: string;
  excluded_transaction_identifier_reason: string;
  card_number: string;
  acquirer_reference: string;
  purchase_date: Date;
  descriptor: string;
  merchant_name: string;
  merchant_city: string;
  merchant_country_code: string;
  merchant_category_code: string;
  merchant_state: string;
  amount: number;
  currency: string;
  vic_processing_date: string;
  notification_code: string;
  account_sequence_number: string;
  fraud_type_code: string;
  card_expiration_date: string;
  merchant_postal_code: string;
  fraud_investigative_code: string;
  reimbursement_attribute: string;
  cardholder_postal_code: string;
  social_security_number: string;
  cardholder_last_name: string;
  cardholder_first_name: string;
  cardholder_middle_initial: string;
  cardholder_address2: string;
  cardholder_address1: string;
  cardholder_city: string;
  cardholder_state: string;
  telephone_number: string;
  card_valid_from: string;
  multiple_clearing_sequence_number: string;
  card_acceptor_id: string;
  terminal_id: string;
  travel_agency_id: string;
  cashback_indicator: string;
  authorization_code: string;
  cardholder_id_method_used: string;
  pos_entry_method: string;
  pos_terminal_capability: string;
  card_capability: string;
  cashback_amount: string;
  carholder_activated_terminal_indicator: string;
  commerce_indicator: string;
  card_mailing_date: Date;
  card_mailing_city: string;
  card_mailing_state: string;
  payment_brand: string;
  processed_transaction_id: number;
  merchant_id: number;
  created_at: Date;
  updated_at: Date;
}
