import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import {  Card,
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
    Input,} from "@chakra-ui/react";


const MustLoginCommentModal = (props) => {

    const {  isOpen, onClose, onOpen } = props;

    return(
        <><Modal onOpen={onOpen} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent padding={5}>
        <ModalCloseButton />
        <ModalBody>
        <Text>You must login to make a comment!</Text>
        
        </ModalBody>

        
        
        </ModalContent>
      </Modal></>
    )

}

export default MustLoginCommentModal