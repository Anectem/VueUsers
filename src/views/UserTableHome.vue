<template>
  <div class="home">
    <b-container>
      <b-row class="pb-3">
        <b-col align-self="center" cols="10">
          <h2> Список пользователей </h2>
        </b-col>
        <b-col align-self="end" cols="2" class="p-1">
          <user-button type="button" variant="primary" name="Добавить пользователя" link="addUser"/>
        </b-col>
      </b-row>
      <b-row class="p-1">
        <user-table :users="computedUsers" @delete-user="deleteUser" @details-user="setUserDetails"/>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import UserButton from "@/components/UserButton.vue";
  import UserTable from "@/components/UserTable.vue";
  import router from '@/router';


  @Component({
    components: {
      UserButton,
      UserTable
    }
  })

  export default class UserTableHome extends Vue {

    get computedUsers() {
      return this.$store.getters.USERS
    }

    setUserDetails(id: string, route: string) {
      this.$store.dispatch('SET_USER', id)
              .then(() => router.push(`${route}`))
    }

    deleteUser(id: string) {
      this.$store.dispatch('DELETE_USER', id)
              .then(() => this.$store.dispatch('GET_USERS'))
    }
    mounted() {
      this.$store.dispatch('GET_USERS')
    }
  }

</script>


<style scoped lang="scss">

</style>
