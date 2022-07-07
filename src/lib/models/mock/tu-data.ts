import {PlaceType, type IPlaceRaw} from "../place"

export function convertTuData(): IPlaceRaw[] {
  return tuBuildings.map<IPlaceRaw>(({popup, latlng}) => {
    const [name, description, street, additionalAddressInfo, location] = popup.split("<br />")

    return {
      name: /^(.+)\(.+\)$/.exec(name)![1].trim(),
      shortName: /\(([^)]+)\)$/.exec(name)![1].trim(),
      address: {
        street: /^(.+)\s\S+$/.exec(street)![1].trim(),
        streetNumber: /^.+\s(\S+)$/.exec(street)![1].trim(),
        additionalAddressInfo: additionalAddressInfo.trim() || undefined,
        zip: /^(\d+)\s/.exec(location)![1].trim(),
        city: /^\d+\s(.+)$/.exec(location)![1].trim(),
      },
      description: description.trim() || undefined,
      type: PlaceType.BUILDING,
      location: {
        type: "Point",
        coordinates: [latlng[1], latlng[0]],
      },
    }
  })
}

/**
 * This data comes from the TU-Berlin website and was slightly modified for conversion.
 *
 * https://www.tu.berlin/studieren/uni-leben/campusplan/
 */
const tuBuildings = [
  {
    latlng: [52.53855, 13.3844],
    popup: "Ackerstraße (ACK)<br /><br />Ackerstraße 76<br /><br />13355 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.51131, 13.32396],
    popup: "Alte Mineralogie (AM)<br /><br />Hardenbergstraße 38<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.456885, 13.316232],
    popup: "Angewandte Botanik (AB)<br /><br />Rothenburgstraße 12<br /><br />12165 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.52325, 13.32337],
    popup:
      "Anwendungszentrum Mikroproduktionstechnik (AMP)<br /><br />Pascalstraße 13-14<br /><br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.51365, 13.32314],
    popup: "Architekturgebäude (A)<br /><br />Straße des 17. Juni 152<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.513753, 13.323691],
    popup: "Architekturgebäude, Flachbau (A-F)<br /><br />Straße des 17. Juni 152<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.51147, 13.32451],
    popup: "Bauingenieurgebäude (B)<br /><br />Hardenbergstraße 40A<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.511129, 13.324522],
    popup: "Bauingenieurgebäude, alter Flügel (BA)<br /><br />Hardenbergstraße 40<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.514504, 13.325102],
    popup:
      "Bell-Villa (BEL)<br />Kindergarten, Gerhard Ertl Center, Hybrid Lab<br />Marchstraße 6 und 8<br /><br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.511667, 13.323857],
    popup: "Bergbau und Hüttenwesen, Altbau (BH-A)<br /><br />Ernst-Reuter-Platz 1<br /><br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.511984, 13.322951],
    popup: "Bergbau und Hüttenwesen, Neubau (BH-N)<br /><br />Ernst-Reuter-Platz 1<br /><br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.510241, 13.330214],
    popup:
      "Bibliothek (BIB)<br />Universitätsbibliothek der Technischen Universität Berlin & Universität der Künste Berlin<br />Fasanenstraße 88<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.522818, 13.321089],
    popup: "Carnotstraße (CAR)<br /><br />Carnotstraße 1a<br /><br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.512472, 13.329562],
    popup: "Chemiegebäude (C)<br /><br />Straße des 17. Juni 115<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.514583, 13.327564],
    popup:
      "Elektromaschinen und Hochspannungstechnik (EMH)<br />Elektromaschinen (Gebäudeteil EM) und Hochspannungstechnik (Gebäudeteil HT)<br />Einsteinufer 11<br /><br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.514316, 13.325568],
    popup: "Elektrotechnik, Hörsaalgebäude (HE)<br /><br />Straße des 17. Juni 136<br /><br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.515001, 13.326094],
    popup: "Elektrotechnische Institute, Altbau (E)<br /><br />Einsteinufer 19<br /><br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.515435, 13.326679],
    popup: "Elektrotechnische Institute, Neubau (E-N)<br /><br />Einsteinufer 17<br /><br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.51106, 13.32564],
    popup: "Ernst-Ruska-Gebäude (ER)<br /><br />Hardenbergstraße 36A<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.51201, 13.32479],
    popup: "Erweiterungsbau (EB)<br /><br />Straße des 17. Juni 145<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.510259, 13.324855],
    popup: "Eugene-Paul-Wigner-Gebäude (EW)<br /><br />Hardenbergstraße 36<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.515128, 13.323289],
    popup:
      "Flugtechnische Institute (F)<br /><br />Marchstraße 12<br />Marchstraße 12, 12A, 12B, 14br <br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.514586, 13.321561],
    popup: "Fraunhoferstraße (FH)<br /><br />Fraunhoferstraße 33-36<br /><br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.544894, 13.342198],
    popup: "Gärungsgewerbe (GG-B)<br /><br />Seestraße 12/15<br /><br />13353 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.544114, 13.340964],
    popup: "Getreideverarbeitung (GV)<br /><br />Seestraße 11<br /><br />13353 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.507469, 13.328948],
    popup: "Hardenbergstraße (HBS)<br /><br />Hardenbergstraße 16-18<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.5123, 13.32697],
    popup: "Hauptgebäude (H)<br /><br />Straße des 17. Juni 135<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.51169, 13.332859],
    popup: "Hermann-Föttinger-Gebäude (HF)<br /><br />Müller-Breslau-Straße 8<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.511729, 13.332472],
    popup:
      "Hermann-Föttinger-Gebäude, Energielabor (HF-LA)<br /><br />Müller-Breslau-Straße 8<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.514455, 13.323492],
    popup: "Heizung und Lüftung (HL)<br /><br />Marchstraße 4<br /><br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.515709, 13.3261],
    popup: "Hochfrequenztechnik (HFT)<br /><br />Einsteinufer 25<br /><br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.525666, 13.320765],
    popup: "Kaiserin-Augusta-Allee (KAI)<br /><br />Kaiserin-Augusta-Allee 104-106<br /><br />10553 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.51596, 13.324587],
    popup: "Kerntechnik (KT)<br /><br />Marchstraße 18<br /><br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.457219, 13.299449],
    popup: "Königin-Luise-Straße (KL)<br /><br />Königin-Luise-Straße 22<br /><br />14195 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.5106, 13.328819],
    popup: "Kraft- und Fernheizwerk (ehem.) (KF)<br /><br />Fasanenstraße 1A<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.510822, 13.329608],
    popup: "Kraftfahrzeuge (K)<br /><br />Straße des 17. Juni 135<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.511848, 13.330622],
    popup: "Kraftwerkstechnik und Apparatebau (KWT)<br /><br />Fasanenstraße 1<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.511553, 13.333379],
    popup: "Lebensmittelchemie (ehem.) (L)<br /><br />Müller-Breslau-Straße 10<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.516577, 13.323734],
    popup: "Marchstraße (MAR)<br /><br />Marchstraße 23<br /><br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.513378, 13.326309],
    popup: "Mathematikgebäude (MA)<br /><br />Straße des 17. Juni 136<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.511436, 13.329828],
    popup: "Mechanik (Gebäudeteil) (M)<br /><br />Straße des 17. Juni 135<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.514116, 13.328449],
    popup: "Mechanische Schwingungslehre (MS)<br /><br />Einsteinufer 5<br /><br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.511717, 13.329517],
    popup: "Physikalische Chemie (PC)<br /><br />Straße des 17. Juni 135<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.52341, 13.323433],
    popup:
      "Produktionstechnisches Zentrum (PTZ)<br /><br />Pascalstraße 8-9<br />Pascalstraße 8-9, 13-14<br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.51106, 13.328696],
    popup:
      "Reuleaux-Haus, Eisenbahnlehranlage (SE-RH)<br /><br />Straße des 17. Juni 135<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.518885, 13.321363],
    popup:
      "Severin-Gelände, Häuser SG 1-5 (SG)<br /><br />Salzufer 17-19<br />Häuser SG 1-5<br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.520452, 13.321781],
    popup:
      "Severin-Gelände, Häuser SG 6-13 (SG)<br /><br />Dovestraße 6<br />Häuser SG 6-13<br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.501562, 13.260761],
    popup: "Sportzentrum der TU Berlin (SPW)<br /><br />Waldschulallee 71<br /><br />14055 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.508383, 13.325188],
    popup: "Steinplatz (ST)<br /><br />Steinplatz 2<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.515621, 13.325445],
    popup: "Technische Akustik (TA)<br /><br />Einsteinufer 25<br /><br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.515927, 13.325398],
    popup: "Technische Akustik, Prüfhalle (TAP)<br /><br />Einsteinufer 31<br /><br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.51346, 13.327811],
    popup: "Technische Chemie (TC)<br /><br />Straße des 17. Juni 124<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.511025, 13.3278],
    popup: "Thermodynamik und Kältetechnik (TK)<br /><br />Straße des 17. Juni 135<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.542271, 13.383343],
    popup:
      "Technologie-Park Humboldthain, ehem. TIB-Gelände (TPH)<br /><br />Gustav-Meyer-Allee 25<br />TIB1: Gebäude 13, 13B und 15; TIB2: Gebäude 20 und 21; TIB3: Gebäude 25; TIB4: Gebäude 16, 17a und 17b<br />13355 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.514655, 13.324431],
    popup: "Transmissionselektronenmikroskopie (TEM)<br /><br />Marchstraße 10<br /><br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.512947, 13.320215],
    popup:
      "TU-Hochhaus (ehem. Telefunken-Hochhaus) (TEL)<br /><br />Ernst-Reuter-Platz 7<br /><br />10587 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.511286, 13.329377],
    popup:
      "Verformungskunde, Zentraleinrichtung Hochschulsport (V)<br /><br />Straße des 17. Juni 135<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.511945, 13.334125],
    popup:
      "Versuchsanstalt für Wasserbau und Schiffbau (ehem.), Zentralwerkstatt (VWS)<br /><br />Müller-Breslau-Straße 15<br />Schleuseninsel<br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.513695, 13.324528],
    popup:
      "Wasserbau und Wasserwirtschaft (W)<br /><br />Straße des 17. Juni 144-144A<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.511853, 13.330265],
    popup: "Z-Gebäude (Z)<br /><br />Straße des 17. Juni 135<br /><br />10623 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
  {
    latlng: [52.545432, 13.345465],
    popup: "Zuckerindustrie (ZI)<br /><br />Amrumer Str. 32<br /><br />13353 Berlin",
    icon: "/typo3conf/ext/tub_base_package/Resources/Public/Icon/map-marker-primary.svg",
    shadow: "/typo3conf/ext/rt_simpleosm/Resources/Public/Icons/marker-shadow.svg",
  },
]
