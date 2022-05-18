import React, { Component } from "react";
import { Accordion, Icon, Grid, Divider, Button } from "semantic-ui-react";

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
      <>
      <Grid columns={1}>
        <Grid.Column >
          <Accordion fluid styled >
            <Accordion.Title
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Class/Session name
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <div className="studentName" style={{ marginBottom: "1em" }}>Student 1</div>
              <br />
              <div className="studentName" style={{ marginBottom: "1em" }}>Student 2</div>
              <br />
              <div className="studentName" style={{ marginBottom: "1em" }}>Student 3</div>
              <br />
              <div className="studentName" style={{ marginBottom: "1em" }}>Student 4</div>
              <br />
              <div className="studentName" style={{ marginBottom: "1em" }}>Student 5</div>
              <br />
              
            </Accordion.Content>
          </Accordion>
        </Grid.Column>
      </Grid>
      </>
    );
  }
}
