<template>
  <div class="person-card">
    <router-link :to="{ name: 'Detail', params: { user: member.id } }" class="person-card-inner">
      <div class="person-card-header">
        <img class="person-image" :src="member.photoUrl" :alt="member.name">
        <h4>{{member.name}}</h4>
        <p class="person-level">{{member.level}} Level</p>
      </div>
      <div class="person-card-footer">
        <span class="person-course">{{member.course}}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: ['member']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.person-card {
  text-align: center;
  width: 23.5%;
  margin: 8px .75%;
  box-shadow: 0;
  -moz-box-shadow: 0;
  -webkit-box-shadow: 0;
  -webkit-transition: box-shadow .3s;
  -moz-transition: box-shadow .3s;
  transition: box-shadow .3s;
  float: left
}

.person-card:hover {
  -webkit-box-shadow: 0 0 18px 0 rgba(50,50,50,0.5);
  -moz-box-shadow: 0 0 18px 0 rgba(50,50,50,0.5);
  box-shadow: 0 0 18px 0 rgba(50,50,50,0.5);
}

.person-image {
  border: 0;
  border-radius: 50%;
  margin: 10px auto 6px;
  display: block;
  height: 100px;
  margin: 10px auto 6px;
  max-width: 100%;
}

.person-card-header {
  background-color: white;
  padding: 6px 0 8px;
}

.person-card-header h4 {
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: #777;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.person-card-footer {
  background: #5B6ABF;
}

.person-course {
  font-weight: 500;
  color: #F1F2F2;
  font-size: 13px;
  margin-bottom: 4px
}

.person-course span {
  display: block;
}

.person-card-inner {
  display: block;
}

.person-card-inner a {
  text-decoration: none
}

.person-level {
  font-size: 13px;
  font-weight: 400;
  color: #757575;
}

.tile h4 {
  font-size: 20px;
  font-weight: 500;
  color: #777;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
</style>
