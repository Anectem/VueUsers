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
        <user-table :users="[
                    {
                        id: '1',
                        name: 'Pasha',
                        secondName: 'Zagorski',
                        lastName: 'Nikolaevich',
                        email: 'mail1@gmail.com',
                        phone: '6222770',
                        gender: 'm',
                        address: 'Grodno'
                    },
                    {
                        id: '2',
                        name: 'Masha',
                        secondName: 'Kraynaya',
                        lastName: 'Viktorovna',
                        email: 'mail2n@gmail.com',
                        phone: '6221223131',
                        gender: 'f',
                        address: 'Minsk'
                    }
                ]"/>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import UserButton from "@/components/UserButton.vue";
  import UserTable from "@/components/UserTable.vue";


  @Component({
    components: {
      UserButton,
      UserTable
    }
  })

  export default class Home extends Vue {
    
  }

</script>


<style scoped lang="scss">

</style>
