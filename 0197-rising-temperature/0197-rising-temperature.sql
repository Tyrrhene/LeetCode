# Write your MySQL query statement below
SELECT x.id
FROM Weather x, Weather y
WHERE x.recordDate = DATE_ADD(y.recordDate, INTERVAL 1 DAY)
  AND x.temperature > y.temperature;