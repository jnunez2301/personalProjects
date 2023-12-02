SELECT * FROM user_routines;

INSERT INTO user_routines
(exercise_id, user_id, routine_name, weights_calisthenics, sets, reps, rest)
VALUES
(?, ?, ?, ?, ?, ?, ?);