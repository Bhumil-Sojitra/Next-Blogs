import { createPost, deletePost } from "../../lib/action";

export default function ServerActionTest() {
  return (
    <div>
      <form action={createPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="body" name="body" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button>Create</button>
      </form>
      <form action={deletePost}>
        <input type="text" placeholder="postId" name="id" />
        <button>Delete</button>
      </form>
    </div>
  );
}
