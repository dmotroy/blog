import { BlogPostComment } from "./blog-post-comment";

export interface BlogPost {
    id: number,
    title: string,
    description: string,
    created_at: string,
    comments?: BlogPostComment[]
}
