import React from "react";
import {
  Button,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
  Alert,
  AlertIcon,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

const BookSuggestion = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: {
      isSubmitting,
      isSubmitSuccessful,
      errors,
    },
  } = useForm();

  // 🔥 NO API CALL (biar ga error lagi)
  const onSubmit = async () => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <Box>
      <Button onClick={onOpen} colorScheme="blue">
        Suggest me a book
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book Suggestion</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing={2}>
                <FormControl isInvalid={errors.title}>
                  <FormLabel>Title</FormLabel>
                  <Input
                    {...register("title", { required: true })}
                    placeholder="Title"
                    isDisabled={isSubmitSuccessful}
                    rounded="lg"
                  />
                  <FormErrorMessage>
                    Title is required
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.author}>
                  <FormLabel>Author</FormLabel>
                  <Input
                    {...register("author", { required: true })}
                    placeholder="Author"
                    isDisabled={isSubmitSuccessful}
                    rounded="lg"
                  />
                  <FormErrorMessage>
                    Author is required
                  </FormErrorMessage>
                </FormControl>

                <FormControl>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    {...register("message")}
                    placeholder="Write a message..."
                    isDisabled={isSubmitSuccessful}
                    rounded="lg"
                  />
                </FormControl>

                {isSubmitSuccessful ? (
                  <Alert status="success" rounded="lg">
                    <AlertIcon />
                    Thanks for the suggestion!
                  </Alert>
                ) : (
                  <Button
                    mt={4}
                    colorScheme="blue"
                    type="submit"
                    w="100%"
                    isLoading={isSubmitting}
                    leftIcon={<EnvelopeIcon />}
                  >
                    Send suggestion
                  </Button>
                )}
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default BookSuggestion;