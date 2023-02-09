export interface IUser {
  avatar: string;
  created_at?: string;
  deleted_at?: null | string;
  email?: string;
  email_verified_at?: null | string;
  first_name: string;
  foodiecoin_quantity?: number;
  id: number;
  last_name: string;
  roles?: any[];
  updated_at?: string;
}

export interface IChef {
  avatar: string;
  banned_at: null | string | boolean;
  created_at: string;
  currency: string;
  deleted_at: null | string | boolean;
  email: string;
  email_verified_at: null | string | boolean;
  first_name: string;
  foodiecoin_quantity: string | number;
  formatted_foodiecoin_quantity: number | string;
  full_name: string;
  google_id: null | string | number;
  id: number;
  last_foodiecoin_earnings: string;
  last_name: string;
  meta: null | string | number;
  referral_code: string;
  referrer_id: null | string | number;
  roles: any[];
  updated_at: string;
}
export interface IRolesChef {
  guard_name: string;
  name: string;
  permissions?: IRolesChef[];
}
