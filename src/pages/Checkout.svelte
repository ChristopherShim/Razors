<script>
    import {onMount} from 'svelte';
    import {navigate, link} from 'svelte-routing';
    import user from '../stores/user';
    import {cartTotal} from '../stores/cart';

    let name = '';
    // stripe vars
    let cardElement;
    let cardErrors;
    let card;
    let stripe;
    let elements;
    // isEmpty
    $: isEmpty = !name;

    onMount(()=>{
        if(!$user.jwt){
            navigate('/');
            return;
        }
        if ($cartTotal>0){
            stripe = Stripe('pk_test_51Km48REG5cPqpcF31qsK3C8qonRwDtfr1grkbvJDskSGaExAGSYFfu9jjJKsqDC1pxnJFALH3eIeB77XUAoR2mi800TNvzfzr5');
        elements = stripe.elements();
        card = elements.create('card');
        card.mount(cardElement);
        card.addEventListener('change', function(event){
            if(event.error){
                cardErrors.textContent = event.error.message;
            }
            else {
                cardErrors.textContent = '';
            }
        });
        }
        
    });

    async function handleSubmit(){
        let response = await stripe
        .createToken(card)
        .catch(error => console.log(error));
        const {token} = response;
        if(token){
            console.log(response)
            // token.id
            // submit the order
        }
        else {
            console.log(response)
        }
    }
</script>

{#if $cartTotal > 0}
<section class="form">
    <h2 class="section-title">checkout</h2>
    <form class="checkout-form" 
    on:submit|preventDefault={handleSubmit}>
    <h3>order total: ${$cartTotal}</h3>
    <!-- single input -->
    <div class="form-control">
        <label for='name'>your name</label>
        <input type="text" name="name" bind:value={name}>
    </div>
    <!-- end of single input -->

    <!-- stripe stuff -->
    <div class="stripe-input">
            <!-- info -->
            <label for='card-element'>Credit or Debitcard</label>
            <p class="stripe-info">
                Test using this credit card:
                <span>4242 4242 4242 4242</span>
                <br/>
                enter any 5 digits for zip code
                <br/>
                enter any 3 digits for CVC
            </p>
        <div id="card-element" bind:this={cardElement}>
            <!-- stripe -->
        </div>
        <div id="card-errors" bind:this={cardErrors} role='alert'>
        </div>
    </div>
    <!-- end of stripe stuff -->

    <!-- error message -->
    {#if isEmpty}
    <p class='form-empty'>please fill out name field</p>
    {/if}
    <!-- submit button -->
    <button type='submit' class='btn btn-block btn-primary' disabled={isEmpty} class:disabled={isEmpty}>submit</button>
</form>
</section>
{:else}
<div class="checkout-empty">
    <h2>your cart is empty</h2>
    <a href="/products" use:link class='btn btn-primary'>Fill It</a>
</div>
{/if}