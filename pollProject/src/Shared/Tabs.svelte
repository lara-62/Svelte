<script>
export let tablist;
export let activeTab;
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();



</script>





<div class="tabs">
<u>
    {#each  tablist as  tab}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <li  class:active={tab===activeTab}  on:click={()=>{dispatch("ChangeTab",tab)}}>
        {tab}
    </li>
    {/each}
 
</u>
</div>



<style>
.tabs
{
    margin-bottom: 40px;
   
}

u
{
    list-style-type:none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content:center;
    width: 100%;
    text-decoration: none;
}
li
{
    margin: 0px 20px;
    font-size: 18px;
    color: #555;
    cursor: pointer;
}


.active
{
    color:#d91b42;
    border-bottom: 2px solid #d91b42;
    padding-bottom: 8px;
}
</style>