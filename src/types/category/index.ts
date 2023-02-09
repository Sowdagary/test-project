export interface ICategory {
  children: ICategory[]
  created_at: string
  deleted_at: string | null
  description: string | null
  id: number
  meta: any
  name: string
  parent_id: null | number
  slug: string
  updated_at: string
  _lft: number
  _rgt: number
}
