import {App} from "vue";
import {Config} from "../types";

export default {
  install(app: App , options: Object) {
    const defaultOptions = {
      primaryColor: '#007bff',
      secondaryColor: '#6c757d',
      // Ajoute ici toutes les variables par défaut que tu souhaites
    };

    // Fusionner les options par défaut avec celles passées par l'utilisateur
    const mergedOptions: Config = { ...defaultOptions, ...options };

    // Fournir les variables de configuration à tous les composants
    app.provide('config', mergedOptions);
  }
};
