import React from "react";

function App() {
  return (
    <div className="container text-light">
      <div className="my-5">
        <h1>Spikerfeste</h1> - fordi bakglatt er kjipern.
      </div>
      <h4>Siste smørerapporter</h4>
      <div className="card bg-dark p-2">
        <span className="text-muted small mb-1">
          {new Date("13 Mar 2021").toLocaleString(undefined, {
            weekday: "short",
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })}
        </span>
        <span className="small">
          Teodor Nilseng Danielsen
          <span className="badge badge-success mx-2">Smøresjef</span>
        </span>
        <h5 className="my-2">
          Katastrofale ski i dag
          <span className="badge badge-primary mx-2">Nordmarka Nord</span>
        </h5>
        <div className="display-4 text-right">+5</div>
        <p className="font-weight-bold">Festesmurning</p>
        <div>
          <p>
            <a
              href="http://www.startskiwax.com/en/skiwaxes/kick-waxes/specialty-klisters/product/1548/start-universal-wide-klister"
              target="__blank"
            >
              Start Universal Wide
            </a>
          </p>
          <p>
            <a
              href="https://www.oslosportslager.no/produkt/swix-vr-50-festevoks-5792.aspx"
              target="__blank"
            >
              SWIX VR 50
            </a>
          </p>
        </div>
        <p className="font-weight-bold">Beskrivelse</p>
        <p>Smurte med Start universal dekket med VR50.</p>
        <p>
          Forhold for tørrvoks store deler av turen. Kunne fint gått med blå
          ekstra fra start på Stryken, til Mylla, Katnosa og opp fra Sandungen
          mot Kikut. Fra Kikut til Nittedal var det derimot klisterføre. Det
          eneste som fungerer skikkelig på en dag som denne er felleski. Hvis
          man ikke har felleski, kunne man prøvd med blå ekstra og VR 50 fra
          start og heller hatt med VR 60, VR 70 og eventuelt VM universalklister
          til bruk senere på dagen.
        </p>
        <p className="font-weight-bold">Anbefaling</p>
        <p>Felleski</p>
      </div>
    </div>
  );
}

export default App;
