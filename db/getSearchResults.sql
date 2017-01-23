SELECT * FROM public."Videos"
WHERE UPPER(title) LIKE $1
OR UPPER(description) LIKE $1
OR UPPER(cat1) LIKE $1
OR UPPER(cat2) LIKE $1
OR UPPER(cat3) LIKE $1;