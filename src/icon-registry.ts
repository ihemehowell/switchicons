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
  // Navigation
  { name: "ArrowRight", category: "navigation", keywords: ["arrow", "right", "next", "forward"] },
  { name: "ArrowLeft", category: "navigation", keywords: ["arrow", "left", "back", "previous"] },
  { name: "ChevronDown", category: "navigation", keywords: ["chevron", "down", "expand", "dropdown"] },
  { name: "ChevronUp", category: "navigation", keywords: ["chevron", "up", "collapse"] },
  { name: "Home", category: "navigation", keywords: ["home", "house", "start", "dashboard"] },
  { name: "ExternalLink", category: "navigation", keywords: ["external", "link", "open", "new tab"] },

  // UI & Actions
  { name: "Check", category: "ui", keywords: ["check", "success", "done", "complete", "confirm"] },
  { name: "Close", category: "ui", keywords: ["close", "cancel", "remove", "exit"] },
  { name: "Search", category: "ui", keywords: ["search", "find", "lookup"] },
  { name: "Plus", category: "ui", keywords: ["plus", "add", "new", "create"] },
  { name: "Minus", category: "ui", keywords: ["minus", "subtract", "remove", "collapse"] },
  { name: "Settings", category: "ui", keywords: ["settings", "gear", "preferences", "config"] },
  { name: "Bell", category: "ui", keywords: ["bell", "notification", "alert", "reminder"] },
  { name: "Trash", category: "ui", keywords: ["trash", "delete", "remove", "bin"] },
  { name: "Edit", category: "ui", keywords: ["edit", "pencil", "modify", "update"] },
  { name: "Grid", category: "ui", keywords: ["grid", "layout", "apps", "dashboard"] },
  { name: "LogOut", category: "ui", keywords: ["logout", "sign out", "exit", "leave"] },
  { name: "Star", category: "ui", keywords: ["star", "favorite", "rating"] },
  { name: "Heart", category: "ui", keywords: ["heart", "like", "love", "favorite"] },
  { name: "Info", category: "ui", keywords: ["info", "information", "help", "about"] },
  { name: "AlertTriangle", category: "ui", keywords: ["alert", "warning", "caution", "error"] },
  { name: "Filter", category: "ui", keywords: ["filter", "sort", "refine"] },
  { name: "Download", category: "ui", keywords: ["download", "save", "export"] },
  { name: "Upload", category: "ui", keywords: ["upload", "import", "add file"] },
  { name: "MoreHorizontal", category: "ui", keywords: ["more", "menu", "options", "ellipsis"] },
  { name: "Refresh", category: "ui", keywords: ["refresh", "reload", "sync", "update"] },
  { name: "Share", category: "ui", keywords: ["share", "send", "distribute"] },
  { name: "Copy", category: "ui", keywords: ["copy", "duplicate", "clone"] },

  // People
  { name: "User", category: "people", keywords: ["user", "person", "account", "profile"] },
  { name: "Users", category: "people", keywords: ["users", "people", "team", "group"] },

  // Communication
  { name: "Mail", category: "communication", keywords: ["mail", "email", "message", "inbox"] },
  { name: "Phone", category: "communication", keywords: ["phone", "call", "contact"] },
  { name: "MessageCircle", category: "communication", keywords: ["message", "chat", "comment"] },
  { name: "ChatThread", category: "communication", keywords: ["chat", "thread", "conversation", "reply"] },
  { name: "VoiceNote", category: "communication", keywords: ["voice", "audio note", "recording"] },
  { name: "VideoCall", category: "communication", keywords: ["video call", "meeting", "conference"] },
  { name: "Broadcast", category: "communication", keywords: ["broadcast", "signal", "live", "stream"] },

  // Business
  { name: "Calendar", category: "business", keywords: ["calendar", "date", "schedule", "event"] },
  { name: "Building", category: "business", keywords: ["building", "company", "office", "organization"] },
  { name: "FileText", category: "business", keywords: ["file", "document", "text", "report"] },

  // Fintech / Payment Rails
  { name: "Naira", category: "fintech", keywords: ["naira", "ngn", "money", "currency", "nigeria"] },
  { name: "BankTransfer", category: "fintech", keywords: ["bank", "transfer", "payment", "money", "fintech"] },
  { name: "Ussd", category: "fintech", keywords: ["ussd", "mobile", "payment", "banking"] },
  { name: "Pos", category: "fintech", keywords: ["pos", "point", "sale", "payment", "terminal"] },
  { name: "QrCode", category: "fintech", keywords: ["qr", "code", "scan", "payment"] },
  { name: "MobileMoney", category: "fintech", keywords: ["mobile", "money", "payment", "wallet"] },
  { name: "Escrow", category: "fintech", keywords: ["escrow", "secure", "payment", "transaction"] },
  { name: "Wallet", category: "fintech", keywords: ["wallet", "balance", "money", "funds"] },

  // Logistics
  { name: "Waybill", category: "logistics", keywords: ["waybill", "shipment", "invoice", "manifest"] },
  { name: "DeliveryTruck", category: "logistics", keywords: ["delivery", "truck", "shipping", "logistics"] },
  { name: "PackageBox", category: "logistics", keywords: ["package", "box", "parcel", "shipment"] },
  { name: "Warehouse", category: "logistics", keywords: ["warehouse", "storage", "inventory"] },

  // AI
  { name: "AiSpark", category: "ai", keywords: ["ai", "spark", "sparkle", "generate", "magic"] },
  { name: "PromptInput", category: "ai", keywords: ["prompt", "input", "ai", "chat input"] },
  { name: "ModelChip", category: "ai", keywords: ["model", "chip", "ai", "compute", "processor"] },

  // Security
  { name: "Fingerprint", category: "security", keywords: ["fingerprint", "biometric", "auth", "identity"] },
  { name: "ShieldLock", category: "security", keywords: ["shield", "lock", "security", "protection"] },
  { name: "Otp", category: "security", keywords: ["otp", "code", "verification", "2fa"] },
  { name: "Lock", category: "security", keywords: ["lock", "secure", "private", "locked"] },

  // Commerce
  { name: "Storefront", category: "commerce", keywords: ["storefront", "shop", "store", "retail"] },
  { name: "Barcode", category: "commerce", keywords: ["barcode", "scan", "product", "inventory"] },
  { name: "Receipt", category: "commerce", keywords: ["receipt", "invoice", "purchase", "order"] },

  // Technology
  { name: "ApiConnector", category: "technology", keywords: ["api", "connector", "integration", "connect"] },
  { name: "Webhook", category: "technology", keywords: ["webhook", "integration", "event", "automation"] },
  { name: "Terminal", category: "technology", keywords: ["terminal", "console", "code", "cli"] },

  // Media
  { name: "Image", category: "media", keywords: ["image", "photo", "picture", "gallery"] },
  { name: "Video", category: "media", keywords: ["video", "film", "clip", "movie"] },
  { name: "Music", category: "media", keywords: ["music", "audio", "song", "sound"] },
  { name: "Microphone", category: "media", keywords: ["microphone", "mic", "record", "audio"] },
  { name: "PlayCircle", category: "media", keywords: ["play", "start", "media", "video"] },
  { name: "PauseCircle", category: "media", keywords: ["pause", "stop", "media"] },
  { name: "Volume", category: "media", keywords: ["volume", "sound", "audio", "speaker"] },

  // Social
  { name: "Hashtag", category: "social", keywords: ["hashtag", "tag", "topic", "trend"] },
  { name: "Mention", category: "social", keywords: ["mention", "tag", "at", "reply"] },
  { name: "Repost", category: "social", keywords: ["repost", "retweet", "share", "reshare"] },
  { name: "Trending", category: "social", keywords: ["trending", "popular", "growth", "chart"] },
  { name: "Bookmark", category: "social", keywords: ["bookmark", "save", "read later"] },
  { name: "Poll", category: "social", keywords: ["poll", "vote", "survey", "results"] },
  { name: "Community", category: "social", keywords: ["community", "group", "network", "circle"] },

  // Solid variants
  { name: "StarSolid", category: "ui", keywords: ["star", "favorite", "rating", "solid", "filled"], description: "Filled variant of Star" },
  { name: "HeartSolid", category: "ui", keywords: ["heart", "like", "love", "solid", "filled"], description: "Filled variant of Heart" },
  { name: "BookmarkSolid", category: "social", keywords: ["bookmark", "save", "solid", "filled"], description: "Filled variant of Bookmark" },
  { name: "AiSparkSolid", category: "ai", keywords: ["ai", "spark", "sparkle", "solid", "filled"], description: "Filled variant of AiSpark" },
  { name: "BellSolid", category: "ui", keywords: ["bell", "notification", "alert", "solid", "filled"], description: "Filled variant of Bell" },
  { name: "HomeSolid", category: "navigation", keywords: ["home", "house", "solid", "filled"], description: "Filled variant of Home" },
  { name: "UserSolid", category: "people", keywords: ["user", "person", "account", "solid", "filled"], description: "Filled variant of User" },
  { name: "UsersSolid", category: "people", keywords: ["users", "people", "team", "solid", "filled"], description: "Filled variant of Users" },
  { name: "MailSolid", category: "communication", keywords: ["mail", "email", "solid", "filled"], description: "Filled variant of Mail" },
  { name: "LockSolid", category: "security", keywords: ["lock", "secure", "solid", "filled"], description: "Filled variant of Lock" },
  { name: "ShieldLockSolid", category: "security", keywords: ["shield", "lock", "security", "solid", "filled"], description: "Filled variant of ShieldLock" },
  { name: "EscrowSolid", category: "fintech", keywords: ["escrow", "secure", "payment", "solid", "filled"], description: "Filled variant of Escrow" },
  { name: "PlayCircleSolid", category: "media", keywords: ["play", "start", "media", "solid", "filled"], description: "Filled variant of PlayCircle" },
  { name: "PauseCircleSolid", category: "media", keywords: ["pause", "stop", "media", "solid", "filled"], description: "Filled variant of PauseCircle" },
];