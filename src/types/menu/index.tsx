export interface IHeaderMenuItem {
  href: string;
  isActive: boolean;
  title: string;
}

export interface IProfileSidebarItem {
  id: number;
  title: string;
  href?: string;
  hasDivider?: boolean;
  icon?: React.ReactNode;
  onClick?: Function;
  badge?: number;
  isActive?: boolean;
}

export interface IListPickerItem {
  title: number | string;
  value: number | string;
}
