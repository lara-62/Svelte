<script>
import Button from "../Shared/Button.svelte";


import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

let elements={question:'',answerA:'',answerB:''};
let errors={question:'',answerA:'',answerB:''};
let HasError=true
const validateForm=(e)=>{

    HasError=false;

    e.preventDefault();
    console.log(elements);
    errors.question=''
    errors.answerA=''
    errors.answerB=''
    if(elements.question.trim().length<5)
    {
            errors.question='Questions must be at least 5 characters long!'
            HasError=true;
    }
    if(elements.answerA.trim().length<1)
    {
        errors.answerA='Please Enter an answer'
        HasError=true
    }
    if(elements.answerB.trim().length<1)
    {
        errors.answerB='Please Enter an answer'
        HasError=true
    }
    
    if (HasError=== false)
    {
        let poll={...elements, voteA:0,voteB:0}
        dispatch('AddToList',poll );
    }
}


</script>


<div>

    <form on:submit={validateForm}>

    <div class="form-field">
        <label for="question">Poll Question:</label>
        <input type="text" id="question"   bind:value={elements.question}>
        <div class="error">
        {errors.question}
        </div>
    </div>
    

    <div class="form-field">
        <label for="answerA"> Answer A:</label>
        <input type="text" id="answerA"   bind:value={elements.answerA}>
        <div class="error">
        {errors.answerA}
        </div>
    </div>

    <div class="form-field">
        <label for="answerB"> Answer B:</label>
        <input type="text" id="answerB"  bind:value={elements.answerB}>
        <div class="error">
        {errors.answerB}
        </div>
    </div>

    <Button type="secondary"  flat={true} >Add Poll</Button>
    </form>

</div>

<style>

    form
    {
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    .form-field
    {
        margin: 20px auto;
    }
    input
    {
       
        border-radius: 5px;
        width: 100%;
    }
    label
    {
        text-align: left;
        margin-bottom: 18px;
        color: #555;
        margin-left: 5px;
    }
    .error
    {
        color:#d91b42;
        font-size: 14px;
        margin-bottom: 2rem;
    }

</style>