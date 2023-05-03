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

const AddCommentModal = (props) => {
  const { userData, isOpen, onClose, onOpen, setTriggerUseEffect2, postID } =
    props;
  const [preSubmitComment, setPreSubmitComment] = useState("");
  // const [post, setPost] = useState({});
  // const [postTitle, setPostTitle] = useState("");

  const [comment, setComment] = useState("");

  const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

  // const [testPostStorage, setTestPostStorage] = useState([]);

  const handleSendComment = async () => {
    const orderResponse = await fetch(`${urlEndpoint}/orders/send-comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment,
      }),
    });

    const payloadResponse = await orderResponse.json();
    console.log(payloadResponse);
    setTriggerUseEffect2(false);
    setTriggerUseEffect2(true);
  };

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
              <Heading marginX="auto">Leave a comment</Heading>
            </HStack>

            <Box>
              {/* <Heading size="xs" textTransform="uppercase"></Heading> */}
              <Text pt="2" fontSize="sm" align="center">
                Draft your comment here
              </Text>
              <Textarea
                onChange={(e) => {
                  setPreSubmitComment(e.target.value);
                }}
              />
              <Stack mx="auto" width="50%" paddingY="10px">
                <Button
                  onClick={() => {
                    setComment({
                      user: userData.email,
                      comment: preSubmitComment,
                      postID: postID,
                    });
                  }}
                >
                  Save Comment
                </Button>
                <Button
                  onClick={() => {
                    handleSendComment(comment);

                    onClose();
                    setTriggerUseEffect2(false);
                    setTriggerUseEffect2(true);
                  }}
                >
                  Submit Comment
                </Button>
              </Stack>
            </Box>
          </Stack>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddCommentModal;
