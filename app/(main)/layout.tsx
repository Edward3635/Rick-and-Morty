import SiteFooter from '@/components/layouts/SiteFooter'
import SiteHeader from '@/components/layouts/SiteHeader'
import { Shell } from '@/components/shells/shell'
import Link from 'next/link'
import React from 'react'

export default async function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative flex min-h-screen flex-col">
			<SiteHeader />
			<main className="flex-1">{children}</main>
			<SiteFooter />
		</div>
	)
}
