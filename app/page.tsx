"Use Client";
import Container from "@/components/layout/Container";
import PostForm from "@/components/posts/PostForm";
import ListPosts from "@/components/posts/ListPosts";

export default function Home() {
  return (
    //replaces react router
    <Container>
      <PostForm />
      <ListPosts />
    </Container>
  );
}
