export interface INotification {
  created_at: string;
  description: string;
  event: string;
  href: string | null;
  id: string;
  notifiable_id: number;
  notifiable_type: string;
  title: string;
  updated_at: string;
}