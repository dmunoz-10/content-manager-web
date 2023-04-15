export type resourcesType = {
  id: string
  title: string
  description: string
  link: string
  image: string
  priority: number
  timeToFinish: number
  active: boolean
  createdAt: string
}

export const resources: resourcesType[] = [
  {
    id: "1",
    title: "Learning Singleton Pattern",
    description: "I would like to learn singleton in JS language, it's important for my work",
    link: "https://link.com",
    image: "https://image.com",
    priority: 3,
    timeToFinish: 120,
    active: true,
    createdAt: "November 22, 2022",
  },
  {
    id: "2",
    title: "Resource 2",
    description: "Resource 2 Desc",
    link: "https://link.com",
    image: "https://image.com",
    priority: 3,
    timeToFinish: 60,
    active: false,
    createdAt: "December 18, 2022",
  },
  {
    id: "3",
    title: "Resource 3",
    description: "Resource 3 Desc",
    link: "https://link.com",
    image: "https://image.com",
    priority: 3,
    timeToFinish: 30,
    active: false,
    createdAt: "March 10, 2023",
  },
]
