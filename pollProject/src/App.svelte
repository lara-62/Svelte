<script>
	import Header from "./Components/Header.svelte";
	import Footer from "./Components/Footer.svelte";
	import CreatePollForm from "./Components/CreatePollForm.svelte";
	import Tabs from "./Shared/Tabs.svelte";
    import PollList from "./Components/PollList.svelte";
  


	let tablist=['Current Polls','Add New Poll'];

	let activeTab='Current Polls';

    let polls=[{question:'whome do you love most?',answerA:'Father',answerB:'Mother',voteA:25,voteB:12}]



	const ChangeTab=(e)=>{
		// console.log(e.detail);
		activeTab=e.detail;
	}

	const addToList=(e)=>
	{
		let poll =e.detail;
		polls=[...polls,poll];
		activeTab='Current Polls';
	}
</script>


<Header/>


<main>


<Tabs  {activeTab} {tablist} on:ChangeTab={ChangeTab}/>

{#if activeTab==='Current Polls'}
	
    <PollList  {polls}/>

{:else if activeTab==='Add New Poll'}
	<CreatePollForm  on:AddToList={addToList}/>	

{/if}

</main>

<Footer/>

<style>
	
	main{

		width:960px;
		margin:40px auto;

	}
</style>