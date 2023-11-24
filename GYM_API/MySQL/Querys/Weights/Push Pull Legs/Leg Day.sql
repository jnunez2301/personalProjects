SELECT * FROM exercises 
WHERE 
	uses_weights = 1 
AND 
   body_part = 'Legs' AND exercise_name NOT LIKE '%dumbbell%' AND difficulty < 4;
