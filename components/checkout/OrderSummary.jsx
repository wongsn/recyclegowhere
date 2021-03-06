import {
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import {useState} from 'react';
import { HiOutlineChat, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { products } from "./_data";
import { ProductItem } from "./ProductItem";
import { AlertDialogExample } from "./AlertDialogExample";

export const OrderSummary = () => {
  const [alert, setAlert] = useState(false);
  const onClickHandler = () => {
    setAlert(true);
    console.log("sup")
    console.log(alert);
  }
  return (
    <Stack spacing={{ base: "6", md: "10" }}>
      <Heading size="md">Deliver Summary</Heading>
      <Stack spacing="8">
        {/* <Stack spacing='6'>
        {products.slice(0, 2).map((product) => (
          <>
            <ProductItem product={product} />
            <Divider />
          </>
        ))}
      </Stack> */}

        <HStack spacing="6">
          <Input
            name="discount"
            placeholder="Discount Code"
            focusBorderColor={useColorModeValue("teal.500", "teal.200")}
            bg={useColorModeValue("white", "gray.700")}
            size="lg"
          />
          <Button
            size="lg"
            px="8"
            bg={useColorModeValue("gray.500", "gray.600")}
            _hover={{ bg: useColorModeValue("gray.600", "gray.500") }}
            _active={{ bg: useColorModeValue("gray.700", "gray.500") }}
            color="white"
          >
            Apply
          </Button>
        </HStack>
        <Stack spacing="6">
          <Stack spacing="3">
            <Stack direction="row" justify="space-between">
              <Text color={useColorModeValue("gray.600", "gray.300")}>
                Subtotal
              </Text>
              <Text color={useColorModeValue("black", "white")}>$15.00</Text>
            </Stack>
            <Stack direction="row" justify="space-between">
              <Text color={useColorModeValue("gray.600", "gray.300")}>
                GST cost
              </Text>
              <Text color={useColorModeValue("black", "white")}>+$0.99</Text>
            </Stack>
            <Stack direction="row" justify="space-between">
              <Text color={useColorModeValue("gray.600", "gray.300")}>
                Discount (0%)
              </Text>
              <Text color={useColorModeValue("teal.500", "teal.200")}>
                -$0.00
              </Text>
            </Stack>
          </Stack>
          <Divider />
          <Stack direction="row" justify="space-between">
            <Text
              fontSize="lg"
              fontWeight="semibold"
              color={useColorModeValue("gray.700", "gray.200")}
            >
              Delivery Total
            </Text>
            <Text
              fontSize="xl"
              fontWeight="semibold"
              color={useColorModeValue("black", "white")}
            >
              $15.99
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack spacing="8">
        <Button colorScheme="teal" size="lg" py="7" onClick={onClickHandler}>
          Place Order
        </Button>
        { alert && (<AlertDialogExample />)}
        <Stack spacing="3">
          <Text fontSize="sm" color={useColorModeValue("gray.700", "gray.200")}>
            Have questions? or Need help to complete your order?
          </Text>
          <HStack
            spacing="8"
            color={useColorModeValue("teal.500", "teal.200")}
            fontWeight="semibold"
          >
            <HStack>
              <Icon as={HiOutlineChat} boxSize="5" />
              <Text>Live Chat</Text>
            </HStack>
            <HStack>
              <Icon as={HiOutlinePhone} boxSize="5" />
              <Text>Phone</Text>
            </HStack>
            <HStack>
              <Icon as={HiOutlineMail} boxSize="5" />
              <Text>Email</Text>
            </HStack>
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  );
};
