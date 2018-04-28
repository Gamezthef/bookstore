

<template>
    <auth-form action='register' v-on:process='register($event)'/>
</template>

<scrip>
    import AuthForm from '@/form/Auth';
    import {db} from '@/main';
    export default{
        name:'register',
        components:(AuthForm),
         methods:{
             register:{
                 register(user){
                     console.log(user);
                     this.$store.dispatch('firebaseRegister',user)
                     .then(userRegister)=>{
                             const data={
                                 uid:userRegister.uid,
                                 email:user.mail,
                                 role:'customer'
                    };
                    db.collection('user')
                        .doc(userRegister.uid).set(data)
                        .then(()=>{
                            this.$store.commint('setRole',data.role);
                            this.$router.push('/');
                        });

                    }).catch((error))=>{
                        console.log(error);
                    }
                }
            }
        }
    }

</scrip>