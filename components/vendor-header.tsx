"use client"

import Link from "next/link"
import { useWallet } from "@txnlab/use-wallet-react"
import { ConnectWalletButton } from "./connect-wallet-button"

export function VendorHeader() {
  const { activeAccount } = useWallet()

  return (
    <header className="bg-gradient-to-r from-blue-600 to-green-600 text-white fixed w-full top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/vendors" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 font-bold text-lg">
                P
              </span>
            </div>
            <span className="font-bold text-lg">Pranivi Vendor Portal</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {activeAccount && (
            <div className="hidden md:block text-sm">
              <span className="opacity-80">Connected as:</span>{" "}
              <span className="font-medium">
                {activeAccount.address.slice(0, 4)}...{activeAccount.address.slice(-4)}
              </span>
            </div>
          )}
          <ConnectWalletButton />
        </div>
      </div>
    </header>
  )
}
