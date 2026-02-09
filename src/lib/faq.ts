export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Does Mudra upload my SMS or financial data?",
    answer:
      "No. Mudra uses a local-first architecture. Transaction parsing and storage happen on your device, and your records are not uploaded to cloud servers by default.",
  },
  {
    question: "Can I use Mudra without SMS access?",
    answer:
      "Yes. SMS permission is optional. You can still add and manage expenses manually and use analytics, reminders, and account views.",
  },
  {
    question: "What permissions does Mudra need?",
    answer:
      "SMS read permission is only for transaction detection. Notification permission is used for reminder alerts. You can disable either permission from device settings anytime.",
  },
  {
    question: "How does backup and restore work?",
    answer:
      "Mudra supports local backup and restore so your data stays under your control. You can create backups from settings and restore them when needed.",
  },
  {
    question: "Can I review parsed transactions before import?",
    answer:
      "Yes. Detected SMS transactions go through a review flow so you can confirm what gets added.",
  },
  {
    question: "Is Mudra financial advice?",
    answer:
      "No. Mudra is a tracking and organization tool. It helps you understand spending, but decisions and compliance remain your responsibility.",
  },
];
