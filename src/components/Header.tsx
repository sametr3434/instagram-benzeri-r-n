
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Sun, Moon, Plus, Camera } from "lucide-react";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  openCreatePost: () => void;
}

export const Header = ({ isDarkMode, toggleDarkMode, openCreatePost }: HeaderProps) => {
  return (
    <header className={`fixed top-0 left-0 right-0 ${isDarkMode ? 'dark:bg-gray-800' : 'bg-white'} border-b border-gray-200 z-50`}>
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">Instagram Clone</h1>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={openCreatePost}>
            <Plus className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Camera className="h-6 w-6" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
