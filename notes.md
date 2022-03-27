Props
Props are imported files that you can easily call back inside your main App.svelte file with the name it's been imported as

<script>
    import Nested from './Nested.svelte'
</script>

<Nested />

Whatever code was written inside Nested.svelte will show up exactly as how it was written wherever <Nested /> is called.
===========================================================================================================================
TWO WAY BINDING (Svelte learning video 226)
This lets you change the value of an already assign variable, real time.

<input bind:value={name}>
<p>{name}</p>
You can change the variable using the input.
And you can change input using the variable.
So on the form, as I would be typing or delete characters from the name, the variable will also reflect the same changes.
============================================================================================================================
REACTIVE VARIABLES
$:
Svelte basically assigns a let on your behalf.
But the thing this, anything that's assigned to $: will be the reason for this call to happen.
If i wrote

$: console.log({name})

Whenever the {name} value is changed from another function that changes {name} value, console.log({name}) runs because but {name} portion was involved with what changed.
it's REACTIVE, it REACTS to whatever you assign it.
============================================================================================================================
setContext() and getContext()
import {setContext} from svelte.app
import {getContext} from svelte.app
setContext('string', key)
You are sort of bypassing when you're stuck importing just to import a file to reach a grandchild element/function.
You can setContext('string', key), string being that you can name it what you want and the key could be a function you want to run.

On another .svelte file, you can set getContext('string') and assign it to a const and call it within your code block.
So if you called getContext('string') on another .svelte file, as long as there is a sexContext('string', key), it will reach it and use the whatever logic it is tied to.
============================================================================================================================
on:click={} Svelte function
Allows you to directly attach an on click event to the button

function someFunction(value){
    return value
}
$: total = someFunction(x)
<button on:click={() => x++}>
</button>
============================================================================================================================
on:submit and preventDefault
A forms default action is to refresh the html page whenever something is submitted
By adding a preventDefault along with the on:submit, it prevents the default refreshing action
<form class="expense-form" on:submit|preventDefault={handleSubmit}>
</form>
============================================================================================================================
Svelte's if else function
{#if expression}...{/if}
{#if expression}...{:else if expression}...{/if}
{#if expression}...{:else}...{/if}
============================================================================================================================
Svelte's each function
{#each expression as name}...{/each}
{#each expression as name, index}...{/each}
{#each expression as name (key)}...{/each}
{#each expression as name, index (key)}...{/each}
{#each expression as name}...{:else}...{/each}
============================================================================================================================
class:name={value}

This allows you to dynamically assign/un-assign a class to a tag, based on what the {value} is.

Let's look at our current Budget Calculator example

let name = '';
let amount = null;
$: isEmpty = !name || !amount

<button type="submit" class="btn btn-block" class:disabled={isEmpty}>
    Add Expense
</button>

So our let name and amount currently holds a value of either an Empty String or Null amount.

We assign a reactive variable, isEmpty, that equals to
============================================================================================================================
Ternary Operator
A javascript operator but still an important function to understand
Takes 3 operands with a question mark

function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00')
}

console.log(getFee(true)) // $2.00
console.log(getFee(false)) // $10.00
console.log(getFee(null)) // $10.00

So what's happening?
The condition is, if isMember is true or false, output 2 of the given choices we've created.
if isMember is true, give us $2.00 as the output
if false, give us $10.00 as the output.
============================================================================================================================
LifeCycle Functions

import {onMount,onDestroy,beforeUpdate,afterUpdate} from 'svelte';
onMount(()=> {
    console.log('form has mounted');
})

beforeUpdate(()=> {
    console.log('before update');
})

afterUpdate(()=> {
    console.log('after update');
})

onDestroy(()=> {
    console.log('form is hidden');
})

onMount() lets me know whenever a certain callback function was called (mounted)

beforeUpdate()
afterUpdate() lets me know whenever a component is updated before/after any state change

onDestroy() lets me know whenever callback is ran before component is unmounted
============================================================================================================================
localStorage with onMount() functionality

function setLocalStorage(){
		localStorage.setItem('expenses', JSON.stringify(expenses));
	}

	onMount(()=> {
		expenses = localStorage.getItem('expenses')?
		JSON.parse(localStorage.getItem('expenses'))
		:[]
	})

    In this case localStorage.setItem() allows us to grab user's inputted data into our expenses list and save it locally using onMount() function.
    Inside onMount function, we are writing out. If it's true that there is already data inside expenses list, then get those items and save it locally.
    if there is no data, then return the empty array
============================================================================================================================
afterUpdate()

This function needs to be used carefully. In our budget calculator example our code is 

afterUpdate(()=>{
    console.log('after update');
    setLocalStorage();
})

our setLocalStorage(); is a very lightweight function that only ever updates when the user wants to.
You typically do not want component that takes a while to update, inside afterUpdate(), such as a API.
Always think about what it is you want to put inside afterUpdate() before doing so.
============================================================================================================================
Slots
Lets you dynamically put in content.

EXAMPLE WITH BASIC TEXT
Inside (App.svelte) we have
<Modal>
	<h1>hello world</h1>
</Modal>>

And inside (Modal.svelte) we have
<div class="modal-container">
    <div class="modal-content">
        <h3>Hello Modal</h3>
        <slot>Default Text</slot>
        <h2>Bottom heading</h2>
    </div>
</div>

Without a <slot> tag in Modal.svelte, our Hello World in App.svelte won't translate, nor will it be able to provide that 'hello world' content inside our modal.

But with a <slot> tag, it shows hello world inside our Modal.
Why? because it's sort of acts like a translator.
Although this is just with text, we can of course use slots for class names on a tag.

EXAMPLE WITH CLASS NAMES
Inside (App.svelte) we have
<Modal>
	<h1 slot='header'>Hello World</h1>
	<p slot='footer'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, nobis placeat? Necessitatibus ea odit accusantium facilis ut sint amet neque.</p>
</Modal>

And inside (Modal.svelte) we have
<div class="modal-container">
    <div class="modal-content">
       <slot name='header'></slot>
       <slot name='footer'></slot>
    </div>
</div>

Inside Modal.svelte, we are setting a slot tag with a name of 'header' and 'footer' 
Then inside our App.svelte, we are assigning those slot names into our <h1> and <p> tags.
<h1 slot='header'>
and
<p slot='footer'>
This allows the <h1> and <p> in our App svelte to adopt the name='header' and name='footer' tags from our Modal.svelte file.
============================================================================================================================
Transitions are visual effects on our elements

there are 7 functions: fade/blur/fly/slide/scale/draw/crossfade
we need to import which ever functions we want

import {fade} from 'svelte/transition'

<h4 transition:fly></h4>

using transition:fly will use the same effect for both times when the element appears/disappears off the page
we can customize what effect is uses for when it appears and disappears

<h4 in:fly out:slide></h4>

When the element appears, it'll 'fly' in but when the element disappears it'll 'slide' out
============================================================================================================================
Animate is another visual effect we can use on our elements
Just like transition, the way we use them is the same.

import {flip} from 'svelte/animate

<h4 animate:flip></h4>

you can use both Transitions and Animate within the same tag.

<h4 transition:fly animate:flip></h4>
============================================================================================================================
HTTP REQUESTS
LOOK INTO IT

FETCH CALLS?

ASYNC?

AWAIT?

onMount(async ()=> {
    let userData = await fetch('https://api.github.com/users')
})

ALSO LOOK INTO .json(); FUNCTION
WTH IS THAT!?
