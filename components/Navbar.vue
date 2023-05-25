<template>
    <header class="bg-[rgba(255,255,255,0.05)] py-[15px] absolute z-50 w-screen">
        <nav class="w-[1200px] m-auto flex justify-between items-center">
            <NuxtLink to="/">
                <img src="/images/logo.svg" alt="MoovieTime">
            </NuxtLink>
            <form class="flex-grow mx-[36px] relative">
                <div class="relative">
                    <div class="absolute left-[12px] top-0 h-full flex items-center pointer-events-none">
                        <img src="/images/movie.svg" alt="Movie">
                    </div>
                    <input type="search" id="inputSearch" autocomplete="off"
                        class="block w-full py-[10px] px-[48px] text-base rounded-[4px] bg-[rgba(0,0,0,0.13)] text-[#E5E5E5]"
                        placeholder="Find movie" required>
                    <button type="submit" class="absolute right-[12px] top-0 h-full flex items-center">
                        <img src="/images/search.svg" alt="View">
                    </button>
                </div>
            </form>
            <div class="flex gap-[40px] font-semibold">
                <button class="flex gap-[11px] items-center text-[#E5E5E5]" id="dropdownHoverButton"
                    data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover">
                    <img src="/images/view-grid.svg" alt="View">
                    CATEGORIES
                </button>
                <div id="dropdownHover"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-[6px] shadow-[0px_4px_4px_rgba(0,0,0,0.5)] w-[153px]">
                    <ul class="py-2 text-xs text-[#1E232B] font-semibold" aria-labelledby="dropdownHoverButton">
                        <li v-for="genre in dataCategories?.genres">
                            <NuxtLink :to="'/movies?category=' + genre.id"
                                class="block px-4 py-2 hover:bg-gray-100 uppercase">
                                {{ genre.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <NuxtLink to="/movies" class="text-[#E5E5E5]">MOVIES</NuxtLink>
                <button class="text-[#E5E5E5]">TV SHOWS</button>
                <button class="text-[#E5E5E5]">LOGIN</button>
            </div>
        </nav>
    </header>
</template>

<script setup>
const { dataCategories } = useListCategories();
</script>