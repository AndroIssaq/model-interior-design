import React from 'react'

const Blog = () => {
    const posts = [
        {
          id: 1,
          title: '10 tips to start your career in design',
          category: 'Industry',
          description: 'Professional designers share their experience how they became the best at their fields.',
          image: '/path/to/image1.jpg' // Replace with your image path
        },
        {
          id: 2,
          title: 'The best website design practices',
          category: 'Web Design',
          description: 'Learn how to design user-friendly websites that convert and give unforgettable experience.',
          image: '/path/to/image2.jpg' // Replace with your image path
        },
        // Add more posts as needed
      ];
  return (
        <div className="container mx-auto p-4 bg-[#121111]">
          <h1 className="text-4xl font-bold text-center mb-8">اقرأ اخر اخبارنا</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <p className="text-sm text-gray-600 uppercase">{post.category}</p>
                  <h2 className="text-xl font-semibold my-2">{post.title}</h2>
                  <p className="text-gray-700">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Blog