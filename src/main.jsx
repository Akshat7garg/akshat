import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import { Toaster } from "@/components/ui/sonner"

createRoot(document.getElementById('root')).render(
  <>
    <Layout />
    <Toaster />
  </>
)
