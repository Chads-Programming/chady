import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export const ThemeToggler = () => {
  const { setTheme, theme } = useTheme()

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (theme === 'dark') {
    return (
      <Button
        key={theme}
        onClick={changeTheme}
        variant="ghost"
        className="rounded-full p-2"
      >
        <Moon />
      </Button>
    )
  }

  return (
    <Button
      key={theme}
      onClick={changeTheme}
      variant="ghost"
      className="rounded-full p-2"
    >
      <Sun />
    </Button>
  )
}
