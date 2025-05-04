"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bell, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import UserNav from "@/components/user-nav"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    // <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
    //   <div className="container flex items-center justify-between h-16 px-4 mx-auto">
    //     <Link href="/" className="flex items-center">
    //       <span className="text-xl font-bold">BMAD Method</span>
    //     </Link>

    //     {/* Desktop Navigation */}
    //     <nav className="hidden md:flex md:items-center md:gap-6">
    //       <Link href="/docs" className="text-sm font-medium text-slate-700 hover:text-slate-900">
    //         Documentation
    //       </Link>
    //       <Link href="/templates" className="text-sm font-medium text-slate-700 hover:text-slate-900">
    //         Templates
    //       </Link>
    //       <Link href="/tutorial" className="text-sm font-medium text-slate-700 hover:text-slate-900">
    //         Tutorial
    //       </Link>
    //       <Link href="/community" className="text-sm font-medium text-slate-700 hover:text-slate-900">
    //         Community
    //       </Link>
    //     </nav>

    //     <div className="hidden md:flex md:items-center md:gap-4">
    //       <Button variant="outline" size="sm">
    //         Sign In
    //       </Button>
    //       <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
    //         Get Started
    //       </Button>
    //     </div>

    //     {/* Mobile Menu Button */}
    //     <button className="p-2 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
    //       {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    //     </button>
    //   </div>

    //   {/* Mobile Navigation */}
    //   {isMenuOpen && (
    //     <div className="fixed inset-0 z-40 flex flex-col pt-16 bg-white md:hidden">
    //       <nav className="flex flex-col p-4 space-y-4">
    //         <Link
    //           href="/docs"
    //           className="p-2 text-sm font-medium text-slate-700 hover:text-slate-900"
    //           onClick={() => setIsMenuOpen(false)}
    //         >
    //           Documentation
    //         </Link>
    //         <Link
    //           href="/templates"
    //           className="p-2 text-sm font-medium text-slate-700 hover:text-slate-900"
    //           onClick={() => setIsMenuOpen(false)}
    //         >
    //           Templates
    //         </Link>
    //         <Link
    //           href="/tutorial"
    //           className="p-2 text-sm font-medium text-slate-700 hover:text-slate-900"
    //           onClick={() => setIsMenuOpen(false)}
    //         >
    //           Tutorial
    //         </Link>
    //         <Link
    //           href="/community"
    //           className="p-2 text-sm font-medium text-slate-700 hover:text-slate-900"
    //           onClick={() => setIsMenuOpen(false)}
    //         >
    //           Community
    //         </Link>
    //         <div className="flex flex-col gap-2 pt-4 mt-4 border-t">
    //           <Button variant="outline" onClick={() => setIsMenuOpen(false)}>
    //             Sign In
    //           </Button>
    //           <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setIsMenuOpen(false)}>
    //             Get Started
    //           </Button>
    //         </div>
    //       </nav>
    //     </div>
    //   )}
    // </header>
    <header className="flex items-center h-14 gap-4 border-b px-6 bg-background">
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Search projects..." className="w-full pl-8 bg-background" />
      </div>
      <div className="flex items-center ml-auto gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>
        <UserNav />
      </div>
    </header>
  )
}
