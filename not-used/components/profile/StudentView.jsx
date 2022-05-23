import React, { Component } from "react";
import { Accordion, Icon, Grid, Divider } from "semantic-ui-react";


export default class StudentView extends Component {
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
      // !This will display all of the students clients and act as a general place for records of visits
      <>
        <Grid centered>
          <Grid.Column>
            <Accordion fluid styled style={{ padding: ".5rem", width: "100%" }}>
              <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                Client
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                {/* <p>{visit.client.style}</p> */}
                <div className="visitDate">
                  da/te/date
                </div>
                <div className="time-worked-on">
                  1hr 30min
                </div>
                <div className="hairstyle">
                  Short hair
                  curly
                  oily
                  another word
                  more
                  words
                  multiple
                  more words
                </div>
              </Accordion.Content>
            </Accordion>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}
