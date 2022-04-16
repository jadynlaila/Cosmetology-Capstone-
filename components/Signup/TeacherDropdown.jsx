import React from 'react'
import { Dropdown } from 'semantic-ui-react'


//* use this as template to map
const friendOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: '/defaultAvatar.jpg' },
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: { avatar: true, src: '/defaultAvatar.jpg' },
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: { avatar: true, src: '/defaultAvatar.jpg' },
  },
  {
    key: 'Christian',
    text: 'Christian',
    value: 'Christian',
    image: { avatar: true, src: '/defaultAvatar.jpg' },
  },
  {
    key: 'Matt',
    text: 'Matt',
    value: 'Matt',
    image: { avatar: true, src: '/defaultAvatar.jpg' },
  },
  {
    key: 'Justen Kitsune',
    text: 'Justen Kitsune',
    value: 'Justen Kitsune',
    image: { avatar: true, src: '/defaultAvatar.jpg' },
  },
]

const TeacherDropdown = () => (
  <Dropdown
    placeholder='Select Teacher'
    fluid
    selection
    options={friendOptions}
  />
)

export default TeacherDropdown