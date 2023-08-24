<template>

  <div class="sm:text-center md:text-left">
    <h2 class="mb-4 text-3xl md:text-2xl font-heading font-bold">JSON-API für Informationen von fussball.de</h2>
    <p class="mb-6">Nutze die api-fussball.de, um schnell und einfach auf aktuelle Informationen
      zu Mannschaften, Spielen und Ergebnissen deiner Fussball-Mannschaften zuzugreifen.</p>
    <p class="mb-6">Integriere die API in deine Website oder Anwendung und halte deine Nutzer
      stets auf dem Laufenden.</p>
    <a class="inline-block py-2 px-5 w-full md:w-auto text-lg leading-7 text-green-50 bg-emerald-600 hover:bg-emerald-500 font-medium text-center focus:ring-2 focus:indigo-600 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm"
       href="#">
      Schnellstart
    </a>

    <p class="mt-14">
      Die JSON-API ist einfach zu integrieren und kann ohne großen Aufwand in Ihre Projekte eingebunden werden. Nutzen
      Sie die Dokumentation, um sich schnell einen Überblick über die verfügbaren Funktionen und Abfrageoptionen zu
      verschaffe
    </p>

    <success-message message="Successfully uploaded" marginClass="mt-5"/>

    <p class="mt-8">
      Um eine optimale Performance zu gewährleisten, empfehlen wir die Verwendung von Caching für erfolgreiche Anfragen.
      So können Sie unnötige Serveranfragen vermeiden und die Ladezeiten für Ihre Nutzer minimieren.
    </p>

    <success-message message="api-fussball.de ist nur ein Crawler. Die Daten werden von fussball.de lediglich als JSON bereitgestellt." marginClass="mt-5"/>

    <h2 class="mt-8 font-medium text-mg">
      Erste Schritte
    </h2>

    <p class="mt-2">
      Erstelle zunächst einen API-Schlüssel, um eine Verbindung zur JSON-API herstellen zu können. Nutze diesen Schlüssel in deinen Anfragen, um auf die gewünschten Informationen zugreifen zu können.
    </p>

    <a class="pt-8" href="">API-Schlüssel erhalten</a>

    <h2 class="mt-8 font-medium text-mg">
      Erste Schritte
    </h2>
    <p class="mt-2">
      Solltest du während der Nutzung der API Probleme oder Fehler feststellen, kannst du uns gerne über die Funktion "Issues" auf GitHub kontaktieren. Wir werden uns um eine schnelle Lösung bemühen.
    </p>

  </div>


</template>

<script setup>


</script>
