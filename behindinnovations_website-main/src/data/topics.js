// Single source for inquiry topics. Pages pass one of these to onOpenModal(topic)
// so the form opens pre-selected.
export const TOPICS = {
  driver: 'EV Ride App — Partner / Driver',
  partnership: 'Strategic Partnership',
  future: 'Sea, Air or Space Partnership',
  logistics: 'Logistics Ecosystem',
  investor: 'Investor Relations',
  career: 'Career Profile Submission',
  general: 'General Enquiry',
}

export const TOPIC_LIST = Object.values(TOPICS)
