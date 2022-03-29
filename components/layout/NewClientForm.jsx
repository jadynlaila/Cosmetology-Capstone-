import React from 'react'
import { Button, Header, Image, Modal, Checkbox, Form } from 'semantic-ui-react'

function newClientForm() {
  const [open, setOpen] = React.useState(false)
    // onclick button <button class="ui button">Show Modal</button>
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>New Client</Modal.Header>
      <Modal.Content>
        {/* FORM FIELD */}
        <Form>
          <Form.Field>
            <label>Name:</label>
            <input placeholder='Name' />
          </Form.Field>
          <Form.Field>
            <label>Email:</label>
            <input placeholder='Last Name' />
          </Form.Field>
          <Form.Field>
            <label>Address:</label>
            <input placeholder='Address...' />
          </Form.Field>
          <Form.Field>
            <label>Phone Number:</label>
            <input placeholder='Phone Number...' />
          </Form.Field>
          <Form.Field>
            <label>DOB:</label>
            <input placeholder='DOB...' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Submit"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
    
  )
}

export default newClientForm