import { createAsyncThunk } from "@reduxjs/toolkit";
import { store } from "../../../../store";
import axios from "axios";

export const addProspecting = createAsyncThunk(
  "prospecting/createProspecting",
  async ({
    nume,
    numarInregistrare,
    nisaId,
    marimeProspectingId,
    activitateProspectingId,
    vanzariTotale,
    adresaLivrare,
    adresaFacturare,
    numarAngajati,
    cifraAfaceri,
    locatieGps,
    angajatResponsabil,
    punctLucruId,
    email,
    numarTelefon,
  }) => {
    const state = store.getState();
    // const state = "";
    const authentificationState = state.authentificationState;
    const configState = state.configurationState;

    const url = configState.backendHostname + "/prospecting";

    if (authentificationState.isLoggedIn === false) {
      throw Error("user not logged in");
    }

    const headers = {
      Authorization: `${authentificationState.token}`,
    };

    console.log("Headers " + headers);
    console.log("url " + url);
    const data = {
      nume: nume,
      numar_inregistrare: numarInregistrare,
      nisa_id: nisaId,
      marime_prospecting_id: marimeProspectingId,
      activitate_prospecting_id: activitateProspectingId,
      vanzari_totale: vanzariTotale,
      adresa_livrare: adresaLivrare,
      adresa_facturare: adresaFacturare,
      numar_angajati: numarAngajati,
      cifra_afaceri: cifraAfaceri,
      locatie_gps: locatieGps,
      angajat_responsabil: angajatResponsabil,
      punct_lucru_id: punctLucruId,
      email: email,
      numar_telefon: numarTelefon,
    };
    console.log(data);
    const config = {
      method: "post",
      url: url,
      headers: headers,
      data: data,
    };
    return axios.request(config).then((response) => response.data);
  }
);
