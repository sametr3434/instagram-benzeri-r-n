import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Send } from "lucide-react";
import { Header } from "@/components/Header";
import { Stories } from "@/components/Stories";
import { PostCard } from "@/components/PostCard";
import { BottomNav } from "@/components/BottomNav";
import { Post, Story, Message, User } from "@/types";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [selectedReceiver, setSelectedReceiver] = useState("");
  const [newPost, setNewPost] = useState({
    caption: "",
    imageUrl: "",
  });

  const users: User[] = [
    { username: "ayşegül", avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7" },
    { username: "mehmet", avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
    { username: "zeynep", avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7" },
    { username: "emre", avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
    { username: "elif", avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7" },
  ];

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ayşegül",
      receiver: "ben",
      content: "Selam! Nasılsın?",
      timestamp: "14:30",
    },
    {
      id: 2,
      sender: "mehmet",
      receiver: "ben",
      content: "Hey! Yeni projeni gördüm, harika olmuş!",
      timestamp: "15:45",
    },
  ]);

  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      username: "ayşegül",
      userAvatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      caption: "Kod yazıyorum 🚀 #yazılım #teknoloji",
      likes: 124,
      comments: 12,
      isLiked: false,
    },
    {
      id: 2,
      username: "mehmet",
      userAvatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      caption: "Mükemmel çalışma ortamı ✨ #çalışmaortamı #tasarım",
      likes: 89,
      comments: 8,
      isLiked: false,
    },
  ]);

  const stories: Story[] = [
    {
      username: "zeynep",
      userAvatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      storyImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      username: "emre",
      userAvatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      storyImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    },
    {
      username: "elif",
      userAvatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      storyImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      username: "ahmet",
      userAvatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      storyImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    },
    {
      username: "seda",
      userAvatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      storyImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      username: "can",
      userAvatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      storyImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    },
  ];

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedReceiver) {
      const message: Message = {
        id: messages.length + 1,
        sender: "ben",
        receiver: selectedReceiver,
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const handleCreatePost = () => {
    if (newPost.caption && newPost.imageUrl) {
      const post: Post = {
        id: posts.length + 1,
        username: "ben",
        userAvatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        imageUrl: newPost.imageUrl,
        caption: newPost.caption,
        likes: 0,
        comments: 0,
        isLiked: false,
      };
      setPosts([post, ...posts]);
      setNewPost({ caption: "", imageUrl: "" });
      setIsCreatePostOpen(false);
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-gray-50'}`}>
      <Header 
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        openCreatePost={() => setIsCreatePostOpen(true)}
      />

      <main className="max-w-2xl mx-auto pt-16 pb-20 px-4">
        <Stories stories={stories} onStoryClick={setSelectedStory} />

        <Dialog open={!!selectedStory} onOpenChange={() => setSelectedStory(null)}>
          <DialogContent className="sm:max-w-md">
            <DialogTitle>Hikaye</DialogTitle>
            {selectedStory && (
              <div className="relative aspect-square">
                <img
                  src={selectedStory.storyImage}
                  alt="Story"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={selectedStory.userAvatar} />
                    <AvatarFallback>{selectedStory.username[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span className="text-white font-semibold">{selectedStory.username}</span>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogTitle>Mesajlar</DialogTitle>
            <div className="mb-4">
              <Select onValueChange={setSelectedReceiver} value={selectedReceiver}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Kime mesaj göndermek istiyorsunuz?" />
                </SelectTrigger>
                <SelectContent>
                  {users.map((user) => (
                    <SelectItem key={user.username} value={user.username}>
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <span>{user.username}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-4 max-h-[60vh] overflow-y-auto">
              {messages
                .filter(message => 
                  (message.sender === selectedReceiver && message.receiver === "ben") ||
                  (message.sender === "ben" && message.receiver === selectedReceiver)
                )
                .map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "ben" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[70%] ${
                      message.sender === "ben"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    <p>{message.content}</p>
                    <span className="text-xs opacity-70">{message.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Mesajınızı yazın..."
                className="flex-1"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button onClick={handleSendMessage} disabled={!selectedReceiver}>
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={isCreatePostOpen} onOpenChange={setIsCreatePostOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogTitle>Yeni Gönderi Oluştur</DialogTitle>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Görsel URL</label>
                <Input
                  value={newPost.imageUrl}
                  onChange={(e) => setNewPost({ ...newPost, imageUrl: e.target.value })}
                  placeholder="Görsel URL'sini girin"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Açıklama</label>
                <Textarea
                  value={newPost.caption}
                  onChange={(e) => setNewPost({ ...newPost, caption: e.target.value })}
                  placeholder="Gönderiniz için bir açıklama yazın..."
                />
              </div>
              <Button onClick={handleCreatePost} className="w-full">
                Paylaş
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} onLike={handleLike} />
          ))}
        </div>
      </main>

      <BottomNav 
        isDarkMode={isDarkMode}
        openChat={() => setIsChatOpen(true)}
      />
    </div>
  );
};

export default Index;
