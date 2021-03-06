import React from 'react'
import { AddIcon, CheckIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Center, Flex } from '@chakra-ui/react'
// STEPPER IMPORTS
import { Step, Steps } from 'chakra-ui-steps'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import Head from '../../../components/Head'
import {
  AddItem,
  Location,
  TakeAction,
  VerifyItem,
} from '../../../components/recycleAndReuseComponents/Steps'
import GeneralWaste from '../../../jsonfiles/General-Waste.json'
import Item from '../../../jsonfiles/Item.json'
import Layout from '../../../components/Layout'

const GeolocationNoSSR = dynamic(
  () =>
    import(
      '../../../components/recycleAndReuseComponents/Steps/StepThree/Geolocation'
    ),
  {
    loading: () => <p>Map is loading</p>,
    ssr: false,
  }
)

const ArrangeApp = ({ data }) => {
  const [items, setItems] = useState([])
  const [step, setStep] = useState(0)
  const [geolocation, setGeolocation] = useState(false)
  const [location, setLocation] = useState(false)
  return (
    <Box mt={10}>
      <Center>
        <Head title='Reuse and Recycle' />
        <Box w={['70vw', '60vw', '40wv']} pl={25}>
          <Flex flexDir='column' width='100%'>
            <Steps
              activeStep={step}
              responsive={false}
              colorScheme='teal'
              p={3}
              size='md'
            >
              {/* Add items to the recycling list */}
              <Step icon={AddIcon} key='0' data-testid='tab'>
                <AddItem
                  setNextStep={() => setStep(1)}
                  data={data}
                  setItems={setItems}
                />
              </Step>

              {/* Verify that the items are empty, rinsed or dried  */}
              <Step icon={EditIcon} key='1' data-testid='tab'>
                <VerifyItem
                  items={items}
                  setItems={setItems}
                  generalWasteItemDetails={data.generalWasteItemDetails}
                  navigateToTakeAction={() => setStep(2)}
                />
              </Step>

              {/* Decide what action to take: either house pickup or self-disposal */}
              <Step icon={DeleteIcon} key='2' data-testid='tab'>
                {geolocation ? (
                  <GeolocationNoSSR userItems={items} />
                ) : location ? (
                  <Location
                    items={items}
                    setGeolocation={setGeolocation}
                    setLocation={setLocation}
                  />
                ) : (
                  <TakeAction
                    items={items}
                    setGeolocation={setGeolocation}
                    setLocation={setLocation}
                    navigateBackToAddItem={() => setStep(0)}
                  />
                )}
              </Step>

              {/* Final Confirmation and Summary List*/}
              <Step icon={CheckIcon} key='3' data-testid='tab'></Step>
            </Steps>
          </Flex>
        </Box>
      </Center>
    </Box>
  )
}

export async function getStaticProps() {
  let items = Item || []
  let generalWasteItemDetails = GeneralWaste || []

  return {
    props: {
      data: {
        items: items,
        generalWasteItemDetails: generalWasteItemDetails,
      },
    },
  }
}

ArrangeApp.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default ArrangeApp
