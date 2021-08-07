<template>
  <input
    class="px-4 py-2 bg-white border border-gray-300 rounded-sm"
    type="text"
    placeholder="Enter to filer"
    :value="value"
    @input="handleInput"
  />

  <button
    @click="handleReset"
    class="px-2 py-1 font-bold text-white transition duration-300 bg-pink-700 rounded hover:bg-opacity-80"
  >
    Reset
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: false,
    },
  },
  emits: ["input", "reset"],
  setup(props, options) {
    function handleInput(event) {
      options.emit("input", event.target.value);
    }

    function handleReset() {
      options.emit("reset");
    }

    return { handleInput, handleReset };
  },
};
</script>
