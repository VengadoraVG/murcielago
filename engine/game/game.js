var ALIKE_LETTERS = [ "iye", 
		      "ckqx", 
		      "sxcz", 
		      "jghy", 
		      "mnñtp",
		      "aeiou"];

var SAME_LETTERS = ["áäâaà", "éëêèe", "íïîìi", "óöôòo", "úüûùu"]
var INSERTION_COST = 15;
var DELETION_COST =15;
var SAME_SUBSTITUTION_COST =0;
var ALIKE_SUBSTITUTION_COST =5;
var SUBSTITUTION_COST =20;

var start="murcielago";
var end="caballo";
var resources = 100;
//i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry ;_;
var words = ["disculpa","traer","salvo","quedar","hubiese","detective","toca","lleno","llegue","vayas","harás","cualquiera","podamos","hablamos","zona","próximo","increíble","dejen","vuelo","verlo","parecen","pedir","idiota","santa","mes","pelea","haberlo","encuentro","hotel","uh","tomó","trasero","tuviera","prefiero","dando","ayer","perfecto","coronel","honor","viejos","capaz","teníamos","podrás","contacto","confiar","tren","hacerme","mirar","llamas","ibas","cuántas","estación","correcto","vea","llevaré","podido","mr","tratar","ponte","esposo","muchacho","sigo","relación","leer","cerebro","sargento","comandante","sabías","pidió","Jesús","escuchar","estarán","médico","dulce","carta","perdió","ellas","dejaste","vista","piso","siéntate","dejas","cámara","luces","novia","rayos","quiénes","estúpido","regresa","excelente","escuche","culo","código","error","sol","intenta","conocí","veremos","debió","hermosa","tocar","pruebas","departamento","funciona","tienda","pensado","muertos","banco","depende","podremos","jugando","déjalo","des","haberte","ocurrió","cita","mesa","unidad","oigan","matado","intentando","necesitaba","seguramente","especie","embargo","pedazo","tomando","abogado","hablado","contar","mirando","cena","imposible","hubieras","reunión","tía","hagamos","debido","lee","come","doble","cargo","príncipe","personal","especialmente","espíritu","cielos","deberían","papel","decisión","aquella","alma","gato","estrella","escribir","edificio","obra","encontró","corte","accidente","delante","dé","podré","cuestión","guardia","carrera","mata","soldados","diablo","baño","posición","oiga","probar","llame","ponga","espada","dia","humano","calma","pedí","ganas","duele","puse","malditos","libertad","aprender","varios","vengo","negocios","dirección","pelear","escuché","vendrá","prometo","volverá","director","sube","cumpleaños","sur","sucedió","pies","perra","cayó","nuevos","llave","simple","vayamos","saca","norte","espacio","también","papa","vuelvo","diferente","dígame","robot","quedó","empezó","humanos","quiso","segundos","solamente","color","bar","novio","isla","date","planeta","quedarme","parecer","dará","parar","energía","supe","despues","terrible","río","sirve","llena","conocido","trajo","escúchame","digamos","tomé","reina","oro","consejo","tendrán","siguen","mar","abran","órdenes","interesa","sentí","saldrá","destino","volar","basura","baile","respeto","enseguida","sepa","pesar","pasará","golpe","hayan","hermanos","normal","encontraron","paciente","iglesia","je","fuerzas","tomado","bomba","llevan","derecha","ojo","libros","evitar","larga","alta","siga","proteger","sigan","navidad","informe","subir","izquierda","fe","éramos","gracioso","confía","silencio","cuento","salgan","encuentras","abuelo","diste","princesa","leo","hermoso","amable","bolsa","tuyo","ex","tomo","vidas","vestido","entendido","hablé","enemigo","arreglar","tantos","bajar","verá","quedarse","crimen","entender","área","salido","adentro","nena","máquina","intentar","caballo","hable","peligro","mía","caballero","partir","millón","duda","batalla","pudiste","nota","varias","usando","rojo","mataste","tomaré","lleve","verdadera","soldado","bonita","acuerdas","irse","irnos","cuesta","nueve","brazo","déjenme","mataron","formas","alguno","harán","traído","destruir","absolutamente","preocupa","iban","estilo","huele","definitivamente","loca","entrada","radio","perros","acabas","investigación","bienvenida","valor","muestra","asesinato","mando","vieron","aquellos","frío","reglas","llámame","desea","mama","abuela","tarjeta","presento","quede","malas","busco","irte","bienvenidos","acceso","fondo","anillo","quedarte","tomas","pasé","divertido","tantas","detener","puertas","pistola","llamé","tiro","irás","comienza","velocidad","partido","cuidar","cálmate","obviamente","muere","uso","pide","escena","despierta","recordar","presión","teniendo","paga","llevará","cambia","cartas","tercer","echar","directo","canción","cuantos","cerrar","sabia","sir","roma","querer","cambiado","seria","correr","imagino","beber","envió","entró","cenar","horrible","sueños","llegamos","animales","comenzar","viva","piensan","sección","poniendo","suelo","bella","vuelvas","piel","habéis","pocos","perdona","habia","habló","caer","pago","experiencia","ayúdame","asuntos","proyecto","defensa","acción","principio","orgulloso","metros","red","adonde","precio","diles","mueve","hables","escuchen","partes","lugares","llevamos","bailar","aléjate","sentado","propósito","seguimos","pedido","llegas","vos","puntos","perdiendo","vender","necesario","bebe","molesta","dejame","charles","operación","tv","lord","banda","oíste","resulta","quedo","miembros","rico","permite","diferencia","salida","yendo","jodido","debiste","dioses","triste","quedas","u","sentía","azul","robar","pones","hazme","cae","hogar","jóvenes","llegué","dueño","pista","pan","maté","puto","saliendo","memoria","puente","llego","compañero","volviendo","lucha","haberme","habido","cabo","viento","camión","bala","imagen","toque","sonido","universidad","pareció","tercera","llaves","broma","drogas","tamaño","policías","suficientemente","necesitar","llamaba","tomen","dejaron","carga","escrito","temprano","salgamos","nuevas","olvida","agradezco","peso","pongo","coger","pondré","pequeños","seremos","robó","pareja","líder","fueras","ti","público","trató","cien","calor","llevaba","termina","dígale","recibir","confío","viniste","vosotros","puedan","ey","sera","vives","cuentas","arte","terminado","gana","veía","hablaré","luchar","respecto","querían","fué","encantaría","infierno","olvides","tema","recién","héroe","marca","verme","creemos","poderes","dama","guarda","enfermo","coño","miembro","hablemos","quítate","olvídalo","sujeto","maravilloso","ejemplo","cientos","animal","té","viviendo","llamando","sugiero","cuida","mantén","repente","podías","lana","gustaba","querría","tiempos","perdimos","opinión","bola","ama","vuelvan","vimos","quizás","cuantas","costa","serie","olvidé","leyes","perdiste","ello","aceptar","obtener","vuestra","reloj","ventana","torre","prisión","mires","señores","papi","dejan","momentos","ayudarte","volveremos","den","comenzó","bosque","fuese","central","cansado","vuestro","rato","quedará","podria","viven","preocupe","objetivo","km","tuvieron","refiero","detente","compré","asiento","andar","tengamos","robo","tropas","regresen","quedado","enorme","dejamos","propios","siglo","hubieran","consigue","manejar","contó","cantidad","fuente","dedo","planes","ponen","interesante","acaban","desearía","merece","cinta","socio","leí","hechos","sorpresa","seres","riesgo","recoger","tira","millas","algún","deme","averiguar","llegará","peligroso","encantado","crear","cliente","romper","robots","prisa","entiende","llevaron","caminar","verla","podrán","decidido","acabamos","zapatos","ganado","demonio","limpiar","gordo","recuperar","estemos","daría","agentes","terminó","sienta","pensamos","llegaron","termine","virus","esperamos","actuar","verano","inteligente","dudo","premio","posibilidad","faltan","quédese","noticia","mami","gustó","conocía","taxi","pasan","quita","lástima","dejarlo","trabajas","ocupado","acto","traté","clases","caray","esperas","visita","preguntarte","oficiales","pensó","muero","primeros","créeme","coge","preguntar","conseguí","corriendo","muerta","controlar","canal","verde","traigo","felices","discutir","deber","unidos","enviar","salud","lisa","diferentes","brazos","agradable","caliente","aguanta","recibido","quedamos","meter","escapar","aviones","preparado","metido","levanta","juez","huellas","películas","trabajaba","estarías","vuelves","tranquila","menor","árbol","ó","herida","hambre","enamorado","piloto","encontraste","tormenta","principal","llevarte","piernas","mírame","relaciones","harías","perdone","nombres","blanca","show","tardes","sepas","conocen","pulso","primo","sheriff","dejarme","pasamos","corta","traeré","cerveza","estáis","toques","juicio","íbamos","estuvimos","brillante","agarra","fueran","boda","olvidar","monstruo","traigan","suelta","cabello","quedaré","oigo","escuchado","olvidado","silla","locura","propiedad","joder","intenté","cárcel","amenaza","vinieron","vean","prensa","murieron","voluntad","medicina","crea","ayudarme","ultima","opción","decirles","época","taza","mapa","hablaba","cuán","pocas","hielo","preguntaba","casas","llegaste","dispuesto","botella","tratado","llevado","leche","balas","video","propias","levántate","esperan","cierta","inspector","hablan","total","lengua","extraña","volví","modelo","eeuu","huevos","cocina","pondrá","historias","aseguro","estudio","efecto","hablaremos","quédense","salimos","números","motivo","dura","dirá","convierte","víctima","refieres","pierna","abra","trajiste","tomamos","resolver","cortar","victoria","truco","pongas","menudo","datos","aparte","pura","normalmente","vivía","hiciera","sois","mantiene","enfermedad","completo","vacaciones","usan","sistemas","volvamos","tensión","carro","traes","oeste","flores","éxito","dedos","darles","cuáles","revisar","pense","escribió","beso","quedé","lago","deba","veinte","preocupado","mato","esperanza","amas","seguros","queria","inglés","flota","firma","cine","recibí","pusieron","parado","ministro","salvó","reino","naves","estúpida","consigo","calles","raza","examen","alerta","naturaleza","matrimonio","acabado","pérdida","famoso","tuya","revista","compra","armiño"]

function cost_of_insertion(x){ return INSERTION_COST; }

function cost_of_deletion(x) { return DELETION_COST; }

function areTheSame(a, b){
    var same = false;
    if(a==b)
	return true;
    jQuery.each( SAME_LETTERS, function(index, element){
	if(element.indexOf(a) !=-1 && element.indexOf(b) !=-1){
	    same=true;
	    return false;
	}
    });
    if(same) return true;
    return false;
}

function areAlike(a, b) {
    var alike = false;
    jQuery.each( ALIKE_LETTERS, function( index, element){
	if(element.indexOf(a) != -1 && element.indexOf(b) != -1){
	    alike = true;
	    return false;	
	}
    });
    if(alike) return true;
    return false;
}

function cost_of_substitution(a, b){
    if(areTheSame(a,b)){
	return SAME_SUBSTITUTION_COST;
    }
    if(areAlike(a,b)){
	return ALIKE_SUBSTITUTION_COST;
    }
    return SUBSTITUTION_COST;
}

function levenshteinDistance(original, model){
    console.log(
	"finding levenshtein distance between " + original + " and " + model); 

    var dpm = new Array(original.length+1);
    for(i = 0; i<=original.length; i++){
	dpm[i] = new Array(model.length+1);
	dpm[i][0] = i*INSERTION_COST;
    }
    for(i = 1; i<=model.length; i++)
	dpm[0][i] = i*DELETION_COST;

    for(currentOriginal =1; currentOriginal <=original.length; currentOriginal++){
	for(currentModel = 1; currentModel <= model.length; currentModel++){
	    //the costs of executing the operation of... 
	    var insertion = dpm[currentOriginal-1][currentModel]
		+ cost_of_insertion(model.charAt(currentModel-1));

	    var deletion = dpm[currentOriginal][currentModel-1]
		+ cost_of_deletion(original.charAt(currentOriginal-1));
	    var substitution = dpm[currentOriginal-1][currentModel-1]
		+ cost_of_substitution(
		    original.charAt(currentOriginal-1), model.charAt(currentModel-1));
	    
	    //choosing the cheapest between those costs...
	    dpm[currentOriginal][currentModel] 
		= Math.min(insertion, 
			   Math.min(deletion, substitution));
	}
    }
    var x="\n";
    for(a =0; a<=original.length; a++){
	for(b =0; b<=model.length; b++){
	    x += dpm[a][b] + " ";
	}
	x+="\n";
    }
    console.log("dpm matrix of the optimal distance...");
    console.log(x);

    return dpm[original.length][model.length];
}

function startIt(){
    start = words[Math.floor(Math.random()*words.length)];
    do{
	end = words[Math.floor(Math.random()*words.length)];
    }while(levenshteinDistance(start, end) < resources)
    var lbl = document.getElementById("current");
    lbl.textContent = start;
        
    lbl = document.getElementById("goal");
    lbl.textContent = end;
    document.getElementById("history").textContent = start;
    document.getElementById("ed").textContent = resources;
}

function jump(){
    if(parseInt(document.getElementById("temptative-ed").textContent) > resources){
	document.getElementById("msg").textContent=
	    "No puedes realizar ese salto. El costo es muy elevado! (intenta ajustar la dificultad)";
    }else{
	document.getElementById("total-ed").textContent =
	    parseInt(document.getElementById("total-ed").textContent) + 
	    parseInt(document.getElementById("temptative-ed").textContent);
	
	document.getElementById("current").textContent =
	    document.getElementById("word").value;

	document.getElementById("history").textContent += "-> " +
	    document.getElementById("word").value;
	document.getElementById("word").value ="";
	checkCurrentEd();
	if(document.getElementById("missing-ed").textContent == "0")
	    win();
    }
}

function win(){
    alert("you are a win, and all your base no belong to us");
    startIt();
}

function checkCurrentEd(){
    var current = document.getElementById("current").textContent;
    var goal = document.getElementById("goal").textContent;    
    var word = document.getElementById("word").value;
    
    document.getElementById("temptative-ed").textContent
	= levenshteinDistance(word, current);
    document.getElementById("missing-ed").textContent
	= levenshteinDistance(current,goal);
    document.getElementById("msg").textContent="(o,,o)";
}

window.onload = function(){
    startIt();
    document.getElementById("word").oninput = function(){
	checkCurrentEd();
    };
    document.getElementById("submit").onclick = function(){
	jump();
    };
    checkCurrentEd();
};



