export interface IWallet {
  created_at: string;
  currency: string;
  deleted_at: null | string;
  formatted_qua: string;
  id: number;
  quantity: string;
  status: string;
  updated_at: string;
  user_id: number;
}

export interface IPayment {
  callback_url: string;
  created_at: string;
  formatted_qua: string;
  id: string;
  quantity: string;
  status: string;
  type: string;
  updated_at: string;
  wallet: IWallet;
  wallet_id: number;
}

export interface ICheckout {
  gateway_url: string;
}
