import { createMDX } from "fumadocs-mdx/next";
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { transformerTwoslash } from "fumadocs-twoslash";

/** @type {import('next').NextConfig} */
const withMDX = createMDX({
  mdxOptions: {
    rehypeCodeOptions: {
      transformers: [
        ...rehypeCodeDefaultOptions.transformers,
        transformerTwoslash(),
      ],
    },
  },
});

export default withMDX({
  reactStrictMode: true,
});
