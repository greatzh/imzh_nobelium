import PropTypes from 'prop-types'
import FormattedDate from "@/components/FormattedDate";
import { useConfig } from "@/lib/config";
import NotionRenderer from '@/components/NotionRenderer'
import Link from "next/link";

const BlogPost = ({ props }) => {
  const BLOG = useConfig();
  const {post, blockMap } = props

  return (
    <Link href={`${BLOG.path}/${post.slug}`}>
      <article key={post.id} className="mb-6 md:mb-8">
      <header className="flex flex-row justify-between md:flex-row md:items-baseline mb-4">
            <time className="flex-shrink-0 text-gray-600 dark:text-gray-400">
              <FormattedDate date={post.date} />
            </time>
          <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
            {post.title}
          </h2>
        </header>
        <main>
          <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
            <NotionRenderer recordMap={blockMap} fullPage={false} darkMode={dark} />
          </p>
        </main>
      </article>
    </Link>
  );
};

BlogPost.propTypes = {
  post: PropTypes.object.isRequired,
  blockMap: PropTypes.object.isRequired
}

export default BlogPost;
