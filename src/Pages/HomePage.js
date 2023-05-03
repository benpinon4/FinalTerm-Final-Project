import { useEffect, useState } from "react";
import DiscussionBoardMain from "../Components/DiscussionBoard";
import Login from "../Components/Login";
import ForumPostModal from "../Components/ForumPostModal";
import AddCommentModal from "../Components/AddCommentModal";
import MustLoginModal from "../Components/MustLoginModal";
import MustLoginCommentModal from "../Components/MustLoginCommentModal";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Stack,
  StackDivider,
  Box,
  HStack,
  Textarea,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const HomePage = (props) => {
  const {
    isOpen: isOpenPost,
    onOpen: onOpenPost,
    onClose: onClosePost,
  } = useDisclosure();
  const {
    isOpen: isOpenComment,
    onOpen: onOpenComment,
    onClose: onCloseComment,
  } = useDisclosure();

  const {
    isOpen: isOpenMustPost,
    onOpen: onOpenMustPost,
    onClose: onCloseMustPost,
  } = useDisclosure();

  const {
    isOpen: isOpenMustComment,
    onOpen: onOpenMustComment,
    onClose: onCloseMustComment,
  } = useDisclosure(); 

  const { userData } = props;
  const [postList, setPostList] = useState([]);
  const [commentsList, setCommentsList] = useState([]);
  const [triggerUseEffect, setTriggerUseEffect] = useState(true);
  const [triggerUseEffect2, setTriggerUseEffect2] = useState(true);

  const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`${urlEndpoint}/orders/get-posts`);

      const result = await response.json();
      // console.log(result)
      //   const edittedProductList = result.map((product) => {
      //     return {
      //       ...product,
      //       render: true,
      //     };
      //   });

      setPostList(result.postList);
      // console.log(result.postList)
    };
    fetchPosts();
  }, [triggerUseEffect, triggerUseEffect2]);

  return (
    <div className="flex flex-col place-items-center">
      <div>The Forum</div>
      {userData === undefined}

      <Button
        width={"100px"}
        onClick={() => {
          if (userData.email !== undefined) {
            onOpenPost();
          } else if (userData.email === undefined) {
            onOpenMustPost();
          }
        }}
      >
        Create Post
      </Button>
      <MustLoginModal isOpen={isOpenMustPost} onClose={onCloseMustPost} />
      <ForumPostModal
        isOpen={isOpenPost}
        onClose={onClosePost}
        userData={userData}
        setTriggerUseEffect={setTriggerUseEffect}
      />
      {postList &&
        postList.map((e, index) => {
          return (
            <Card
              minWidth={"50%"}
              textAlign="center"
              key={index}
              marginTop="20px"
              borderRadius={"0"}
            >
              <CardHeader>
                <HStack spacing={50}>
                <Text>Posted by: {e.user}</Text>
                <Heading size="md" key={index}>
                  {e.title}
                </Heading>
                
                </HStack>
           
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                     
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {e.post}
                      
                    </Text>
                    <Text pt="2" fontSize="sm">
                      {e.postID}
                      
                    </Text>
                  </Box>
                  <Box>
                    <Button
                      onClick={() => {
                        if (userData.email !== undefined) {
                          onOpenComment();
                        } else if (userData.email === undefined) {
                          onOpenMustComment();
                        }
                      }}
                    >
                      Add Comment
                    </Button>
                    <AddCommentModal
                      isOpen={isOpenComment}
                      onClose={onCloseComment}
                      userData={userData}
                      postID={e.postID}
                      setTriggerUseEffect2={setTriggerUseEffect2}
                    />
                    <MustLoginCommentModal
                      isOpen={isOpenMustComment}
                      onClose={onCloseMustComment}
                    />
                  </Box>
                </Stack>
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton onClick={() => {}}>
                        <Box as="span" flex="1" textAlign="left">
                          Comments
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      {e.comments === undefined && <Text>No Comments</Text>}
                      {e.comments &&
                        e.comments.map((e, index) => {
                          return (
                            <Card key={index}>
                              <CardBody>
                                <Text>{e.comment}</Text>
                              </CardBody>
                            </Card>
                          );
                        })}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </CardBody>
            </Card>
          );
        })}
    </div>
  );
};

export default HomePage;
