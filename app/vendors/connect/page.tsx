"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useWallet } from "@txnlab/use-wallet-react"
import { ConnectWalletButton } from "@/components/connect-wallet-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Wallet } from "lucide-react"

export default function ConnectWalletPage() {
  const { activeAccount } = useWallet()
  const router = useRouter()

  // Redirect to dashboard if wallet is connected
  useEffect(() => {
    if (activeAccount) {
      router.push("/vendors")
    }
  }, [activeAccount, router])

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="border-2 border-blue-100">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Connect Your Wallet</CardTitle>
          <CardDescription>Please connect your wallet to access the vendor dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center mb-8">
            <div className="mb-6">
              <ConnectWalletButton />
            </div>

            <p className="text-sm text-slate-500 max-w-md text-center mt-2">
              Connect your blockchain wallet to securely access your vendor dashboard and manage your procurement
              activities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center text-center p-4">
              <Shield className="h-10 w-10 text-blue-500 mb-2" />
              <h3 className="font-medium mb-1">Secure Access</h3>
              <p className="text-sm text-slate-500">Your wallet provides secure authentication without passwords</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <Lock className="h-10 w-10 text-green-500 mb-2" />
              <h3 className="font-medium mb-1">Data Protection</h3>
              <p className="text-sm text-slate-500">Your data is encrypted and protected on the blockchain</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <Wallet className="h-10 w-10 text-purple-500 mb-2" />
              <h3 className="font-medium mb-1">Instant Payments</h3>
              <p className="text-sm text-slate-500">Receive payments directly to your connected wallet</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
