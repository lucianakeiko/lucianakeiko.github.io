library(quantmod)
library(ichimoku)
library(lubridate)
library(FinAna)
library(kableExtra)


# com datas - só esse ano. 
inicio <- as.Date("2010-01-01")
fim <- today()

# Varejo de Moda

ticker <- c(
	"ALPA4",
	"ARZZ3",
	"AMAR3",
	"CEAB3",
	"GRND3",
	"GUAR3",
	"HGTX3",
	"LREN3",
	"SOMA3",
	"SBFG3",
	"VIVA3",
	"VULC3"
)


empresa <- c(
	"Alpargatas SA Preference Shares",
	"Arezzo Industria E Comercio SA",
	"Marisa Lojas SA",
	"C&A Modas SA",
	"Grendene SA",
	"Guararapes Confeccoes SA",
	"Cia Hering",
	"Lojas Renner SA",
	"Grupo de Moda SOMA SA",
	"Grupo SBF SA",
	"Vivara Participacoes SA",
	"Vulcabras Azaleia SA"
)

setor <- cbind(ticker, empresa)

setor |> kbl() |> kable_classic_2(full_width = F)

inicio <- as.Date("2000-01-01")
fim <- today()

for (acao in setor) {
	quantmod::getSymbols(paste0(ticker,".SA"), 
											 src="yahoo", 
											 from=inicio,to=fim,
											 auto.assign = TRUE)}

quantmod::getSymbols("VIVA3.SA", 
											 src="yahoo", 
											 from=inicio,to=fim,
											 auto.assign = TRUE)

quantmod::getSymbols("LREN3.SA", 
										 src="yahoo", 
										 from=inicio,to=fim,
										 auto.assign = TRUE)



quantmod::getSymbols("HGTX3.SA", 
										 src="yahoo", 
										 from=inicio,to=fim,
										 auto.assign = TRUE)
