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

    <div class="d-flex p-2 bd-highlight transparent">
        <div class="col align-self-center">
            <form >
                <div class="form-group">
                    <label for="exampleInputEmail1">Correo Electrónico</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su Correo Electrónico">
                    <small id="emailHelp" class="form-text text-muted">Ingrese el correo dado por la empresa par acceder.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Ingrese su Contraseña">
                </div>
                <button type="submit" class="btn btn-primary">Ingresar</button>
            </form>
        </div>
    </div>

    

</div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
    
}
</script>

<style>

    .transparent{
        background-color: rgba(0, 8, 14, 0.326);  
    }



</style>
