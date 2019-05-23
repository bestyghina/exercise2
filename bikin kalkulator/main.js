function plus(){
	x 	= eval(form.a.value)
	y	= eval(form.b.value)
	z	= x + y
	form.hasil.value = z
}

function minus(){
	x 	= eval(form.a.value)
	y	= eval(form.b.value)
	z	= x - y
	form.hasil.value = z
}

function times(){
	x 	= eval(form.a.value)
	y	= eval(form.b.value)
	z	= x * y
	form.hasil.value = z
}

function div(){
	x 	= eval(form.a.value)
	y	= eval(form.b.value)
	z	= x / y
	form.hasil.value = z
}

function kosong(){
	form.x.focus()
	form.x.value=""
	form.y.value=""
	form.hasil.value=""
}