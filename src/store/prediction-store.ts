'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Prediction, TournamentPrediction } from '@/types';

interface PredictionState {
  predictions: Prediction[];
  tournamentPredictions: TournamentPrediction[];
  
  // Actions
  addPrediction: (prediction: Omit<Prediction, 'id' | 'createdAt'>) => void;
  updatePrediction: (matchId: number, homeScore: number, awayScore: number) => void;
  getPredictionForMatch: (matchId: number) => Prediction | undefined;
  
  addTournamentPrediction: (prediction: Omit<TournamentPrediction, 'id'>) => void;
  getTournamentPrediction: (type: TournamentPrediction['type']) => TournamentPrediction | undefined;
  
  // Scoring
  calculatePoints: (matchId: number, actualHome: number, actualAway: number) => void;
}

export const usePredictionStore = create<PredictionState>()(
  persist(
    (set, get) => ({
      predictions: [],
      tournamentPredictions: [],

      addPrediction: (prediction) => {
        const existing = get().predictions.find(
          (p) => p.matchId === prediction.matchId && p.userId === prediction.userId
        );
        
        if (existing) {
          set((state) => ({
            predictions: state.predictions.map((p) =>
              p.matchId === prediction.matchId && p.userId === prediction.userId
                ? { ...p, homeScore: prediction.homeScore, awayScore: prediction.awayScore }
                : p
            ),
          }));
        } else {
          const newPrediction: Prediction = {
            ...prediction,
            id: Date.now(),
            createdAt: new Date().toISOString(),
          };
          set((state) => ({
            predictions: [...state.predictions, newPrediction],
          }));
        }
      },

      updatePrediction: (matchId, homeScore, awayScore) => {
        set((state) => ({
          predictions: state.predictions.map((p) =>
            p.matchId === matchId
              ? { ...p, homeScore, awayScore }
              : p
          ),
        }));
      },

      getPredictionForMatch: (matchId) => {
        return get().predictions.find((p) => p.matchId === matchId);
      },

      addTournamentPrediction: (prediction) => {
        const existing = get().tournamentPredictions.find(
          (p) => p.type === prediction.type && p.userId === prediction.userId
        );
        
        if (existing) {
          set((state) => ({
            tournamentPredictions: state.tournamentPredictions.map((p) =>
              p.type === prediction.type && p.userId === prediction.userId
                ? { ...p, ...prediction }
                : p
            ),
          }));
        } else {
          const newPrediction: TournamentPrediction = {
            ...prediction,
            id: Date.now(),
          };
          set((state) => ({
            tournamentPredictions: [...state.tournamentPredictions, newPrediction],
          }));
        }
      },

      getTournamentPrediction: (type) => {
        return get().tournamentPredictions.find((p) => p.type === type);
      },

      calculatePoints: (matchId, actualHome, actualAway) => {
        set((state) => ({
          predictions: state.predictions.map((p) => {
            if (p.matchId !== matchId) return p;

            let points = 0;
            const predHome = p.homeScore;
            const predAway = p.awayScore;

            // Exact score: +5
            if (predHome === actualHome && predAway === actualAway) {
              points = 5;
            }
            // Correct goal difference: +3
            else if (predHome - predAway === actualHome - actualAway) {
              points = 3;
            }
            // Correct winner: +1
            else if (
              (predHome > predAway && actualHome > actualAway) ||
              (predHome < predAway && actualHome < actualAway) ||
              (predHome === predAway && actualHome === actualAway)
            ) {
              points = 1;
            }

            return { ...p, pointsEarned: points };
          }),
        }));
      },
    }),
    {
      name: 'wc-predictions',
    }
  )
);
