import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import authmodule from '@/modules/auth';

export default new Vuex.Store({
    state:{
        processing: false,
        loaded:false,
        alert:{
            type:'success',
            show:false,
            message:''
        }
    },
    mutations:{
        setloaded:(state,loaded)=>{
            state.loaded=loaded;
        },
        setAlertmessage:(alert,data)=>{
            state.alert.type=data.type;
            state.alert.show=data.show;
            state.alert.message=data.message;
//ciclo de vida de una alerta
            setTimeout(() => {
                state.alert.type='success';
                state.alert.show=false;
                state.alert.message='';
            }, data.timeout);
        }
    },
    modules:{
            authmodule
    }

});