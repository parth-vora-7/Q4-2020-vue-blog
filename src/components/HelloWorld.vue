<template>
  <div class="hello">
    <h1>Listing</h1>
    <ul>
      <li v-for="post in getAllPosts" :key="post.id">
        <router-link :to="{ name: 'post-detail', params: { slug: post.slug }}">{{post.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'HelloWorld',
  apollo: {
    getAllPosts: gql`query {
      getAllPosts { id, title, slug }
    }`,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
