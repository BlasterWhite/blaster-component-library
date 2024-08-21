// src/index.ts
import { App, Plugin } from 'vue';
import ConfigPlugin from './plugins/ConfigPlugin';

// Importation de tous les composants que tu veux exporter
import MyButton from './components/MyButton.vue';
// Ajoute d'autres composants ici...

// Création d'un objet plugin pour installer tous les composants avec une configuration
const BlasterComponentLibrary: Plugin = {
  install(app: App, options?: any) {
    // Installation du plugin de configuration
    app.use(ConfigPlugin, options);

    // Enregistrement des composants globalement
    app.component('MyButton', MyButton);
    // Ajoute d'autres composants ici...
  },
};


export * from './types';

// Exportation du plugin principal et des composants individuels si nécessaire
export { BlasterComponentLibrary, MyButton };
// Ajoute d'autres exportations ici...

// Exportation par défaut de la bibliothèque complète
export default BlasterComponentLibrary;
