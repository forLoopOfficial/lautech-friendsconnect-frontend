<template>
  <div class="navbar fixed-header">
    <nav class="container" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <h2>FriendsConnect</h2>
        </router-link>
        <router-link class="navbar-item" to="#">
          <h2 class="join">Join</h2>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<style>
.join{
  color: #3273dc;
}

.fixed-header {
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 999;
}
</style>
