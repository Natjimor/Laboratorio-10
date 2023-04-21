class Movie {
    constructor (name, rating, description, imagen_f, imagen_L, clasification, stars, stars_no) {
        this.name = name
        this.rating = rating
        this.description = description
        this.imagen_f = imagen_f
        this.imagen_L = imagen_L
        this.clasification = clasification
        this.stars = stars
        this.stars_no = stars_no
    }

    toRecomended(id) {
        return `
        <div class="Imagen" onclick="selectedMovie(${id})">
                <img class="Image_recomend" src="${this.imagen_L}" alt="">
                <h5>${this.clasification}</h5>
                <h4><img id="Play_Icon" src="baseline_play_arrow_white_48dp.png" alt="Play">Play</h4>
                <div class="Información">
                    <p>Ratings: </p>
                    <img class="Tamaño" src="yellow_fill_star.png" alt="Estrella">
                    <img class="Tamaño" src="yellow_fill_star.png" alt="Estrella">
                    <img class="Tamaño" src="yellow_fill_star.png" alt="Estrella">
                    <img class="Tamaño" src="yellow_fill_star.png" alt="Estrella">
                    <img class="Tamaño" src="yellow_outline_star.png" alt="Estrella vacía">
                    <img class="Tamaño" src="baseline_bookmark_border_white_48dp.png" alt="Guardar">
                </div>
            </div>
        `
    }

    toBanner(id) {
        const Nombre = document.getElementById("Título")
        Nombre.innerHTML = this.name

        const Rating = document.getElementById("Rating")
        Rating.innerHTML = this.rating
        
        const Description = document.getElementById("Sinopsis")
        Description.innerHTML = this.description

        const Clasification = document.getElementById("Edad")
        Clasification.innerHTML = `${this.clasification}`

        Barra_navegación.style.backgroundImage = `url(${this.imagen_f})`
    }
}

class Movie2 {
    constructor (name, rating, description, imagen_f, imagen_L, clasification) {
        this.name = name
        this.rating = rating
        this.description = description
        this.imagen_f = imagen_f
        this.imagen_L = imagen_L
        this.clasification = clasification
    }

    toTrend() {
        return `
        <div class="Imagen">
            <img class="Image_recomend" src="${this.imagen_L}" alt="">
            <h5>${this.clasification}</h5>
            <h4><img id="Play_Icon" src="baseline_play_arrow_white_48dp.png" alt="Play">Play</h4>
        </div>
        `
    }
    toBanner2(id) {
        const Nombre = document.getElementById("Título")
        Nombre.innerHTML = this.name

        const Rating = document.getElementById("Rating")
        Rating.innerHTML = this.rating
        
        const Description = document.getElementById("Sinopsis")
        Description.innerHTML = this.description

        const Clasification = document.getElementById("Edad")
        Clasification.innerHTML = `${this.clasification}`

        Barra_navegación.style.backgroundImage = `url(${this.imagen_f})`
    }
}

var movie1 = new Movie("Stranger Things","(8.7 ratings)","La historia se retoma seis meses después de la batalla en el centro comercial Starcourt, que trajo terror y destrucción a Hawkins. Luchando contra las secuelas, nuestro grupo de amigos está separado por primera vez y tiene que afrontar las complejidades del instituto, lo que no les pone las cosas nada fáciles. En este momento, el más vulnerable de todos, surge una nueva y terrorífica amenaza sobrenatural que representa un nuevo y horrible misterio que, si consiguen resolver, podría poner fin a los horrores del Upside Down.","https://larepublica.cronosmedia.glr.pe/migration/images/OSBPF6QO4BGBXIT6XCVTDFPRBQ.jpg","https://es.web.img3.acsta.net/pictures/22/05/14/13/26/5638861.jpg","+14",4,1)
var movie2 = new Movie("You","(7.7 ratings)","Joe Goldberg es un joven brillante, pero que tiene todo el perfil de un psicópata acosador y obsesivo. Es un personaje oscuro con un enorme carisma, un ser que tiene una visión bastante retorcida del amor. Su personalidad, carácter y encanto lo llevarán a “enamorarse” de forma enfermiza, siendo capaz de llegar a cometer actos atroces y crueles.","https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEii7HyijPLSUMMEHXYkmInuSQKco9fsYrZbkywABGRLChqcp-K_rjbUXwBtmpxkt5StcSgGFJb_MVMC28tdTyq9UDoukGfCCGoZ5AKZXvh6dO1Y1PukwoXibY2MlrJiL0De-al-eW4q-ZhhB6mtV_92ycSWUommmbARC6jW7c_3mVzoHOpfZsaR8Boo/s2000/you.png","https://resizing.flixster.com/FJuMwZpay5FUwItDiuY88DCpyqA=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNGNmOGM4ZmUtZmI5My00ZDU2LTk4MzAtZGFiMDQ2YTc2N2EwLmpwZw==","+16",3,2)
var movie3 = new Movie("Anne with an E","(8.7 ratings)","Anne Shirley es una niña huérfana que vive en un pequeño pueblo llamado Avonlea que pertenece a la Isla del Príncipe Eduardo, en el año 1890. Después de una infancia difícil, donde fue pasando de orfanato a hogares de acogida, es enviada por error a vivir con una solterona y su hermano. Cuando cumple 13 años, Anne va a conseguir transformar su vida y el pequeño pueblo donde vive gracias a su fuerte personalidad, intelecto e imaginación.","https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/04/anee.jpg","https://m.media-amazon.com/images/M/MV5BNThmMzJlNzgtYmY5ZC00MDllLThmZTMtNTRiMjQwNmY0NmRhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg","+12",4,1) 
var movie4 = new Movie("Emily in Paris","(6.9 ratings)","Emily Cooper es una joven estadounidense que está en plena fase de crecimiento profesional. Precisamente, su vida cambia cuando recibe la oportunidad laboral inesperada que la lleva a mudarse a París, Francia. En su nuevo hogar, se encargará de comunicar el punto de vista estadounidense a una conocida compañía de marketing francesa. Será un choque brutal de culturas, un desafío laboral que va acompañado de forma paralela con su proceso de adaptación a un nuevo país, el surgimiento de nuevas amistades y una vida amorosa que se torna más compleja.","Emily Cooper es una joven estadounidense que está en plena fase de crecimiento profesional. Precisamente, su vida cambia cuando recibe la oportunidad laboral inesperada que la lleva a mudarse a París, Francia. En su nuevo hogar, se encargará de comunicar el punto de vista estadounidense a una conocida compañía de marketing francesa. Será un choque brutal de culturas, un desafío laboral que va acompañado de forma paralela con su proceso de adaptación a un nuevo país, el surgimiento de nuevas amistades y una vida amorosa que se torna más compleja.","https://flxt.tmsimg.com/assets/p18761121_b_v13_ao.jpg","+16",4,1)
var movie5 = new Movie("Wednesday","(8.1 ratings)","Miércoles Addams, hija de de Morticia (Catherine Zeta-Jones) y Gomez (Luis Guzmán) que posee poderes psíquicos, acude a la Academia Nevermore, instituto para inadaptados, tras intentar matar a los acosadores de su hermano en el anterior centro educativo. Al mismo tiempo se involucra en la resolución de misterios familiares y la resolución de unos asesinatos que están aterrorizando el lugar.","https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/09/wednesday-netflix-estreno.jpg?fit=1280%2C720&quality=80&ssl=1","https://m.media-amazon.com/images/M/MV5BM2ZmMjEyZmYtOGM4YS00YTNhLWE3ZDMtNzQxM2RhNjBlODIyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg","+14",5,0)
var movie6 = new Movie("Friends","(8.9 ratings)","Friends narra las aventuras y desventuras de seis jóvenes de Nueva York. Rachel, Monica, Phoebe, Ross, Chandler y Joey forman una unida pandilla de amigos que viven en Manhattan y que suelen reunirse en sus apartamentos o en su bar habitual, el Central Perk. A pesar de los numerosos cambios que se producen en sus vidas, su amistad es inquebrantable en la dura batalla por salir adelante en sus periplos profesionales y personales.","https://hbomax-images.warnermediacdn.com/images/GXdbR_gOXWJuAuwEAACVH/tileburnedin?size=1280x720&partner=hbomaxcom&v=6a409f09891f75549fdb8d07dc969b63&host=art-gallery.api.hbo.com&language=es-419&w=1280","https://de.web.img2.acsta.net/pictures/21/05/14/08/25/4008276.jpg","+13",3,2)
var movie7 = new Movie("The big bang theory","(8.2 ratings)","Leonard Hofstadter (Johnny Galecki) y Sheldon Cooper (Jim Parsons) son dos físicos del Instituto de Tecnología de California, en donde trabajan también Howard (Simon Helberg), ingeniero mecánico, y el indio Raj (Kunal Nayyar), astrofísico. Todos ellos son científicos muy brillantes pero totalmente negados para las relaciones sociales, en especial para ligar con mujeres. Leonard se enamora de su vecina, Penny (Kaley Cuoco), una guapa aspirante a actriz muy distinta a su modo de vida científico y friki.","https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2018/08/Big-Bang-Theory-1.jpg?fit=1920%2C1080&quality=50&strip=all&ssl=1","https://flxt.tmsimg.com/assets/p185554_b_v9_bk.jpg","+13",4,1)
var movie8 = new Movie("Pride & Prejudice","(7.8 ratings)","Las cinco hermanas Bennet han sido criadas por una madre obsesionada por encontrarles marido. Pero una de ellas, Lizzie, inteligente y con carácter, desea una vida con perspectivas más abiertas, un anhelo respaldado por su padre. Cuando el señor Bingley (Simon Woods), un soltero rico, y su círculo de sofisticados amigos se instalan en una mansión vecina para pasar el verano, las Bennett se entusiasman con la posibilidad de encontrar pretendientes. En el baile de bienvenida, Lizzie conoce al apuesto y elegante señor Darcy (Matthew Macfadyen), pero, a primera vista, le parece demasiado orgulloso y arrogante.","https://s26162.pcdn.co/wp-content/uploads/2016/08/pride-and-prejudice.jpg","https://www.ecartelera.com/carteles/500/520/001_m.jpg","+12",4,1)

var movie01 = new Movie2("Pinocchio","(7.6 ratings)","El carpintero Gepetto (David Bradley) vive completamente solo y aislado en la Italia de la década de 1930, mientras el fascismo va creciendo a su alrededor. Cansado de esta situación, decide cambiarlo él mismo y crear a un hijo de madera que llamará Pinocho (Gregory Mann). Una noche gracias a un poco de magia el muñeco de madera cobra vida y cumple todos los sueños de Gepetto de tener un pequeño hijo. Sin embargo, Pinocho no es como el carpintero espera, en vez de ser obediente y tranquilo, el niño adora la diversión y las travesuras. Pinocho está harto de no ser lo que su padre desea, así que se marcha a vivir aventuras, pero pronto se dará cuenta de que ha ido demasiado lejos.","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guillermo-del-toro-s-pinocchio-gregory-mann-christoph-waltz-1658927885.jpg","https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/375481/375481.jpg","PG")
var movie02 = new Movie2("Quantumania","(6.3 ratings)","Scott Lang (Paul Rudd) está disfrutando de su vida como Vengador y de la fama que ha ganado por ayudar a salvar a la humanidad en Vengadores: Endgame. Todo el mundo le quiere y le adora. Incluso ha publicado un libro. No obstante,eso cambia cuando los secretos familiares empiezan a salir a la luz. Por culpa de una experimento, Scott Lang, su hija Cassie Lang (Kathryn Newton), su pareja Hope van Dyne (Evangeline Lilly), sus suegos Hank Pym (Michael Douglas) y Janet van Dyne (Michelle Pfeiffer) son arrastrados al Reino Cuántico. Allí, en esta dimensión del multiverso, se encontrarán con Kang el Conquistador (Jonathan Majors), el gran villano de la nueva era del Universo Cinematográfico de Marvel.","https://cloudfront-us-east-1.images.arcpublishing.com/infobae/Z4B2RSBLMZDJ5MFUMYATMG5PYI.jpg","https://depor.com/resizer/ZiGmZ6XGO5DAF3gMJQjNgYSM5W8=/620x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ISW6TOV7FVC3VDS7KEN7WN6BZE.jpeg","+13")
var movie03 = new Movie2("Puss in boots","(7.2 ratings)","Por primera vez en más de una década, DreamWorks Animation presenta una nueva aventura del universo Shrek en la que el audaz forajido Gato con Botas descubre que la pasión por el peligro y el desprecio por la prudencia tienen un precio. Gato ya ha gastado seis de sus siete vidas, aunque él haya perdido la cuenta en el camino. Para recuperar esas vidas, el Gato con Botas emprenderá la mayor aventura que ha vivido hasta ahora.","https://imgs.hipertextual.com/wp-content/uploads/2022/12/Gato-con-botas-13.jpg","https://playandgo.com.au/wp-content/uploads/2022/03/puss-in-boots-the-last-wish-1.jpg","PG") 
var movie04 = new Movie2("Enola Holmes","(6.7 ratings)","Esta secuela narra lo que sucede con Enola Holmes (Millie Bobby Brown) luego del éxito de su primer caso. De esta forma, la joven seguirá los pasos de su hermano Sherlock (Henry Cavill) y abrirá su propia agencia, aunque descubrirá que la vida como mujer detective a sueldo no es tan fácil como parece.","https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2022/10/enola-holmes-2-2839531.jpg?itok=mS9sWGhn","https://images.squarespace-cdn.com/content/v1/594f72de20099e6f69c443e7/45baaf8e-c828-4a19-b68f-5f18120cd72b/Enola+Holmes+2.jpg","+13")
var movie05 = new Movie2("Black Mirror","(8.8 ratings)","Black Mirror es una serie de televisión británica creada por Charlie Brooker que muestra el lado oscuro de la vida y la tecnología. La serie es producida por Zeppotron para Endemol. En cuanto al contenido del programa y la estructura, Brooker ha señalado que 'cada episodio tiene un tono diferente, un entorno diferente, incluso una realidad diferente, pero todos son acerca de la forma en que vivimos ahora y la forma en que podríamos estar viviendo en 10 minutos si somos torpes'.","https://itpeers.com/wp-content/uploads/2020/10/backmirror-scaled.jpg","https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg","+18")
var movie06 = new Movie2("The last of us","(8.9 ratings)","La historia de 'The Last of Us' tiene lugar veinte años después de que la civilización moderna haya sido destruida. Joel, un superviviente de carácter recio, es contratado para sacar de contrabando a Ellie, una niña de 14 años, fuera de una opresiva zona de cuarentena. Lo que comienza como un pequeño trabajo pronto se convierte en un viaje brutal y desgarrador, ya que ambos deben atravesar los EE. UU. y depender el uno del otro para sobrevivir.","https://www.semana.com/resizer/eA9u4q1SEA5LHOiGFnylGQtNiOA=/arc-anglerfish-arc2-prod-semana/public/NZKBIQZAFFH7FPZGOILFPZJZGY.jpg","https://pics.filmaffinity.com/The_Last_of_Us_Serie_de_TV-722385305-large.jpg","+16")
var movie07 = new Movie2("Ginny y Georgia","(7.5 ratings)","Ginny es una adolescente de 15 años que no encaja con el perfil común de su edad y que, en numerosas ocasiones, se siente incluso más madura que su madre, la enérgica Georgia Miller. La pareja tiene de todo menos una vida normal y se muda a Nueva Inglaterra, al noreste de Estados Unidos, con la esperanza de poder establecerse y tener una vida normal.","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/antonia-gentry-brianne-howey-ginny-georgia-s2-1669969197.jpg?crop=0.7496296296296295xw:1xh;center,top&resize=1200:*","https://pics.filmaffinity.com/Ginny_y_Georgia_Serie_de_TV-328123946-large.jpg","+14")
var movie08 = new Movie2("Guardians of the galaxy Holiday Special","(8.2 ratings)","En el especial de navidad de Guardianes de la Galaxia, nos presentará a Star Lord muy triste porque Gamora ha desaparecido, así que sus amigos deciden ir a la Tierra aprovechando que es Navidad para hacerle un regalo muy especial. Ya que pretenden secuestrar al auténtico Kevin Bacon, porque creen que es un gran héroe por las historias que Star Lord les ha ido contando.","https://i0.wp.com/marvellatinnews.com/wp-content/uploads/2022/11/guardians-holidar-special-portada.jpeg?fit=1200%2C675&ssl=1&resize=1280%2C720","https://m.media-amazon.com/images/M/MV5BOGJjMzlmNzctMWI4Yi00MjcyLWFmYzAtN2JmZjU0YTM4YmRmXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg","PG")

const Recomended = [movie1,movie2,movie3, movie4, movie5, movie6, movie7, movie8]
const Trend = [movie01,movie02,movie03,movie04,movie05,movie06,movie07,movie08]

function showRecomended() {
    const contenedor= document.getElementById("Carrusel")
    for(let i = 0; i < Recomended.length; i++){
        const movie = Recomended[i]
        contenedor.innerHTML += movie.toRecomended(i)
    }
}

function showTrend() {
    const contenedor2= document.getElementById("Carrusel2")
    for(let i = 0; i < Trend.length; i++){
        const movie = Trend[i]
        contenedor2.innerHTML += movie.toTrend()
    }
}

function selectedMovie(id) {
    var movie = Recomended[id]
    movie.toBanner()
}

function selectedMovie2(id) {
    var movie = Trend[id]
    movie.toBanner2()
}

showRecomended()
showTrend()


//id_div.style.backgroundImage = `url(${url})`