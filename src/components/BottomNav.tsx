
import { Button } from "@/components/ui/button";
import { Image as ImageIcon, Heart, MessageCircle } from "lucide-react";

interface BottomNavProps {
  isDarkMode: boolean;
  openChat: () => void;
}

export const BottomNav = ({ isDarkMode, openChat }: BottomNavProps) => {
  return (
    <nav className={`fixed bottom-0 left-0 right-0 ${isDarkMode ? 'dark:bg-gray-800' : 'bg-white'} border-t border-gray-200`}>
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-around">
        <Button variant="ghost" size="icon">
          <ImageIcon className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="text-pink-500">
          <Heart className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" onClick={openChat}>
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
};
