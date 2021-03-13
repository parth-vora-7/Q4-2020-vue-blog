<template>
    <b-card
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <template #header>
        <h4 class="mb-0">{{post.title}}</h4>
      </template>
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </b-card-text>
      <template #footer>
        <router-link :to="{ name: 'post-detail', params: { slug: post.slug }}">Read More</router-link>
      </template>
    </b-card>
</template>

<script>
export default {
  name: "post-card",
  props: {
    post: {
      type: Object
    }
  }
};
</script>
