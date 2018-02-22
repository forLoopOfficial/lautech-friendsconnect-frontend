<template>
  <section class="container">
    <div class="columns">
      <div class="tile is-ancestor">
        <section class="tile profile">
          <div class="tile is-4 profile-col-img">
            <img :src="user.photoUrl" class="profile-img image" :alt="user.name">
          </div>

          <div class="tile is-vertical profile-col-main">

            <div class="tile profile-header">
              <div class="content">
                <h2>{{user.name}}</h2>
                <p class="profile-course">{{user.course}}</p>
                <p class="profile-level">{{user.level}} Level</p>
              </div>
            </div>

            <div class="tile">
              <div class="content">
                <h3 id="biography">Biography</h3>
                <p>Rebecca is an Android Developer based in Johannesburg, South Africa.  She studied Information Technology at the University of Johannesburg. </p><p>She loves making apps that are beautiful and responsive.</p>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Detail',
  created() {
    this.user = {
      id: 1,
      photoUrl: 'https://developers.google.com/experts/img/user/100821293628700641509.jpg',
      name: 'Resul Caner Yildirim',
      level: '200',
      course: 'Computer Science'
    }
  },
  data () {
    return {
      user: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.profile {
  background-color: white;
  padding-left: 65px;
  position: relative;
  max-width: 825px;
  padding: 44px 0 45px 28px;
  margin-top: 20px;
}

.profile h2 {
  font-size: 34px;
}

.profile-img {
  overflow: hidden;
  border-radius: 50%;
  height: 148px;
  width: 100%;
  margin: 0 0 30px;
}

.profile-col-img {
  margin: 0 auto;
  position: relative;
  width: 19.5%;
  height: 148px;
  float: left
}

.profile-col-main {
  width: 71.7%;
  margin-left: 8.7%;
  clear: none;
  float: left;
}

.profile-header {
  padding: 0 0 64px;
  border-bottom: 1px solid #EDEDED;
}
</style>
