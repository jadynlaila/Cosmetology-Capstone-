import { Form, Header, Icon, Image, Segment } from "semantic-ui-react";
import React, { useState, useEffect, useRef } from "react";

const ImgDropDiv = ({
  handleChange,
  inputRef,
  setHighlighted,
  highLighted,
  setMedia,
  setMediaPreview,
  meida,
  mediaPreview,
}) => {
  return (
    <>
      <Form.Field>
        <Segment placeholder basic secondary>
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            name="media"
            style={{ display: "none" }}
            ref={inputRef}
          />
          <div
            onClick={() => {
              inputRef.current.click();
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setHighlighted(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setHighlighted(false);
            }}
            onDrop={(e) => {
              e.preventDefault();
              setHighlighted(true);
              //console.log(e.dataTransfer.files);
              const droppedFile = e.dataTransfer.files[0];
              setMediaPreview(URL.createObjectURL(droppedFile)); //! URL for img
              setMedia(droppedFile); //! DATA for server
            }}
          >
            {mediaPreview === null ? (
              <Segment
                basic
                placeholder
                style={{ cursor: "pointer" }}
                {...(highLighted && { color: "green" })}
              >
                <div className="dragNdrop-header">
                  {/* <div> */}

                  <div className="instructions">
                    <Icon name="file image outline" />
                    Drag and Drop Image or Click to Upload
                  </div>
                  {/* </div> */}
                </div>
              </Segment>
            ) : (
              <Segment
                basic placeholder 

              >
                <Image
                  src={mediaPreview}
                  size="small"
                  centered
                  style={{ cursor: "pointer" }}
                />
              </Segment>
            )}
          </div>
        </Segment>
      </Form.Field>
    </>
  );
};

export default ImgDropDiv;
