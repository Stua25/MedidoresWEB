<template>
<div>
     <!-- <div  class="row p-4">
      <div class="col-md-12">
        <h1 class="d-inline"></h1>
        <router-link :to="{ name: 'InstitucionesHome' }" class="btn btn-primary float-right mt-2">
          Instituciones
        </router-link>
      </div>
    </div><br /> -->


    <div class="container">
        <div class="row">
            <div class="col align-self-center">
                <form method="POST" action="/logIng"> <!-- method="POST" action="/logIng"-->
                   <div class="form-group">
                        <label for="exampleInputEmail1">Correo Electrónico</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su Correo Electrónico" name="email" required>
                        <small id="emailHelp" class="form-text text-muted">Ingrese el correo dado por la empresa par acceder.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" name="password" placeholder="Ingrese su Contraseña" required>
                    </div>
                    <p style="text-align: center">
                        <b-button type="submit" variant="primary">Submit</b-button>                       
                        <!-- <v-ons-button modifier="large" style="margin: 6px 0" type="submit">
                            <router-link :to="{ name: 'InstitucionesHome' }" class="btn btn-primary">
                                Instituciones
                            </router-link>
                            Submit
                        </v-ons-button> -->
                    </p>
                </form>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    data(){
        return{
            items: {}            
        }
    }, 

    methods: {
        logIn(){
            let uri = 'http://localhost:4000/logIng';
                this.axios.post(uri).then((response) => {
                    this.items = response.data;
                    debugger;
                });
        }

    }
    
}
</script>

<style>
.page__background{
   background-color: rgb(233, 95, 95);
   background-image: url('https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=daba7a5f39e928a362da84ed75634f37&auto=format&fit=crop&w=1855&q=80')
}


</style>
