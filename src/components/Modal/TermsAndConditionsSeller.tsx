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

function TermsAndConditionsSeller(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button w="60" mb="6" onClick={onOpen}>
        Read Terms and Conditions
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Terms and Conditions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              As a seller
            </Text>
            <Text mb="4">
              1/ You are able to <b>register items in an auction</b>.
            </Text>
            <Text mb="4">
              2/ You will be <b>in charge of all extra expenses</b> while purchasing such as
              shipment fee.
            </Text>
            <Text mb="4">
              3/ After an auction, you will <b>receive a shipping code</b> to update item&apos;s
              location during shipping.
            </Text>
            <Text mb="4">
              4/ The <b>payment will not be made until buyers provide a confirmation code</b> to
              complete the process.
            </Text>
            <Text mb="4">
              5/ If the <b>buyer&apos;s address is incorrect or they cannot pay</b> for the item,
              the item&apos;s <b>ownership will be returned to the previous owner</b> and the
              buyer&apos;s account will be banned.
            </Text>
            <Text mb="4">
              6/ If the item can be refunded and the buyer requests for refund, you will receive an
              email to issue the request.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Okay
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TermsAndConditionsSeller
