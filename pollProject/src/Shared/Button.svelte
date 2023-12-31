<script>
export let type ='primary';
export let flat=false;
export let inverse=false;
</script>

<button class={type} class:flat={flat} class:inverse={inverse}>
    <slot></slot>
</button>

<style>
    button{

     border: none;
     border-radius: 5px;
     padding: 10px 20px;
     /* font-size: 18px; */
     font-weight: bold;
     cursor: pointer;
     box-shadow: 1px 2px 3px rgba(0,0,0,0.2);

    }
 .primary{
     background: #d91b42;
     color: #fff;
     
 }
 .secondary
 {
    background-color: #45c496; 
     color: #fff;
 }
 .flat
 {
    box-shadow: none;
 }

 .primary.inverse
 {
     background: #fff;
     color: #d91b42;
     border: 2px solid #d91b42;
 }
 .secondary.inverse{
        background: #fff;
        color: #45c496;
        border: 2px solid #45c496;
 }
</style>