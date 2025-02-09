
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2, Image as ImageIcon, Camera, Sun, Moon, Send, Plus, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Post {
  id: number;
  username: string;
  userAvatar: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  isLiked: boolean;
}

interface Story {
  username: string;
  userAvatar: string;
  storyImage: string;
}

interface Message {
  id: number;
  sender: string;
  receiver: string;
  content: string;
  timestamp: string;
}

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

  const users = [
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
      <header className={`fixed top-0 left-0 right-0 ${isDarkMode ? 'dark:bg-gray-800' : 'bg-white'} border-b border-gray-200 z-50`}>
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold">Instagram Clone</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsCreatePostOpen(true)}>
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

      <main className="max-w-2xl mx-auto pt-16 pb-20 px-4">
        <div className="flex overflow-x-auto space-x-4 p-4 -mx-4 mb-6 scrollbar-hide">
          {stories.map((story, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center space-y-1 cursor-pointer"
              onClick={() => setSelectedStory(story)}
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

        <Dialog open={!!selectedStory} onOpenChange={() => setSelectedStory(null)}>
          <DialogContent className="sm:max-w-md">
            <DialogTitle>Hikaye</DialogTitle>
            <DialogDescription>
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
            </DialogDescription>
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
            <Card key={post.id} className={`overflow-hidden ${isDarkMode ? 'dark:bg-gray-800' : ''}`}>
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
                    onClick={() => handleLike(post.id)}
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
          ))}
        </div>
      </main>

      <nav className={`fixed bottom-0 left-0 right-0 ${isDarkMode ? 'dark:bg-gray-800' : 'bg-white'} border-t border-gray-200`}>
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-around">
          <Button variant="ghost" size="icon">
            <ImageIcon className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-pink-500">
            <Heart className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsChatOpen(true)}>
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Index;
