import React, { useState, useEffect } from "react";
import { Grid, Container, Header, Comment } from "semantic-ui-react";
import AccountAPI from "../test_data/test_conversations.js";
import DemoChatContainer from "./DemoChatContainer.js";

const Conversation = ({ doctorName, onClick, selected, lastMessage }) => (
  <Comment style={{ cursor: "pointer" }} onClick={() => onClick()}>
    <Comment.Content>
      <Comment.Author as="a">{doctorName}</Comment.Author>
      <Comment.Metadata>
        <div>Today</div>
      </Comment.Metadata>
      <Comment.Text>{lastMessage[lastMessage.length - 1].message}</Comment.Text>
    </Comment.Content>
  </Comment>
);

const DemoChatsGroup = () => {
  let [userDialogs, setUserDialog] = useState([]);
  let [selectedDialog, setSelDialog] = useState({});

  useEffect(() => {
    setUserDialog(AccountAPI.get("P001"));
  }, []);

  const clickHandler = (id) => {
    setSelDialog(id);
  };

  const sendMessage = (message) => {
    const newMessage = {sender: userDialogs[0].userName, message: message}
    setSelDialog({...selectedDialog, ...selectedDialog.dialog.push(newMessage)});
  };

  return (
    <>
      <Container>
        <Header as="h3" style={{ paddingTop: "1.5rem" }}>
          Your conversations
        </Header>
        <Grid columns={2}>
          <Grid.Column
            width={6}
            style={{
              marginTop: "2rem",
              paddingTop: "2rem",
              height: "700px",
              background: "#F2FBFB",
            }}
          >
            {!userDialogs.length ? (
              <p>No conversations found</p>
            ) : (
              <Comment.Group>
                {userDialogs.map((dialog) => (
                  <Conversation
                    onClick={() => clickHandler(dialog)}
                    selected={dialog.id === selectedDialog.id}
                    doctorName={dialog.doctorName}
                    lastMessage={dialog.dialog}
                    key={dialog.id}
                  ></Conversation>
                ))}
              </Comment.Group>
            )}
          </Grid.Column>
          <Grid.Column width={10}>
            <DemoChatContainer
              chatsData={selectedDialog.dialog}
              onClick={ sendMessage}
            ></DemoChatContainer>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};

export default DemoChatsGroup;
