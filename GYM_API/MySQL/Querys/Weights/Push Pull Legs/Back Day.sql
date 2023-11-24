SELECT * FROM exercises 
WHERE uses_weights = 1 
AND
	exercise_name NOT LIKE '%Preacher%' AND exercise_name NOT LIKE '%T-Bar%'
AND (
    (body_part = 'Biceps' AND exercise_name NOT LIKE '%Cable%') OR
    -- IF YOU CHANGE TO LIKE IT SWITCHES TO DUMBBELLS WORKOUT <3
    (body_part = 'Back' AND exercise_name NOT LIKE '%Dumbbell%')
);
