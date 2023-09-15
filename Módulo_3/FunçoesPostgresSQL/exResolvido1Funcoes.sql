select categoria, count(id) as "produtos", sum(estoque) "soma total de estoque" from farmacia group by categoria;

