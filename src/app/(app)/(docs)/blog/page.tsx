"use client";

import dayjs from "dayjs";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { getAllPosts } from "@/features/blog/actions";
import { PostItem } from "@/features/blog/components/post-item";
import type { Post } from "@/features/blog/types/post";

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Page() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);

  useEffect(() => {
    getAllPosts().then(setAllPosts);
  }, []);

  return (
    <>
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Blog</h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          A collection of articles on development, design, and ideas.
        </p>
      </div>

      <div className="relative pt-4">
        <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
        >
          {allPosts
            .slice()
            .sort((a, b) =>
              dayjs(b.metadata.createdAt).diff(dayjs(a.metadata.createdAt))
            )
            .map((post, index) => (
              <motion.div key={post.slug} variants={itemVariants}>
                <PostItem post={post} shouldPreloadImage={index <= 4} />
              </motion.div>
            ))}
        </motion.div>
      </div>

      <div className="h-4" />
    </>
  );
}
