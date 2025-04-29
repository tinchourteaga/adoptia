import React, { useState } from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../i18n';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const currentPost = blogPosts.find(post => post.id === selectedPost);

  if (selectedPost && currentPost) {
    return (
      <main className="pt-20 bg-gray-50">
        <div className="container mx-auto px-6 py-20">
          <button
            onClick={() => setSelectedPost(null)}
            className="flex items-center text-3B7FD9 hover:text-blue-700 transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            {t('blog.backToAll')}
          </button>

          <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
            <img 
              src={currentPost.imageUrl}
              alt={currentPost.title} 
              className="w-full h-[400px] object-cover"
            />
            <div className="p-8">
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar size={16} className="mr-2" />
                <time className="mr-4">{t('blog.postedOn')} {currentPost.date}</time>
                <span>{t('blog.by')} {currentPost.author}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                {currentPost.title}
              </h1>
              <div className="prose max-w-none text-gray-700">
                {currentPost.content}
              </div>
            </div>
          </article>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 bg-gray-50">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('blog.title')}</h1>
          <div className="h-1 w-20 bg-3B7FD9 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedPost(post.id)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <Calendar size={14} className="mr-2" />
                  <time>{post.date}</time>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
                <p className="text-3B7FD9 text-sm">{t('blog.readMore')} →</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;