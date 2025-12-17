import type { VercelRequest, VercelResponse } from '@vercel/node';
import Parser from 'rss-parser';

const parser = new Parser({
  customFields: {
    item: [
      ['content:encoded', 'content'],
      ['media:thumbnail', 'thumbnail'],
    ]
  }
});

interface MediumPost {
  id: string;
  title: string;
  link: string;
  date: string;
  description: string;
  image?: string;
  readTime: string;
  category?: string;
}

function calculateReadTime(content: string): string {
  if (!content) return '5 min read';
  const text = content.replace(/<[^>]*>/g, '').trim();
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

function extractImageFromContent(content: string): string | undefined {
  if (!content) return undefined;
  
  // Try to extract image from content:encoded
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/i);
  if (imgMatch && imgMatch[1]) {
    return imgMatch[1];
  }
  
  // Try to extract from any img tag
  const imgTagMatch = content.match(/<img[^>]*src=['"]([^'">]+)['"]/i);
  if (imgTagMatch && imgTagMatch[1]) {
    return imgTagMatch[1];
  }
  
  return undefined;
}

function extractCategoryFromTags(categories?: string[]): string | undefined {
  if (!categories || categories.length === 0) return undefined;
  
  const categoryMap: Record<string, string> = {
    'startup': 'Startups',
    'startups': 'Startups',
    'technology': 'Tech',
    'tech': 'Tech',
    'programming': 'Tech',
    'software': 'Tech',
    'personal': 'Personal',
    'life': 'Personal',
    'productivity': 'Personal',
  };
  
  for (const tag of categories) {
    const lowerTag = tag.toLowerCase().trim();
    if (categoryMap[lowerTag]) {
      return categoryMap[lowerTag];
    }
  }
  
  return undefined;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const username = 'curtischen1'; // Your Medium username
  
  try {
    const feedUrl = `https://medium.com/feed/@${username}`;
    const feed = await parser.parseURL(feedUrl);
    
    const posts: MediumPost[] = feed.items.map((item, index) => {
      const content = (item as any).content || item.contentSnippet || '';
      const description = item.contentSnippet 
        ? item.contentSnippet.replace(/<[^>]*>/g, '').substring(0, 150).trim() + '...'
        : (item.title || '');
      
      return {
        id: item.guid || item.link || `medium-${index}`,
        title: item.title || 'Untitled',
        link: item.link || '',
        date: item.pubDate 
          ? new Date(item.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })
          : '',
        description,
        image: extractImageFromContent(content) || (item as any).thumbnail,
        readTime: calculateReadTime(content),
        category: extractCategoryFromTags(item.categories),
      };
    });

    // Cache for 1 hour
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    res.status(200).json({ posts });
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    res.status(500).json({ 
      error: 'Failed to fetch Medium posts',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

