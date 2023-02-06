import { useEffect, useState } from 'react';
import Head from 'next/head'
import { Inter } from '@next/font/google'
import {Stepper} from 'legion-ui';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps=[
    {id:1, name: 'Step 1'}, {id:2, name: 'Step 2'}, {id:3, name: 'Step 3', icon: 'ChevronRight'}]
  return (
    <>
      <Head>
        <title>Legion Component Playground</title>
        <meta name="description" content="Legion components" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Stepper variant="primary" steps={steps} currentStep={currentStep} />
        <div></div><a href="#" onClick={() => setCurrentStep(currentStep+1)}>
          Next
        </a>
        <a href="#" onClick={() => setCurrentStep(currentStep-1)}>
          Previous
        </a>
        <Stepper variant="secondary" orientation="vertical" steps={steps} currentStep={currentStep} />
      </main>
    </>
  )
}
