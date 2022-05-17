import React from 'react'
import { Button, Checkbox } from 'semantic-ui-react'

const IncomingStudents = () => {
  const [checked, setChecked] = React.useState(false)
  return (
    <>
      <div style={{ display: "flex", gap: "5px" }}>
        <Checkbox
          onChange={(e, data) => setChecked(data.checked)}
          checked={checked}
        />
        <div className="studentName" style={{ fontSize: '1em' }} onClick={() => setChecked((prevChecked) => !prevChecked)}>
          NewStudent McStudent
        </div>

      </div>
    </>
  )
}

export default IncomingStudents