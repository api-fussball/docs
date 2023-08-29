<!-- ./pages/blog/[…slug.vue] -->

<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  let article = queryContent().where({ _path: path }).findOne();
  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent().only(["_path", "title", "description"]).sort({ date: 1 }).findSurround(path);

  return {
    article: await article,
    surround: await surround,
  };
});


// set the meta
useHead({
  title: data.value.article.title,
  meta: [
    { name: "description", content: data.value.article.description }
  ],
});
</script>
<template>
  <main id="main" class="article-main">
    <header v-if="data.article" class="article-header">
      <h1 class="heading">{{ data.article.title }}</h1>
      <p class="supporting">{{ data.article.description }}</p>
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
