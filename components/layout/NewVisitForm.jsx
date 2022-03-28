import React from 'react'

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