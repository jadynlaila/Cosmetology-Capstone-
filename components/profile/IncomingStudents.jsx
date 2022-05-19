import { div } from 'prelude-ls'
import React, { useState } from 'react'
import { Button, Checkbox, Icon, Modal, Header, Grid } from 'semantic-ui-react'


const IncomingStudents = () => {
  const [checked, setChecked] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size='small'
        trigger={
          <div className="add-to-class">
            <Icon name="plus" size='large' />
          </div>
        }
      >
        <Header>
          Select Class to Move to
        </Header>
        <Modal.Content>
            <div className="select-class">
              <Button>
                Class1
              </Button>
              <Button>
                Class4
              </Button>
              <Button>
                Class3
              </Button>
              <Button>
                Class2
              </Button>
            </div>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' onClick={() => setOpen(false)}>
            <Icon name='remove' /> Cancel
          </Button>
          <Button color='green' inverted onClick={() => setOpen(false)}>
            <Icon name='right arrow' /> Move
          </Button>
        </Modal.Actions>
      </Modal>
      {/* <div className="add-to-class" onClick={""}>
        <Icon name="plus" size='large' />
      </div> */}
      <div style={{ display: "grid", gap: "5px" }}>
        <div className="checkbox-container" style={{ display: "flex", gap: "5px", textAlign: "center" }}>
          <Checkbox
            onChange={(e, data) => setChecked(data.checked)}
            checked={checked}
          />
          <div id="studentName" className="studentName" style={{ fontSize: '1em', textAlign: "center" }} onClick={() => setChecked((prevChecked) => !prevChecked)}>
            NewStudent McStudent
          </div>
        </div>

        <div className="checkbox-container" style={{ display: "flex", gap: "5px", textAlign: "center" }}>
          <Checkbox
            onChange={(e, data) => setChecked(data.checked)}
            checked={checked}
          />
          <div id="studentName" className="studentName" style={{ fontSize: '1em', textAlign: "center" }} onClick={() => setChecked((prevChecked) => !prevChecked)}>
            NewStudent McStudent
          </div>
        </div>
      </div>
    </>
  )
}

export default IncomingStudents