//  high order function
// recebe uma FUNCAO como argumento 
//a FUNCAO: () => { }
// parametros: (item, indice, array) = { } .
//  Só o item é obrigatório
const numeros = [ 1, 2, 3 ]

// 1.  
const numerosQuadrado = numeros.map(item => item ** 2)

console.log(numerosQuadrado)

// exemplo 2 

const tvShows = [ 
    { name: 'Breaking Bad', releaseYear: 2008},
    { name: 'Mr Robot', releaseYear: 2015},
    { name: 'True Detective', releaseYear: 2014},
    { name: 'House M.D.', releaseYear: 2004}

]

//const novelinhas = tvShows.map( item => item.name)
// desestruturado
const novelinhas = tvShows.map( ({ name }) => name)

console.table(novelinhas)

//exemplo 3

const uapi = {
    "status": true,
    "message": "Retorno com sucesso",
    "data": [
      {
        "id": 135,
        "users_id": 67,
        "pesquisas_id": 24,
        "response_json": "{\"email\":\"lucianakeiko@gmail.com\",\"responsavel\":\" IRENE REZENDE PEREIRA (GESTORA) E JANAÍNA GOMES DE SOUSA (TÉCNICA PEDAGÓGICA)\",\"faixa_etaria_1\":true,\"faixa_etaria_2\":true,\"r01\":\"Verde\",\"e01\":\"Disponibilizar Projeto Político Pedagógico (PPP) a toda comunidade escolar.\",\"pa01_2\":\"Gestão \",\"pa01_3\":\"4trimestre\",\"r02\":\"Verde\",\"r03\":\"Verde\",\"r04\":\"Verde\",\"r05\":\"Verde\",\"r06\":\"Verde\"}",
        "school": "[{\"id\":26181835,\"regiao\":\"NE\",\"uf\":\"PE\",\"cidade\":\"RECIFE\",\"nome\":\"CMEI ALCIDES RESTELLI TEDESCO\",\"ibge_id\":\"2611606\",\"selo\":\"Não\",\"educinfantil\":219,\"ensmedio\":0,\"fundfinais\":0,\"fundiniciais\":0,\"escolasinfantil\":null,\"matriculasinfantil\":null,\"metaescolasinfantil\":null,\"metamatriculainfantil\":null}]",
        "response_date": "2022-07-06 17:52:25",
        "user": {
          "id": 67,
          "name": "Lucianakeiko",
          "email": "lucianakeiko@gmail.com",
          "email_verified_at": null,
          "type": "participant",
          "created_at": "2022-07-01T14:12:25.000000Z",
          "updated_at": "2022-07-01T14:12:25.000000Z",
          "deleted_at": null,
          "terms": 1,
          "ibge_id": "3550308",
          "categorias": [
            {
              "id": 1,
              "nome": "Articulador(a) do Selo UNICEF",
              "deleted_at": null,
              "pivot": {
                "user_id": 67,
                "categoria_id": 1
              }
            }
          ]
        }
      },
      {
        "id": 136,
        "users_id": 67,
        "pesquisas_id": 24,
        "response_json": "{\"email\":\"lucianakeiko@gmail.com\",\"responsavel\":\"teste_array\",\"faixa_etaria_1\":true,\"faixa_etaria_2\":true,\"r01\":\"Verde\",\"e01\":\"teste_array\",\"pa01_1\":\"teste_array\",\"pa01_2\":\"teste_array\",\"pa01_3\":\"1trimestre\",\"r02\":\"Verde\",\"e02\":\"teste_array\",\"pa02_1\":\"teste_array\",\"pa02_2\":\"teste_array\",\"pa02_3\":\"1trimestre\",\"r03\":\"Amarelo\",\"e03\":\"teste_array\",\"pa03_1\":\"teste_array\",\"pa03_2\":\"teste_array\",\"pa03_3\":\"2trimestre\",\"r04\":\"Verde\",\"e04\":\"teste_array\",\"pa04_1\":\"teste_array\",\"pa04_2\":\"teste_array\",\"pa04_3\":\"1trimestre\",\"r05\":\"Amarelo\",\"e05\":\"teste_array\",\"pa05_1\":\"teste_array\",\"pa05_2\":\"teste_array\",\"pa05_3\":\"1trimestre\",\"r06\":\"Verde\",\"e06\":\"teste_array\",\"pa06_1\":\"teste_array\",\"pa06_2\":\"teste_array\",\"pa06_3\":\"1trimestre\",\"r07\":\"Verde\",\"e07\":\"teste_array\",\"pa07_1\":\"teste_array\",\"pa07_2\":\"teste_array\",\"pa07_3\":\"1trimestre\",\"r08\":\"Verde\",\"e08\":\"teste_array\",\"pa08_1\":\"teste_array\",\"pa08_2\":\"teste_array\",\"pa08_3\":\"1trimestre\",\"r09\":\"Verde\",\"e09\":\"teste_array\",\"pa09_1\":\"teste_array\",\"pa09_2\":\"teste_array\",\"pa09_3\":\"1trimestre\",\"e10\":\"teste_array\",\"r10\":\"Verde\",\"pa10_1\":\"teste_array\",\"pa10_2\":\"teste_array\",\"pa10_3\":\"1trimestre\",\"r11\":\"Verde\",\"e11\":\"teste_array\",\"pa11_1\":\"teste_array\",\"pa11_2\":\"teste_array\",\"pa11_3\":\"1trimestre\",\"r12\":\"Verde\",\"e12\":\"teste_array\",\"pa12_1\":\"teste_array\",\"pa12_2\":\"teste_array\",\"pa12_3\":\"1trimestre\",\"r13\":\"Verde\",\"e13\":\"teste_array\",\"pa13_1\":\"teste_array\",\"pa13_2\":\"teste_array\",\"pa13_3\":\"1trimestre\",\"r14\":\"Verde\",\"e14\":\"teste_array\",\"pa14_1\":\"teste_array\",\"pa14_2\":\"teste_array\",\"pa14_3\":\"2trimestre\",\"r15\":\"Verde\",\"e15\":\"teste_array\",\"pa15_1\":\"teste_array\",\"pa15_2\":\"teste_array\",\"pa15_3\":\"1trimestre\",\"r16\":\"Verde\",\"e16\":\"teste_array\",\"pa16_1\":\"teste_array\",\"pa16_2\":\"teste_array\",\"pa16_3\":\"1trimestre\",\"r17\":\"Verde\",\"e17\":\"teste_array\",\"pa17_1\":\"teste_array\",\"pa17_2\":\"teste_array\",\"pa17_3\":\"1trimestre\",\"r18\":\"Verde\",\"e18\":\"teste_array\",\"pa18_1\":\"teste_array\",\"pa18_2\":\"teste_array\",\"pa18_3\":\"2trimestre\",\"r19\":\"Verde\",\"e19\":\"teste_array\",\"pa19_1\":\"teste_array\",\"pa19_2\":\"teste_array\",\"pa19_3\":\"1trimestre\",\"e20\":\"teste_array\",\"r20\":\"Verde\",\"pa20_1\":\"teste_array\",\"pa20_2\":\"teste_array\",\"pa20_3\":\"1trimestre\",\"r21\":\"Verde\",\"e21\":\"teste_array\",\"pa21_1\":\"teste_array\",\"pa21_2\":\"teste_array\",\"pa21_3\":\"1trimestre\",\"e22\":\"teste_array\",\"r22\":\"Verde\",\"pa22_1\":\"teste_array\",\"pa22_2\":\"teste_array\",\"pa22_3\":\"1trimestre\",\"r23\":\"Verde\",\"e23\":\"teste_array\",\"pa23_1\":\"teste_array\",\"pa23_2\":\"teste_array\",\"pa23_3\":\"1trimestre\",\"r24\":\"Verde\",\"e24\":\"teste_array\",\"pa24_1\":\"teste_array\",\"pa24_2\":\"teste_array\",\"pa24_3\":\"1trimestre\",\"e25\":\"teste_array\",\"r25\":\"Verde\",\"pa25_1\":\"teste_array\",\"pa25_2\":\"teste_array\",\"pa25_3\":\"1trimestre\",\"e26\":\"teste_array\",\"r26\":\"Verde\",\"pa26_1\":\"teste_array\",\"pa26_2\":\"teste_array\",\"pa26_3\":\"1trimestre\",\"r27\":\"Verde\",\"e27\":\"teste_array\",\"pa27_1\":\"teste_array\",\"pa27_2\":\"teste_array\",\"pa27_3\":\"1trimestre\",\"r28\":\"Verde\",\"e28\":\"teste_array\",\"pa28_1\":\"teste_array\",\"pa28_2\":\"teste_array\",\"pa28_3\":\"2trimestre\",\"r29\":\"Verde\",\"e29\":\"teste_array\",\"pa29_1\":\"teste_array\",\"pa29_2\":\"teste_array\",\"pa29_3\":\"1trimestre\",\"r30\":\"Verde\",\"e30\":\"teste_array\",\"pa30_1\":\"teste_array\",\"pa30_2\":\"teste_array\",\"pa30_3\":\"2trimestre\",\"r31\":\"Verde\",\"e31\":\"teste_array\",\"pa31_1\":\"teste_array\",\"pa31_2\":\"teste_array\",\"pa31_3\":\"1trimestre\",\"r32\":\"Verde\",\"e32\":\"teste_array\",\"pa32_1\":\"teste_array\",\"pa32_2\":\"teste_array\",\"pa32_3\":\"1trimestre\",\"r33\":\"Verde\",\"e33\":\"teste_array\",\"pa33_1\":\"teste_array\",\"pa33_2\":\"teste_array\",\"pa33_3\":\"1trimestre\",\"r34\":\"Verde\",\"e34\":\"teste_array\",\"pa34_1\":\"teste_array\",\"pa34_2\":\"teste_array\",\"pa34_3\":\"1trimestre\",\"r35\":\"Verde\",\"e35\":\"teste_array\",\"pa35_1\":\"teste_array\",\"pa35_2\":\"teste_array\",\"pa35_3\":\"1trimestre\",\"r36\":\"Verde\",\"e36\":\"teste_array\",\"pa36_1\":\"teste_array\",\"pa36_2\":\"teste_array\",\"pa36_3\":\"1trimestre\",\"r37\":\"Verde\",\"e37\":\"teste_array\",\"pa37_1\":\"teste_array\",\"pa37_2\":\"teste_array\",\"pa37_3\":\"1trimestre\",\"r38\":\"Verde\",\"e38\":\"teste_array\",\"pa38_1\":\"teste_array\",\"pa38_2\":\"teste_array\",\"pa38_3\":\"1trimestre\",\"r39\":\"Verde\",\"e39\":\"teste_array\",\"pa39_1\":\"teste_array\",\"pa39_2\":\"teste_array\",\"pa39_3\":\"2trimestre\",\"r40\":\"Verde\",\"e40\":\"teste_array\",\"pa40_1\":\"teste_array\",\"pa40_2\":\"teste_array\",\"pa40_3\":\"1trimestre\",\"r41\":\"Verde\",\"e41\":\"teste_array\",\"pa41_1\":\"teste_array\",\"pa41_2\":\"teste_array\",\"pa41_3\":\"1trimestre\",\"r42\":\"Verde\",\"e42\":\"teste_array\",\"pa42_1\":\"teste_array\",\"pa42_2\":\"teste_array\",\"pa42_3\":\"1trimestre\",\"r43\":\"Verde\",\"e43\":\"teste_array\",\"pa43_1\":\"teste_array\",\"pa43_2\":\"teste_array\",\"pa43_3\":\"1trimestre\",\"r44\":\"Verde\",\"e44\":\"teste_array\",\"pa44_1\":\"teste_array\",\"pa44_2\":\"teste_array\",\"pa44_3\":\"1trimestre\",\"r45\":\"Verde\",\"e45\":\"teste_array\",\"pa45_1\":\"teste_array\",\"pa45_2\":\"teste_array\",\"pa45_3\":\"1trimestre\",\"r46\":\"Verde\",\"e46\":\"teste_array\",\"pa46_1\":\"teste_array\",\"pa46_2\":\"teste_array\",\"pa46_3\":\"1trimestre\",\"r47\":\"Verde\",\"e47\":\"teste_array\",\"pa47_1\":\"teste_array\",\"pa47_2\":\"teste_array\",\"pa47_3\":\"1trimestre\",\"r48\":\"Verde\",\"e48\":\"teste_array\",\"pa48_1\":\"teste_array\",\"pa48_2\":\"teste_array\",\"pa48_3\":\"1trimestre\",\"r49\":\"Verde\",\"e49\":\"teste_array\",\"pa49_1\":\"teste_array\",\"pa49_2\":\"teste_array\",\"pa49_3\":\"1trimestre\",\"r50\":\"Verde\",\"e50\":\"teste_array\",\"pa50_1\":\"teste_array\",\"pa50_2\":\"teste_array\",\"pa50_3\":\"1trimestre\",\"r51\":\"Verde\",\"e51\":\"teste_array\",\"pa51_1\":\"teste_array\",\"pa51_2\":\"teste_array\",\"pa51_3\":\"1trimestre\",\"r52\":\"Verde\",\"e52\":\"teste_array\",\"pa52_1\":\"teste_array\",\"pa52_2\":\"teste_array\",\"pa52_3\":\"1trimestre\",\"r53\":\"Verde\",\"e53\":\"teste_array\",\"pa53_1\":\"teste_array\",\"pa53_2\":\"teste_array\",\"pa53_3\":\"1trimestre\",\"r54\":\"Verde\",\"e54\":\"teste_array\",\"pa54_1\":\"teste_array\",\"pa54_2\":\"teste_array\",\"pa54_3\":\"1trimestre\",\"r55\":\"Verde\",\"e55\":\"teste_array\",\"pa55_1\":\"teste_array\",\"pa55_2\":\"teste_array\",\"pa55_3\":\"1trimestre\",\"r56\":\"Verde\",\"e56\":\"teste_array\",\"pa56_1\":\"teste_array\",\"pa56_2\":\"teste_array\",\"pa56_3\":\"1trimestre\",\"r57\":\"Verde\",\"e57\":\"teste_array\",\"pa57_1\":\"teste_array\",\"pa57_2\":\"teste_array\",\"pa57_3\":\"1trimestre\",\"r58\":\"Verde\",\"e58\":\"teste_array\",\"pa58_1\":\"teste_array\",\"pa58_2\":\"teste_array\",\"pa58_3\":\"1trimestre\",\"r59\":\"Verde\",\"e59\":\"teste_array\",\"pa59_1\":\"teste_array\",\"pa59_2\":\"teste_array\",\"pa59_3\":\"1trimestre\",\"r60\":\"Verde\",\"e60\":\"teste_array\",\"pa60_1\":\"teste_array\",\"pa60_2\":\"teste_array\",\"pa60_3\":\"1trimestre\",\"r61\":\"Verde\",\"e61\":\"teste_array\",\"pa61_1\":\"teste_array\",\"pa61_2\":\"teste_array\",\"pa61_3\":\"1trimestre\",\"r62\":\"Verde\",\"e62\":\"teste_array\",\"pa62_1\":\"teste_array\",\"pa62_2\":\"teste_array\",\"pa62_3\":\"1trimestre\",\"r63\":\"Verde\",\"e63\":\"teste_array\",\"pa63_1\":\"teste_array\",\"pa63_2\":\"teste_array\",\"pa63_3\":\"1trimestre\",\"r64\":\"Verde\",\"e64\":\"teste_array\",\"pa64_1\":\"teste_array\",\"pa64_2\":\"teste_array\",\"pa64_3\":\"2trimestre\",\"r65\":\"Verde\",\"e65\":\"teste_array\",\"pa65_1\":\"teste_array\",\"pa65_2\":\"teste_array\",\"pa65_3\":\"1trimestre\",\"r66\":\"Verde\",\"e66\":\"teste_array\",\"pa66_1\":\"teste_array\",\"pa66_2\":\"teste_array\",\"pa66_3\":\"1trimestre\",\"r67\":\"Verde\",\"e67\":\"teste_array\",\"pa67_1\":\"teste_array\",\"pa67_2\":\"teste_array\",\"pa67_3\":\"1trimestre\",\"r68\":\"Verde\",\"e68\":\"teste_array\",\"pa68_1\":\"teste_array\",\"pa68_2\":\"teste_array\",\"pa68_3\":\"1trimestre\",\"r69\":\"Verde\",\"e69\":\"teste_array\",\"pa69_1\":\"teste_array\",\"pa69_2\":\"teste_array\",\"pa69_3\":\"1trimestre\",\"r70\":\"Verde\",\"e70\":\"teste_array\",\"pa70_1\":\"teste_array\",\"pa70_2\":\"teste_array\",\"pa70_3\":\"1trimestre\",\"r71\":\"Verde\",\"e71\":\"teste_array\",\"pa71_1\":\"teste_array\",\"pa71_2\":\"teste_array\",\"pa71_3\":\"2trimestre\",\"r72\":\"Verde\",\"e72\":\"teste_array\",\"pa72_1\":\"teste_array\",\"pa72_2\":\"teste_array\",\"pa72_3\":\"1trimestre\"}",
        "school": "[{\"id\":29463637,\"regiao\":\"NE\",\"uf\":\"BA\",\"cidade\":\"SALVADOR \",\"nome\":\"CENTRO EDUCACIONAL INFANTIL CLUBE DO CURUMIN\",\"ibge_id\":\"2927408\",\"selo\":null,\"educinfantil\":null,\"ensmedio\":null,\"fundfinais\":null,\"fundiniciais\":null,\"escolasinfantil\":null,\"matriculasinfantil\":null,\"metaescolasinfantil\":null,\"metamatriculainfantil\":null}]",
        "response_date": "2022-07-07 18:59:36",
        "user": {
          "id": 67,
          "name": "Lucianakeiko",
          "email": "lucianakeiko@gmail.com",
          "email_verified_at": null,
          "type": "participant",
          "created_at": "2022-07-01T14:12:25.000000Z",
          "updated_at": "2022-07-01T14:12:25.000000Z",
          "deleted_at": null,
          "terms": 1,
          "ibge_id": "3550308",
          "categorias": [
            {
              "id": 1,
              "nome": "Articulador(a) do Selo UNICEF",
              "deleted_at": null,
              "pivot": {
                "user_id": 67,
                "categoria_id": 1
              }
            }
          ]
        }
      }
    ]
  }

console.log(uapi)