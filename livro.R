install.packages("zoo")

library("zoo")

#EXEMPLO

aapl<-read.zoo("dados/AAPL.csv", sep=",", header = TRUE, format = "%Y-%m-%d")

aapl


plot(
	aapl, 
	main = "APPLE Closing Prices on NASDAQ", 
	ylab = "Price (USD)", 
	xlab = "Date"
	)


head(aapl)
tail(aapl)

aapl[which.max(aapl)]


ret_simple <- diff(aapl) / lag(aapl, k = -1) * 100
ret_cont <- diff(log(aapl)) * 100


summary(coredata(ret_simple))

ret_simple[which.min(ret_simple)]

hist(ret_simple, 
		 breaks=100, 
		 main = "Histogram of Simple Returns", 
		 xlab="%")



aapl_2013 <- window(aapl, 
										start = '2013-01-01', 
										end = '2013-12-31')
aapl_2013[which.max(aapl_2013)]



quantile(ret_simple, probs = 0.01)



# INFUT
library(readr)
INDFUT <- read_csv("dados/INDFUT.csv", col_types = cols(Fechamento = col_number()))
View(INDFUT)

write.csv(INDFUT,"dados/INDFUT_raiz.csv") 

ind<-read.zoo("dados/INDFUT_raiz.csv", 
							sep=",", 
							header = TRUE
							)
head(ind)
tail(ind)

ind[which.max(ind)]

indNA <- na.omit(ind)

indzero <- indNA |> 
	filter(ind$Fechamento =0)

plot(indNA)
