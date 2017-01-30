SELECT *, public."Videos".id AS video_id, public."Videos".description AS video_description FROM public."Videos"
JOIN public."Users" ON uploader_id = public."Users".id
WHERE UPPER(title) LIKE $1
OR UPPER(public."Videos".description) LIKE $1
OR UPPER(public."Users".username) LIKE $1
OR UPPER(cat1) LIKE $1
OR UPPER(cat2) LIKE $1
OR UPPER(cat3) LIKE $1;