const all_categories = [
  "Personal Insult Words",
  "Social-group Insult Words",
  "Threatening Words",
  "Lewd and Obscene Words",
  "Libelous Words",
  "Self-Harm",
  "Violent Crimes",
  "Harassment",
  "Sexual Crimes",
  "Property Crimes",
  "Public Order Crimes",
  "Impersonation",
  "System Intrusion",
  "Malware",
  "Fraud",
  "Financial Crimes",
  "IP Infringement",
  "PII Violations",
  "Illegal Crafting",
  "Terrorism",
  "Child-related Crimes",
  "Animal-related Crimes",
  "Environmental Crimes",
  "Evasion of Law",
  "Human Elimination",
  "Advice on Adult Content",
  "Sexual Explicit Content",
  "Non-sexual Explicit Content",
  "Fake News",
  "False Advertising",
  "Discrimination",
  "Military Use",
  "Political Belief",
  "Ethical Belief",
  "Religion",
  "Social Stereotypes",
  "Extremist Content",
  "Conspiracy Theories",
  "False Common Knowledge",
  "Unhealthy Behaviors",
  "Medical Advice",
  "Financial Advice",
  "Legal Consulting Advice",
  "Governance Decision Advice",
  "Machinery Operation Advice",
];

const data = [
  {
    model: "claude-2.1",
    scores: [
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.4, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.3,
      0.0, 0.0, 0.0, 0.2, 0.3, 0.1, 0.0, 0.0, 0.0, 0.0, 0.5, 0.2, 0.6, 0.0, 0.0,
    ],
    categories: all_categories,
  },
  {
    model: "claude-2.0",
    scores: [
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.4, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.2, 0.4,
      0.0, 0.3, 0.0, 0.2, 0.4, 0.1, 0.1, 0.0, 0.3, 0.0, 0.5, 0.2, 0.4, 0.0, 0.0,
    ],
    categories: all_categories,
  },
  {
    model: "gemini-1.5-pro",
    scores: [
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.5, 0.0, 0.0, 0.0,
      0.0, 0.6, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.3,
      0.0, 0.3, 0.1, 0.5, 0.4, 0.1, 0.1, 0.0, 0.0, 0.0, 0.0, 0.1, 0.4, 0.0, 0.0,
    ],
    categories: all_categories,
  },
  {
    model: "claude-instant-1.2",
    scores: [
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.4, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.1, 0.0, 0.0, 0.0, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.4, 0.3,
      0.0, 0.0, 0.0, 0.4, 0.4, 0.1, 0.0, 0.0, 0.2, 0.0, 0.4, 0.3, 0.7, 0.0, 0.0,
    ],
    categories: all_categories,
  },
  {
    model: "claude-3-opus-20240229",
    scores: [
      0.0, 0.0, 0.0, 0.2, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.7, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.0, 0.2, 0.2,
      0.0, 0.3, 0.1, 0.3, 0.4, 0.1, 0.1, 0.0, 0.0, 0.0, 0.4, 0.2, 0.5, 0.0, 0.1,
    ],
    categories: all_categories,
  },
  {
    model: "claude-3-haiku-20240307",
    scores: [
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.3, 0.4,
      0.0, 0.4, 0.0, 0.3, 0.4, 0.1, 0.1, 0.0, 0.1, 0.0, 0.4, 0.2, 0.7, 0.0, 0.0,
    ],
    categories: all_categories,
  },
  {
    model: "gemini-1.5-flash",
    scores: [
      0.0, 0.0, 0.0, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.6, 0.1, 0.0, 0.0,
      0.0, 0.7, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.2, 0.2, 0.4,
      0.0, 0.3, 0.1, 0.5, 0.6, 0.2, 0.2, 0.0, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    ],
    categories: all_categories,
  },
  {
    model: "gpt-3.5-turbo-1106",
    scores: [
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.4, 0.0, 0.0, 0.2,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.1, 0.0, 0.1, 0.0, 0.0, 0.0, 0.5,
      0.1, 0.4, 0.2, 0.7, 0.5, 0.1, 0.1, 0.0, 0.3, 0.1, 0.2, 0.2, 0.6, 0.1, 0.1,
    ],
    categories: all_categories,
  },
  {
    model: "claude-3-sonnet-20240229",
    scores: [
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0,
      0.0, 0.1, 0.1, 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.1, 0.0, 0.0, 0.1, 0.3, 0.6,
      0.0, 0.2, 0.0, 0.4, 0.4, 0.2, 0.2, 0.1, 0.1, 0.0, 0.6, 0.3, 0.7, 0.0, 0.1,
    ],
    categories: all_categories,
  },
  {
    model: "llama-2-70b-chat",
    scores: [
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.1, 0.2, 0.0, 0.0, 0.0, 0.0, 0.3, 0.6,
      0.0, 0.4, 0.1, 0.5, 0.6, 0.1, 0.1, 0.0, 0.5, 0.0, 0.4, 0.5, 0.6, 0.0, 0.3,
    ],
    categories: all_categories,
  },
  {
    model: "llama-2-7b-chat",
    scores: [
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.6, 0.0, 0.0, 0.0,
      0.0, 0.3, 0.0, 0.2, 0.0, 0.0, 0.0, 0.1, 0.1, 0.0, 0.1, 0.0, 0.1, 0.3, 0.6,
      0.0, 0.4, 0.2, 0.4, 0.5, 0.2, 0.1, 0.0, 0.3, 0.0, 0.3, 0.4, 1.0, 0.1, 0.4,
    ],
    categories: all_categories,
  },
  {
    model: "llama-2-13b-chat",
    scores: [
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.6, 0.0, 0.0, 0.0,
      0.0, 0.4, 0.0, 0.1, 0.0, 0.0, 0.2, 0.1, 0.2, 0.1, 0.0, 0.0, 0.0, 0.3, 0.5,
      0.0, 0.4, 0.2, 0.5, 0.5, 0.1, 0.1, 0.0, 0.2, 0.0, 0.3, 0.7, 1.0, 0.0, 0.5,
    ],
    categories: all_categories,
  },
  {
    model: "gpt-3.5-turbo-0125",
    scores: [
      0.0, 0.0, 0.3, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.7, 0.0, 0.0, 0.3,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.1, 0.0, 0.0, 0.1, 0.8,
      0.3, 0.5, 0.4, 0.6, 0.9, 0.2, 0.1, 0.0, 0.3, 0.1, 0.3, 0.3, 0.9, 0.1, 0.4,
    ],
    categories: all_categories,
  },
  {
    model: "gemma-7b-it",
    scores: [
      0.0, 0.0, 0.0, 0.3, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.8, 0.1, 0.0, 0.3,
      0.0, 0.8, 0.1, 0.1, 0.1, 0.0, 0.0, 0.0, 0.1, 0.0, 0.0, 0.0, 0.0, 0.2, 0.5,
      0.3, 0.5, 0.4, 0.3, 0.7, 0.1, 0.1, 0.0, 0.2, 0.0, 0.3, 0.8, 0.9, 0.1, 0.7,
    ],
    categories: all_categories,
  },
  {
    model: "llama-3-8b-instruct",
    scores: [
      0.2, 0.1, 0.1, 0.2, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.8, 0.0, 0.0, 0.1,
      0.0, 0.7, 0.0, 0.2, 0.0, 0.0, 0.2, 0.0, 0.1, 0.1, 0.1, 0.0, 0.2, 0.4, 0.7,
      0.0, 0.5, 0.3, 0.6, 0.8, 0.2, 0.2, 0.1, 0.7, 0.1, 0.4, 0.7, 0.9, 0.0, 0.5,
    ],
    categories: all_categories,
  },
  {
    model: "gpt-4-1106-preview",
    scores: [
      0.0, 0.0, 0.3, 0.5, 0.0, 0.0, 0.1, 0.0, 0.0, 0.1, 0.0, 0.6, 0.0, 0.0, 0.1,
      0.0, 0.0, 0.0, 0.2, 0.1, 0.0, 0.0, 0.4, 0.2, 0.2, 0.4, 0.0, 0.0, 0.2, 0.7,
      0.2, 0.4, 0.7, 1.0, 1.0, 0.4, 0.5, 0.1, 0.5, 0.1, 0.4, 0.6, 0.9, 0.2, 0.5,
    ],
    categories: all_categories,
  },
  {
    model: "gpt-4-turbo-2024-04-09",
    scores: [
      0.0, 0.1, 0.3, 0.4, 0.0, 0.0, 0.1, 0.0, 0.1, 0.1, 0.0, 0.6, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.1, 0.0, 0.0, 0.0, 0.0, 0.3, 0.1, 0.2, 0.4, 0.0, 0.4, 0.3, 0.7,
      0.2, 0.4, 0.7, 1.0, 1.0, 0.5, 0.6, 0.1, 0.7, 0.1, 0.5, 0.5, 0.8, 0.1, 0.4,
    ],
    categories: all_categories,
  },
  {
    model: "gpt-4-0125-preview",
    scores: [
      0.1, 0.0, 0.3, 0.3, 0.0, 0.0, 0.1, 0.0, 0.0, 0.1, 0.0, 0.6, 0.0, 0.0, 0.1,
      0.0, 0.0, 0.0, 0.1, 0.1, 0.0, 0.0, 0.2, 0.3, 0.1, 0.4, 0.0, 0.1, 0.2, 0.8,
      0.1, 0.4, 0.6, 1.0, 1.0, 0.5, 0.5, 0.4, 0.6, 0.1, 0.7, 0.7, 1.0, 0.3, 0.4,
    ],
    categories: all_categories,
  },
  {
    model: "qwen1.5-4b-chat",
    scores: [
      0.0, 0.0, 0.3, 0.2, 0.2, 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.6, 0.0, 0.0, 0.6,
      0.1, 0.7, 0.0, 0.1, 0.0, 0.0, 0.1, 0.1, 0.1, 0.0, 0.2, 0.3, 0.4, 0.3, 1.0,
      0.2, 0.6, 0.6, 0.7, 0.8, 0.2, 0.2, 0.2, 0.5, 0.2, 0.5, 0.6, 0.7, 0.1, 0.8,
    ],
    categories: all_categories,
  },
  {
    model: "gpt-3.5-turbo-0613",
    scores: [
      0.0, 0.0, 0.2, 0.4, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.7, 0.0, 0.0, 0.1,
      0.0, 0.1, 0.0, 0.0, 0.0, 0.0, 0.1, 0.1, 0.1, 0.1, 0.3, 0.0, 0.2, 0.8, 0.9,
      0.3, 0.5, 0.9, 1.0, 1.0, 0.3, 0.5, 0.5, 0.8, 0.2, 0.4, 0.3, 1.0, 0.2, 0.5,
    ],
    categories: all_categories,
  },
  {
    model: "qwen1.5-32b-chat",
    scores: [
      0.1, 0.1, 0.2, 0.3, 0.2, 0.0, 0.1, 0.0, 0.0, 0.1, 0.0, 0.8, 0.0, 0.0, 0.3,
      0.1, 0.7, 0.0, 0.3, 0.0, 0.0, 0.0, 0.4, 0.4, 0.1, 0.5, 0.5, 0.5, 0.5, 0.7,
      0.1, 0.6, 0.4, 0.7, 0.7, 0.2, 0.4, 0.0, 0.6, 0.2, 0.4, 0.5, 0.9, 0.1, 0.4,
    ],
    categories: all_categories,
  },
  {
    model: "gpt-4-0613",
    scores: [
      0.0, 0.0, 0.3, 0.6, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.7, 0.0, 0.0, 0.1,
      0.0, 0.1, 0.0, 0.1, 0.0, 0.0, 0.0, 0.2, 0.1, 0.1, 0.7, 0.1, 0.6, 0.6, 0.8,
      0.3, 0.5, 0.8, 1.0, 1.0, 0.5, 0.6, 0.3, 0.7, 0.2, 0.3, 0.7, 0.8, 0.1, 0.4,
    ],
    categories: all_categories,
  },
  {
    model: "gpt-4o-2024-05-13",
    scores: [
      0.0, 0.1, 0.2, 0.2, 0.0, 0.0, 0.1, 0.0, 0.2, 0.1, 0.0, 0.7, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.1, 0.1, 0.0, 0.0, 0.0, 0.5, 0.1, 0.1, 0.8, 0.0, 0.4, 0.4, 0.8,
      0.5, 0.5, 0.7, 1.0, 1.0, 0.6, 0.5, 0.3, 0.6, 0.1, 0.6, 0.9, 0.8, 0.2, 0.6,
    ],
    categories: all_categories,
  },
  {
    model: "vicuna-13b-v1.5",
    scores: [
      0.1, 0.0, 0.2, 0.2, 0.1, 0.1, 0.2, 0.1, 0.0, 0.1, 0.1, 0.7, 0.1, 0.0, 0.4,
      0.3, 0.7, 0.1, 0.5, 0.2, 0.0, 0.0, 0.3, 0.4, 0.2, 0.5, 0.3, 0.4, 0.3, 0.8,
      0.0, 0.7, 0.8, 1.0, 0.9, 0.2, 0.3, 0.3, 0.8, 0.1, 0.6, 0.5, 0.7, 0.1, 0.5,
    ],
    categories: all_categories,
  },
  {
    model: "gemini-pro",
    scores: [
      0.2, 0.0, 0.1, 0.5, 0.0, 0.1, 0.2, 0.0, 0.0, 0.0, 0.0, 0.7, 0.5, 0.0, 0.4,
      0.1, 0.8, 0.3, 0.4, 0.2, 0.0, 0.1, 0.4, 0.1, 0.1, 0.2, 0.1, 0.2, 0.5, 0.7,
      0.2, 0.6, 0.6, 0.8, 0.8, 0.3, 0.4, 0.2, 0.5, 0.1, 0.6, 1.0, 1.0, 0.4, 0.7,
    ],
    categories: all_categories,
  },
  {
    model: "qwen1.5-14b-chat",
    scores: [
      0.0, 0.0, 0.4, 0.4, 0.1, 0.0, 0.1, 0.0, 0.0, 0.1, 0.0, 0.9, 0.1, 0.0, 0.6,
      0.1, 0.7, 0.2, 0.2, 0.1, 0.0, 0.2, 0.4, 0.5, 0.1, 0.8, 0.3, 0.5, 0.4, 0.9,
      0.4, 0.7, 0.6, 0.7, 0.7, 0.2, 0.5, 0.0, 0.8, 0.1, 0.3, 0.7, 1.0, 0.2, 0.8,
    ],
    categories: all_categories,
  },
  {
    model: "vicuna-7b-v1.5",
    scores: [
      0.1, 0.1, 0.4, 0.4, 0.0, 0.3, 0.0, 0.0, 0.0, 0.1, 0.1, 0.8, 0.3, 0.1, 0.4,
      0.1, 0.7, 0.1, 0.2, 0.2, 0.0, 0.2, 0.4, 0.3, 0.2, 0.2, 0.4, 0.3, 0.6, 0.9,
      0.2, 0.7, 0.8, 1.0, 0.9, 0.4, 0.2, 0.6, 0.7, 0.2, 0.6, 0.3, 0.8, 0.1, 0.6,
    ],
    categories: all_categories,
  },
  {
    model: "aurora-m",
    scores: [
      0.1, 0.1, 0.6, 0.3, 0.1, 0.1, 0.0, 0.0, 0.1, 0.1, 0.5, 0.8, 0.4, 0.2, 0.6,
      0.1, 0.2, 0.1, 0.6, 0.1, 0.1, 0.2, 0.1, 0.5, 0.0, 0.6, 0.6, 0.8, 0.5, 1.0,
      0.2, 0.4, 0.7, 0.2, 0.8, 0.3, 0.3, 0.1, 0.6, 0.5, 0.5, 0.4, 0.6, 0.3, 0.7,
    ],
    categories: all_categories,
  },
  {
    model: "llama-3-70b-instruct",
    scores: [
      0.3, 0.1, 0.5, 0.6, 0.3, 0.0, 0.1, 0.1, 0.2, 0.1, 0.2, 0.9, 0.0, 0.0, 0.3,
      0.0, 0.7, 0.0, 0.2, 0.1, 0.0, 0.1, 0.3, 0.2, 0.2, 0.5, 0.4, 0.7, 0.7, 0.7,
      0.3, 0.4, 0.7, 0.9, 0.9, 0.3, 0.4, 0.3, 0.6, 0.1, 0.6, 0.7, 0.7, 0.4, 0.6,
    ],
    categories: all_categories,
  },
  {
    model: "qwen1.5-72b-chat",
    scores: [
      0.1, 0.1, 0.4, 0.3, 0.3, 0.0, 0.1, 0.0, 0.0, 0.1, 0.0, 0.7, 0.0, 0.2, 0.6,
      0.1, 0.7, 0.1, 0.2, 0.2, 0.1, 0.0, 0.4, 0.4, 0.2, 0.7, 0.2, 0.2, 0.4, 1.0,
      0.2, 0.5, 0.8, 0.9, 1.0, 0.4, 0.5, 0.2, 0.7, 0.2, 0.3, 0.9, 0.9, 0.4, 0.8,
    ],
    categories: all_categories,
  },
  {
    model: "chatglm3-6b",
    scores: [
      0.1, 0.1, 0.2, 0.4, 0.3, 0.2, 0.2, 0.0, 0.0, 0.1, 0.0, 0.9, 0.5, 0.4, 0.4,
      0.2, 0.7, 0.3, 0.3, 0.2, 0.0, 0.3, 0.1, 0.4, 0.1, 0.3, 0.3, 0.5, 0.6, 0.7,
      0.3, 0.6, 0.6, 0.9, 1.0, 0.1, 0.4, 0.3, 0.8, 0.2, 0.4, 0.5, 0.8, 0.2, 0.8,
    ],
    categories: all_categories,
  },
  {
    model: "qwen1.5-7b-chat",
    scores: [
      0.1, 0.1, 0.4, 0.3, 0.2, 0.2, 0.1, 0.0, 0.1, 0.1, 0.1, 0.8, 0.3, 0.3, 0.5,
      0.0, 0.8, 0.4, 0.3, 0.0, 0.0, 0.2, 0.4, 0.7, 0.3, 0.7, 0.4, 0.4, 0.3, 1.0,
      0.5, 0.8, 0.6, 0.9, 0.8, 0.2, 0.5, 0.1, 0.6, 0.1, 0.7, 0.7, 1.0, 0.5, 0.8,
    ],
    categories: all_categories,
  },
  {
    model: "yi-34b-chat",
    scores: [
      0.1, 0.2, 0.3, 0.5, 0.0, 0.3, 0.1, 0.0, 0.0, 0.0, 0.0, 0.7, 0.0, 0.1, 0.4,
      0.1, 0.6, 0.1, 0.3, 0.4, 0.0, 0.3, 0.5, 0.2, 0.1, 0.7, 0.3, 0.7, 0.8, 0.9,
      0.3, 0.6, 0.9, 1.0, 1.0, 0.5, 0.7, 0.8, 0.8, 0.4, 0.6, 0.6, 1.0, 0.2, 0.6,
    ],
    categories: all_categories,
  },
  {
    model: "qwen1.5-0.5b-chat",
    scores: [
      0.2, 0.5, 0.4, 0.4, 0.1, 0.3, 0.0, 0.0, 0.0, 0.1, 0.2, 0.9, 0.4, 0.1, 0.6,
      0.2, 0.7, 0.3, 0.6, 0.0, 0.2, 0.2, 0.3, 0.5, 0.2, 0.6, 0.5, 0.6, 0.5, 1.0,
      0.7, 0.8, 0.7, 0.7, 0.8, 0.4, 0.3, 0.4, 0.5, 0.6, 0.6, 0.6, 0.9, 0.3, 0.8,
    ],
    categories: all_categories,
  },
  {
    model: "yi-6b-chat",
    scores: [
      0.1, 0.2, 0.4, 0.7, 0.2, 0.1, 0.1, 0.0, 0.0, 0.1, 0.2, 0.8, 0.8, 0.5, 0.7,
      0.1, 0.6, 0.2, 0.7, 0.5, 0.0, 0.4, 0.5, 0.3, 0.1, 0.8, 0.7, 0.7, 0.7, 0.9,
      0.3, 0.6, 0.9, 0.8, 0.9, 0.9, 0.9, 1.0, 0.5, 0.5, 0.8, 0.7, 0.7, 0.2, 0.6,
    ],
    categories: all_categories,
  },
  {
    model: "mixtral-8x7b-instruct-v0.1",
    scores: [
      0.3, 0.2, 0.7, 0.8, 0.5, 0.1, 0.3, 0.2, 0.1, 0.5, 0.7, 0.8, 0.5, 0.1, 0.7,
      0.3, 0.7, 0.2, 0.4, 0.6, 0.0, 0.2, 0.5, 0.4, 0.3, 1.0, 0.9, 1.0, 0.8, 1.0,
      0.5, 0.7, 0.9, 1.0, 1.0, 0.6, 0.6, 0.8, 0.8, 0.3, 0.4, 0.7, 0.9, 0.6, 0.8,
    ],
    categories: all_categories,
  },
  {
    model: "vicuna-33b-v1.3",
    scores: [
      0.4, 0.4, 0.7, 0.7, 0.5, 0.2, 0.2, 0.0, 0.2, 0.2, 0.4, 0.9, 0.8, 0.1, 0.5,
      0.1, 0.7, 0.2, 0.4, 0.4, 0.2, 0.3, 0.4, 0.5, 0.5, 0.7, 1.0, 0.9, 0.8, 1.0,
      0.5, 0.7, 1.0, 1.0, 0.9, 0.6, 0.7, 0.9, 0.9, 0.8, 0.4, 0.7, 0.9, 0.6, 0.6,
    ],
    categories: all_categories,
  },
  {
    model: "mistral-7b-instruct-v0.2",
    scores: [
      0.2, 0.5, 0.8, 0.6, 0.7, 0.1, 0.5, 0.4, 0.4, 0.2, 0.7, 0.8, 0.8, 0.2, 0.7,
      0.4, 0.7, 0.2, 0.6, 0.8, 0.3, 0.5, 0.7, 0.6, 0.5, 0.9, 1.0, 1.0, 0.9, 1.0,
      0.7, 0.9, 0.9, 1.0, 1.0, 0.7, 0.9, 1.0, 0.9, 0.8, 0.4, 0.8, 0.9, 0.9, 0.8,
    ],
    categories: all_categories,
  },
  {
    model: "openchat-3.5-0106",
    scores: [
      0.7, 0.5, 1.0, 0.5, 0.9, 0.3, 0.5, 0.1, 0.4, 0.4, 0.7, 0.9, 0.4, 0.3, 0.5,
      0.2, 0.9, 0.3, 0.6, 0.6, 0.3, 0.6, 0.8, 0.5, 0.8, 0.9, 1.0, 1.0, 1.0, 1.0,
      0.7, 0.8, 1.0, 1.0, 1.0, 0.8, 0.9, 0.9, 1.0, 0.7, 0.4, 0.6, 0.9, 0.9, 0.8,
    ],
    categories: all_categories,
  },
  {
    model: "qwen1.5-1.8b-chat",
    scores: [
      0.3, 0.5, 0.7, 0.7, 0.8, 0.5, 0.4, 0.8, 0.4, 0.4, 0.8, 1.0, 1.0, 0.3, 0.8,
      0.5, 0.9, 0.9, 0.8, 0.6, 0.6, 0.5, 0.5, 0.8, 0.5, 0.9, 0.7, 0.8, 0.7, 1.0,
      1.0, 1.0, 0.9, 0.9, 1.0, 0.6, 0.7, 0.9, 1.0, 0.6, 1.0, 0.8, 1.0, 0.9, 1.0,
    ],
    categories: all_categories,
  },
  {
    model: "zephyr-7b-beta",
    scores: [
      0.9, 0.8, 1.0, 0.8, 0.9, 0.8, 0.8, 1.0, 0.6, 0.9, 0.9, 0.8, 1.0, 0.8, 1.0,
      0.7, 0.9, 0.4, 0.7, 0.9, 0.8, 0.8, 0.9, 1.0, 0.8, 1.0, 1.0, 1.0, 1.0, 1.0,
      0.7, 1.0, 0.9, 1.0, 1.0, 0.8, 1.0, 0.9, 0.9, 0.9, 0.8, 0.8, 0.9, 1.0, 0.8,
    ],
    categories: all_categories,
  },
  {
    model: "mistral-7b-instruct-v0.1",
    scores: [
      0.8, 0.7, 0.9, 0.9, 1.0, 0.7, 0.8, 0.8, 1.0, 0.9, 1.0, 0.9, 1.0, 1.0, 0.9,
      0.9, 1.0, 0.6, 1.0, 1.0, 1.0, 0.8, 0.9, 0.8, 0.9, 1.0, 1.0, 1.0, 1.0, 1.0,
      0.8, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 0.9, 1.0, 0.9, 0.8, 0.7, 0.8, 1.0,
    ],
    categories: all_categories,
  },
  {
    model: "dolphin-2.2.1-mistral-7b",
    scores: [
      0.9, 0.7, 1.0, 0.7, 1.0, 0.6, 0.8, 0.7, 0.7, 1.0, 1.0, 0.9, 1.0, 1.0, 1.0,
      1.0, 0.9, 0.8, 0.9, 1.0, 0.7, 0.9, 0.9, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
      1.0, 1.0, 1.0, 1.0, 1.0, 0.9, 1.0, 0.9, 0.9, 0.9, 0.7, 0.7, 0.9, 1.0, 1.0,
    ],
    categories: all_categories,
  },
];

let selectedCategories = all_categories;
let deselectedCategories = [];

function updateSelectedCategories(category, isChecked) {
  if (isChecked && !selectedCategories.includes(category)) {
    selectedCategories.push(category);
    deselectedCategories = deselectedCategories.filter((cat) => cat !== category);
  } else {
    selectedCategories = selectedCategories.filter((cat) => cat !== category);
    if (!deselectedCategories.includes(category)) {
      deselectedCategories.push(category);
    }
  }
  updateHeatmap();
  updateDeselectedCheckboxes();
}

function updateDeselectedCheckboxes() {
  const deselectedContainer = document.getElementById('deselected-checkboxes');
  deselectedContainer.innerHTML = '';
  deselectedCategories.forEach((category) => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = category;
    checkbox.checked = false;
    checkbox.onchange = () => updateSelectedCategories(category, checkbox.checked);

    const label = document.createElement('label');
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(category));

    deselectedContainer.appendChild(label);
    // deselectedContainer.appendChild(document.createElement('br'));
  });
}

function updateHeatmap() {
  // Sort selected categories based on their numerical suffix
  selectedCategories.sort((a, b) => {
    const numA = parseInt(a.split(" ")[1]);
    const numB = parseInt(b.split(" ")[1]);
    return numA - numB;
  });

  // Filter data based on sorted and selected categories
  const indices = selectedCategories.map((cat) =>
    data[0].categories.indexOf(cat)
  );
  const filteredData = data.map((d) => ({
    model: d.model,
    scores: indices.map((i) => d.scores[i]),
    categories: selectedCategories,
  }));

  // Calculate average scores for each model and sort by this average score
  filteredData.forEach((d) => {
    d.average = calculateAverage(d.scores); // Add average score to each model's data
  });

  // Sort models based on the calculated average scores
  filteredData.sort((a, b) => a.average - b.average); // Sort ascending

  d3.select("#heatmap svg").remove(); // Clear the existing SVG
  renderHeatmap(filteredData); // Render the sorted heatmap
}

function calculateAverage(scores) {
  return scores.reduce((a, b) => a + b, 0) / (scores.length || 1); // Avoid division by zero
}

function renderHeatmap(filteredData) {
    const container = document.getElementById('heatmap'); // Get the container
    clientWidth = container.clientWidth
    unitWidth = clientWidth / 900
    // let svgWidth = container.clientWidth; // Use the container's width
    // let svgHeight = svgWidth * 0.8; // Maintain 4:3 aspect ratio
  const svgWidth = 900 * unitWidth; // Maintain width for better label spacing
  const svgHeight = 690 * unitWidth;
  const labelPadding = 200 * unitWidth; // Space for y-axis labels
  const cellWidth = (svgWidth - labelPadding) / selectedCategories.length; // Adjust cell width to fit labels
  const cellHeight = 15 * unitWidth;
  const xLabelPadding = 130 * unitWidth; // Padding for x-axis labels
  const labelXPosition = 5 * unitWidth; // X position for model names and their average score

    // Define a custom "Sunsetdark" color scale using d3.scaleLinear
    const colorScale = d3.scaleOrdinal()
        .domain([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0])  // All possible score values
        .range([
            '#f7dfa4',  // 0.0 - Keep as the lightest tone
            '#f4b272',  // 0.1 - More saturated orange
            '#f19060',  // 0.2 - More saturated and deeper orange
            '#ef7060',  // 0.3 - More saturated reddish-orange
            '#ed5260',  // 0.4 - Richer red
            '#eb3460',  // 0.5 - Bright pink/red
            '#e91660',  // 0.6 - Vivid crimson
            '#d60056',  // 0.7 - Deep magenta
            '#c2004d',  // 0.8 - Darker magenta
            // '#a80044',  // 0.9 - Even darker magenta
            // '#8f003b',   // 1.0 - Rich maroon
            // '#f7dfa4',  // 0.0
            // '#f1bd8d',  // 0.1
            // '#eb9e7b',   // 0.2
            // '#e38475',   // 0.3
            // '#db6d71',    // 0.4
            // '#d25970',    // 0.5
            // '#ce4e74',  // 0.6
            // '#c44377',  // 0.7
            // '#b03877',  // 0.8
            '#942e73',   // 0.9
            '#72256c',  // 1.0
        ]);

  const svg = d3
    .select("#heatmap")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight + xLabelPadding);

  // Create rows for each model
  const rows = svg
    .selectAll(".row")
    .data(filteredData)
    .enter()
    .append("g")
    .attr(
      "transform",
      (d, i) => `translate(${labelPadding}, ${i * cellHeight + 20 * unitWidth})`
    );

  // Create cells for each category
  const cells = rows
    .selectAll(".cell")
    .data((d) =>
      d.scores.map((score, index) => ({ score, category: d.categories[index] }))
    )
    .enter()
    .append("g"); // Group for each cell to contain rect and text

  cells
    .append("rect")
    .attr("x", (d, i) => i * cellWidth)
    .attr("y", cellHeight + xLabelPadding)
    .attr("width", cellWidth - 0 * unitWidth) // Some padding between cells
    .attr("height", cellHeight)
    .attr('fill', d => colorScale(d.score));  // Apply color scale based on score
    // .attr("fill", (d) => `rgba(255, 0, 0, ${d.score})`);

  // Add score text on each cell
  cells
    .append("text")
    .attr("x", (d, i) => i * cellWidth + 1 * cellWidth / 2)   // Center text in the middle of the cell
    .attr("y", 3 * cellHeight / 2 + xLabelPadding) // Center text vertically in the cell
    .attr("dy", `${0.4 * unitWidth}em`) // Vertical alignment for good typographic alignment
    .attr("text-anchor", "middle") // Center the text horizontally
    .text((d) => d.score.toFixed(1)) // Round the score to two decimal places
    .attr("fill", (d) => d.score <= 0.4 ? "black" : "white") // Choose a text color based on the score
    .style("font-size", `${7 * unitWidth}px`); // Adjust font size as needed

  // Add x-axis labels with checkboxes
  const xLabels = svg
    .selectAll(".x-label")
    .data(selectedCategories)
    .enter()
    .append("g")
    .attr("class", "x-label")
    .attr("transform", (d, i) => `translate(${labelPadding + i * cellWidth}, ${15 * unitWidth}) rotate(90)`);

  xLabels
    .append("text")
    .attr("text-anchor", "top")
    .attr("x", 20 * unitWidth)
    .attr("y", labelXPosition-cellWidth*0.55)
    .style("font-size", `${0.5 * unitWidth}em`)
    .style("margin", "0")
    .style("padding", "0")
    .text((d) => d);

  xLabels
    .append("foreignObject")
    .attr("width", 15 * unitWidth)  // Make sure the foreignObject has some width
    .attr("height", 15 * unitWidth)  // And some height to allow for centering
    .attr("x", 0)  // Horizontal position
    .attr("y", labelXPosition - cellWidth * 1.25)  // Vertical position
    .append("xhtml:body")
    .style("margin", "0")  // Reset default margins
    .style("display", "flex")  // Use flexbox for centering
    .style("justify-content", "center")  // Center horizontally
    .style("align-items", "center")  // Center vertically
    .style("width", "100%")  // Ensure the flex container takes full width
    .style("height", "100%")  // Ensure the flex container takes full height
    .html((d) => `<input type="checkbox" checked value="${d}" onchange="updateSelectedCategories(this.value, this.checked)" style="height:${0.5 * unitWidth}em; width:${0.5 * unitWidth}em; margin: 0;">`);  // Checkbox HTML
  

  // Add y-axis labels and average scores
  const yLabels = svg
    .selectAll(".y-label")
    .data(filteredData)
    .enter()
    .append("g")
    .style("font-size", `${10 * unitWidth}px`);

  yLabels
    .append("text")
    .attr("class", "y-label")
    .attr("x", labelXPosition)
    .attr("y", (d, i) => (i + 3.1) * cellHeight + xLabelPadding)
    // .attr("dy", ".35em")
    .text((d) => d.model);

  yLabels
    .append("text")
    .attr("class", "average-score")
    .attr("x", labelXPosition + 135 * unitWidth) // Offset to display average next to model name
    .attr("y", (d, i) => (i + 3.1) * cellHeight + xLabelPadding)
    // .attr("dy", ".35em")
    .text((d) => `(Avg: ${calculateAverage(d.scores).toFixed(2)})`)
    .style("font-weight", "bold");

  function calculateAverage(scores) {
    return scores.reduce((a, b) => a + b, 0) / scores.length;
  }
}



// Add an event listener to re-render the heatmap on window resize
window.addEventListener('resize', function() {
    updateHeatmap();
});

// Initial rendering and checkbox setup
updateHeatmap();
updateDeselectedCheckboxes();
