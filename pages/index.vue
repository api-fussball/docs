<!-- ./pages/blog/[…slug.vue] -->

<script setup>
const { path } = '/home';
const { data } = await useAsyncData(`content-/home`, async () => {
  let article = queryContent().where({ _path: '/home' }).findOne();
  let surround = queryContent().only(["_path", "title", "description"]).sort({ date: 1 }).findSurround('/home');

  return {
    article: await article,
    surround: await surround,
  };
});

// set the meta
useHead({
  title: data.value.article.title,
  meta: [
    { name: "description", content: data.value.article.description },
    { name: "google-site-verification", content: "r9FGFeVaGDqbzte8H2WNKWIHVDKj7SJHgTDx1PYPvr8" },
  ],
});
</script>
<template>
  <main id="main" class="article-main">
    <header v-if="data.article" class="article-header">
      <h1 class="heading">{{ data.article.title }}</h1>
    </header>
    <hr />
    <section class="article-section">
      <article class="article">
        <ContentRenderer :value="data.article">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </article>
    </section>

  </main>
</template>

<style scoped>
.article-main {
  @apply p-4 max-w-6xl m-auto;
}

.article-header {
  @apply p-4 pb-12;
}

.article-header .heading {
  @apply font-extrabold text-5xl;
}

.article-header .supporting {
  @apply font-medium text-lg;
}

.article-section {
  @apply grid grid-cols-8;
}


.article {
  @apply col-span-full md:col-span-6 md:col-start-1 md:row-start-1 prose w-full p-4 max-w-3xl m-auto;
}

</style>
