export interface User {
  id: number
  name: string
  email: string
  phone: string
}

export const usersData: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 123-4789",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@email.com",
    phone: "+1 123-4567",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@mail.com",
    phone: "+1 123-4567",
  },
  {
    id: 4,
    name: "Lisa Brown",
    email: "lisa.brown@mail.com",
    phone: "+1 123-4567",
  },
  {
    id: 5,
    name: "James Wilson",
    email: "james.wilson@mail.com",
    phone: "+1 123-4567",
  },
  {
    id: 6,
    name: "James Wilson",
    email: "james.wilson@mail.com",
    phone: "+1 123-4567",
  },
  {
    id: 7,
    name: "James Wilson",
    email: "james.wilson@mail.com",
    phone: "+1 123-4567",
  },
  {
    id: 8,
    name: "James Wilson",
    email: "james.wilson@mail.com",
    phone: "+1 123-4567",
  },
]

export interface Robot {
  id: number
  serialNumber: string
}

export const robotsData: Robot[] = [
  {
    id: 1,
    serialNumber: "RB10001",
  },
  {
    id: 2,
    serialNumber: "RB10002",
  },
  {
    id: 3,
    serialNumber: "RB10003",
  },
]
