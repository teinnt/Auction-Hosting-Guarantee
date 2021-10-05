import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
} from '@chakra-ui/react'

function TermsAndConditions(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button w="60" mb="6" onClick={onOpen}>
        Read Terms and Conditions
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              You can scroll the content behind the modal
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ratione debitis nemo
              aut, perferendis, ducimus quia aspernatur excepturi in dolorum vel ad culpa soluta
              veniam? Voluptatum similique quis consequatur dolorem reprehenderit, velit minus id
              quisquam corporis minima, nobis quas inventore iusto magnam fugit, quidem ratione
              molestiae. Quibusdam expedita sunt nemo nulla quas, sed est obcaecati rem excepturi,
              sequi possimus et quam ab voluptatem harum consequatur tempore iure laboriosam ratione
              iusto, voluptates praesentium. Vero error blanditiis iure omnis non, hic rerum!
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TermsAndConditions
