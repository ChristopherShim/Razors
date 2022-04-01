<script>
    import Item from './Item.svelte';
    import cart, {cartTotal} from '../../stores/cart';
    import {fly} from 'svelte/transition';
    import {flip} from 'svelte/animate';
    // $: total = $cart.reduce((acc,curr)=>{
    //     return (acc += (curr.amount * curr.price))
    // },0)
</script>


<section class='cart-items'>
    <article>
        {#each $cart as cartItem, index (cartItem.id)}
        <div in:fly={{delay:(index+1)*500, x:100}}
        out:fly={{x:-100}} 
        animate:flip>
        <Item {...cartItem}/>
        </div>
        {:else}
        <h2 class='empty-cart'>currently empty</h2>
        {/each}
    </article>
    <h2 class='cart-total'>Total: ${$cartTotal}</h2>
</section>

