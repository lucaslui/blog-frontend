export type CategoryModel = {
  id: string
  name: string
  description: string
  imageUrl: string
  categoryParentId: string
  children: CategoryModel[]
}
