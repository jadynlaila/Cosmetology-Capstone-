import Head from 'next/head'
import React, {useState} from 'react'
import { Button, Form, Header, Icon, Modal } from 'semantic-ui-react'

const ForgotPinModal = () => {
    const [open, setOpen] = useState(false)
    const [stylist, setStylist] = useState({
        email: ""
    })

    const handleChange = () => {}
    const handleSubmit = () => {}

  return (
    <>
    <Modal
    closeIcon
    open={open}
    trigger={<Button content="Forgot Pin?" />}
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)} >
        <Form>
            <Form.Input
            label="Email"
            placeholder="someone@west-mec.org" 
            />
            <Button content="Send Pin" type='submit' />
        </Form>
    </Modal>
    </>
  )
}

export default ForgotPinModal