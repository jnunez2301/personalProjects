-- Chest Day for Calisthenics (Chest, Triceps, Shoulders)
SELECT * FROM exercises 
WHERE body_part IN ('Back', 'Biceps') AND uses_weights = 0;
