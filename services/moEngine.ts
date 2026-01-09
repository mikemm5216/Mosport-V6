import { MOCK_EVENTS, MOCK_VENUES } from '../constants';
import { DecisionSignal, SportEvent, Venue, QoETagType } from '../types';

/**
 * Layer B: The Mo Engine
 * 
 * Core Principle: Frontend Ignorance.
 * The UI does not calculate probabilities. It asks the Engine for "Signals".
 */

// Simulates the "Compare-only" Cache
const decisionCache: Map<string, DecisionSignal> = new Map();

/**
 * Logic to calculate Confidence Interval based on Verification Time and Tags
 */
const calculateMatchProbability = (event: SportEvent, venue: Venue): number => {
  let score = 0.5; // Base probability

  // T-Minus Verification Logic
  const hoursSinceVerify = (Date.now() - venue.lastVerified.getTime()) / (1000 * 60 * 60);
  
  // If verified recently (Active Signal)
  if (hoursSinceVerify < 2) score += 0.3;
  else if (hoursSinceVerify < 24) score += 0.1;
  else score -= 0.1;

  // QoE Tag Logic (Level 2 & 3)
  const hasBigScreen = venue.tags.some(t => t.type === QoETagType.BROADCAST);
  const hasVibe = venue.tags.some(t => t.type === QoETagType.VIBE);

  if (hasBigScreen) score += 0.15;
  if (hasVibe) score += 0.05;

  return Math.min(Math.max(score, 0), 1); // Clamp 0-1
};

const determineVerificationStatus = (prob: number): 'VERIFIED' | 'ON_REQUEST' | 'UNVERIFIED' => {
  if (prob >= 0.9) return 'VERIFIED';
  if (prob >= 0.6) return 'ON_REQUEST';
  return 'UNVERIFIED';
};

/**
 * MAIN PUBLIC API for Layer D
 * Returns actionable Decision Signals
 */
export const getDecisionSignals = async (): Promise<DecisionSignal[]> => {
  // Simulate network delay for "Real-time" feel
  await new Promise(resolve => setTimeout(resolve, 600));

  const signals: DecisionSignal[] = MOCK_EVENTS.map(event => {
    // Generate matches
    const matches = MOCK_VENUES.map(venue => {
      const prob = calculateMatchProbability(event, venue);
      return {
        venue,
        matchProbability: prob,
        verificationStatus: determineVerificationStatus(prob)
      };
    }).sort((a, b) => b.matchProbability - a.matchProbability);

    return {
      eventId: event.id,
      event,
      matchedVenues: matches
    };
  });

  return signals;
};