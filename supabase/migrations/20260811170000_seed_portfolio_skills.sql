-- Seed the portfolio skill list. Existing skills are left unchanged.
INSERT INTO skills (name, category, proficiency, sort_order)
SELECT seed.name, seed.category, seed.proficiency, seed.sort_order
FROM (
  VALUES
    ('React', 'Frontend', 82, 1),
    ('TypeScript', 'Frontend', 72, 2),
    ('JavaScript', 'Frontend', 85, 3),
    ('HTML5', 'Frontend', 90, 4),
    ('CSS3', 'Frontend', 82, 5),
    ('Node.js', 'Backend', 76, 6),
    ('Express', 'Backend', 74, 7),
    ('Python', 'Programming', 78, 8),
    ('C', 'Programming', 70, 9),
    ('C++', 'Programming', 72, 10),
    ('Git', 'Tools', 80, 11),
    ('GitHub', 'Tools', 80, 12),
    ('Postman', 'Tools', 78, 13)
) AS seed(name, category, proficiency, sort_order)
WHERE NOT EXISTS (SELECT 1 FROM skills WHERE lower(skills.name) = lower(seed.name));
