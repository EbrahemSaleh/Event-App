import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

const SignedOutMenu = ({signIn , signOut}) => {
  return (
                <Menu.Item position="right">
                 <Button onClick={signIn} basic inverted content="register" />
      <Button basic inverted content="Sign Out" style={{ marginLeft: '0.5em' }} onClick={signOut} />
               </Menu.Item>
  )
}

export default SignedOutMenu