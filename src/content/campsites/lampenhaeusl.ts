import type { CampsiteConfig } from "../types";

/**
 * Camping Lampenhäusl — Fusch an der Großglocknerstraße.
 * Alle Inhalte aus der eigenen Quelle (raw/digest). Du-Anrede durchgehend.
 * Preise: reale Mobile-Home-Saisonpreise (Stellplatzpreis nicht veröffentlicht → auf Anfrage).
 */
const IMG = "/campsites/lampenhaeusl";

const lampenhaeusl: CampsiteConfig = {
  name: "Camping Lampenhäusl",
  shortName: "Lampenhäusl",
  slug: "lampenhaeusl",
  ort: "Fusch an der Großglocknerstraße",
  region: "Salzburger Land",
  brandKind: "Hotel · Restaurant · Camping",
  regionLong: "Bruck · Fusch · Großglockner · Salzburger Land · Österreich",

  heroVariant: "center",

  claim: "Camping am Tor zum Nationalpark Hohe Tauern",
  claimEmphasis: "Tor zum Nationalpark",
  intro:
    "Direkt an der Fuscher Ache, am Beginn der Großglockner Hochalpenstraße: ein kleiner, familiär geführter Platz mit 24 Stellplätzen — und dem ganzen Komfort des Hotels gleich nebenan.",

  statement: {
    text: "Vom Stellplatz blickst du auf die Dreitausender der Hohen Tauern — und abends wärmt dich die Sauna im Hotel.",
    emphasis: "die Sauna im Hotel",
  },

  pillars: [
    {
      title: "Am Tor zum Nationalpark",
      text: "Eingebettet ins Fuscher Tal, direkt an der Fuscher Ache und am Beginn der Glocknerstraße — die Hohen Tauern starten vor dem Vorzelt.",
      image: { src: `${IMG}/gallery-cd90d912aa.webp`, alt: "Campingplatz Lampenhäusl an der Fuscher Ache im Fuscher Tal" },
    },
    {
      title: "Klein und alpin",
      text: "Auf rund 2.000 m² teilen Familie Nindl und ihr Team 24 Stellplätze mit ihren Gästen — überschaubar, ruhig und mitten in der Bergwelt.",
      image: { src: `${IMG}/gallery-d65191819d.webp`, alt: "Wohnwagen mit Vorzelt am Camping Lampenhäusl vor den Hohen Tauern" },
    },
    {
      title: "Hotelkomfort nebenan",
      text: "Als Campinggast nutzt du Restaurant und Spielplatz des Hotels gleich nebenan einfach mit — die Saunalandschaft gegen Gebühr (Anmeldung & Bezahlung an der Rezeption).",
      image: { src: `${IMG}/amenity-e5849b1c8c.webp`, alt: "Saunalandschaft im Hotel Lampenhäusl" },
    },
  ],

  usps: [
    "24 Stellplätze",
    "Direkt an der Fuscher Ache",
    "Saunalandschaft im Hotel (gegen Gebühr)",
    "Hunde willkommen",
    "WLAN & Strom am Platz",
    "Gratis Öffis in der Region",
  ],

  trust: {
    heading: "Klein, persönlich, mittendrin",
    headingEmphasis: "persönlich",
    intro:
      "Familie Nindl führt Hotel, Restaurant und Camping mit eigener Hand — 24 Plätze, kurze Wege und 95 % ihrer Gäste, die das Lampenhäusl weiterempfehlen.",
  },

  awards: [],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/hero-f3a09567ec.webp`, alt: "Camping Lampenhäusl unter Kastanienbäumen vor den Bergen der Hohen Tauern" },
  },

  breather: {
    image: { src: `${IMG}/hero-ae36b473ed.webp`, alt: "Käfertal mit verschneiten Gipfeln am Ursprung der Fuscher Ache" },
    line: "Im Talschluss von Fusch entspringt die Fuscher Ache — die „Perle der Hohen Tauern“.",
  },

  camping: {
    heading: "Dein Platz an der Fuscher Ache",
    intro:
      "24 Stellplätze auf rund 2.000 m² — mit Strom, WLAN, eigenem Sanitärbereich und dem ganzen Hotelkomfort in Reichweite.",
    features: [
      {
        title: "24 Stellplätze auf der Wiese",
        text: "Ebene Plätze mit Stromanschluss für Wohnwagen, Wohnmobil und Zelt — duschen kannst du bis zum Abend deiner Abreise.",
        image: { src: `${IMG}/gallery-5dfdc80a4c.webp`, alt: "Stellplätze mit Wohnmobil und Zelten am Camping Lampenhäusl" },
      },
      {
        title: "Zelten unter Bäumen",
        text: "Schattige Plätze für dein Zelt, direkt am Hotel angeschlossen — alpines Campen, wie es sein soll.",
        image: { src: `${IMG}/gallery-b1ab3bdc09.webp`, alt: "Bunte Zelte auf der Wiese am Camping Lampenhäusl" },
      },
      {
        title: "Wohnwagen & Wohnmobil",
        text: "Genug Platz für Wohnwagen und Reisemobile, dazu eine versperrbare Radgarage für deine Bikes.",
        image: { src: `${IMG}/hero-9919fc715d.webp`, alt: "Zelte und Wohnwagen am Camping Lampenhäusl vor den Bergen" },
      },
      {
        title: "Spielplatz für die Kleinen",
        text: "Den Spielplatz des Hotels nutzen unsere Campinggäste frei mit; die Saunalandschaft gegen Gebühr — Anmeldung und Bezahlung an der Rezeption.",
        image: { src: `${IMG}/gallery-da82968efe.webp`, alt: "Kinder am Spielplatz beim Lampenhäusl" },
      },
      {
        title: "Restaurant & Gastgarten",
        text: "Frisch gekocht im à-la-carte-Restaurant, gemütlich im Gastgarten unter Kastanienbäumen — der Minimarkt liegt rund 150 m entfernt.",
        image: { src: `${IMG}/amenity-ced9d5058f.webp`, alt: "Gemütliche Restaurantstube im Hotel Lampenhäusl mit offenem Kamin" },
      },
    ],
  },

  mobilheime: {
    heading: "Lieber festes Dach? Unser Mobile Home",
    intro:
      "Kein eigener Wohnwagen? Im Mobile Home wohnst du ganz im „American Style“ auf 40 m² — voll ausgestattet und mit Grill direkt davor.",
    items: [
      {
        name: "Mobile Home",
        kind: "Bungalow für bis zu 4 Personen",
        text:
          "40 m² mit Wohnküche (Ausklappcouch für 2 weitere Gäste), Eltern- und zwei Kinderzimmern, Bad mit Dusche und getrenntem WC. Davor warten Sitzecke, Liegestühle und ein gemauerter Grill.",
        image: { src: `${IMG}/gallery-0c35279a0a.webp`, alt: "Mobile Home am Camping Lampenhäusl" },
        priceFrom: 89,
        features: [
          "40 m² für bis zu 4 Personen",
          "Wohnküche mit Backofen & Kühlschrank",
          "Eltern- und zwei Kinderzimmer",
          "Bad mit Dusche, WC getrennt",
          "Gemauerter Grill im Garten",
          "SAT-TV & WLAN gratis",
        ],
      },
    ],
  },

  aktivitaeten: {
    heading: "Vor der Tür: die Hohen Tauern",
    intro:
      "Wandern, Radeln, Fliegenfischen und Motorradfahren über 36 Kehren — die Region Bruck-Fusch-Großglockner beginnt direkt am Platz.",
    items: [
      {
        title: "Wandern in den Hohen Tauern",
        text: "Leichte Spaziergänge bis hochalpine Touren starten in Fusch — etwa zur Ponyhofalm, ins Sulzbachtal oder zur Gleiwitzerhütte.",
        image: { src: `${IMG}/activity-a98d3d65a1.webp`, alt: "Wanderweg im Fuscher Tal mit verschneiten Gipfeln" },
      },
      {
        title: "Rennrad & Mountainbike",
        text: "Kehre für Kehre die Großglockner Hochalpenstraße hinauf oder gemütlich am Tauernradweg — beim „Glocknerkönig“ wird daraus jedes Jahr ein Event.",
        image: { src: `${IMG}/activity-0e9600df55.webp`, alt: "Rennradfahrer auf der Großglockner Hochalpenstraße" },
      },
      {
        title: "Fliegenfischen an der Fuscher Ache",
        text: "Glasklares Wasser mit Bachforellen, gleich am Platz. Für deinen Fang gibt es Trockenraum, Kühl- und Gefriermöglichkeit im Haus.",
        image: { src: `${IMG}/activity-992f09d408.webp`, alt: "Fliegenfischer in der Fuscher Ache" },
      },
      {
        title: "Motorradtour Großglockner",
        text: "Fusch liegt am Beginn einer der schönsten Passstraßen der Ostalpen — 48 Kilometer und 36 nummerierte Kehren bis zur Franz-Josefs-Höhe.",
        image: { src: `${IMG}/activity-a4438a2daf.webp`, alt: "Großglockner Hochalpenstraße mit ihren Kehren" },
      },
      {
        title: "Almhütten & Einkehr",
        text: "Viele Touren führen zu bewirtschafteten Almen mitten im Nationalpark — auf der Ponyhofalm oder im Käfertal wartet die verdiente Jause.",
        image: { src: `${IMG}/gallery-2dbf702ffe.webp`, alt: "Bewirtschaftete Alm im Nationalpark Hohe Tauern bei Fusch" },
      },
    ],
  },

  anreise: {
    heading: "Anreise nach Fusch",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A10 Tauernautobahn Richtung Bruck an der Großglocknerstraße, dann auf der B107 wenige Kilometer nach Fusch — der Platz liegt direkt am Ort.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Zell am See, weiter mit dem Postbus nach Fusch. Als Gast nutzt du die öffentlichen Verkehrsmittel im Salzburger Land kostenlos.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Flughafen Salzburg rund 100 km, München etwa 200 km entfernt — der Rest geht bequem mit Bahn und Bus.",
      },
    ],
  },

  galerie: {
    heading: "Streifzug durch Fusch & die Hohen Tauern",
    headingEmphasis: "Hohen Tauern",
    intro:
      "Bergfrühling, klares Wasser und gemütliche Stuben — ein paar Eindrücke aus dem Lampenhäusl und seiner Umgebung.",
    tag: "Mai bis September",
    moreCount: 40,
    images: [
      { src: `${IMG}/gallery-a3665918dc.webp`, alt: "Bungalow am Camping Lampenhäusl unter Bäumen im Fuscher Tal" },
      { src: `${IMG}/hero-690f02da4a.webp`, alt: "Hotel Lampenhäusl vor verschneiten Bergen in Fusch" },
      { src: `${IMG}/activity-cba2122425.webp`, alt: "Klarer Gebirgsbach im Nationalpark Hohe Tauern" },
      { src: `${IMG}/amenity-bcad800d3a.webp`, alt: "Gemütliche Stube im Restaurant Lampenhäusl" },
    ],
  },

  booking: {
    heading: "Dein Platz am Tor zum Nationalpark",
    headingEmphasis: "Tor zum Nationalpark",
    intro:
      "Sag uns Zeitraum und Personenzahl — Familie Nindl meldet sich persönlich mit Verfügbarkeit und Angebot.",
    pricesArePlaceholder: false,
    priceNote:
      "Mobile Home, Preis pro Nacht inkl. Steuer (bis 4 Personen; mit Ausklappcouch bis zu 6 möglich) — zzgl. Ortstaxe & Mobilitätsabgabe € 2 pro Person/Nacht ab 15 J., Endreinigung € 35. Stellplatzpreise auf Anfrage. Reservierung ab 3 Nächten mit Anzahlung.",
    highlight: {
      title: "Hotelkomfort nebenan",
      text: "Restaurant und Spielplatz des Hotels nutzt du als Campinggast einfach mit, die Saunalandschaft gegen Gebühr (Anmeldung an der Rezeption).",
    },
    categories: [
      { id: "mobilehome-vor", label: "Mobile Home · Vorsaison", perNight: 89 },
      { id: "mobilehome-zwischen", label: "Mobile Home · Zwischensaison", perNight: 99 },
      { id: "mobilehome-haupt", label: "Mobile Home · Hauptsaison", perNight: 119 },
    ],
  },

  kontakt: {
    tel: "+43 6546 215 0",
    telHref: "tel:+4365462150",
    mail: "hotel@lampenhaeusl.at",
    facebook: "https://www.facebook.com/lampenhaeusl/",
    adresse: "Zeller Fusch 15 · 5672 Fusch am Großglockner · Salzburger Land",
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Mobile Home", href: "#mobilheime" },
    ]},
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default lampenhaeusl;
