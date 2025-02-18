import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gherkin termini</h1>
      </header>
      <main>
        <section>
          <h2>Tulkojumi</h2>
          <table>
            <thead>
              <tr>
                <th>Angliski</th>
                <th>Latviski</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Feature</td><td>Funkcionālā iezīme</td></tr>
              <tr><td>Background</td><td>Konteksts</td></tr>
              <tr><td>Scenario</td><td>Scenārijs</td></tr>
              <tr><td>Scenario Outline</td><td>Scenārijs pēc parauga</td></tr>
              <tr><td>Examples</td><td>Piemēri</td></tr>
              <tr><td>Given</td><td>Kad</td></tr>
              <tr><td>When</td><td>Ja</td></tr>
              <tr><td>Then</td><td>Tad</td></tr>
              <tr><td>And</td><td>Un</td></tr>
              <tr><td>But</td><td>Bet</td></tr>
              <tr><td>Or</td><td>Vai</td></tr>
            </tbody>
          </table>
        </section>
        <FunctionalFeature />
        <UserStory />
        <ScenarioCreation />
        <RubiksCubeAnalogy />
        <HappyPathScenario />
      </main>
    </div>
  );
}

const FunctionalFeature = () => (
  <div>
    <h2>Kas ir funkcionālā iezīme?</h2>
    <p>Funkcionālā iezīme ir sistēmas funkcionalitāte, kas tiek ieviesta, lai atbalstītu noteiktu spēju. Tā ietver nosaukumu, lietotājstāstu, ietekmi, piezīmes un scenārijus.</p>
  </div>
);

const UserStory = () => (
  <div>
    <h2>Lietotājstāstu formāts</h2>
    <p>Lietotājstāsti tiek rakstīti pēc šāda parauga:</p>
    <ul>
      <li>Kā [Lietotājs]</li>
      <li>Es vēlos [specifisku sistēmas uzvedību]</li>
      <li>Lai es varētu [sasniegt mērķi]</li>
    </ul>
  </div>
);

const ScenarioCreation = () => (
  <div>
    <h2>Scenāriju veidošana</h2>
    <p>Scenāriji apraksta funkcionālās iezīmes dažādos apstākļos, izmantojot:</p>
    <ul>
      <li>Given [nosacījums]</li>
      <li>When [darbība tiek veikta]</li>
      <li>Then [paredzētais rezultāts]</li>
    </ul>
  </div>
);

const RubiksCubeAnalogy = () => (
  <div>
    <h2>Rubika kuba metafora</h2>
    <p>Funkcionālās iezīmes var aplūkot kā Rubika kubu - tās pašas funkcionalitātes dažādās perspektīvas atklāj jaunas iespējas un apstākļus.</p>
  </div>
);

const HappyPathScenario = () => (
  <div>
    <h2>Veiksmīgā iznākuma scenārijs</h2>
    <p>Happy Path Scenario ir scenārijs, kurā funkcionalitāte tiek izpildīta bez traucējumiem, nodrošinot optimālo lietotāja pieredzi.</p>
  </div>
);

export default App;
