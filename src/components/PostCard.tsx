
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Post } from "@/types";

interface PostCardProps {
  post: Post;
  onLike: (postId: number) => void;
}

export const PostCard = ({ post, onLike }: PostCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="p-4 flex items-center space-x-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src={post.userAvatar} />
          <AvatarFallback>{post.username[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <span className="font-semibold">{post.username}</span>
      </div>
      <div className="relative aspect-square">
        <img
          src={post.imageUrl}
          alt="Post"
          className="absolute w-full h-full object-cover"
        />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onLike(post.id)}
            className={post.isLiked ? "text-red-500" : ""}
          >
            <Heart className={`h-6 w-6 ${post.isLiked ? "fill-current" : ""}`} />
          </Button>
          <Button variant="ghost" size="icon">
            <MessageCircle className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Share2 className="h-6 w-6" />
          </Button>
        </div>
        <div className="space-y-2">
          <p className="font-semibold">{post.likes} beğeni</p>
          <p>
            <span className="font-semibold">{post.username}</span>{" "}
            {post.caption}
          </p>
          <p className="text-gray-500 text-sm">
            {post.comments} yorumun tümünü gör
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Yorum ekle..."
            className="flex-1"
          />
          <Button variant="ghost" className="text-blue-500">
            Gönder
          </Button>
        </div>
      </div>
    </Card>
  );
};
