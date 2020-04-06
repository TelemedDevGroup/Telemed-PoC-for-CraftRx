import React, { useState } from "react";
import { List, Message, Input, Grid } from "semantic-ui-react";

const DemoChatContainer = ({ chatsData, onClick }) => {
  let [inputData, setInputData] = useState("");
  return (
    <>
      {!chatsData ? (
        <p>Select conversation</p>
      ) : (
        <Grid.Row
          style={{
            position: "relative",
            paddingTop: "2rem",
            height: "700px",
          }}
        >
          <List style={{
              height: "90%",
              overflowY: 'auto'
          }}>
            {chatsData.map((message, index) => (
              <Message info={message.partner} size="small" key={index}>
                <Message.Header>{message.sender}</Message.Header>
                <p>{message.message}</p>
              </Message>
            ))}
          </List>
          <Input
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
            style={{
              position: "absolute",
              bottom: "0",
              width: "100%",
            }}
            fluid
            size="large"
            action={{
              color: "teal",
              content: "Send",
              onClick: () => {onClick(inputData); setInputData("")},
            }}
            placeholder="Input your message"
          />
        </Grid.Row>
      )}
    </>
  );
};

export default DemoChatContainer;
