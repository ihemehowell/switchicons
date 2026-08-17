export type IconCategory =
  | "navigation"
  | "ui"
  | "people"
  | "communication"
  | "business"
  | "fintech"
  | "logistics"
  | "technology"
  | "social"
  | "ai"
  | "commerce"
  | "security"
  | "media";

export interface IconMetadata {
  name: string;
  category: IconCategory;
  keywords: string[];
  description?: string;
}

export const iconMetadata: IconMetadata[] = [
  {
    name: "ArrowRight",
    category: "navigation",
    keywords: ["arrow", "right", "next", "forward"],
  },

  {
    name: "ArrowLeft",
    category: "navigation",
    keywords: ["arrow", "left", "back", "previous"],
  },

  {
    name: "Check",
    category: "ui",
    keywords: ["check", "success", "done", "complete", "confirm"],
  },

  {
    name: "Close",
    category: "ui",
    keywords: ["close", "cancel", "remove", "exit"],
  },

  {
    name: "Search",
    category: "ui",
    keywords: ["search", "find", "lookup"],
  },

  {
    name: "User",
    category: "people",
    keywords: ["user", "person", "account", "profile"],
  },

  {
    name: "Users",
    category: "people",
    keywords: ["users", "people", "team", "group"],
  },

  {
    name: "Naira",
    category: "fintech",
    keywords: ["naira", "ngn", "money", "currency", "nigeria"],
  },

  {
    name: "BankTransfer",
    category: "fintech",
    keywords: [
      "bank",
      "transfer",
      "payment",
      "money",
      "fintech",
    ],
  },

  {
    name: "Ussd",
    category: "fintech",
    keywords: [
      "ussd",
      "mobile",
      "payment",
      "banking",
    ],
  },

  {
    name: "Pos",
    category: "fintech",
    keywords: [
      "pos",
      "point",
      "sale",
      "payment",
      "terminal",
    ],
  },

  {
    name: "QrCode",
    category: "fintech",
    keywords: [
      "qr",
      "code",
      "scan",
      "payment",
    ],
  },

  {
    name: "MobileMoney",
    category: "fintech",
    keywords: [
      "mobile",
      "money",
      "payment",
      "wallet",
    ],
  },

  {
    name: "Escrow",
    category: "fintech",
    keywords: [
      "escrow",
      "secure",
      "payment",
      "transaction",
    ],
  },
];