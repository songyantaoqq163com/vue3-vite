import {defineStore} from 'pinia'
export const useDataStore=defineStore('dataStore',{
    state:()=>({
        dataArray:[]
    }),
    actions:{
        increment(data){
            this.dataArray=data;
        }
    },
    persist:true
})