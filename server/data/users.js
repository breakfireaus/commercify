import bcrypt from 'bcrypt'

const users = [
  {
    userName: 'Admin',
    userEmail: 'admin@test.com',
    userPassword: bcrypt.hashSync('123456', 10),
    userAdmin: true,
  },
  {
    userName: 'Sarah Florence',
    userEmail: 'sarah@test.com',
    userPassword: bcrypt.hashSync('123456', 10),
  },
  {
    userName: 'Matthew Younger',
    userEmail: 'matthew@test.com',
    userPassword: bcrypt.hashSync('123456', 10),
  },
]

export default users
