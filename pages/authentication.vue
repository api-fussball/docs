<script setup>

</script>
<template>

  <div class="sm:text-center md:text-left">
    <div v-html="body" class="note-custom"/>
    <h2 class="mb-4 text-3xl md:text-2xl font-heading font-bold">Authentifizierung</h2>

    <p class="mt-2">
      Um auf die Endpunkte der Protokoll-API zugreifen zu können, musst du deine Anfragen authentifizieren. In dieser
      Anleitung werden wir uns ansehen, wie die Authentifizierung funktioniert. Api-fussball.de bietet eine einfache
      Authentifizierung über Token.
    </p>

    <h2 class="mt-8 font-medium text-mg">
      Token authentifizieren
    </h2>
    <p class="mt-2">
      Wenn du deine E-Mail sendest, erhältst du dein persönliches Token, mit dem du nun die API autorisieren kannst.
    </p>

    <pre>
      <code class="language-bash">
        curl -X POST https://api-fussball.de/auth/register
      </code>
    </pre>

    <div class="code-container hljs">
      <pre><code ref="codeBlock">curl -X POST https://api-fussball.de/auth/register</code></pre>

    </div>

  </div>


</template>


<style>

</style>
