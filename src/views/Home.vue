<template>
  <div class="home">
    <h1> Home</h1>
    <p>Vue 3 Frontend, Firebase Backend.</p>
    <p>User Auth With Protected Routes</p>
  </div>
  <div class="info">
    <h3 class="burner">If you dont want to regsiter use this:</h3>
    <p>email: admin@test.dev</p>
    <p>password: admin1234</p>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {}
}
</script>

<style>
  .home {
    text-align: center;
    margin: 50px;
  }

  .home p {
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .info {
    margin: 50px;
  }

  .info p {
    font-size: 18px;
    line-height: 1.5;
  }

  .burner {
    color: red;
  }

  @media screen and (max-width: 768px) {
    .home {
      margin: 20px;
    }

    .home p {
      font-size: 20px;
    }

    .info {
      margin: 20px;
    }

    .info p {
      font-size: 16px;
    }
  }
</style>
