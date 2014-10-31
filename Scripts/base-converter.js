function dconvert() {
	var dnum=parseInt(document.getElementById("dec").value);
	var dno=new Number(dnum);
	if(!isNaN(dno)) {
		document.getElementById("bin").value=dno.toString(2);
		document.getElementById("oct").value=dno.toString(8);
		document.getElementById("hex").value=dno.toString(16);
	}
}

function bconvert(bn) {
	var len=bn.length;
	var tot=0;
	var i,j;
	for(i=0,j=len-1;i<len;i++,j--) {
		tot=tot+parseInt(bn.charAt(i))*Math.pow(2,j);
	}
	var dec=new Number(tot);
	document.getElementById("dec").value=dec;
	document.getElementById("oct").value=dec.toString(8);
	document.getElementById("hex").value=dec.toString(16);
}

function oconvert(oc) {
	var len=oc.length;
	var tot=0;
	var i,j;
	for(i=0,j=len-1;i<len;i++,j--) {
		tot=tot+parseInt(oc.charAt(i))*Math.pow(8,j);
	}
	var dec=new Number(tot);
	document.getElementById("dec").value=dec;
	document.getElementById("bin").value=dec.toString(2);
	document.getElementById("hex").value=dec.toString(16);
}

function hconvert(hd) {
	var len=hd.length;
	var tot=0;
	var i,j;
	for(i=0,j=len-1;i<len;i++,j--) {
		ch=hd.charAt(i);
		if(ch=="a" || ch=="A")
			tot=tot+10;
		else if(ch=="b" || ch=="B")
			tot=tot+11;
		else if(ch=="c" || ch=="C")
			tot=tot+12;
		else if(ch=="d" || ch=="D")
			tot=tot+13;
		else if(ch=="e" || ch=="E")
			tot=tot+14;
		else if(ch=="f" || ch=="F")
			tot=tot+15;
		else
			tot=tot+parseInt(hd.charAt(i))*Math.pow(16,j);
	}
	var dec=new Number(tot);
	document.getElementById("dec").value=dec;
	document.getElementById("bin").value=dec.toString(2);
	document.getElementById("oct").value=dec.toString(8);
}

function dncheck(event,no) {
	var kc;
	if(window.event)
		kc=event.keyCode;
	else
		kc=event.which;
	var num=no.value;
	if (kc!=8 && kc!=0)
		if (kc<48||kc>57)
			return false;
}

function bncheck(event,no) {
	var kc;
	if(window.event)
		kc=event.keyCode;
	else
		kc=event.which;
	var num=no.value;
	if (kc!=8 && kc!=0)
		if (kc!=48 && kc!=49)
			return false;
}

function oncheck(event,no) {
	var kc;
	if(window.event)
		kc=event.keyCode;
	else
		kc=event.which;
	var num=no.value;
	if (kc!=8 && kc!=0)
		if (kc<48 || kc>55)
			return false;
}

function hncheck(event) {
	var kc;
	if(window.event)
		kc=event.keyCode;
	else
		kc=event.which;

	if (kc>=65 && kc<=70)
		return true;
	else if (kc>=97 && kc<=102)
		return true;
	else if (kc>=48 && kc<=57)
		return true;
	else if (kc==8)
		return true;
	else if (kc==0)
		return true;
	else
		return false;
}


  
