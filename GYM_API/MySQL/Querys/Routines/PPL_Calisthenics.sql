SELECT ur.exercise_id, ur.user_id, e.body_part, e.exercise_name, u.user_handle, ur.routine_name, ur.weights_calisthenics
FROM user_routines ur
JOIN exercises e ON ur.exercise_id = e.exercise_id
JOIN users u ON ur.user_id = u.user_id
WHERE ur.user_id = 3 AND weights_calisthenics = 'calisthenics' AND routine_name = 'PPL';

-- UPDATE user_routines SET weights_calisthenics = 'weights' WHERE exercise_id >= 5;