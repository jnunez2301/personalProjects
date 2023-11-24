-- Chest Day for Calisthenics
SELECT * FROM exercises WHERE body_part = 'Chest' and uses_weights = 0
UNION ALL
-- BACK DAY for Calisthenics
SELECT * FROM exercises WHERE body_part = 'BACK' and uses_weights = 0
UNION ALL
-- LEG DAY for Calisthenics
SELECT * FROM exercises WHERE body_part = 'Legs' and uses_weights = 1
UNION ALL
SELECT * FROM exercises WHERE body_part = 'Biceps' and uses_weights = 0
UNION ALL
SELECT * FROM exercises WHERE body_part = 'Triceps' and uses_weights = 0;