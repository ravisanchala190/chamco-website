import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import sanitizeHtml from 'sanitize-html';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

type WPTerm = { taxonomy: string; name: string; slug: string };

type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    author?: { name: string }[];
    'wp:term'?: WPTerm[][];
  };
  yoast_head_json?: {
    og_title?: string;
    og_description?: string;
    description?: string;
    og_image?: { url: string; width?: number; height?: number }[];
    og_url?: string;
  };
};

const WP_BASE = 'https://chamcodigital.com/wp-json/wp/v2';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://chamcodigital.com';

async function fetchPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(
      `${WP_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed=1`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const posts: WPPost[] = await res.json();
    return posts[0] ?? null;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const res = await fetch(`${WP_BASE}/posts?per_page=100&_fields=slug`);
    if (!res.ok) return [];
    const posts: { slug: string }[] = await res.json();
    return posts.map((p) => ({ slug: p.slug }));
  } catch {
    // Local builds may fail to reach the WordPress API (TLS / proxy).
    // Fall back to on-demand rendering — production builds on Vercel will pre-render.
    return [];
  }
}

const STRIP_ALL: sanitizeHtml.IOptions = { allowedTags: [], allowedAttributes: {} };

function decodeEntities(html: string): string {
  return sanitizeHtml(html, STRIP_ALL);
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  if (!post) return { title: 'Post not found — Chamco Digital' };

  const y = post.yoast_head_json ?? {};
  const title = decodeEntities(y.og_title ?? post.title.rendered);
  const description = decodeEntities(
    y.og_description ?? y.description ?? post.excerpt.rendered
  );
  const image = y.og_image?.[0]?.url;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

const SANITIZE_OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'p', 'a', 'ul', 'ol', 'li',
    'blockquote', 'strong', 'em', 'b', 'i', 'u',
    'br', 'hr', 'img', 'figure', 'figcaption',
    'table', 'thead', 'tbody', 'tr', 'th', 'td',
    'code', 'pre', 'span', 'div', 'sup', 'sub',
  ],
  allowedAttributes: {
    a: ['href', 'target', 'rel', 'title'],
    img: ['src', 'alt', 'width', 'height', 'loading', 'class'],
    '*': ['class', 'id', 'style'],
  },
  allowedSchemes: ['http', 'https', 'mailto', 'tel'],
  transformTags: {
    a: (tagName, attribs) => {
      const href = attribs.href ?? '';
      const isExternal =
        /^https?:\/\//.test(href) &&
        !href.startsWith('https://chamcodigital.com') &&
        !href.startsWith(SITE_URL);
      return {
        tagName,
        attribs: {
          ...attribs,
          ...(isExternal
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {}),
        },
      };
    },
  },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPost(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  if (!post) notFound();

  const authorName = post._embedded?.author?.[0]?.name ?? 'Chamco Digital';
  const categories = post._embedded?.['wp:term']?.[0] ?? [];
  const ogImage = post.yoast_head_json?.og_image?.[0];
  const safeBody = sanitizeHtml(post.content.rendered, SANITIZE_OPTIONS);
  const safeTitle = decodeEntities(post.title.rendered);

  return (
    <>
      <Navigation />
      <main style={{ backgroundColor: '#ffffff' }}>
        <article className="max-w-[820px] mx-auto px-6 py-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] hover:underline mb-8"
          >
            ← Back to Insights Hub
          </Link>

          {ogImage ? (
            <div
              className="relative w-full mb-8 overflow-hidden rounded-lg"
              style={{ aspectRatio: '16 / 9' }}
            >
              <Image
                src={ogImage.url}
                alt={safeTitle}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 820px) 100vw, 820px"
              />
            </div>
          ) : (
            <div
              className="relative w-full mb-8 overflow-hidden rounded-lg"
              style={{
                aspectRatio: '16 / 9',
                background:
                  'linear-gradient(135deg, #1a1a6e 0%, #2563eb 100%)',
              }}
            />
          )}

          {categories.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-4">
              {categories.map((c) => (
                <span
                  key={c.slug}
                  className="text-xs font-bold uppercase tracking-wider text-[#2563eb]"
                >
                  {c.name}
                </span>
              ))}
            </div>
          )}

          <h1
            className="font-bold text-[#111111] leading-tight mb-4"
            style={{ fontSize: '40px' }}
          >
            {safeTitle}
          </h1>

          <div className="flex items-center gap-3 text-sm text-gray-500 mb-10 pb-6 border-b border-gray-200">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{authorName}</span>
          </div>

          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: safeBody }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
