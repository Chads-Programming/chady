import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from './use-theme'

export const ThemeToggler = () => {
  const { setTheme, theme } = useTheme()

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      key={theme}
      onClick={changeTheme}
      variant="ghost"
      className="rounded-full p-2"
    >
      {theme === 'dark' ? <Moon /> : <Sun />}
    </Button>
  )
}
