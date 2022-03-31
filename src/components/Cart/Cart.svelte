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
            <!-- cart header -->
            <div class="cart-header">
                <button class='btn-close' on:click={()=> {
                globalStore.toggleItem('cart', false)}}>
                    <i class="fas fa-window-close"></i>
                </button>
                <h2 class='cart-title'>Your Bag</h2>
                <span></span>
            </div>
            <!-- end of cart header -->

            <!-- cart items -->
            <p>cart items</p>
            <!-- end of cart items -->

            <!-- cart footer -->
            <div class="cart-footer">
                {#if user}
                <a href='/checkout' use:link class='btn btn-primary btn-block' 
                on:click={()=> {
                    globalStore.toggleItem('cart', false)
                    }}>checkout</a>
                {:else}
                <p class='cart-login'>In order to checkout 
                    <a href='/login' use:link  
                    on:click={()=> {
                        globalStore.toggleItem('cart', false)
                        }}>login</a>    
                </p>
                {/if}
            </div>
            <!-- end of cart footer -->

        </div>

    </div>
</div>