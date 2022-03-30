import React from 'react'

//* form will collect all of the visit data
//* needs to collect client's email, preferred stylist, date of appt, time of appt, requested style, and any notes the client would like to give
const NewVisitForm = ({name, handleChange}) => {
  return (
    <>
    <Grid>
        <Grid.Column>
            <Form>
                <Form.Input 
                label="Name"
                required
                placeholder="Name"
                value={name}
                onChange={handleChange}
                icon="user"
                iconPosition="left"
                />
            </Form>
        </Grid.Column>
    </Grid>
    </>
  )
}

export default NewVisitForm