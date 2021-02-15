import { BlogPost } from "./blog-post";

export interface BlogPostComment {
    id: number,
    blog_post_id: number,
    blog_post?: BlogPost,
    name: string,
    comment: string,
    created_at: string
}
