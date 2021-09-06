# BC-2.1.1 Intro DLT: an overview 


## Before we start 


Welcom to the second level, we hope you are up for it!

This level will dive further, and is built on the fundamentals of level 1. So sometimes, especially in the first parts, there will be quite some overlap between what we discussed already. Partly as a refresher and to activate the power of repetition, but also to show the connections and create your total overview. In this chapter we will be putting the pieces together. Although it gets a bit more technical, it is very much doable without a tech background if you keep up the good work. Most of the real techie parts are available in the level 3 course ‘building dapps’.  

## The intro 

First one up in level 2 is a high-level overview of [distributed ledger technology]( https://www.investopedia.com/terms/d/distributed-ledger-technology-dlt.asp). You already know that blockchains are distributed ledgers, but blockchains are merely an example of distributed ledgers. There are many different forms out there. During this course we mainly focus on distributed and decentralized ledgers. Often blockchains, but sometimes other types of ledgers, like, for example, DAGs as we will encounter as a specialization in level 3. Since you might already experience an information overflow, we will be merely focussing on the blockchain type of ledgers for now. 


![High-level overview distributed ledgers]( https://raw.githubusercontent.com/koiosonline/literature-images/main/blockchain-level2/bc-2-1-1-intro-dlt-an-overview-afbeelding1.png) 
 
>💡 We can split distributed ledgers into three main categories: (1) The open public ledgers, like Bitcoin (2) the hybrid ledgers, which are only partially open and partially closed, like Stellar or Vechain and of course (3) the private blockchains, which operate in closed-off environments, like IBM's Hyperledger. The categorization of a blockchain protocol is a bit more nuanced in actuality, but you can use this as a high-level framework. 

## Public/private & permissioned/permissionless

As you can see with, for example, [IBM Hyperledger projects]( https://www.ibm.com/blockchain/hyperledger), there is not always an obvious line that defines whether you are public, hybrid, or private. Or with VeChain if you are open or hybrid. The easiest way to recognize the distinction is to ask yourself if you could become a node or a miner yourself / verify transactions (permissionless) and if you can see all the data and transactions (open)? If so, you are in an open environment. Are some parts closed, but you can still freely join the network? Then, you might be in a hybrid environment. Do you need to ask some entity for permission? Then, you are most likely in a private setting. This also explains why private blockchains are often called permissioned blockchains. Read more about it [this article]( http://blocktonite.com/2017/06/27/private-vs-public-and-permissioned-vs-permission-less/). 

![Why you need which blockchain]( https://raw.githubusercontent.com/koiosonline/literature-images/main/blockchain-level2/bc-2-1-1-intro-dlt-an-overview-afbeelding2.png)
[Source different type of blockchains]( https://coinsutra.com/different-types-blockchains/ ) 

>💡 There is a difference between public/private and permissioned/permissionless. Public/private difference has to do with user authentication (WHO are you) and the permissioned/permissionless distinction has to do with user authorization (WHAT can you do).

As mentioned many times before, when you gradually move towards more centralized ledgers, scalability improves. But, the three main centralized risk categories introduce themselves. Also, keep in mind: the centralized entity still owns your data and privacy, as well as the boundaries (and legal jurisdiction) in which you can transact. **Scale of private blockchains is therefore by design legally or regionally limited: they scale very well, but on a local scale**. Globally scaled and centralized ledgers, like Facebook, pose an entirely different problem, as mentioned before. Also, remember: how long will it take before decentralized ledgers can scale and offer confidentiality, but this time without the three main risk categories? So nothing new so far in this level 😊. 

Something new perhaps: cryptocurrencies are, as you know, one of the most critical components of a blockchain because the cryptocurrency is most often used to incentivize the ecosystem. To align everybody's interest with the common goal of the protocol. So for Bitcoin the local cryptocurrency bitcoin is to incentivize the miners to offer resources like energy in return and to provide security for the network. They receive bitcoins as a reward. In Ethereum, Ether is also used to motivate miners and let a contract execute itself ("gas"). 

>💡 Cryptocurrencies are an essential component of blockchains, but only if you need incentivizing honest behavior of unknown parties (!). In a private blockchains, parties are often known and can be incentivized in other ways (loss/gain reputation, or legal enforcement).

Open public blockchains need to be prepared for the worst and assume that everyone is a bad actor and that we don't know how the actors will be. The cryptocurrency of the Blockchain and its inherent token design is essential for its survival. Main goal: how do we align the interests of individuals with the interests of the network, and how do we punish bad behavior. **When you design these ‘tokenomics’ of a protocol, you will have to assume that everybody will act bad, if it is in their favor.**

This is covered in game theory, but more about this further up ahead in level 2. In a private blockchain, however, actors are known because we operate with familiar entities in a closed-off environment. We don't need tokens to stimulate nodes or honest behavior. If some company in the consort misbehaves, we will sue them for misconduct, or they will have to encounter some reputation problems. **Summarized: you don't need cryptocurrencies for private ledgers because you already know the miners, the entities, and nodes. You most definitely need them in open public Blockchain because actors can act maleficent and unknown**. Therefore, we need to stimulate (carrot) or punish them (stick). Also known as (dis)incentivization. Incentivization is consequently different in private blockchains with known actors (with incentives like reputation) than in public blockchains (with incentives like mining rewards). For the latter, you need cryptocurrencies. 


We will mainly focus on the open and public blockchains in this course. Because we offer applied science, though, we sometimes encounter a possible use case suited for private blockchains. Since we work at the New Finance Lectorate, we sometimes discuss these other use cases. This doesn't mean we approve these choices, nor that we believe that this solution will still be around in ten years when public blockchains might have scaled, for example. We will try to mention this as much as possible per use case, but keep in mind that you should always remain critical of information. So don't assume our choices of applied solutions per use case are spot on or flawless. Be vigilant. Be critical. DYOR! 
In short, a recap on this part of level 1. If you compare centralized or private ledgers with open public ledgers: use cases for humanity, like solving global problems, for example, often need global solutions = open public solutions. Specializations, like, for example, tweaking the supply chain or improving efficiency among competitors or between competitors that are more moving towards the hybrid or private sector in more closed-off environments. 

Because open public blockchains offer radical innovation and can perhaps reform the world for the better, instead of consolidating private parties' control over a database and data (incremental innovation), we will mainly focus on open public blockchains. Also, the use case of private blockchains might become irrelevant if public blockchains manage to scale and offer similar speed and confidentiality, only with way more transaction cost efficiency and no centralized risk categories. It all depends on how fast open public Blockchain can scale.



## A bit further down the flow chart rabbithole 


So whether you need a blockchain? One of the [many, many flowcharts]( https://medium.com/@sbmeunier/when-do-you-need-blockchain-decision-models-a5c40e7c9ba1) out there can provide you some extra insights. . 


![A flowchart example]( https://raw.githubusercontent.com/koiosonline/literature-images/main/blockchain-level2/bc-2-1-1-intro-dlt-an-overview-afbeelding3.png) 
[Source flowchart example]( https://medium.com/@sbmeunier/when-do-you-need-blockchain-decision-models-a5c40e7c9ba1)

>💡 Before diving into these flowcharts, determine your problem and fixate on that problem instead of the solution. Most likely other solutions present themselves, which work perfectly fine as well, but without the coordination issues. 

But if you can't find the right tools among current database solutions or if you are genuinely committed to a type of Blockchain, you need to ask yourself the following questions (other flowcharts present similar questions, sometimes in more detail or formulated differently). You can do a run-through of your own, but let's do a quick run-through together.

The first one up is, do you need a shared database? Or can you keep your database in one location? If you can keep it in one place, you don't need to distribute your ledger, so that's the very first question. If the answer is no, you don't need a blockchain. 
The second question is whether there are multiple writers involved? This means that if you are the only one that creates and records transactions, you once again don't need a blockchain. Because you are the sole entity recording the transactions, you don't need to reach a consensus. Twitter is, for example, such a case. Although multiple entities do entries, one party is recording the data (Twitter in this case). 
Therefore, the logical third is if there are multiple partners and if that's the case: will you write transactions yourselves between the entities or can't you trust each other, and do you appoint a trusted third party? An example of this is our current banking system, where multiple different banks record their transactions in their ledgers, of which some transactions are between banks. Still, they appoint a trusted third party to balance out the interbank transactions ([Target2](https://en.wikipedia.org/wiki/TARGET2) in Eurozone)—sometimes called "banking-consensus". If you nominate a TTP, then the TTP controls your ledger, and you don't need a blockchain. You might use a private blockchain in that case, but the added benefits might not outweigh the current system. If you don't want to use a trusted third party, however, and you want to record all transactions between each other then you need to replace the TTP with another form of consensus. 
And here you are at an important two-way street. CURRENTLY (this might change in the future!), you need to choose. Am I to go for a fully transparent way, and do I let random people enter and see my transactions? Or do I shut it off in a more closed-off environment

## A bit about transparency 

A bit more about the last point and transparency for businesses. In other words: if you run a business, will you allow everybody to have insight into your transactions? The question remains, of course, whether you have a choice as a business, consumers, or legislators might demand total transparency from you (which I expect will be the case in the distant future). If you already are up for that full transparency and don't want to hide the origins of your products or profit margins, for example, and if you are genuinely building open, transparent companies for the future, then your answers might be a "Yes. I am ready to build my business on an open and publicly accessible ledger". Suppose you lean more towards the more conservative side. In that case, you might prefer sticking to older business models that act on older classic economic rules with hidden supply chains and profit margins. There you might opt-in for the private variant of a ledger, or if you feel "wild", opt-in for the hybrid ledger. Would you mind keeping in mind that if you opt-in for those closed-off environments, your competitors with more heart for their customers or society might choose the open, transparent variant? [Some of them started](http://stateofthedapps.com/) perhaps a few years ago already and built on it in resourceful ecosystems 😉. 

This, of course, is a vast (societal) shift in mindset. This will take time to settle in, but the technique needs to grow to adulthood and prove itself over time. [Most likely, you currently don't need a blockchain]( https://medium.com/@jimmysong/why-blockchain-is-hard-60416ea4c5c). Either society, the method, or your organization is up for it. You would be better off with other options like the classical database. Therefore think and act wisely before you start. More about this process and how to coop as a business with changing environments in level 3 where we discuss innovation and companies. 

>💡 So the outcome here is that if you want to use a blockchain, your use case is very slim because not many companies contribute to the commons. This radical innovation is therefore mostly driven by communities. 

Public and private each have their benefits and downsides, as you may know. We will give the word from [here](https://www.youtube.com/watch?v=810aKcfM__Q ) to Andreas. As you know, a strong proponent of open blockchains. As mentioned many times before DYOR, acquire the intel and learn from it by discussing it with others (for example, in Discord). Perhaps most important: think in complementary opposites. 
 
Here are two tables from this [source]( https://www.sciencedirect.com/science/article/pii/S0736585318306324?via%3Dihub) that give you a decent head start in the comparison of public (permissionless), private (permissioned), and hybrid (federated) blockchains. 

![Properties of a blockchain compared](https://raw.githubusercontent.com/koiosonline/literature-images/main/blockchain-level2/bc-2-1-1-intro-dlt-an-overview-image%204.JPG) 
[Source Properties of a blockchain compared]( https://www.sciencedirect.com/science/article/pii/S0736585318306324?via%3Dihub)


![Properties of a blockchain compared]( https://raw.githubusercontent.com/koiosonline/literature-images/main/blockchain-level2/bc-2-1-1-intro-dlt-an-overview-image%205.JPG) 
[Source Properties of a blockchain compared]( https://www.sciencedirect.com/science/article/pii/S0736585318306324?via%3Dihub)


Perhaps needed is some additional info on hybrid blockchains. An [article]( https://101blockchains.com/hybrid-blockchain/) explaining hybrid blockchains in more detail (written by proponents of hybrid blockchains with statements as "hybrid blockchains, combining the best of both worlds"). 

## Further readings
* [Distributed Ledger Technology](https://www.investopedia.com/terms/d/distributed-ledger-technology-dlt.asp)
* [A random source that describes types of blockchains (1/2, but one of many)](https://data-flair.training/blogs/types-of-blockchain/)
* [A random source that describes types of blockchains (2/2, but one of many) ](https://coinsutra.com/different-types-blockchains/)
* [When do you need Blockchain? Decision models](https://medium.com/@sbmeunier/when-do-you-need-blockchain-decision-models-a5c40e7c9ba1)
* [Why Blockchain is hard](https://medium.com/@jimmysong/why-blockchain-is-hard-60416ea4c5c )
* [Target2](https://en.wikipedia.org/wiki/TARGET2)
* [High-level overview dApps on Ethereum](http://stateofthedapps.com/)
* [Private vs. Public and Permissioned vs. Permission-less](http://blocktonite.com/2017/06/27/private-vs-public-and-permissioned-vs-permission-less/)
* [Bitcoin Security: Bubble Boy and the Sewer Rat](https://www.youtube.com/watch?v=810aKcfM__Q)
* [A systematic literature review of blockchain-based applications: Current status, classification, and open issues](https://www.sciencedirect.com/science/article/pii/S0736585318306324?via%3Dihub)
* [Hybrid blockchains](https://101blockchains.com/hybrid-blockchain/)


