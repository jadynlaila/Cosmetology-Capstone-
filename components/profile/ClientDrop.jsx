import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class ClientDrop extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion fluid styled>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
         Client
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Client Info
          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}