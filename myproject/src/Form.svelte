<script>
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();
let name;
let beltcolor;
let age;
const AddPerson=()=>
{
     let person={name,beltcolor,age};
     dispatch("addperson",person)
}
</script>




    <h3>Add new person</h3>
    <form on:submit|preventDefault={AddPerson}>
        <input type="text" placeholder="name" bind:value={name} />
        <input type="text" placeholder="belt Color" bind:value={beltcolor}/><br>
        <input type="number" placeholder="age" bind:value={age}>
        <button>Add person</button>
    </form>
