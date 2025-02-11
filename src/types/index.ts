
export interface Post {
  id: number;
  username: string;
  userAvatar: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  isLiked: boolean;
}

export interface Story {
  username: string;
  userAvatar: string;
  storyImage: string;
}

export interface Message {
  id: number;
  sender: string;
  receiver: string;
  content: string;
  timestamp: string;
}

export interface User {
  username: string;
  avatar: string;
}
