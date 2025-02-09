import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";



export const habitsStore = (set,get) => ({
  count :0,
  increment : ()=>{
    set((state)=>({count : state.count+1}))
  },
  decrement :()=>{
    set((state)=>({count:state.count-1}))
  },
  clearData :()=>{
    useHabitsStore.persist.clearStorage();
  }
});

export const useHabitsStore = create(
    devtools(
        persist(
            habitsStore,{
                name:"counting",
                getStorage:()=>localStorage}
        )
    )
)