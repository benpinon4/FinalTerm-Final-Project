import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Stack,
  StackDivider,
  Box,
  Button,
  HStack,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
} from "@chakra-ui/react";

const ForumBoard = (props) => {
  const { userData, isOpen, onClose, onOpen, setTriggerUseEffect } = props;
  const [preSubmitPost, setPreSubmitPost] = useState("");
  const [post, setPost] = useState({});
  const [postTitle, setPostTitle] = useState("");
  const [comment, setComment] = useState("");

  const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

  const [testPostStorage, setTestPostStorage] = useState([]);

  const handleSendPost = async () => {
    const orderResponse = await fetch(`${urlEndpoint}/orders/send-post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post,
      }),
    });

    const payloadResponse = await orderResponse.json();
    console.log(payloadResponse);
    // setTriggerUseEffect(true);
    // setTriggerUseEffect(false);
  };

  console.log(post);
  // console.log(testPostStorage);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent padding={5}>
          {/* <Card width={"50%"}>
        <CardBody> */}
          <Stack divider={<StackDivider />} spacing="7">
            <HStack direction="row" spacing={"25%"}>
              {/* {userData && <Text>{userData.email}</Text>} */}
              <Heading marginX="auto">Create A Post</Heading>
            </HStack>
            <Box>
              <Text pt="2" fontSize="sm" align="center">
                Add a Title
              </Text>
              <Input
                onChange={(e) => {
                  setPostTitle(e.target.value);
                }}
              />
            </Box>
            <Box>
              {/* <Heading size="xs" textTransform="uppercase"></Heading> */}
              <Text pt="2" fontSize="sm" align="center">
                Draft your post here
              </Text>
              <Textarea
                onChange={(e) => {
                  setPreSubmitPost(e.target.value);
                }}
              />
              <Stack mx="auto" width="50%" paddingY="10px">
                <Button
                  onClick={() => {
                    setPost({
                      user: userData.email,
                      title: postTitle,
                      post: preSubmitPost,
                    });
                    
                  }}
                >
                  Save Post
                </Button>
                <Button
                  onClick={() => {
                    handleSendPost(post);
                    onClose();
                    setTriggerUseEffect(false)
                    setTriggerUseEffect(true)
                  }}
                >
                  Submit Post
                </Button>
              </Stack>
            </Box>
          </Stack>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ForumBoard;
