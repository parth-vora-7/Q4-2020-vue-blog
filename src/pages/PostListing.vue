<template>
  <div class="row pt-3">
        <div class="col-sm-4 mt-4" v-for="post in getAllPosts" :key="post.id">
            <post-card :post="post"></post-card>            
        </div>
        <div class="col-md-12 text-center mb-4 mt-4">
          <b-button>Load More</b-button>
        </div>
    </div>
</template>

<script>
import PostCard from '../components/PostCard';

import gql from 'graphql-tag'

export default {
    name: 'post-listing',
    components: {
      PostCard
    },
    apollo: {
      getAllPosts: gql`query {
        getAllPosts { id, title, slug }
      }`,
    },
}
</script>

<style>
  
</style>