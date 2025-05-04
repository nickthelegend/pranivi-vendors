"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useWallet } from "@txnlab/use-wallet-react"
import { VendorHeader } from "@/components/vendor-header"
import Link from "next/link"
import { Home, ShoppingBag, Package, Truck, QrCode, FileText, Wallet, FileCheck, Users, Settings } from "lucide-react"

export function VendorLayoutContent({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const { activeAccount } = useWallet()

  // Check if we're already on the connect page to avoid redirect loops
  const isConnectPage = pathname === "/vendors/connect"

  useEffect(() => {
    // Only redirect if not on connect page and no active account
    if (!activeAccount && !isConnectPage) {
      router.push("/vendors/connect")
    }
  }, [activeAccount, router, isConnectPage, pathname])

  return (
    <div className="min-h-screen bg-slate-50">
      <VendorHeader />

      {activeAccount && (
        <div className="flex pt-16">
          {/* Sidebar */}
          <aside className="w-64 bg-white border-r border-slate-200 h-[calc(100vh-4rem)] sticky top-16 hidden md:block">
            <nav className="p-4">
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/vendors"
                    className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                      pathname === "/vendors"
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-slate-700 hover:bg-slate-50"
                    } transition-colors`}
                  >
                    <Home className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vendors/bids"
                    className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                      pathname?.startsWith("/vendors/bids")
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-slate-700 hover:bg-slate-50"
                    } transition-colors`}
                  >
                    <ShoppingBag className="h-5 w-5" />
                    <span>Bids</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vendors/orders"
                    className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                      pathname?.startsWith("/vendors/orders")
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-slate-700 hover:bg-slate-50"
                    } transition-colors`}
                  >
                    <Package className="h-5 w-5" />
                    <span>Orders</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vendors/shipments"
                    className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                      pathname?.startsWith("/vendors/shipments")
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-slate-700 hover:bg-slate-50"
                    } transition-colors`}
                  >
                    <Truck className="h-5 w-5" />
                    <span>Shipments</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vendors/qr-codes"
                    className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                      pathname?.startsWith("/vendors/qr-codes")
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-slate-700 hover:bg-slate-50"
                    } transition-colors`}
                  >
                    <QrCode className="h-5 w-5" />
                    <span>QR Codes</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vendors/invoices"
                    className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                      pathname?.startsWith("/vendors/invoices")
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-slate-700 hover:bg-slate-50"
                    } transition-colors`}
                  >
                    <FileText className="h-5 w-5" />
                    <span>Invoices</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vendors/payments"
                    className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                      pathname?.startsWith("/vendors/payments")
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-slate-700 hover:bg-slate-50"
                    } transition-colors`}
                  >
                    <Wallet className="h-5 w-5" />
                    <span>Payments</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vendors/quality"
                    className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                      pathname?.startsWith("/vendors/quality")
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-slate-700 hover:bg-slate-50"
                    } transition-colors`}
                  >
                    <FileCheck className="h-5 w-5" />
                    <span>Quality Assurance</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vendors/profile"
                    className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                      pathname?.startsWith("/vendors/profile")
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-slate-700 hover:bg-slate-50"
                    } transition-colors`}
                  >
                    <Users className="h-5 w-5" />
                    <span>Company Profile</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vendors/settings"
                    className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                      pathname?.startsWith("/vendors/settings")
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-slate-700 hover:bg-slate-50"
                    } transition-colors`}
                  >
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6">{children}</main>
        </div>
      )}

      {/* If on connect page or not connected, just render the children without sidebar */}
      {(!activeAccount || isConnectPage) && <main className="pt-16 p-6">{children}</main>}
    </div>
  )
}
