export type ResourceData = {
  id: string
  title: string
  description: string
  link: string
  priority: number
  timeToFinish: number
  status: string
  createdAt: string
}

export type ResourceDataForm = {
  title: string
  description: string
  link: string
  priority: number
  timeToFinish: number
}
