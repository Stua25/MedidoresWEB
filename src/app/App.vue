<template>
  <div style="width: 100%">
  <div style="width: 100%">
    <b-navbar type="dark" variant="primary" toggleable>
      <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_dropdown_collapse">
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Link</b-nav-item>
          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>

<!-- navbar-dropdown-1.vue -->
    <!-- CONTENT -->
    <div style="width: 100%" class="container">
          <transition name="fade">
          <router-view></router-view>
          </transition>
    </div>
  </div>
</template>

<style>
  .fade-enter-active .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter .fade-leave-active {
    transition: 0;
  }
  .container{
    margin-top: 5%;
    padding: 5%
    }
</style>

<script>
  export default {

  }
</script>
