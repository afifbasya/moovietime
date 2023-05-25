<template>
    <section class="relative">
        <div class="absolute w-full h-80 bg-[rgba(255,255,255,0.05)]"></div>
        <div class="relative w-[1200px] m-auto pt-24 pb-28 text-[#E5E5E5]">
            <div class="flex justify-between items-center mb-11">
                <CommonTitle>
                    <span class="text-2xl">Discover Movies</span>
                </CommonTitle>
                <div class="flex gap-5">
                    <template v-for="(item, index) in groupItems">
                        <button 
                            :class="'rounded-[32px] px-4 py-2 text-sm ' + (index === activeGroup ? 'bg-[#FF0000]' : 'bg-[rgba(0,0,0,0.2)]')"
                            @click="() => setActiveGroup(index)"
                        >
                            {{ item.label }}
                        </button>
                    </template>
                </div>
            </div>
            <div class="grid grid-cols-5 gap-[25px]">
                <template v-if="activeGroup" v-for="(movie, index) in popular?.results">
                    <CommonPoster
                        v-if="index < 10"
                        :url="'/movies/' + movie.id"
                        :rate="movie.vote_average?.toFixed(1)"
                        :genres="movie?.genre_ids?.map(genre => dataCategories?.genres?.find(category => genre === category.id)?.name)?.join(', ')"
                        :poster-url="'https://image.tmdb.org/t/p/original' + movie.poster_path"
                        :title="movie.title"
                        :release-year="movie.release_date.substring(0, 4)"
                    />
                </template>

                <template v-if="activeGroup == 0" v-for="(movie, index) in release?.results">
                    <CommonPoster
                        v-if="index < 10"
                        :url="'/movies/' + movie.id"
                        :rate="movie.vote_average?.toFixed(1)"
                        :genres="movie?.genre_ids?.map(genre => dataCategories?.genres?.find(category => genre === category.id)?.name)?.join(', ')"
                        :poster-url="'https://image.tmdb.org/t/p/original' + movie.poster_path"
                        :title="movie.title"
                        :release-year="movie.release_date.substring(0, 4)"
                    />
                </template>
            </div>
        </div>
    </section>
</template>

<script setup>
const { dataCategories } = useListCategories();
const { popular, release } = useListMovie();

const activeGroup = useState('activeGroup', () => 0)
const setActiveGroup = (index) => {
    activeGroup.value = index
}

const groupItems = [
    {
        label: "Popularity",
        path: "popular"
    },
    {
        label: "Release Date",
        path: "release"
    },
]
</script>