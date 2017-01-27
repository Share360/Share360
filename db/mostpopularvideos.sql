SELECT COUNT( public."Favorites".video_id ) AS most_popular, public."Videos".*
FROM
	public."Favorites"
JOIN
	public."Videos"
ON
	video_id = public."Videos".id
GROUP BY
	public."Favorites".video_id, public."Videos".id
ORDER BY
	most_popular DESC;