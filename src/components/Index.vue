<template>
  
<div class="index container">
    <div class="card" v-for="s in smoothies" :key="s.id">
        <div class="card-content">
            <i class="material-icons delete" @click="deleteSmoothie(s.id)">delete</i>
            <h2 class="indigo-text">{{ s.title}}</h2>
            <ul class="ingredients">
                <li v-for="(i,index) in s.ing" :key="index">
                    <span class="chip">{{i}}</span>
                </li>
            </ul>
        </div>
    </div>
</div>


</template>

<script>
import db from '@/firebase/init'
import Axios from 'axios'
export default {
name:'Index',
data(){
    return{
        smoothies:[ ]
    }
},
methods:{
    deleteSmoothie:function(id){
        if(confirm('Are you sure to delete?')){
            db.collection('smoothies').doc(id).delete().then(()=>{
                this.smoothies = this.smoothies.filter(s=>{
                    return s.id != id;
                })
            })
        }else{
            return 'Ok'
        }
        // this.smoothies = this.smoothies.filter(s=>{
        //     return s.id != id
        // })
    }
},
created(){
    db.collection('smoothies').get()
    .then(snapshot =>{

        snapshot.forEach(doc=>{
            let smoothi = doc.data()
            smoothi.id = doc.id

            this.smoothies.push(smoothi)
        })


    }).catch(e=>{
        console.log(e);
    })

    // console.log(db.collection('smoothies'))

   
}
}
</script>

<style>
.index{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-top: 60px;
}
.index h2{
    font-size: 1.8em;
    text-align: center;
    margin-top: 0;
}

.index .delete{
    position:absolute;
    top:4px;
    right:4px;
    color: #aaa;
    cursor: pointer;
    font-size: 1.4em;
}
</style>