'use client'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@repo/ui'
import { Loader, LogOut } from 'lucide-react'
import { useAuth } from '../hooks/use-auth'
import { LoginButton } from './login-button'
import { Role } from './role'

export const ProfileBanner = () => {
  const { profile, isLoading, logout } = useAuth()

  if (!profile) {
    return <LoginButton />
  }

  return (
    <div className="inline-flex gap-2 justify-start">
      <Popover>
        <PopoverTrigger className="relative inline-flex gap-2 justify-start items-center">
          {isLoading && (
            <Loader className="absolute top-0 -left-[0.75] z-10 animate-spin w-4 h-4" />
          )}
          <Avatar>
            <AvatarImage src={profile.avatarUrl} alt={profile.username} />
            <AvatarFallback>{profile.username.charAt(0)}</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col gap-2 w-80">
          <h3 className="text-sm font-semibold text-pretty">Discord badges:</h3>

          <ul className="inline-flex flex-wrap gap-2">
            {profile.roles.map(({ id, color, imageUrl, name }) => (
              <Role key={id} color={color} imageUrl={imageUrl} name={name} />
            ))}
          </ul>
        </PopoverContent>
      </Popover>
      <div className="flex flex-col items-start justify-start">
        <p className="text-sm font-semibold">{profile.username}</p>
        <Button
          variant="ghost"
          onClick={logout}
          className="text-xs py-0 px-2 h-auto rounded-md inline-flex gap-1 items-center font-medium hover:text-foreground text-foreground/80 transition-colors"
        >
          <LogOut className="w-4" />
          <span>Logout</span>
        </Button>
      </div>
    </div>
  )
}
