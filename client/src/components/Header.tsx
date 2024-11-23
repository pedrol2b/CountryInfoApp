import { ModeToggle } from '@/components/ModeToggle'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

const Header: React.FC = () => {
  const router = useRouter()

  const handleNavigateToRoot = useCallback(() => router.push('/'), [router])

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-x-4">
        <h1 onClick={handleNavigateToRoot} className="cursor-pointer text-2xl font-medium text-neutral-400">
          Country Info App
        </h1>
      </div>
      <div className="flex items-center">
        <ModeToggle />
      </div>
    </div>
  )
}

export { Header }
