import * as React from 'react'
import type Vue from 'vue';
import { useRefCallback, useWatch } from '../hooks';
import { Post } from '../types'

type Props = {
    posts: Post[];
    onDelete: (title: string) => void;
}

export function PostList({posts, onDelete}: Props) {
    const postList = React.useRef<HTMLDivElement>(null);
  const vueRef = React.useRef<Vue.ComponentPublicInstance | null>(null)
  const deleteRef = useRefCallback(onDelete)

  function handlePostsChanged(changedPosts: Post[]) {
    if (vueRef.current) {
        (vueRef.current as unknown as {posts: Post[]}).posts = changedPosts
      }
    }

    useWatch(posts, handlePostsChanged)

  React.useEffect(() => {
    async function loadPostList() {
      const vue = await window['list'].get('./vue').then(factory => factory()) as typeof Vue;
      const VPostList = await window['list'].get('./PostList').then(factory => factory().default) as Vue.Component;
      const vueApp = vue.defineComponent({
        components: {
          PostList: VPostList,
        },
        setup() {
          const postsRef = vue.ref([])

            function handleDeleteEvent(title: string) {
                deleteRef.current(title)
            }

          return {
            posts: postsRef,
            handleDelete: handleDeleteEvent,
          };
        },
        template: `
          <PostList :posts="posts" @delete="handleDelete" />
        `
      })
      
      vueRef.current = vue.createApp(vueApp).mount(postList.current as Element);
    }

    loadPostList();
  }, [deleteRef])

    return <div ref={postList}></div>
}