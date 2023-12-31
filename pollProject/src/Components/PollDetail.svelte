<script>
    export let poll;
</script>



<div class="pollDetail">
    <h4>
        {poll.question}
    </h4>
    <div class="answera answers">
         {poll.answerA} ({poll.voteA} votes)
    </div>
    <div class="answerb answers">
        {poll.answerB} ({poll.voteB} votes)
    </div>

</div>



<style>
        .answers
        {
           
            margin: 10px 0px;
            font-size: 14px;
           
        }
</style>