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

function TermsAndConditionsBuyer(): JSX.Element {
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
              As a buyer
            </Text>
            <Text mb="4">
              1/ You will <b>receive a confirmation code</b> after the auction ends.
            </Text>
            <Text mb="4">
              2/ When the item arrives and you are happy with the item, please{' '}
              <b>provide the confirmation code</b> to shipper <b>to complete the process</b>.
            </Text>
            <Text mb="4">
              3/ <b>After providing the code, the payment will be made immediately</b> from your
              wallet account.
            </Text>
            <Text mb="4">
              4/ If the item is not functional or as advertised,{' '}
              <b>you can refuse to provide the confirmation code</b>.
            </Text>
            <Text mb="4">
              5/ If your address is incorrect or you cannot pay for the item, the item&apos;s{' '}
              <b>ownership will be returned to the previous owner</b> and{' '}
              <b>your account will be banned</b>.
            </Text>
            <Text mb="4">
              6/ If the item can be refunded and you want{' '}
              <b>to request for refund, you can go to the platform</b>.
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

export default TermsAndConditionsBuyer
