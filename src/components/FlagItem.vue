<script>
import CountryFlag from 'vue-country-flag-next'
export default{
    name: 'FlagItem',
    props:{
        movie: Object
    },
    components: {
        CountryFlag
    }
}

</script>

<template>
                        <p v-if="movie.original_language === 'en'"><country-flag country='gb' size='small'/></p>
                        <p v-if="movie.original_language === 'it'"><country-flag country='it' size='small'/></p>
                        <p v-if="movie.original_language === 'fr'"><country-flag country='fr' size='small'/></p>
                        <p v-if="movie.original_language === 'es'"><country-flag country='es' size='small'/></p>
                        <p v-if="movie.original_language === 'de'"><country-flag country='de' size='small'/></p>
                        <p v-if="movie.original_language === 'zh'"><country-flag country='zh' size='small'/></p>
                        <p v-if="movie.original_language === 'pt'"><country-flag country='pt' size='small'/></p>
                        <p v-if="movie.original_language === 'sv'"><country-flag country='sv' size='small'/></p>
                        <p v-if="movie.original_language === 'cn'"><country-flag country='cn' size='small'/></p>
                        <p v-if="movie.original_language === 'hi'"><country-flag country='hi' size='small'/></p>
                        <p v-if="movie.original_language === 'ta'"><country-flag country='ta' size='small'/></p>
                        <p v-if="movie.original_language === 'jp'"><country-flag contry='jp' size='small'/></p>
                        <p v-if="movie.original_language === 'kp'"><country-flag contry='kp' size='small'/></p>
                        <p v-if="movie.original_language === 'kr'"><country-flag contry='kr' size='small'/></p>
</template>

<style lang="scss" scoped>

</style>