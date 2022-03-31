<script>
    import globalStore from '../../stores/globalStore';
    import {fly,fade,blur} from 'svelte/transition';
    import {link} from 'svelte-routing';
    // itemlist
    let user = false;
</script>

<div class="cart-overlay" transition:blur>
    <div class="cart-container" transition:fly={{x:100}}>
        <div class="cart" transition:fade={{delay:400}}>
            <div class="cart-header">
                <button class='btn-close' on:click={()=> {
                globalStore.toggleItem('cart', false)}}>
                    <i class="fas fa-window-close"></i>
                </button>
                <h2 class='cart-title'>Your Bag</h2>
                <span></span>
            </div>
        </div>

    </div>
</div>