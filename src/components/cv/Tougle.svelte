<script>

    export let visible = true

</script>

    {#if visible}
        <span><i class="tougle-on resume-award-icon fas fa-toggle-on" 
                 data-fa-transform="shrink-2"></i></span>
        <!-- <div style="color:green;">green</div> -->
    {:else}
        <span><i class="resume-award-icon fas fa-toggle-off" 
                 data-fa-transform="shrink-2"></i></span>
        <!-- <div style="color:black;">black</div> -->
    {/if}


    <!-- <span> 
        <i class="resume-award-icon fas"
           class:fa-toggle-on="{visible}" 
           class:fa-toggle-off="{!visible}" 
           data-fa-transform="shrink-2"/> 
    </span>
    -->

