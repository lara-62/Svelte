<script>
   export let change;
 
</script>



{#if change===true}
<div class="backdrop" on:click|self >
   
    <div class="modal">

           <slot name="form"></slot>
    </div>
   
</div>

{/if}


<style>

    .backdrop
    {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: rgba(1,1,1,0.8);
        position: fixed;
        top:0px;
    }

    .modal
    {
        background-color: white;
        margin: 10% auto;
        width: 30rem;
        border-radius: 20px;
        padding: 1rem;
        text-align: center;
    }

</style>