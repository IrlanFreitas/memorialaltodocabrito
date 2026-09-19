import { useState } from 'react'
import { RouterProvider } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { router } from './routes'
import SplashScreen from '../components/SplashScreen'

const queryClient = new QueryClient()

/** Desabilitada via VITE_DISABLE_SPLASH=true — útil em ambiente de teste/CI. */
const SPLASH_ENABLED = import.meta.env.VITE_DISABLE_SPLASH !== 'true'

export default function App() {
  const [splashDone, setSplashDone] = useState(!SPLASH_ENABLED)

  return (
    <QueryClientProvider client={queryClient}>
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
