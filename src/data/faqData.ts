export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  highlight?: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-duration',
    question: 'How long do the deals take?',
    answer:
      'Most free mobile app downloads, casual game challenges, and free membership sign-ups take between 2 to 5 minutes to complete. Subscription trials (such as streaming or meal kit specials) confirm automatically within 15 to 30 minutes. Once you have finished the required 4 partner deals for the $500 gift card, your digital reward unlocks immediately and is sent directly to your verified email address.',
    highlight: '2–5 mins for free apps · Instant reward unlock after 4 deals',
  },
  {
    id: 'faq-deals-included',
    question: 'What kind of deals are included?',
    answer:
      'Our reward program features hundreds of offers from recognized national partners. Deals include playing casual free mobile games (e.g. reaching a specified board level), testing popular streaming services (like Disney+ or SiriusXM), installing free consumer utility apps (like Credit Karma or Fetch), and taking advantage of household meal-kit trials. You have 100% control over which deals you choose to complete.',
    highlight: 'Over 20+ verified partner offers across games, streaming, and utilities',
  },
  {
    id: 'faq-hobby-lobby-usage',
    question: 'Can I use this gift card in physical stores and online?',
    answer:
      'Yes, absolutely. The $500 Hobby Lobby digital gift card contains an official scannable barcode and 16-digit card number with PIN. It is accepted at all 1,000+ Hobby Lobby retail stores across the United States at the cash register, as well as on HobbyLobby.com. There are never any blackout dates, and the balance never expires.',
    highlight: 'Valid at all 1,000+ US Hobby Lobby stores and online at hobbylobby.com',
  },
  {
    id: 'faq-sales-stacking',
    question: 'Does the gift card stack with Hobby Lobby’s 40% weekly sales?',
    answer:
      'Yes! Your $500 card functions exactly like cash. You can freely combine it with Hobby Lobby’s famous 40% to 50% rotating weekly sales on home decor, framing, fabric, art supplies, seasonal decor, and in-store clearance markdowns to maximize your savings.',
    highlight: '100% stackable with rotating 40%–50% weekly sales and clearance',
  },
  {
    id: 'faq-age-requirement',
    question: 'Why must I be 18 years or older?',
    answer:
      'In compliance with United States promotional reward guidelines, federal COPPA regulations, and partner contract terms, participants must be at least 18 years of age (or the age of majority in your jurisdiction) to participate in sponsor deals and receive high-value gift cards.',
    highlight: 'Required by US promotional incentive compliance and partner agreements',
  },
  {
    id: 'faq-cost',
    question: 'Do I have to spend any money to get the $500 gift card?',
    answer:
      'No. You can reach the required number of completed deals solely by choosing 100% free offers—such as downloading free mobile games, checking your credit score for free, or scanning receipts. While some users choose to do subscription trial offers because they offer higher points or faster credits, paid deals are strictly optional.',
    highlight: '100% free deals available · No purchase mandatory',
  },
];
