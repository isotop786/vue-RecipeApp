<template class="">
  <div class="navbar">
      <nav class="nav-extended indigo darken-2">
          <div class="nav-content">
              <router-link :to="{name:'Index'}">
                  <span class="nav-title">Smoothie Recipes</span>
              </router-link>
              <a href="" class="btn-floating pulse btn-floating btn-large halfway-fab pink">
                  <router-link :to="{name:'Add'}">
                <i class="material-icons">add</i>
            </router-link>
              </a>
            
          </div>
      </nav>
  </div>
</template>

<script>
 
export default {
   
    name:'Navbar',
    data(){
        return{

        }
    }

}
</script>

<style>
.navbar nav{
    padding: 0px 25px;
}
</style>