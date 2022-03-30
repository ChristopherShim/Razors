<script>
    import links from '../../constants/links';
    import {link} from 'svelte-routing';
    import globalStore from '../../stores/globalStore';
</script>

<div class="siderbar-container">
    <div class="sidebar">
        <!-- header -->
        <div class="sidebar-header">
            <button class='btn-close' on:click={()=>{
                globalStore.toggleItem('sidebar',false)
            }}>
                <i class="fas fa-window-close"></i>
            </button>
        </div>
        <!-- site logo -->
        <img src='/assets/images/logo.svg' alt='razor logo' class='logo sidebar-logo'/>
        <!-- links -->
        <ul class="sidebar-links">
            {#each links as sideLink}
            <li>
                <a href={sideLink.url} use:link
                on:click={()=>{
                    globalStore.toggleItem('sidebar',false)
                }}
                >{sideLink.text}</a>
            </li>
            {/each}
            
        </ul>
    </div>
</div>