SELECT  ur.exercise_id, ur.user_id, ur.routine_name, e.exercise_name, ur.sets, ur.reps, ur.rest
FROM user_routines ur
JOIN exercises e ON e.exercise_id = ur.exercise_id
WHERE ur.routine_name LIKE '%BRO SPLIT%'
order by routine_name;

SELECT * FROM user_routines ORDER BY routine_name;

UPDATE user_routines SET sets = '3-4', reps='8-12', rest='1-2 minutes'
WHERE exercise_id > 0;