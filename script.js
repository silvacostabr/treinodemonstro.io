var treino = document.getElementById('caixatreino')
var grupo = window.document.getElementById('grupomuscular')
var titulo = document.getElementById('titulo')
var nome = window.document.getElementById('nome')
var treinoft = window.document.getElementById('fototreino')
var abaixo = window.document.getElementById('treinoab')
var divfoto = document.getElementById('arnoldtits')

function segunda(){
divfoto.style.display=('flex')
divfoto.src="arnold shachasc.jfif"
grupo.innerHTML = (`Peito, tríceps,`)
treino.innerText = (`Supino inclinado - 4 séries de 8-10 repetições
Supino reto  - 3 séries de 8-10 repetições
crossover polia alta - 3 séries - 12-15
crossover polia baixa - 3 séries até a falha
Pulldown Tríceps  - 3 séries de 10-12 repetições    
TRÍCEPS TESTA  - 3 séries de 10-12 repetições
triceps frances - 4 séries até a falha 
`)
}
function terça(){
divfoto.style.display=('flex')
divfoto.src='legday.jfif'
treino.innerHTML = ('')
grupo.innerHTML = ('')
grupo.innerHTML = (`quadríceps`)
treino.innerHTML = (`agachamento livre 6-8 séries 6-8 repetições<br> 
extensora 5 séries 20-30 repetições<br>leg 45 5-6 séries 12-15<br>
afundo 3 séries de 10-12 repetições<br>
panturrilha máquina sentado 5 séries 20-25 repetições<br>
panturrilha no agachamento 180° 3 séries 10-7-7
`
)}

function quarta(){
    divfoto.style.display=('flex')
    divfoto.src=('costas.jpg')
    divfoto.style
    treino.innerHTML = ('')
    grupo.innerHTML = ('')
    grupo.innerHTML = (`Costas, bíceps, antebraço. trapézio`)
    treino.innerHTML = (` barra fixa 3 séries até a falha<br>
    puxada alta 4 séries 10-12 repetições<br>
    puxada triângulo 4 séries 10-12 repetições<br>
    remada curvada séries de 10-12 repetições<br>
    remada cavalo 3 séries de 10-12<br> 
    Rosca corda 3 séries falha<br>
    rosca 45° 3 séries falha<br>
    Rosca de Antebraço com Barra 3 séries de 12-15 repetições<br>
    Encolhimentos 4 séries de 10-12 repetições<br
    Abdominais 3 séries de 15-20 repetições`)}
function quinta(){
    alert('dia de descanso')
    divfoto.style.display=('flex')
    divfoto.src=('quinta a noite.jpg')
    divfoto.style.right=('50px')
    treino.innerText=('')
    treino.innerText=('descanso')
    grupo.innerText=('')
    grupo.innerText=('descanso')

}
    
function sexta(){
    divfoto.style.display=('flex')
    divfoto.src=('legday.jfif')
    treino.innerHTML = ('')
    grupo.innerHTML = ('')
    grupo.innerHTML = (`Posterior e Ombro`)
    treino.innerHTML = (`Desenvolvimento com Halteres 4 séries de 8-10 repetições<br>
    Elevação Lateral na Polia séries de 10-12 repetições<br>
    cross invertido 3 séries falha<br>
    Encolhimentos 3 séries de 10-12 repetições<br>
    agachamento livre 3 séries 8-10 repetições<br>
    levantamento terra 3 séries 6-8 repetições<br>
    flexora 5 séries 7-10s-7inst-10 repetições<br>
    mesa flexora 3 séries 15-20 repetições<br>
    panturrilha máquina sentado 5 séries 20-25 repetições<br>
    panturrilha no agachamento 180° 3 séries 10-7-7`
    )}
    var button= document.getElementById('bambambotao')
    button.addEventListener('click', function(){
    var audio= document.getElementById('bambam')
    audio.play()})
    
