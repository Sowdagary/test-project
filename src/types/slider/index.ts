import { SwiperProps } from "swiper/react";

export interface ISliderProps {
  options?: SwiperProps;
  children: React.ReactNode;
}
export interface ISliderMedia {
  id: number;
  model_type: string;
  model_id: number;
  uuid: string;
  collection_name: string;
  name: string;
  file_name: string;
  mime_type: string;
  disk: string;
  conversions_disk: string;
  size: number;
  manipulations: any[];
  custom_properties: any[];
  generated_conversions: any[];
  responsive_images: any[];
  order_column: number;
  created_at: string;
  updated_at: string;
  original_url: string;
  preview_url: string;
}
export interface ISliderItems {
  id: number;
  title: string;
  href: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  image: string;
  media?: ISliderMedia[];
}
