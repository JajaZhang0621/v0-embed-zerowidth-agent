// config.js
// =============================================================================
// Chat Application Configuration
// =============================================================================
// This configuration file stores metadata and descriptions related to the Chat Agent component.
// The goal is to keep the main component clean and maintainable.
//
// Key Features:
// - Stores the descriptive header for the chat component.
// - Provides metadata such as the author and version.
// - Can be extended for additional configuration settings in the future.
// =============================================================================

const chatConfig = {
  flowURL:
    "https://api.zerowidth.ai/v1/process/f0YLyfmOwPQTlXc02ltP",
  header: {
    title: "OpenBook - Chat with Mei",
    description:
      "Hey there! I’m Mei, I am here to help you to know me better. Grab a coffee, and let’s chat!",
  },
  suggestedPromptsTitle: "You could ask me about things like",
  suggestedPrompts: [
    "What’s the best way to share feedback with you?",
    "How do you prefer to handle conflicts or disagreements?",
    "What motivates you the most at work?",
  ],
  chatInputPlaceholder: "Chat with Mei",
  maxChatHeight: 400,
};

export default chatConfig;
