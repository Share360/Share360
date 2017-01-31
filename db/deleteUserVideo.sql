DELETE FROM public."Videos"
WHERE id = $1
AND uploader_id=$2;