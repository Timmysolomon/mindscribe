'use client';

import { notFound } from 'next/navigation';
import { use } from 'react';

const blogPosts = {
  'writing-daily': {
    title: 'Why Writing Daily Changed My Life',
    date: 'April 27, 2025',
    content: `Writing daily brought mental clarity, improved my writing skills, and boosted my confidence. It became a space to reflect, brainstorm, and track growth.`,
  },
  'cozy-cafes': {
    title: 'Top 5 Cozy Cafes for Writers',
    date: 'April 25, 2025',
    content: `Here’s a list of warm, ambient cafes perfect for writers to unplug and create. From vintage interiors to great coffee, they’ve got it all.`,
  },
  'writing-prompts': {
    title: '10 Prompts to Overcome Writer’s Block',
    date: 'April 22, 2025',
    content: `Try these 10 easy but powerful writing prompts when you’re stuck. They’re designed to unlock creativity and get your pen moving.`,
  },
  'benita-changed-my-life': {
    title: 'How Benita Changed My Life: A Journey of Love and Growth',
    date: 'May 14, 2025',
    content: `
      Love has a way of finding us when we least expect it. Sometimes, it feels like the universe aligns just right, bringing someone into our lives who completely changes our perspective. For me, that person is Benita. Since the day we met, she has not only brightened my world but also taught me valuable lessons about love, resilience, and self-worth.

      **Finding Love in Unexpected Places**  
      Before Benita, I often felt uncertain about relationships. I struggled with trust and constantly questioned whether I deserved real, lasting love. Meeting her was like a breath of fresh air — unexpected yet undeniably life-changing. Her smile, her laughter, and her genuine nature drew me in from the start. I couldn’t help but feel like I had finally found someone who truly saw me for who I am.

      **Learning to Love Myself**  
      One of the most beautiful things about Benita is how she encourages me to see my own worth. I’ve always been hard on myself, questioning whether I’m good enough or if I’ll ever measure up. She’s the one who reminds me to give myself grace, to see my strengths, and to stop letting past experiences define my present. With her, I’ve learned that it’s okay to be vulnerable, and that love means supporting each other through the highs and lows.

      **Facing Challenges Together**  
      Our relationship isn’t without challenges. We both have our moments of frustration and misunderstandings, but what sets us apart is our commitment to working through it. Even when we clash or struggle to see eye to eye, I know that Benita cares deeply. She pushes me to communicate openly, to be honest about my feelings, and to trust that we can overcome anything if we face it together.

      **Being Better for Each Other**  
      Benita has inspired me to grow as a person — to be more patient, understanding, and open-minded. She’s shown me that love is about being a team, supporting each other’s dreams, and building a future together. I want to be the best version of myself not just for me, but for her too. Knowing that she believes in me makes me feel capable of taking on any challenge life throws my way.

      **A Love That Makes Me Better**  
      When I think about the future, I see Benita by my side. I see us conquering our dreams, supporting each other’s passions, and building a life filled with love and laughter. She’s my biggest supporter, my confidant, and my motivation to keep pushing forward. I never knew that love could feel this safe and this genuine, and I’m grateful every day to have found her.

      **Conclusion**  
      Meeting Benita changed the way I see myself and my future. She’s taught me that love isn’t about perfection — it’s about growth, resilience, and choosing each other despite the challenges. I’m thankful for her presence in my life, and I know that with her by my side, I’m not just surviving — I’m thriving.
    `,
  },
};

export default function BlogPost({ params }) {
  // Unwrap the Promise with use()
  const slug = use(params).slug;

  const post = blogPosts[slug];

  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16 animate-fade-in">
      <h1 className="text-4xl font-bold mb-4 text-brown-800 dark:text-white">{post.title}</h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">{post.date}</p>
      <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed whitespace-pre-line">{post.content}</p>
    </article>
  );
}
