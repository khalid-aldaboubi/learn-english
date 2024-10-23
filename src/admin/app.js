import logo from "./logo.svg";
import favIcon from "./fav.ico";

const config = {
  // Replace the Learn English logo in auth (login) views
  auth: {
    logo,
  },
  // Replace the favicon
  head: {
    favicon: favIcon,
  },
  // Replace the Learn English logo in the main navigation
  menu: {
    logo,
  },
  theme: {
    // overwrite light theme properties
    light: {
      colors: {
        primary100: "#fdf4dc",
        primary200: "#fae7b9",
        primary500: "#f29d41",
        primary600: "#d9822f",
        primary700: "#be5d01",
        danger700: "#b72b1a",
        buttonPrimary500: "#d9822f",
        buttonPrimary600: "#d9822f",
      },
    },

    // overwrite dark theme properties
    dark: {
      // ...
    },
  },
  // Extend the translations
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Learn English",

      "app.components.LeftMenu.navbrand.workplace": "Testing",
      "Auth.form.button.login.Learn English": "Log in via Learn English",
      "Auth.form.welcome.subtitle": "Log in to your Learn English account",
      "Auth.form.welcome.title": "Welcome to Learn English!",
      "Settings.application.Learn English-version": "Learn English version",
      "Settings.application.Learn EnglishVersion": "Learn English version",
      "admin.pages.MarketPlacePage.plugin.tooltip.madeByLearn English": "Made by Learn English",
      "admin.pages.MarketPlacePage.plugin.tooltip.verified": "Plugin verified by Learn English",
      "admin.pages.MarketPlacePage.subtitle": "Get more out of Learn English",
      "admin.pages.MarketPlacePage.tab-group.label": "Plugins and Providers for Learn English",
      "app.components.BlockLink.blog.content": "Read the latest news about Learn English and the ecosystem.",
      "app.components.BlockLink.cloud": "Learn English Cloud",
      "app.components.BlockLink.cloud.content": "Fully-managed cloud hosting for your Learn English project.",
      "app.components.BlockLink.tutorial.content": "Follow step-by-step instructions to use and customize Learn English.",

      "app.components.HomePage.welcomeBlock.content": "Congrats! You are logged as the first administrator. To discover the powerful features provided by Learn English, we recommend you to create your first Content type!",
      "app.components.HomePage.welcomeBlock.content.again": "We hope you are making progress on your project! Feel free to read the latest news about Learn English. We are giving our best to improve the product based on your feedback.",
      "app.components.LeftMenu.navbrand.title": "Learn English Dashboard",
      "app.components.MarketplaceBanner.image.alt": "A Learn English rocket logo",
      "app.components.NpsSurvey.banner-title": "How likely are you to recommend Learn English to a friend or colleague?",
      "components.AutoReloadBlocker.description": "Run Learn English with one of the following commands:",
      "global.plugins.sentry.description": "Send Learn English error events to Sentry.",
      "notification.version.update.message": "A new version of Learn English is available!",


      "Auth.form.welcome.title": "Welcom to Learn English",

      "Auth.form.welcome.subtitle": "Login to your account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Learn English releases
  notifications: { releases: false,  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};