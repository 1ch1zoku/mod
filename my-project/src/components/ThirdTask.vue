<template>
  <div>
    <h3>Завдання 3</h3>
    <p>id: {{ id }}</p>
    <p>Автор: {{ author }}</p>
    <p>Назва фото: {{ nameOfPhoto }}</p>
    <p>Посилання: {{URL}} </p>
    <p>Хештеги:</p>
    <ul id="arr-1">
      <li v-for="hashtag in hashtags" :key="hashtag.msg">
        {{ hashtag.msg }}
      </li>
    </ul>
    <p>Кількість лайків: {{likes}}</p>
    <p>Дата викладення: {{date}}</p>
    <p>Коментарі:</p>
    <ul id="arr-1">
      <li v-for="comment in comments" :key="comment.comment">
        {{ comment.comment }}
      </li>
    </ul>
    <router-link v-bind:to="'ft'">Завдання 1</router-link><br>
    <router-link v-bind:to="'st'">Завдання 2</router-link>
  </div>
</template>

<script>
export default {
  el: '#arr-1',
  name: 'ThirdTask',
  data () {
    return {
        id : "0",
        author : "Andy Luten",
        nameOfPhoto : "American Airlines",
        URL : "https://regnum.ru/uploads/pictures/news/2019/07/25/regnum_picture_156402552568061_normal.jpg",
        hashtags : [
          {msg: "airline"},
          {msg: "landscape"},
          {msg: "USA"}
          ],
        likes : 424,
        date : "28 Jule",
        comments : [
          {comment: "What a photo!"},
          {comment: "Wow"}, 
          {comment: "incredible"}
          ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
    list-style-type: none;
   }
ul {
    padding-left: 10px;
   }
</style>