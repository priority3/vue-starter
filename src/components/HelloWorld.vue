<script setup lang='ts'>
const { t, availableLocales, locale } = useI18n()
function toggleLocales() {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <div
    h-screen w-screen
    flex justify-center
    bg="dark-500"
  >
    <div
      w-120 h-50 bg="orange-200" rounded-xl shadow-xl
      mt-20 flex="~ col" items-center justify-around
    >
      <div flex gap-2>
        <a href="https://github.com/priority3/vue-starter">
          <div
            i-carbon-logo-github text-3xl cursor-pointer
          />
        </a>
        <div
          i-carbon-language text-3xl cursor-pointer
          @click="toggleLocales"
        />
      </div>
      <p font="sans">
        {{ t('home.helloWorld') }}
      </p>
    </div>
  </div>
</template>

<style scoped lang='scss'>
</style>
