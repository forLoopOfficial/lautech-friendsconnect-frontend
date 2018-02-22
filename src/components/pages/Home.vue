<template>
  <section class="container">
    <div class="columns is-multiline">
      <profile-card v-for="member in members" :key="member.id" :member="member"></profile-card>
    </div>
  </section>
</template>

<script>
import ProfileCard from '@/components/common/ProfileCard'

export default {
  name: 'Home',
  components: {
    ProfileCard
  },
  data () {
    return {
      members: [
        {
          id: 1,
          photoUrl: 'https://developers.google.com/experts/img/user/100821293628700641509.jpg',
          name: 'Resul Caner Yildirim',
          level: '200',
          course: 'Computer Science'
        },
        {
          id: 2,
          photoUrl: 'https://developers.google.com/experts/img/user/104483043646729199751.jpg',
          name: 'Istanbul, Turkey',
          level: '100',
          course: 'Computer Science'
        },
        {
          id: 3,
          photoUrl: 'https://developers.google.com/experts/img/user/108062486318052703268.jpg',
          name: 'Asim Janjua',
          level: '500',
          course: 'Accounting'
        },
        {
          id: 4,
          photoUrl: 'https://developers.google.com/experts/img/user/108062486318052703268.jpg',
          name: 'Asim Janjua',
          level: '100',
          course: 'Info Tech'
        },
        {
          id: 5,
          photoUrl: 'https://developers.google.com/experts/img/user/108062486318052703268.jpg',
          name: 'Asim Janjua',
          level: '300',
          course: 'Computer Science'
        },
        {
          id: 6,
          photoUrl: 'https://developers.google.com/experts/img/user/108062486318052703268.jpg',
          name: 'Asim Janjua',
          level: '300',
          course: 'Computer Science'
        },
        {
          id: 7,
          photoUrl: 'https://developers.google.com/experts/img/user/108062486318052703268.jpg',
          name: 'Asim Janjua',
          level: '300',
          course: 'Computer Science'
        },
        {
          id: 8,
          photoUrl: 'https://developers.google.com/experts/img/user/108062486318052703268.jpg',
          name: 'Asim Janjua',
          level: '300',
          course: 'Computer Science'
        },
        {
          id: 9,
          photoUrl: 'https://developers.google.com/experts/img/user/108062486318052703268.jpg',
          name: 'Asim Janjua',
          level: '300',
          course: 'Computer Science'
        },
        {
          id: 10,
          photoUrl: 'https://developers.google.com/experts/img/user/108062486318052703268.jpg',
          name: 'Asim Janjua',
          level: '300',
          course: 'Computer Science'
        },
        {
          id: 11,
          photoUrl: 'https://developers.google.com/experts/img/user/108062486318052703268.jpg',
          name: 'Asim Janjua',
          level: '300',
          course: 'Computer Science'
        },
        {
          id: 90,
          photoUrl: 'https://developers.google.com/experts/img/user/108062486318052703268.jpg',
          name: 'Asim Janjua',
          level: '300',
          course: 'Computer Science'
        },
        {
          id: 100,
          photoUrl: 'https://developers.google.com/experts/img/user/108062486318052703268.jpg',
          name: 'Asim Janjua',
          level: '300',
          course: 'Computer Science'
        },
        {
          id: 110,
          photoUrl: 'https://developers.google.com/experts/img/user/108062486318052703268.jpg',
          name: 'Asim Janjua',
          level: '300',
          course: 'Computer Science'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
