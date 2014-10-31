var selobj=null;
window.onload = new function() { fill(); }
function fill() {
	var tbl=document.getElementById('ctable');
	for(i=0; i<2; i++)
		for(j=0; j<16; j++) {
			code = 9216+16*i+j;
			tbl.rows[i].cells[j].innerHTML = '&#'+code+';';
		}
	for(i=2; i<16; i++)
		for(j=0; j<16; j++)
			tbl.rows[i].cells[j].innerHTML = String.fromCharCode(16*i+j);
	tbl.rows[2].cells[0].innerHTML  = '&#9248;';
	tbl.rows[7].cells[15].innerHTML = '&#9249;';
}

function OnOver(obj) {
	if( selobj!=obj )
		obj.className='hov';
}

function OnOut(obj) {
	if( selobj!=obj )
		obj.className='reg';
}

function OnClick(obj) {
	dlook=[
		'Null character','Start of Heading','Start of Text','End of Text','End of transmission','Enquiry','Acknowledge','Bell','Backspace','Horizontal tab','Line feed','Vertical tab','Form feed','Carriage return','Shift out','Shift in',
		'Data Link Escape','Device Control 1','Device Control 2','Device Control 3','Device Control 4','Negative acknowledge','Synchronous Idle','End of Transmission Block','Cancel','End of Medium','Substitute','Escape','File Separator','Group Separator','Record Separator','Unit Separator',
		'Space','Exclamation mark','Quotation mark','Number sign','Dollar sign','Percent sign','Ampersand','Apostrophe','Left parenthesis','Right parenthesis','Asterisk','Plus sign','Comma','Hyphen minus','Full stop','Slash',
		'Digit Zero','Digit One','Digit Two','Digit Three','Digit Four','Digit Five','Digit Six','Digit Seven','Digit Eight','Digit Nine','Colon','Semicolon','Less-than sign','Equal sign','Greater-than sign','Question mark',
		'At sign','Capital A','Capital B','Capital C','Capital D','Capital E','Capital F','Capital G','Capital H','Capital I','Capital J','Capital K','Capital L','Capital M','Capital N','Capital O',
		'Capital P','Capital Q','Capital R','Capital S','Capital T','Capital U','Capital V','Capital W','Capital X','Capital Y','Capital Z','Left square bracket','Backslash','Right square bracket','Circumflex accent','Low line',
		'Grave accent','Small A','Small B','Small C','Small D','Small E','Small F','Small G','Small H','Small I','Small J','Small K','Small L','Small M','Small N','Small O',
		'Small P','Small Q','Small R','Small S','Small T','Small U','Small V','Small W','Small X','Small Y','Small Z','Left curly bracket','Vertical bar','Right curly bracket','Tilde','Delete'
	];
	obj.className='sel';
	if( obj!=selobj && selobj!=null )
		selobj.className='reg';
	selobj = obj;
	view = obj.innerHTML;
	code = view.charCodeAt(0);
	x = obj.cellIndex;
	y = obj.parentNode.rowIndex;
	code = x+y*16;
	desc = '';
	if( code<128 ) desc = dlook[code];
	if( code==38 )  view='&';
	if( code==60 )  view='<';
	if( code==62 )  view='>';
	if( code==160 ) view=' ';
	hex = code.toString(16);
	hex = hex.toUpperCase();
	bin = code.toString(2);
	if( hex.length==1 ) hex='0'+hex;
	if( bin.length<8 ) bin=Array(9-bin.length).join('0')+bin;
	es = '';
	if( code==0 ) es='\\0';
	if( code==7 ) es='\\a';
	if( code==8 ) es='\\b';
	if( code==9 ) es='\\t';
	if( code==10 ) es='\\n';
	if( code==11 ) es='\\v';
	if( code==12 ) es='\\f';
	if( code==13 ) es='\\r';
	if( code==34 ) es='\\\"';
	if( code==39 ) es='\\\'';
	if( code==63 ) es='\\\?';
	if( code==92 ) es='\\\\';
	code = code.toString();

	document.gen.dec_code.value  = code;
	document.gen.hex_code.value = hex;
	document.gen.bin_code.value = bin;
	document.gen0.view.value  = view;
	document.gen0.desc.value  = desc;
	document.gen0.esc.value = '\\x'+hex;
	document.gen0.esca.value = es;
	if( code.length==1 ) code='0'+code;
	document.gen.code5.value = '&#'+code+';';
}

function OnCopy(obj) {
	obj.select();
}
