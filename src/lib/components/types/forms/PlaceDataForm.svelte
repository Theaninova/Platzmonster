<script lang="ts">
    import {placeFormNames} from "../../../models/form-names/place-data";
    import type {IPlace} from "../../../models/place";

    export let place: IPlace = undefined
</script>

    <fieldset>
        <label for="registerplacetype"><i>badge</i>&nbsp;typ</label>
        <select id="registerplacetype" name={placeFormNames.type} required>
            <option value="user">Gebäude</option>
            <option value="admin">Raum</option>
            <option value="admin">Arbeitsplatz</option>
        </select>
    </fieldset>

    <fieldset>
        <label for="regplacename"><i>home</i></label>
        <input
                id="regplacename"
                type="text"
                name={placeFormNames.name}
                value={place?.name || ""}
                maxlength="30"
                size="30"
                placeholder="Namen eingeben"
                required
        />
    </fieldset>

    <fieldset>
        <label for="regshortname">Kürzel</label>
        <input
                id="regshortname"
                type="text"
                name={placeFormNames.shortname}
                value={place?.shortName || ""}
                maxlength="30"
                size="30"
                placeholder="Kürzel eingeben"
        />
    </fieldset>

    <fieldset>
        <label for="regstreet"><i>add_road</i></label>
        <input
                type="text"
                id="regadress"
                name={placeFormNames.adress}
                value={place?.address?.street || ""}
                maxlength="30"
                size="30"
                placeholder="Straße"
        />
    </fieldset>

    <fieldset>
        <label for="regnumber"><i>looks_one</i></label>
        <input
                type="text"
                id="regnumber"
                name={placeFormNames.streetNumber}
                value={place?.address?.streetNumber || ""}
                maxlength="5"
                size="5"
                placeholder="Hausnummer"
        />
    </fieldset>

    <fieldset>
        <label for="regadditional"><i>info</i></label>
        <input
                id="regadditional"
                type="text"
                name={placeFormNames.additionalInfo}
                value={place?.address?.additionalAddressInfo || ""}
                maxlength="30"
                size="30"
                placeholder="Optionale Informationen"
        />
    </fieldset>

    <fieldset>
        <label for="regzip"><i>pin</i></label>
        <input
                type="text"
                id="regzip"
                name={placeFormNames.zip}
                value={place?.address?.zip || ""}
                maxlength="10"
                size="10"
                placeholder="Postleitzahl"
        />
    </fieldset>

    <fieldset>
        <label for="regcity"><i>location_city</i></label>
        <input
                type="text"
                id="regcity"
                name={placeFormNames.city}
                value={place?.address?.city || ""}
                maxlength="20"
                size="20"
                placeholder="Stadt" />
    </fieldset>

    <fieldset>
        <label for="regdescription"><i>description</i></label>
        <textarea
                id="regdescription"
                name={placeFormNames.description}
                rows="2"
                cols="2"
                placeholder="Beschreibung hinzufügen">
        </textarea>
    </fieldset>
