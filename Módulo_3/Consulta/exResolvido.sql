--exResolvido3_consultasSQL

select compositor, composicao, tempo 
from musicas
where tempo between 2*60 and 5*60 and compositor <> 'Mozart'
--podemos usar != ou <> para sinalizar sinal diferença.








