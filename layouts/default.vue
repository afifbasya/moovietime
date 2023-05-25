<template>
    <div class="bg-[#1E232B] text-white min-h-screen flex flex-col justify-between relative overflow-x-hidden">
        <div class="relative">
            <Navbar />
            <div class="pt-[74px]">
                <slot />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { 
    // initAccordions, 
    // initCollapses, 
    // initDials, 
    // initDismisses, 
    // initDrawers, 
    initDropdowns, 
    // initModals, 
    // initPopovers, 
    // initTabs, 
    // initTooltips
} from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    // initAccordions();
    // initCollapses();
    // initDials();
    // initDismisses();
    // initDrawers();
    initDropdowns();
    // initModals();
    // initPopovers();
    // initTabs();
    // initTooltips();
})

</script>