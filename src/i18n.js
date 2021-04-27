import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// the translations
// (tip move them in a JSON file and import them)
var resources = {};

fetch("https://{JSOn file URL}/si-LK.json")
    .then(data => data.json())
    .then(data => {
        resources["en-US"] = data
        i18n
            .use(initReactI18next) // passes i18n down to react-i18next
            .init({
                resources,
                lng: "en-US",

                keySeparator: false, // we do not use keys in form messages.welcome

                interpolation: {
                    escapeValue: false // react already safes from xss
                }
            });

    })

fetch("https://{JSOn file URL}/si-LK.json")
    .then(data => data.json())
    .then(data => {
        resources["si-LK"] = data
        i18n
            .use(initReactI18next) // passes i18n down to react-i18next
            .init({
                resources,
                lng: "en-US",

                keySeparator: false, // we do not use keys in form messages.welcome

                interpolation: {
                    escapeValue: false // react already safes from xss
                }
            });
    })

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en-US",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;