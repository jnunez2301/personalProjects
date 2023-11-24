-- PUSH DAY
SELECT * FROM exercises 
WHERE uses_weights = 1 AND body_part = 'Chest' AND exercise_name LIKE '%BARBELL%'
UNION ALL
SELECT * FROM exercises
WHERE uses_weights = 1 AND body_part = 'Triceps' AND (exercise_name LIKE '%ROPE%' OR exercise_name LIKE '%SKULL%')
UNION ALL
SELECT * FROM exercises
WHERE uses_weights = 1 AND body_part = 'Shoulders'
LIMIT 8;