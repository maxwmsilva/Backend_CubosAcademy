function solucao(gabarito) {
	let pontos = 0;

	for (let i = 0; i < gabarito.length; i++) {
		const distancia = Math.floor(i / 4) + 1;
		if (gabarito[i]) {
			pontos += distancia;

		}
	}
	console.log(pontos);
}

solucao([true, false, true, true,
	false, false, true, true,
	false, false, false, true,
	true, false, true, false])