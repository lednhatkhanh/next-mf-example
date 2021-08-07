<template>
  <div class="flex flex-col items-start gap-y-4">
    <PostItem
      v-for="post of posts"
      :key="post.title"
      :post="post"
      @delete="handleDeletePost"
    />
  </div>
</template>

<script>
import PostItem from "./PostItem.vue";

export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["delete"],
  setup(props, options) {
    function handleDeletePost(title) {
      options.emit("delete", title);
    }

    return {
      handleDeletePost,
    };
  },
};
</script>
