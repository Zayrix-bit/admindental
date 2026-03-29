import { useState } from "react";
import { Plus, Search, MoreVertical, Eye, Edit3, Trash2, Calendar, User, Tag } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function BlogPage() {
  const [view, setView] = useState<"list" | "create">("list");

  const posts = [
    { id: 1, title: "The Future of Invisible Braces", author: "Dr. Smith", date: "Mar 24, 2026", category: "Orthodontics", status: "Published" },
    { id: 2, title: "5 Tips for a Brighter Smile at Home", author: "Dr. Jones", date: "Mar 20, 2026", category: "Oral Care", status: "Published" },
    { id: 3, title: "Understanding Dental Implants", author: "Dr. Smith", date: "Mar 15, 2026", category: "Surgery", status: "Draft" },
  ];

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Blog Management</h2>
          <p className="text-on-surface-variant mt-1">Educate your patients and boost your clinical authority.</p>
        </div>
        <button 
          onClick={() => setView(view === "list" ? "create" : "list")}
          className="primary-gradient text-on-primary px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-sm hover:opacity-90 transition-all"
        >
          {view === "list" ? <Plus className="w-5 h-5" /> : <Calendar className="w-5 h-5" />}
          {view === "list" ? "Create New Post" : "Back to List"}
        </button>
      </div>

      {view === "list" ? (
        <>
          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 w-4 h-4" />
              <input
                className="w-full bg-surface-container-low border-none rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary transition-all outline-none"
                placeholder="Search articles..."
                type="text"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <select className="flex-1 md:flex-none bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-bold outline-none">
                <option>All Categories</option>
                <option>Orthodontics</option>
                <option>Oral Care</option>
                <option>Surgery</option>
              </select>
              <select className="flex-1 md:flex-none bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-bold outline-none">
                <option>All Status</option>
                <option>Published</option>
                <option>Draft</option>
              </select>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-surface-container-lowest rounded-2xl shadow-custom overflow-hidden border border-outline-variant/5 group">
                <div className="aspect-video relative overflow-hidden">
                  <img src={`https://picsum.photos/seed/blog-${post.id}/600/400`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm",
                      post.status === "Published" ? "bg-tertiary-container text-tertiary" : "bg-surface-container text-on-surface-variant"
                    )}>
                      {post.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest mb-3">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <User className="w-3 h-3" />
                      </div>
                      <span className="text-xs font-semibold text-on-surface-variant">{post.author}</span>
                    </div>
                    <span className="text-[10px] font-bold text-on-surface-variant/50">{post.date}</span>
                  </div>
                  <div className="mt-6 flex gap-2">
                    <button className="flex-1 bg-surface-container-low hover:bg-primary hover:text-on-primary py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2">
                      <Edit3 className="w-3.5 h-3.5" /> Edit
                    </button>
                    <button className="p-2 bg-surface-container-low hover:bg-surface-container rounded-lg text-on-surface-variant transition-all">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-surface-container-low hover:bg-error/10 hover:text-error rounded-lg text-on-surface-variant transition-all">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-custom border border-outline-variant/5 max-w-4xl mx-auto">
          <h3 className="font-headline text-2xl font-bold mb-8">Create New Article</h3>
          <form className="space-y-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Article Title</label>
              <input className="w-full bg-surface-container-low border-none rounded-xl py-4 px-5 text-lg font-bold outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="Enter a catchy title..." />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Category</label>
                <select className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-bold outline-none">
                  <option>Orthodontics</option>
                  <option>Oral Care</option>
                  <option>Surgery</option>
                  <option>General Health</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Author</label>
                <select className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-bold outline-none">
                  <option>Dr. Smith</option>
                  <option>Dr. Jones</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Featured Image</label>
              <div className="aspect-video bg-surface-container-low rounded-xl border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-primary transition-all">
                <Plus className="w-8 h-8 text-on-surface-variant/30" />
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Click to upload image</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Content</label>
              <textarea className="w-full bg-surface-container-low border-none rounded-xl py-4 px-5 text-sm font-medium outline-none focus:ring-2 focus:ring-primary transition-all min-h-[300px] resize-none" placeholder="Start writing your article here..." />
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button type="button" onClick={() => setView("list")} className="px-6 py-3 rounded-lg font-bold text-on-surface-variant hover:bg-surface-container-low transition-all">Cancel</button>
              <button type="button" className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-lg font-bold hover:bg-secondary-container/80 transition-all">Save as Draft</button>
              <button type="button" className="primary-gradient text-on-primary px-10 py-3 rounded-lg font-bold shadow-sm hover:opacity-90 transition-all">Publish Post</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
