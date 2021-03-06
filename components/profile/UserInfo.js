import { HStack, Icon, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { HiCalendar, HiLink, HiLocationMarker } from 'react-icons/hi'

export const UserInfo = (props) => {
  const { location, website, memberSince, ...stackProps } = props
  return (
    <Stack
      direction={{
        base: 'column',
        sm: 'row',
      }}
      spacing={{
        base: '1',
        sm: '6',
      }}
      mt='4'
      fontSize='sm'
      fontWeight='medium'
      color={useColorModeValue('teal.600', 'teal.300')}
      {...stackProps}
    >
      <HStack>
        <Icon as={HiLocationMarker} />
        <Text>{location}</Text>
      </HStack>
      <HStack>
        <Icon as={HiLink} />
        <Text>{website}</Text>
      </HStack>
      <HStack>
        <Icon as={HiCalendar} />
        <Text>{memberSince}</Text>
      </HStack>
    </Stack>
  )
}
