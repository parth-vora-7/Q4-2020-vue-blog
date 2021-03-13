<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <router-link class="brand-name" :to="{ name: 'post-listing' }">MyWall</router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- <b-navbar-nav>
        <b-nav-item to="home">Home</b-nav-item>
        <b-nav-item to="about">About</b-nav-item>
      </b-navbar-nav> -->
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <!-- <b-navbar-nav right>
            <b-nav-item to="home">Login</b-nav-item>
            <b-nav-item to="about">Registration</b-nav-item>
        </b-navbar-nav> -->
        <!-- <b-nav-item-dropdown right>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    name: 'the-header'
}
</script>

<style>
  .brand-name {
    color: white;
    text-decoration: none;
    font-weight: bolder;
  }
  .brand-name:hover {
    text-decoration: none;
    color: white;    
  }
</style>