<script>
    export let polls;
    import PollDetail from "./PollDetail.svelte";
</script>



<div class="poll-List">
    {#each polls as poll }
         <PollDetail {poll}/>
    {/each}
</div>


<style>
    .poll-List
    {
        display: grid;
        grid-template-columns:auto auto;
        column-gap: 20px;
    }
</style>