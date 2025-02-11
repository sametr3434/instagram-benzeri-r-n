
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Story } from "@/types";

interface StoriesProps {
  stories: Story[];
  onStoryClick: (story: Story) => void;
}

export const Stories = ({ stories, onStoryClick }: StoriesProps) => {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4 -mx-4 mb-6 scrollbar-hide">
      {stories.map((story, i) => (
        <div 
          key={i} 
          className="flex flex-col items-center space-y-1 cursor-pointer"
          onClick={() => onStoryClick(story)}
        >
          <div className="w-16 h-16 rounded-full ring-2 ring-pink-500 p-1">
            <img
              src={story.userAvatar}
              alt="story"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <span className="text-xs">{story.username}</span>
        </div>
      ))}
    </div>
  );
};
