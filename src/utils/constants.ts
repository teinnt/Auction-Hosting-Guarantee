interface InputField {
  type: 'email' | 'password' | 'text'
  placeholder: string
}

const login: InputField[] = [
  {
    type: 'email',
    placeholder: 'Email',
  },
  {
    type: 'password',
    placeholder: 'Password',
  },
]

const userRegister: InputField[] = [
  {
    type: 'email',
    placeholder: 'Email',
  },
  {
    type: 'password',
    placeholder: 'Password',
  },
  {
    type: 'password',
    placeholder: 'ConfirmPassword',
  },
]

const companyRegister: InputField[] = [
  {
    type: 'text',
    placeholder: 'Company Name',
  },
  {
    type: 'text',
    placeholder: 'ISIN',
  },
  {
    type: 'text',
    placeholder: 'Contact Number',
  },
  {
    type: 'text',
    placeholder: 'Address Number',
  },
  {
    type: 'text',
    placeholder: 'Street Name',
  },
  {
    type: 'text',
    placeholder: 'City',
  },
  {
    type: 'text',
    placeholder: 'Zip Code',
  },
  {
    type: 'text',
    placeholder: 'State',
  },
  {
    type: 'text',
    placeholder: 'Country',
  },
  {
    type: 'text',
    placeholder: 'Wallet Address',
  },
  {
    type: 'text',
    placeholder: 'Representative Name',
  },
  {
    type: 'text',
    placeholder: 'Representative Email',
  },
  {
    type: 'text',
    placeholder: 'Representative Image',
  },
  {
    type: 'text',
    placeholder: 'Representative Phone Number',
  },
  {
    type: 'text',
    placeholder: 'Launch On',
  },
  {
    type: 'email',
    placeholder: 'Company Email',
  },
  {
    type: 'password',
    placeholder: 'Password',
  },
  {
    type: 'password',
    placeholder: 'Confirm Password',
  },
]

const auctionStartTime = ['10:00 AM', '3:00 PM', '7:00PM', '11:00 PM']

export { login, userRegister, companyRegister, auctionStartTime }
