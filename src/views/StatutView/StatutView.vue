<template>
  <div class="statut-wrapper">
    <h2>REGULAMIN</h2>
    <div class="statut-text">
      <div class="section">
        <h2>1. Postanowienia ogólne</h2>
        <ul>
            <li>Niniejszy regulamin określa zasady korzystania z serwisu internetowego, zwanym dalej "Serwisem", umożliwiającego zamieszczanie ogłoszeń dotyczących sprzedaży domów.</li>
            <li>Właścicielem i administratorem Serwisu jest [Twoja Firma lub Imię i Nazwisko] z siedzibą w [adres siedziby].</li>
            <li>Korzystanie z Serwisu oznacza akceptację niniejszego regulaminu. Użytkownik zobowiązuje się przestrzegać jego postanowień.</li>
        </ul>
    </div>

    <div class="section">
        <h2>2. Definicje</h2>
        <ul>
            <li>Serwis – platforma internetowa dostępna pod adresem [adres strony], umożliwiająca zamieszczanie ogłoszeń dotyczących sprzedaży domów.</li>
            <li>Użytkownik – osoba fizyczna, prawna lub jednostka organizacyjna korzystająca z Serwisu.</li>
            <li>Ogłoszenie – informacja o sprzedaży domu zamieszczona przez Użytkownika w Serwisie.</li>
        </ul>
    </div>

    <div class="section">
        <h2>3. Rejestracja i konto Użytkownika</h2>
        <ul>
            <li>Rejestracja w Serwisie jest dobrowolna i niezbędna do zamieszczania ogłoszeń.</li>
            <li>Podczas rejestracji Użytkownik zobowiązany jest podawać prawdziwe i aktualne dane.</li>
            <li>Użytkownik odpowiada za utrzymanie poufności danych do logowania do konta.</li>
        </ul>
    </div>

    <div class="section">
        <h2>4. Zamieszczanie ogłoszeń</h2>
        <ul>
            <li>Użytkownik może zamieszczać ogłoszenia dotyczące sprzedaży domów zgodnie z tematyką Serwisu.</li>
            <li>Ogłoszenie powinno zawierać:
                <ul>
                    <li>Szczegółowy opis nieruchomości,</li>
                    <li>Cenę sprzedaży,</li>
                    <li>Dane kontaktowe Użytkownika.</li>
                </ul>
            </li>
            <li>Zabrania się zamieszczania ogłoszeń zawierających:
                <ul>
                    <li>Informacje niezgodne z prawem,</li>
                    <li>Treści obraźliwe, wulgarne lub wprowadzające w błąd,</li>
                    <li>Linki prowadące do stron naruszających prawo lub dobre obyczaje.</li>
                </ul>
            </li>
            <li>Administrator zastrzega sobie prawo do edycji, usunięcia lub zablokowania ogłoszeń naruszających regulamin lub przepisy prawa.</li>
        </ul>
    </div>

    <div class="section">
        <h2>5. Odpowiedzialność Użytkownika</h2>
        <ul>
            <li>Użytkownik odpowiada za treść zamieszczonych ogłoszeń oraz za ewentualne naruszenia praw osób trzecich.</li>
            <li>Administrator nie ponosi odpowiedzialności za treść ogłoszeń ani za transakcje zawierane między Użytkownikami.</li>
        </ul>
    </div>

    <div class="section">
        <h2>6. Odpowiedzialność Administratora</h2>
        <ul>
            <li>Administrator dołoży wszelkich starań, aby Serwis działał prawidłowo, jednak nie gwarantuje jego nieprzerwanej dostępności.</li>
            <li>Administrator nie odpowiada za szkody wynikłe z korzystania z Serwisu, w szczególności za przerwy w dostępie lub utratę danych.</li>
        </ul>
    </div>

    <div class="section">
        <h2>7. Postanowienia końcowe</h2>
        <ul>
            <li>Administrator zastrzega sobie prawo do zmiany regulaminu. O zmianach Użytkownicy będą informowani z wyprzedzeniem 14 dni.</li>
            <li>W sprawach nieuregulowanych niniejszym regulaminem mają zastosowanie przepisy prawa polskiego.</li>
            <li>Wszelkie spory związane z korzystaniem z Serwisu będą rozstrzygane przez sąd właściwy dla siedziby Administratora.</li>
        </ul>
    </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style>
.statut-wrapper {
  display: flex;
  background-color: white;
  flex-direction: column;
  width: 75%;
  margin: 0 auto;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.statut-text {
  width: 90%;
  margin: 0 auto;
  text-align: justify;
  color: black;
}
</style>
