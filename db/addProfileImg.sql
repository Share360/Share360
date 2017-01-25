UPDATE public."Users"
SET profile_url = $2
WHERE id = $1;