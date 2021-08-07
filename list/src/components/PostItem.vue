<template>
  <div class="flex flex-col px-4 py-2 border border-gray-400 rounded">
    <div class="text-3xl">{{ post.title }}</div>
    <div class="text-gray-700">{{ post.content }}</div>
    <button
      @click="handleDelete"
      class="px-2 py-1 font-bold text-white transition duration-300 bg-pink-700 rounded hover:bg-opacity-80"
    >
      Delete
    </button>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      require: true,
    },
  },
  emits: ["delete"],
  setup(props, options) {
    function handleDeleteButtonClick() {
      options.emit("delete", props.post.title);
    }

    return {
      handleDelete: handleDeleteButtonClick,
    };
  },
};
</script>
