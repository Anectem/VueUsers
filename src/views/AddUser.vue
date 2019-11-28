<template>
  <b-container>
    <h3> Добавление нового пользователя </h3>
    <b-form @submit.prevent="onSubmit(form)">
      <user-input-group type="text" input-id="input-1" form-id="input-group-1" label="Имя пользователя:"
                        place-holder="Введите имя" param='name' @group-input="onChange">
      </user-input-group>
      <user-input-group type="text" input-id="input-2" form-id="input-group-2" label="Фамилия пользователя:"
                        place-holder="Введите фамилию" param='secondName' @group-input="onChange">
      </user-input-group>
      <user-input-group type="text" input-id="input-3" form-id="input-group-3" label="Отчество пользователя:"
                        place-holder="Введите отчество" param='lastName' @group-input="onChange">
      </user-input-group>
      <user-input-group type="email" input-id="input-4" form-id="input-group-4 " label="Email пользователя:"
                        place-holder="Введите email" param='email' @group-input="onChange">
      </user-input-group>
      <user-input-group type="text" input-id="input-5" form-id="input-group-5" label="Номер телефона пользователя:"
                        place-holder="Введите номер телефона" param='phone' @group-input="onChange">
      </user-input-group>
      <user-input-group type="text" input-id="input-6" form-id="input-group-6" label="Адрес пользователя:"
                        place-holder="Введите адрес" param='address' @group-input="onChange">
      </user-input-group>
      <user-gender-radio-input param="gender" @radio-input="onChange">
      </user-gender-radio-input>
      <b-row align-h="between">
       <b-col lg="2" class="p-3" >
         <user-button link="/" type="button" name="Отмена" variant="warning" :block=true>
         </user-button>
       </b-col>
       <b-col lg="2"  class="p-3">
         <user-button type="submit" name="Добавить" variant="primary" :block=true>
         </user-button>
       </b-col>
     </b-row>
    </b-form>
  </b-container>
</template>
<script lang="ts">

  import {Component, Vue} from "vue-property-decorator";
  import UserButton from "@/components/UserButton.vue";
  import UserInputGroup from "@/components/UserInputGroup.vue";
  import UserGenderRadioInput from "@/components/UserGenderRadioInput.vue";
  import {IUser} from "@/types"
  import router from '@/router';

  @Component({
    components: {
      UserButton,
      UserInputGroup,
      UserGenderRadioInput
    }
  })

  export default class Home extends Vue {
    form: IUser = {
      id: '',
      name: '',
      secondName: '',
      lastName: '',
      email: '',
      phone: '',
      gender: '',
      address: ''
    };

    onChange(data: string[]) {
      (this.form as any)[data[0]] = data[1]
    }

    onSubmit(data: IUser) {
      this.$store.dispatch('ADD_USER', data)
              .then(() => router.push('/'));
    }
  }

</script>
