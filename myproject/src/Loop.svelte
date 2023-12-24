<script>
    import Modal from "./Modal.svelte";
    import Form from "./Form.svelte";

    let people = [
        { name: "John", age: 30, beltcolor: "black", id: 1 },
        { name: "jimmie", age: 20, beltcolor: "red", id: 2 },
        { name: "james", age: 40, beltcolor: "green", id: 3 },
        { name: "jane", age: 50, beltcolor: "blue", id: 4 },
    ];

    const deletePeople = (id) => {
        people = people.filter((Object) => Object.id != id);
    };
    let change = false;
    

    const changeModalState = () => {
        change = !change;
    };

    const addperson=(e)=>
    {      
            change=false;
            console.log(e.detail);
            
            people= [e.detail,...people]

    }
</script>

<Modal {change} on:click={changeModalState}>
    <div slot="form">
    <Form  on:addperson={addperson}/>
    </div>
</Modal>

<main>
    <button
        on:click={() => {
            change = !change;
        }}>change</button
    >

    {#each people as person (person.id)}
        <div>
            <h4>{person.name}</h4>
            {#if person.beltcolor === "black"}
                <h5>International Grandmaster</h5>
            {:else if person.beltcolor === "red"}
                <h5>Grandmaster</h5>
            {:else if person.beltcolor === "green"}
                <h5>specialist</h5>
            {:else if person.beltcolor === "blue"}
                <h5>expert</h5>
            {/if}
            <p>{person.age} years old, {person.beltcolor} belt</p>
            <button
                on:click={() => {
                    deletePeople(person.id);
                }}>delete</button
            >
            <!-- inline event Handler -->
        </div>
    {:else}
        <p>There are no people to show.....</p>
    {/each}
</main>

<style>
    main {
        max-width: 240px;
        margin: 2rem auto;
        padding: 1em;
        border-radius: 0.25em;
    }
    div {
        margin: 1rem 0;
        padding: 1rem;
    }
</style>
