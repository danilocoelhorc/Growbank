const calculate1 = document.getElementById('calcularSaldo');
const calculate2 = document.getElementById('calcularSaque');
const calculate3 = document.getElementById('calcularDeposito');
const calculate4 = document.getElementById('calcularTransferir');
const menu2 = 3, validSenha = 0
let saldo = 100, chequeespecial = 500.00

	calculate1.addEventListener ('click', saldoAtual);
	calculate2.addEventListener ('click', saqueAtual);
	calculate3.addEventListener ('click', depositoAtual);
	calculate4.addEventListener ('click', transferenciaAtual);

	function saldoAtual (){	
		document.write ("Seu saldo atual é de: ", + saldo + " growcoins")
		document.write ("<br>Você também tem disponível: " + chequeespecial + " em cheque especial")
	}
	function depositoAtual () {
		const deposito = parseFloat(document.getElementById('deposito').value);
		saldo = saldo + deposito
		document.write ("<br>Deposito realizada com sucesso!<br>Seu saldo atual é de: " + saldo + " growcoins")
		document.write ("<br>Você também tem disponível: " + chequeespecial + " em cheque especial")	
	}

	function saqueAtual () {
		const saque = parseFloat(document.getElementById('saque').value);
		let validaSaque, taxa = 2.50
		validaSaque = saque + taxa

		
		if (validaSaque > saldo + chequeespecial) {
			document.write ("Saldo indisponivel para saque, tente novamente!")	
		}
		else if (validaSaque <= saldo) {
			saldo = saldo - validaSaque
			document.write ("<br>Saque realizada com sucesso!<br>Seu saldo atual é de: " + saldo + " growcoins <br>")	
		}
		else if (validaSaque > saldo) {
			validaSaque = validaSaque - saldo
			chequeespecial = chequeespecial - validaSaque
			saldo = 0
			document.write ("<br>Saque realizada com sucesso! <br> Seu saldo atual é de: " + saldo + " growcoins <br>")
			document.write ("<br>Você ainda tem disponível: " + chequeespecial + " em cheque especial <br>")
		}
		
	}
	function transferenciaAtual () {
		const transferencia = parseFloat(document.getElementById('transferencia').value);
		let agencia, conta, taxa = 4.50, validaTrans

		validaTrans = transferencia + taxa

		if (validaTrans > saldo) {
		document.write ("<br>Saldo indisponivel para saque, <br>Seu saldo atual é de: " + saldo + "<br>")	
		}

		else {			
		saldo = saldo - validaTrans
		document.write ("<br>Transferencia realizada com sucesso!<br>Seu saldo atual é de: " + saldo + " <bt>")
		document.write ("<br>Você também tem disponível: " + chequeespecial + " em cheque especial <br>")
		}
	}
