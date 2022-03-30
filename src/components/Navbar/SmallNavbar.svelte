<script>
    // cart button
    import CartButton from '../Cart/CartButton.svelte';
    //global store
    import globalStore from '../../stores/globalStore';
    let openSidebar = globalStore.toggleItem

    import {link} from 'svelte-routing';
</script>

<nav class='navbar'>
    <div class="nav-center">
        <!-- Sidebar Toggle -->
        <button class='btn-sidebar-toggle' on:click={()=>{
            openSidebar('sidebar',true)
        }}>
            <i class='fas fa-bars' />
        </button>
        <!-- logo -->
        <a href='/' use:link class='nav-logo'>
            <img src='/assets/images/logo.svg' class='logo' alt='razors logo' />
        </a>
    <!-- Cart Button -->
        <CartButton />
    </div>
</nav>