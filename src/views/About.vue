<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>uiColorPalette (from @client): {{ uiColorPalette }}</h2>
    <label for="">Change theme: </label>
    <select name="" id="" v-model="uiColorPalette">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
    <ul v-if="users">
      <li v-for="user in users" :key="user.id">{{ user.name }} ({{ user.books.map(u => u.title).join(", ") }})</li>
    </ul>
    <h3>Hello from apollo</h3>
    <ApolloQuery :query="require('../graphql/CommentQuery.graphql')">
      <template slot-scope="{ result: { loading, error, data } }">
  
        <div v-if="loading" class="loading apollo">Loading...</div>

        <div v-else-if="error" class="error apollo">An error occured</div>

        <div v-else-if="data" class="result apollo">{{ data.shortusers }}</div>

        <div v-else class="no-result apollo">No result :(</div>
    </template>
    </ApolloQuery>

  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    users: gql`query {
      users {
        id
        name
        books {
          id
          title
        }
      }
    }`,
    uiColorPalette: gql`query {
      uiColorPalette @client
    }`
  }
}
</script>

