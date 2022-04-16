import React, { Component } from "react";
import { Accordion, Icon, Grid, Divider } from "semantic-ui-react";

export default class StudentDrop extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Accordion fluid styled style={{ padding: ".5rem", width: "100%" }}>
            <Accordion.Title
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Student
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <p>Student Info</p>
            </Accordion.Content>
          </Accordion>
        </Grid.Column>
      </Grid>
    );
  }
}
