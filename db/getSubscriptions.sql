SELECT public."Users".*
FROM public."Subscriptions"
JOIN public."Users"
ON uploader_id = public."Users".id
WHERE user_id = $1;