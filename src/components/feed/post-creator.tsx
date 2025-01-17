'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/cards/card"
import { FileIcon, ImageIcon, MapPinIcon, ChevronDownIcon } from 'lucide-react'

interface PostCreatorProps {
  userAvatar: string
  userName: string
}

export function PostCreator({ userAvatar, userName }: PostCreatorProps) {
  return (
    <Card className="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={userAvatar} alt={userName} />
          <AvatarFallback>{userName[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1 flex items-center gap-2 bg-gray-50 dark:bg-gray-950 rounded-lg px-4 py-2">
          <input
            type="text"
            placeholder="Share something"
            className="flex-1 bg-transparent outline-none text-sm text-gray-600 dark:text-gray-100 dark:placeholder-gray-400"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
          <FileIcon className="w-4 h-4 mr-2" />
          File
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
          <ImageIcon className="w-4 h-4 mr-2" />
          Image
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
          <MapPinIcon className="w-4 h-4 mr-2" />
          Location
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 ml-auto">
          Public
          <ChevronDownIcon className="w-4 h-4 ml-2" />
        </Button>
        <Button size="sm" className="bg-black text-white hover:bg-black/90 dark:bg-gray-700 dark:hover:bg-gray-600">
          Send
        </Button>
      </div>
    </Card>
  )
}
