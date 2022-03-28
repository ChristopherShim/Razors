<script>
    import Hero from '../components/Hero.svelte'
    import {link} from 'svelte-routing'
    // Featured products

    // Old way of adding class to a <Link>
    // function getProps(){
    //     return {class:'btn btn-primary btn-hero'}
    // }
</script>


<Hero>
    <!-- <Link to='/products' class='btn btn-primary btn-hero'>Shop Snow</Link> --> 
    <!-- Above code was NOT able to do that in the past, but it can now. -->
    <!-- What didn't work? The idea that you were not able to add a class to a Link tag -->

    <!-- A way to get around it back then was to do this -->
    <!-- <Link to='products' getProps={getProps}>Shop Now</Link> -->
    <!-- Refer to Line 6-9 -->
    <!-- https://github.com/EmilTholin/svelte-routing and ctrl+f for 'getProps' and documentation is there on how to use it -->

    <a href='/products' class='btn btn-primary btn-hero' use:link>Shop Now</a>
    <!-- This is the 3rd way that also works. We are using use:link -->
    <!-- use:link makes it a bit easier for us. Since we imported {Link} from svelte.routing, we can use:link straight to whatever link our href is pointing to -->
    <!-- https://github.com/EmilTholin/svelte-routing ctrl+f for link for docs -->
</Hero>