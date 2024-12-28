<template>
  <div class="about-us-wrapper">
    <div class="section">
      <h2>O Nas</h2>
      <p>
        Witamy na naszym serwisie ogłoszeniowym, który został stworzony z myślą
        o osobach poszukujących idealnego miejsca na ziemi oraz tych, którzy
        chcą sprzedać swoje nieruchomości. Nasz serwis to przestrzeń, w której
        możesz szybko i wygodnie znaleźć wymarzony dom lub dotrzeć do
        potencjalnych kupujących.
      </p>

      <p>
        Naszą misją jest ułatwianie procesu sprzedaży i zakupu nieruchomości
        poprzez nowoczesne i intuicyjne narzędzia. Wierzymy, że każdy zasługuje
        na transparentność i profesjonalizm, dlatego dbamy o najwyższą jakość
        usług i bezpieczeństwo w naszym serwisie.
      </p>

      <p>Dlaczego warto wybrać nasz serwis?</p>
      <ul>
        <li>
          <strong>Łatwość użytkowania:</strong> Prosty i przejrzysty interfejs
          umożliwia szybkie zamieszczanie i przeglądanie ogłoszeń.
        </li>
        <li>
          <strong>Bezpieczeństwo:</strong> Wszystkie ogłoszenia są moderowane,
          aby zapewnić uczciwość i rzetelność informacji.
        </li>
        <li>
          <strong>Szeroki zasięg:</strong> Dzięki naszej platformie Twoje
          ogłoszenie dociera do szerokiego grona potencjalnych klientów.
        </li>
        <li>
          <strong>Wsparcie techniczne:</strong> Nasz zespół jest zawsze gotowy,
          aby pomóc i odpowiedzieć na Twoje pytania.
        </li>
      </ul>

      <p>
        Nasza platforma została zaprojektowana przez zespół pasjonatów z
        doświadczeniem w branży nieruchomości i technologii. Nieustannie
        pracujemy nad ulepszaniem serwisu, aby spełniać Twoje oczekiwania.
      </p>

      <p>
        Jeśli masz jakiekolwiek pytania, sugestie lub chcesz podzielić się swoją
        opinią, zapraszamy do kontaktu z naszym zespołem. Jesteśmy tutaj, aby
        pomóc Ci w każdej sytuacji.
      </p>

      <p>
        <strong>Dziękujemy za zaufanie!</strong> Razem tworzymy społeczność,
        która wspiera transakcje nieruchomościowe w Polsce. Cieszymy się, że
        jesteś częścią naszej platformy.
      </p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.about-us-wrapper {
  display: flex;
  background-color: white;
  flex-direction: column;
  width: 75%;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  color: black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .section {
    margin-bottom: 20px;
    h2 {
      margin-bottom: 10px;
      font-size: 30px;
    }
    ul {
      list-style-type: disc;
      margin-left: 20px;
      li {
        margin-bottom: 10px;
      }
    }
  }
}
.about-us-wrapper p {
  font-size: 20px;
}
</style>
