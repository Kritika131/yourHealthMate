import { ArrowLeft, Badge } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PricingPage = () => {
  return (
    <div>
    <div className="flex justify-start mb-2">
        <Link href="/" className="flex items-center text-muted-foreground hover:text-white transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2"/>
        Back to Home
        </Link>
    </div>
    <div>
        <Badge variant="outline" className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4">
            Affordable Healthcare
        </Badge>
        <h1>
            Simple, Transparent Pricing
        </h1>
    </div>
    </div>
  )
}

export default PricingPage