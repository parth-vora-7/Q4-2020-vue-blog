<template>
  <div>
  <b-jumbotron>	
    <template #header>
		<b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image">
		</b-img>
		{{getPostBySlug.title}}
	</template>
    <hr class="my-4">
    <p>
      {{getPostBySlug.body}}
    </p>
  </b-jumbotron>
</div>
</template>

<script>
import gql from 'graphql-tag'
const POST_BY_SLUG =  gql`query ($slug: String!) {
  getPostBySlug (slug: $slug) {
    id,
    title,
    body
  }
}`;
export default {
    name: 'post-detail',
    apollo: {
      getPostBySlug: {
        query: POST_BY_SLUG,
        variables() {
          return { slug: this.$route.params.slug }
        },
      }
    },
}
</script>

<style>

</style>