<template>
  <div class="add-smoothie container">
      <h2 class="center-align indigo-text">Add New Smoothie Recipe</h2>
      <form @submit.prevent="AddSmoothie">
          <div class="field title">
              <label for="title">Smoothie Title</label>
              <input type="text" name="title" id="" v-model="title">
          </div>
          <div class="field">
              <span  v-for="(i,x) in ing" :key="x">
                 <span type="text" class="chip ing-display"> <i @click="deleteIng(x)" class="material-icons ico red-text">clear</i>{{i}} <i @click="editIng(i,x)" class="material-icons ico ">edit</i></span>
              </span>


              <!-- edit Ingredient -->
              <div v-if="edit">
                  
                <label for="title">Edit Ingredient</label>
              <input v-model="editIngre" type="text" name="title" id="" @keydown.tab.prevent="updateIng" >
              <p class="red-text" v-if="feedback2">{{ feedback2}}</p>
              </div>
              
                   
              <!-- edit Ingredient -->

          </div>
          <div class="field add-ing">
              <label for="add-ing">Add and ingredient</label>
              <input  type="text" name="add-ing" id="" @keydown.tab.prevent="addIng" v-model="another" placeholder="Press Tab to add">
            
          </div>
         
          <div class="field center-align">
              <p class="red-text" v-if="feedback">{{ feedback}}</p>
              <button type="submit" class="btn pink" >Add Smoothie</button>
          </div>
      </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'
import axios from 'axios'
export default {
    name:'Add',
    data(){
        return{
            title: null,
            another: null,
            ing:[],
            feedback:null,
            edit:false,
            editIngre:null,
            index :null,
            feedback2:null,
            slug:null
        }
    },
    methods:{
        AddSmoothie(){
           
            if(this.title){

                
           this.slug = slugify(this.title,{
               replacement:'-',
               remove:/[$*=+`~()'"!\-:@]/g,
               lower:true
           })

          

           db.collection('smoothies').add({
               title:this.title,
               ing:this.ing,
               slug:this.slug
           }).then(()=>{
               this.$router.push({name:'Index'})
           }).catch(e=>{
               console.log(e)
           })

           axios.post('http://localhost:8000/api/api/store').then(()=>{
                
           }).catch(e=>{
               console.log(e)
           })




                this.feedback = null
            }else{
                this.feedback = "Tittle can not be empty"
            }



        },

        addIng(){
           if(this.another){
               this.ing.push(this.another)
               console.log(this.ing)
               this.another = null
               this.feedback = null
           }else{
               this.feedback ='Can not be empty'
           }
        }
        ,
        deleteIng(index){
          this.ing.splice(index,1)
          console.log(this.ing)
          this.edit =false
        },
        editIng(item,index){
         this.edit = true
         this.editIngre = item

         this.index = index
        //  this.another = this.editIngre
        },
        updateIng(){
            if(this.editIngre){
            this.another = this.editIngre
            // this.ing.push(this.another)
            this.ing[this.index] = this.another
            this.edit =false

            this.another =null
            this.feedback2 = null
            }else{
                this.feedback2 = "can not be empty"
            }

            
        }
    }

}

</script>

<style>
.add-smoothie{
    /* margin-top: 30px; */
    padding: 20px;
    max-width: 500px;
}
.add-smoothie, h2{
    font-size: 1.5em;
}
.add-smoothie, .field{
    margin:20px auto;
}
.ing-display{
    display: inline-flex;
    align-items: center;
    
}
.ico{
    cursor: pointer;
    padding: 0px 10px 0px 10px;
}

</style>