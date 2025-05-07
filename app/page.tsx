// This directive tells Next.js that this is a client component
// Client components can use hooks and browser APIs
"Use Client";

// Import necessary components
import Container from "@/components/layout/Container";
import PostForm from "@/components/posts/PostForm";
import ListPosts from "@/components/posts/ListPosts";

// This is the main page component that Next.js will render at the root route (/)
export default function Home() {
  return (
    // Container component provides consistent layout and spacing
    <Container>
      {/* PostForm component for creating new posts */}
      <PostForm />
      {/* ListPosts component to display all posts */}
      <ListPosts />
    </Container>
  );
}
