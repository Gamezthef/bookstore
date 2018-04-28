<template>
    <auth-form action='Login' v-on:process='Login($event)'/>
</template>

<scrip>
    import AuthForm from '@/form/Auth';
    export default{
        name:'Login',
    components:(AuthForm),
    methods:{
        register:{
            register(user){
                console.log(user);
            }
        }
    }
}
</scrip>