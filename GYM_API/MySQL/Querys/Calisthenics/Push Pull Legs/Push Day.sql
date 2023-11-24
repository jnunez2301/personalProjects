-- Chest Day for Calisthenics (Chest, Triceps, Shoulders)
SELECT * FROM exercises 
WHERE body_part IN ('Chest', 'Triceps', 'Shoulders') AND uses_weights = 0;
